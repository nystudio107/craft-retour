<?php
/**
 * Retour plugin for Craft CMS 3.x
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace nystudio107\retour\services;

use craft\base\Plugin;
use nystudio107\retour\Retour;
use nystudio107\retour\models\StaticRedirects as StaticRedirectsModel;

use Craft;
use craft\base\Component;
use craft\db\Query;
use craft\errors\SiteNotFoundException;
use craft\helpers\Db;
use craft\helpers\UrlHelper;

use yii\base\ExitException;
use yii\base\InvalidConfigException;
use yii\caching\TagDependency;
use yii\db\Exception;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class Redirects extends Component
{
    // Constants
    // =========================================================================

    const CACHE_KEY = 'retour_redirect_';

    const GLOBAL_REDIRECTS_CACHE_TAG = 'retour_redirects';

    // Protected Properties
    // =========================================================================

    /**
     * @var null|array
     */
    protected $cachedStaticRedirects;

    // Public Methods
    // =========================================================================

    /**
     * Handle 404s by looking for redirects
     */
    public function handle404()
    {
        Craft::info(
            Craft::t(
                'retour',
                'A 404 exception occurred'
            ),
            __METHOD__
        );
        $request = Craft::$app->getRequest();
        // We only want site requests that are not live preview or console requests
        if ($request->getIsSiteRequest() && !$request->getIsLivePreview() && !$request->getIsConsoleRequest()) {
            // See if we should redirect
            try {
                $url = urldecode($request->getUrl());
            } catch (InvalidConfigException $e) {
                Craft::error(
                    $e->getMessage(),
                    __METHOD__
                );
                $url = '';
            }
            // Strip the query string if `alwaysStripQueryString` is set
            if (Retour::$settings->alwaysStripQueryString) {
                $url = UrlHelper::stripQueryString($url);
            }
            Craft::info(
                Craft::t(
                    'retour',
                    '404 URL: {url}',
                    ['url' => $url]
                ),
                __METHOD__
            );
            // Redirect if we find a match, otherwise let Craft handle it
            $redirect = $this->findRedirectMatch($url);
            if (!$this->doRedirect($url, $redirect) && !Retour::$settings->alwaysStripQueryString) {
                // Try it again without the query string
                $url = UrlHelper::stripQueryString($url);
                $redirect = $this->findRedirectMatch($url);
                $this->doRedirect($url, $redirect);
            }
            // Increment the stats
            Retour::$plugin->statistics->incrementStatistics($url, false);
        }
    }

    /**
     * Do the redirect
     *
     * @param string     $url
     * @param null|array $redirect
     *
     * @return bool false if not redirected
     */
    public function doRedirect(string $url, $redirect): bool
    {
        $response = Craft::$app->getResponse();
        if ($redirect !== null) {
            $dest = $redirect['redirectDestUrl'];
            $status = $redirect['redirectHttpCode'];
            Craft::info(
                Craft::t(
                    'retour',
                    'Redirecting {url} to {dest} with status {status}',
                    ['url' => $url, 'dest' => $dest, 'status' => $status]
                ),
                __METHOD__
            );
            // Increment the stats
            Retour::$plugin->statistics->incrementStatistics($url, true);
            // Redirect the request away
            $response->redirect($dest, $status)->send();
            try {
                Craft::$app->end();
            } catch (ExitException $e) {
                Craft::error($e->getMessage(), __METHOD__);
            }
        }

        return false;
    }

    /**
     * @param string $url
     *
     * @return array|null
     */
    public function findRedirectMatch(string $url)
    {
        // Try getting the redirect from the cache first
        $redirect = $this->getRedirectFromCache($url);
        if ($redirect) {
            $this->incrementRedirectHitCount($redirect);
            $this->saveRedirectToCache($url, $redirect);

            return $redirect;
        }

        // Resolve static redirects
        $redirects = $this->getAllStaticRedirects();
        $redirect = $this->resolveRedirect($url, $redirects);
        if ($redirect) {
            return $redirect;
        }

        return null;
    }

    /**
     * @param $url
     *
     * @return bool|array
     */
    public function getRedirectFromCache($url)
    {
        $cache = Craft::$app->getCache();
        $cacheKey = $this::CACHE_KEY.md5($url);
        $redirect = $cache->get($cacheKey);
        Craft::info(
            Craft::t(
                'retour',
                'Cached redirect hit for {url}',
                ['url' => $url]
            ),
            __METHOD__
        );

        return $redirect;
    }

    /**
     * @param  string $url
     * @param  array  $redirect
     */
    public function saveRedirectToCache($url, $redirect)
    {
        $cacheKey = $this::CACHE_KEY.md5($url);
        $cache = Craft::$app->getCache();
        // Get the current site id
        $sites = Craft::$app->getSites();
        try {
            $siteId = $sites->getCurrentSite()->id;
        } catch (SiteNotFoundException $e) {
            $siteId = 1;
        }
        // Create the dependency tags
        $dependency = new TagDependency([
            'tags' => [
                $this::GLOBAL_REDIRECTS_CACHE_TAG,
                $this::GLOBAL_REDIRECTS_CACHE_TAG.$siteId,
            ],
        ]);
        $cache->set($cacheKey, $redirect, Retour::$cacheDuration, $dependency);
        Craft::info(
            Craft::t(
                'retour',
                'Cached redirect saved for {url}',
                ['url' => $url]
            ),
            __METHOD__
        );
    }

    /**
     * @param string $url
     * @param array  $redirects
     *
     * @return array|null
     */
    public function resolveRedirect(string $url, array $redirects)
    {
        $result = null;
        foreach ($redirects as $redirect) {
            $redirectMatchType = $redirect['redirectMatchType'] ?? null;
            switch ($redirectMatchType) {
                // Do a straight up match
                case 'exactmatch':
                    if (strcasecmp($redirect['redirectSrcUrlParsed'], $url) === 0) {
                        $this->incrementRedirectHitCount($redirect);
                        $this->saveRedirectToCache($url, $redirect);

                        return $redirect;
                    }
                    break;

                // Do a regex match
                case 'regexmatch':
                    $matchRegEx = '`'.$redirect['redirectSrcUrlParsed'].'`i';
                    if (preg_match($matchRegEx, $url) === 1) {
                        $this->incrementRedirectHitCount($redirect);
                        // If we're not associated with an EntryID, handle capture group replacement
                        if ($redirect['associatedElementId'] === 0) {
                            $redirect['redirectDestUrl'] = preg_replace(
                                $matchRegEx,
                                $redirect['redirectDestUrl'],
                                $url
                            );
                        }
                        $this->saveRedirectToCache($url, $redirect);

                        return $redirect;
                    }
                    break;

                // Otherwise try to look up a plugin's method by and call it for the match
                default:
                    $plugin = $redirectMatchType ? Craft::$app->getPlugins()->getPlugin($redirectMatchType) : null;
                    if ($plugin && method_exists($plugin, 'retourMatch')) {
                        $args = [
                            [
                                'redirect' => &$redirect,
                            ],
                        ];
                        $result = \call_user_func_array([$plugin, 'retourMatch'], $args);
                        if ($result) {
                            $this->incrementRedirectHitCount($redirect);
                            $this->saveRedirectToCache($url, $redirect);

                            return $redirect;
                        }
                    }
                    break;
            }
        }
        Craft::info(
            Craft::t(
                'retour',
                'Not handled: {url}',
                ['url' => $url]
            ),
            __METHOD__
        );

        return $result;
    }

    /**
     * Returns the list of matching schemes
     *
     * @return  array
     */
    public function getMatchesList(): array
    {
        $result = [
            'exactmatch' => Craft::t('retour', 'Exact Match'),
            'regexmatch' => Craft::t('retour', 'RegEx Match'),
        ];

        // Add any plugins that offer the retourMatch() method
        foreach (Craft::$app->getPlugins()->getAllPlugins() as $plugin) {
            /** @var Plugin $plugin */
            if (method_exists($plugin, 'retourMatch')) {
                $result[$plugin->getHandle()] = $plugin->name.Craft::t('retour', ' Match');
            }
        }

        return $result;
    }

    /**
     * @param null|int $limit
     *
     * @return array All of the statistics
     */
    public function getAllStaticRedirects($limit = null): array
    {
        // Cache it in our class; no need to fetch it more than once
        if ($this->cachedStaticRedirects !== null) {
            return $this->cachedStaticRedirects;
        }
        // Query the db table
        $query = (new Query())
            ->from(['{{%retour_static_redirects}}'])
            ->orderBy('redirectMatchType ASC, hitCount DESC');
        if ($limit) {
            $query->limit($limit);
        }
        $redirects = $query->all();
        // Cache for future accesses
        $this->cachedStaticRedirects = $redirects;

        return $redirects;
    }

    /**
     * Return a redirect by id
     *
     * @param int $id
     *
     * @return null|array The static redirect
     */
    public function getRedirectById(int $id): array
    {
        // Query the db table
        $redirect = (new Query())
            ->from(['{{%retour_static_redirects}}'])
            ->where(['id' => $id])
            ->one();

        return $redirect;
    }

    /**
     * Delete a redirect by id
     *
     * @param int $id
     *
     * @return int The result
     */
    public function deleteRedirectById(int $id): int
    {
        $db = Craft::$app->getDb();
        // Delete a row from the db table
        try {
            $result = $db->createCommand()->delete(
                '{{%retour_static_redirects}}',
                [
                    'id' => $id,
                ]
            )->execute();
        } catch (Exception $e) {
            Craft::error($e->getMessage(), __METHOD__);
            $result = 0;
        }

        return $result;
    }

    /**
     * Increment the retour_static_redirects record
     *
     * @param $redirectConfig
     */
    public function incrementRedirectHitCount($redirectConfig)
    {
        if ($redirectConfig !== null) {
            $redirectConfig['hitCount']++;
            $redirectConfig['hitLastTime'] = Db::prepareDateForDb(new \DateTime());
            $this->saveRedirect($redirectConfig);
        }
    }

    /**
     * @param array $redirectConfig
     */
    public function saveRedirect(array $redirectConfig)
    {
        // Validate the model before saving it to the db
        $redirect = new StaticRedirectsModel($redirectConfig);
        if ($redirect->validate() === false) {
            Craft::error(
                Craft::t(
                    'retour',
                    'Error validating redirect {id}: {errors}',
                    ['id' => $redirect->id, 'errors' => print_r($redirect->getErrors(), true)]
                ),
                __METHOD__
            );

            return;
        }
        // Get the validated model attributes and save them to the db
        $redirectConfig = $redirect->getAttributes();
        $db = Craft::$app->getDb();
        // See if a redirect exists with this source URL already
        if ((int)$redirectConfig['id'] === 0) {
            // Query the db table
            $redirect = (new Query())
                ->from(['{{%retour_static_redirects}}'])
                ->where(['redirectSrcUrlParsed' => $redirectConfig['redirectSrcUrlParsed']])
                ->one();
            // If it exists, update it rather than having duplicates
            if (!empty($redirect)) {
                $redirectConfig['id'] = $redirect['id'];
            }
        }
        if ((int)$redirectConfig['id'] !== 0) {
            // Update the existing record
            try {
                $db->createCommand()->update(
                    '{{%retour_static_redirects}}',
                    $redirectConfig,
                    [
                        'id' => $redirectConfig['id'],
                    ]
                )->execute();
            } catch (Exception $e) {
                Craft::error($e->getMessage(), __METHOD__);
            }
        } else {
            // Create a new record
            try {
                $db->createCommand()->insert(
                    '{{%retour_static_redirects}}',
                    $redirectConfig
                )->execute();
            } catch (Exception $e) {
                Craft::error($e->getMessage(), __METHOD__);
            }
        }
    }

    /**
     * Invalidate all of the redirects caches
     */
    public function invalidateCaches()
    {
        $cache = Craft::$app->getCache();
        TagDependency::invalidate($cache, $this::GLOBAL_REDIRECTS_CACHE_TAG);
        Craft::info(
            Craft::t(
                'retour',
                'All redirect caches cleared'
            ),
            __METHOD__
        );
    }
}
