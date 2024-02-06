<?php
/**
 * Retour plugin for Craft CMS
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace nystudio107\retour\services;

use Craft;
use craft\base\Component;
use craft\base\ElementInterface;
use craft\base\Plugin;
use craft\db\Query;
use craft\errors\SiteNotFoundException;
use craft\helpers\Db;
use craft\helpers\StringHelper;
use DateTime;
use nystudio107\retour\events\RedirectEvent;
use nystudio107\retour\events\RedirectResolvedEvent;
use nystudio107\retour\events\ResolveRedirectEvent;
use nystudio107\retour\fields\ShortLink;
use nystudio107\retour\helpers\UrlHelper;
use nystudio107\retour\models\StaticRedirects as StaticRedirectsModel;
use nystudio107\retour\Retour;
use yii\base\ExitException;
use yii\base\InvalidConfigException;
use yii\base\InvalidRouteException;
use yii\caching\TagDependency;
use yii\db\Exception;
use function call_user_func_array;

/** @noinspection MissingPropertyAnnotationsInspection */

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class Redirects extends Component
{
    // Constants
    // =========================================================================

    public const CACHE_KEY = 'retour_redirect_';

    public const GLOBAL_REDIRECTS_CACHE_TAG = 'retour_redirects';

    public const EVENT_REDIRECT_ID = 0;

    /**
     * @event RedirectEvent The event that is triggered before the redirect is saved
     * You may set [[RedirectEvent::isValid]] to `false` to prevent the redirect from getting saved.
     *
     * ```php
     * use nystudio107\retour\services\Redirects;
     * use nystudio107\retour\events\RedirectEvent;
     *
     * Event::on(Redirects::class,
     *     Redirects::EVENT_BEFORE_SAVE_REDIRECT,
     *     function(RedirectEvent $event) {
     *         // potentially set $event->isValid;
     *     }
     * );
     * ```
     */
    public const EVENT_BEFORE_SAVE_REDIRECT = 'beforeSaveRedirect';

    /**
     * @event RedirectEvent The event that is triggered after the redirect is saved
     *
     * ```php
     * use nystudio107\retour\services\Redirects;
     * use nystudio107\retour\events\RedirectEvent;
     *
     * Event::on(Redirects::class,
     *     Redirects::EVENT_AFTER_SAVE_REDIRECT,
     *     function(RedirectEvent $event) {
     *         // the redirect was saved
     *     }
     * );
     * ```
     */
    public const EVENT_AFTER_SAVE_REDIRECT = 'afterSaveRedirect';

    /**
     * @event RedirectEvent The event that is triggered before the redirect is deleted
     * You may set [[RedirectEvent::isValid]] to `false` to prevent the redirect from getting deleted.
     *
     * ```php
     * use nystudio107\retour\services\Redirects;
     * use nystudio107\retour\events\RedirectEvent;
     *
     * Event::on(Redirects::class,
     *     Redirects::EVENT_BEFORE_DELETE_REDIRECT,
     *     function(RedirectEvent $event) {
     *         // potentially set $event->isValid;
     *     }
     * );
     * ```
     */
    public const EVENT_BEFORE_DELETE_REDIRECT = 'beforeDeleteRedirect';

    /**
     * @event RedirectEvent The event that is triggered after the redirect is deleted
     *
     * ```php
     * use nystudio107\retour\services\Redirects;
     * use nystudio107\retour\events\RedirectEvent;
     *
     * Event::on(Redirects::class,
     *     Redirects::EVENT_AFTER_DELETE_REDIRECT,
     *     function(RedirectEvent $event) {
     *         // the redirect was deleted
     *     }
     * );
     * ```
     */
    public const EVENT_AFTER_DELETE_REDIRECT = 'afterDeleteRedirect';

    /**
     * @event ResolveRedirectEvent The event that is triggered before Retour has attempted
     *        to resolve redirects. You may set [[ResolveRedirectEvent::redirectDestUrl]] to
     *        to the URL that it should redirect to, or null if no redirect should happen
     *
     * ```php
     * use nystudio107\retour\services\Redirects;
     * use nystudio107\retour\events\ResolveRedirectEvent;
     *
     * Event::on(Redirects::class,
     *     Redirects::EVENT_AFTER_SAVE_REDIRECT,
     *     function(ResolveRedirectEvent $event) {
     *         // potentially set $event->redirectDestUrl;
     *     }
     * );
     * ```
     */
    public const EVENT_BEFORE_RESOLVE_REDIRECT = 'beforeResolveRedirect';

    /**
     * @event ResolveRedirectEvent The event that is triggered after Retour has attempted
     *        to resolve redirects. You may set [[ResolveRedirectEvent::redirectDestUrl]] to
     *        to the URL that it should redirect to, or null if no redirect should happen
     *
     * ```php
     * use nystudio107\retour\services\Redirects;
     * use nystudio107\retour\events\ResolveRedirectEvent;
     *
     * Event::on(Redirects::class,
     *     Redirects::EVENT_AFTER_RESOLVE_REDIRECT,
     *     function(ResolveRedirectEvent $event) {
     *         // potentially set $event->redirectDestUrl;
     *     }
     * );
     * ```
     */
    public const EVENT_AFTER_RESOLVE_REDIRECT = 'afterResolveRedirect';

    /**
     * @event RedirectResolvedEvent The event that is triggered once Retour has resolved
     *        a redirect. [[RedirectResolvedEvent::redirect]] will be set to the redirect
     *        that was resolved. You may set [[RedirectResolvedEvent::redirectDestUrl]] to
     *        to a different URL that it should redirect to, or leave it null if the
     *        redirect should happen as resolved.
     *
     * ```php
     * use nystudio107\retour\services\Redirects;
     * use nystudio107\retour\events\RedirectResolvedEvent;
     *
     * Event::on(Redirects::class,
     *     Redirects::EVENT_REDIRECT_RESOLVED,
     *     function(RedirectResolvedEvent $event) {
     *         // potentially set $event->redirectDestUrl;
     *     }
     * );
     * ```
     */
    public const EVENT_REDIRECT_RESOLVED = 'redirectResolved';

    /**
     * @var array A list of all the element ids for which the short links have been purged.
     */
    protected static array $purgedShortLinkElementIds = [];


    // Public Methods
    // =========================================================================

    /**
     * Handle 404s by looking for redirects
     */
    public function handle404(): void
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
        if ($request->getIsSiteRequest() && !$this->isPreview($request) && !$request->getIsConsoleRequest()) {
            // See if we should redirect
            try {
                $fullUrl = urldecode($request->getAbsoluteUrl());
                $pathOnly = urldecode($request->getUrl());
            } catch (InvalidConfigException $e) {
                Craft::error(
                    $e->getMessage(),
                    __METHOD__
                );
                $pathOnly = '';
                $fullUrl = '';
            }
            // Strip the query string if `alwaysStripQueryString` is set
            if (Retour::$settings->alwaysStripQueryString) {
                $fullUrl = UrlHelper::stripQueryString($fullUrl);
                $pathOnly = UrlHelper::stripQueryString($pathOnly);
            }
            // Stash the $pathOnly for use when incrementing the statistics
            $originalPathOnly = $pathOnly;
            Craft::info(
                Craft::t(
                    'retour',
                    '404 full URL: {fullUrl}, 404 path only: {pathOnly}',
                    ['fullUrl' => $fullUrl, 'pathOnly' => $pathOnly]
                ),
                __METHOD__
            );
            if (!$this->excludeUri($pathOnly)) {
                // Redirect if we find a match, otherwise let Craft handle it
                $redirect = $this->findRedirectMatch($fullUrl, $pathOnly);
                if (!$this->doRedirect($fullUrl, $pathOnly, $redirect) && !Retour::$settings->alwaysStripQueryString) {
                    // Try it again without the query string
                    $fullUrl = UrlHelper::stripQueryString($fullUrl);
                    $pathOnly = UrlHelper::stripQueryString($pathOnly);
                    $redirect = $this->findRedirectMatch($fullUrl, $pathOnly);
                    $this->doRedirect($fullUrl, $pathOnly, $redirect);
                }
                // Increment the stats
                Retour::$plugin->statistics->incrementStatistics($originalPathOnly, false);
            }
        }
    }

    /**
     * Return whether this is a preview request of any kind
     *
     * @param $request
     * @return bool
     */
    public function isPreview($request): bool
    {
        $isPreview = $request->getIsPreview();
        $isLivePreview = $request->getIsLivePreview();

        return ($isPreview || $isLivePreview);
    }

    /**
     * @param $uri
     *
     * @return bool
     */
    public function excludeUri($uri): bool
    {
        $uri = '/' . ltrim($uri, '/');
        if (!empty(Retour::$settings->excludePatterns)) {
            foreach (Retour::$settings->excludePatterns as $excludePattern) {
                $pattern = '`' . $excludePattern['pattern'] . '`i';
                try {
                    if (preg_match($pattern, $uri) === 1) {
                        return true;
                    }
                } catch (\Exception $e) {
                    // That's fine
                    Craft::error('Invalid exclude URI Regex: ' . $pattern, __METHOD__);
                }
            }
        }

        return false;
    }

    /**
     * @param string $fullUrl
     * @param string $pathOnly
     * @param int|null $siteId
     *
     * @return bool|array|null
     */
    public function findRedirectMatch(string $fullUrl, string $pathOnly, $siteId = null): bool|array|null
    {
        // Get the current site
        if ($siteId === null) {
            $currentSite = Craft::$app->getSites()->currentSite;
            if ($currentSite) {
                $siteId = $currentSite->id;
            } else {
                $primarySite = Craft::$app->getSites()->primarySite;
                    $siteId = $primarySite->id;
            }
        }
        // Try getting the full URL redirect from the cache
        $redirect = $this->getRedirectFromCache($fullUrl, $siteId);
        if ($redirect) {
            $this->incrementRedirectHitCount($redirect);
            $this->saveRedirectToCache($fullUrl, $redirect);

            return $redirect;
        }
        // Try getting the path only redirect from the cache
        $redirect = $this->getRedirectFromCache($pathOnly, $siteId);
        if ($redirect) {
            $this->incrementRedirectHitCount($redirect);
            $this->saveRedirectToCache($pathOnly, $redirect);

            return $redirect;
        }

        $redirect = $this->getStaticRedirect($fullUrl, $pathOnly, $siteId, true);
        if ($redirect) {
            $this->incrementRedirectHitCount($redirect);
            $this->saveRedirectToCache($pathOnly, $redirect);

            return $redirect;
        }

        // Resolve static redirects
        $redirects = $this->getAllRegExRedirects(null, $siteId, true);
        $redirect = $this->resolveRedirect($fullUrl, $pathOnly, $redirects, $siteId);
        if ($redirect) {
            return $redirect;
        }

        return null;
    }

    /**
     * @param string $url
     * @param int $siteId
     *
     * @return bool|array
     */
    public function getRedirectFromCache(string $url, int $siteId = 0): bool|array
    {
        $cache = Craft::$app->getCache();
        $cacheKey = $this::CACHE_KEY . md5($url) . $siteId;
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
     * Increment the retour_static_redirects record
     *
     * @param $redirectConfig
     */
    public function incrementRedirectHitCount(&$redirectConfig): void
    {
        if ($redirectConfig !== null) {
            $db = Craft::$app->getDb();
            $redirectConfig['hitCount']++;
            $redirectConfig['hitLastTime'] = Db::prepareDateForDb(new DateTime());
            Craft::debug(
                Craft::t(
                    'retour',
                    'Incrementing statistics for: {redirect}',
                    ['redirect' => print_r($redirectConfig, true)]
                ),
                __METHOD__
            );
            // Update the existing record
            try {
                $rowsAffected = $db->createCommand()->update(
                    '{{%retour_static_redirects}}',
                    [
                        'hitCount' => $redirectConfig['hitCount'],
                        'hitLastTime' => $redirectConfig['hitLastTime'],
                    ],
                    [
                        'id' => $redirectConfig['id'],
                    ]
                )->execute();
                Craft::debug('Rows affected: ' . $rowsAffected, __METHOD__);
            } catch (\Exception $e) {
                Craft::error($e->getMessage(), __METHOD__);
            }
        }
    }

    /**
     * @param string $url
     * @param array $redirect
     */
    public function saveRedirectToCache(string $url, array $redirect): void
    {
        $cache = Craft::$app->getCache();
        // Get the current site id
        $sites = Craft::$app->getSites();
        try {
            $siteId = $sites->getCurrentSite()->id;
        } catch (SiteNotFoundException $e) {
            $siteId = 1;
        }
        $cacheKey = $this::CACHE_KEY . md5($url) . $siteId;
        // Create the dependency tags
        $dependency = new TagDependency([
            'tags' => [
                $this::GLOBAL_REDIRECTS_CACHE_TAG,
                $this::GLOBAL_REDIRECTS_CACHE_TAG . $siteId,
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
     * @param string $fullUrl
     * @param string $pathOnly
     * @param $siteId
     * @return mixed|null
     */
    public function getStaticRedirect(string $fullUrl, string $pathOnly, $siteId, bool $enabledOnly = false)
    {
        $result = null;
        // Throw the Redirects::EVENT_BEFORE_RESOLVE_REDIRECT event
        $event = new ResolveRedirectEvent([
            'fullUrl' => $fullUrl,
            'pathOnly' => $pathOnly,
            'redirectDestUrl' => null,
            'redirectHttpCode' => 301,
            'siteId' => $siteId,
        ]);
        $this->trigger(self::EVENT_BEFORE_RESOLVE_REDIRECT, $event);
        if ($event->redirectDestUrl !== null) {
            return $this->resolveEventRedirect($event);
        }
        // Query for the static redirect
        $staticCondition = ['redirectMatchType' => 'exactmatch'];
        $siteCondition = [
            'or',
            ['siteId' => $siteId],
            ['siteId' => null],
        ];
        $pathCondition = [
            'or',
            ['and',
                ['redirectSrcMatch' => 'pathonly'],
                ['redirectSrcUrlParsed' => $pathOnly],
            ],
            ['and',
                ['redirectSrcMatch' => 'fullurl'],
                ['redirectSrcUrlParsed' => $fullUrl],
            ],
        ];

        $query = (new Query())
            ->from('{{%retour_static_redirects}}')
            ->where(['and',
                $staticCondition,
                $pathCondition,
                $siteCondition,
            ])
            ->limit(1);

        if ($enabledOnly) {
            $query->andWhere(['enabled' => 1]);
        }
        $result = $query->one();
        if ($result) {
            // Figure out what type of source matching to do
            $redirectSrcMatch = $result['redirectSrcMatch'] ?? 'pathonly';
            switch ($redirectSrcMatch) {
                case 'pathonly':
                    $url = $pathOnly;
                    break;
                case 'fullurl':
                    $url = $fullUrl;
                    break;
                default:
                    $url = $pathOnly;
                    break;
            }
            // Throw the Redirects::EVENT_REDIRECT_RESOLVED event
            $event = new RedirectResolvedEvent([
                'fullUrl' => $fullUrl,
                'pathOnly' => $pathOnly,
                'redirectDestUrl' => null,
                'redirectHttpCode' => 301,
                'redirect' => $result,
                'siteId' => $siteId,
            ]);
            $this->trigger(self::EVENT_REDIRECT_RESOLVED, $event);
            if ($event->redirectDestUrl !== null) {
                return $this->resolveEventRedirect($event, $url, $result);
            }

            return $result;
        }

        // Throw the Redirects::EVENT_AFTER_RESOLVE_REDIRECT event
        $event = new ResolveRedirectEvent([
            'fullUrl' => $fullUrl,
            'pathOnly' => $pathOnly,
            'redirectDestUrl' => null,
            'redirectHttpCode' => 301,
            'siteId' => $siteId,
        ]);
        $this->trigger(self::EVENT_AFTER_RESOLVE_REDIRECT, $event);
        if ($event->redirectDestUrl !== null) {
            return $this->resolveEventRedirect($event);
        }
        Craft::info(
            Craft::t(
                'retour',
                'Not handled-> full URL: {fullUrl}, path only: {pathOnly}',
                ['fullUrl' => $fullUrl, 'pathOnly' => $pathOnly]
            ),
            __METHOD__
        );

        return $result;
    }

    /**
     * @param null|int $limit
     * @param int|null $siteId
     *
     * @return array All of the regex match redirects
     */
    public function getAllRegExRedirects(int $limit = null, int $siteId = null, bool $enabledOnly = false): array
    {
        return $this->getRedirectsByMatchType($limit, $siteId, 'regexmatch', $enabledOnly);
    }

    /**
     * @param null|int $limit
     * @param int|null $siteId
     *
     * @return array All of the regex match redirects
     */
    public function getAllExactMatchRedirects(int $limit = null, int $siteId = null, bool $enabledOnly = false): array
    {
        return $this->getRedirectsByMatchType($limit, $siteId, 'exactmatch', $enabledOnly);
    }

    /**
     * @param int|null $limit
     * @param int|null $siteId
     * @param string $type
     * @return array
     */
    protected function getRedirectsByMatchType(int $limit = null, int $siteId = null, string $type, bool $enabledOnly = false): array
    {
        // Query the db table
        $query = (new Query())
            ->from(['{{%retour_static_redirects}}'])
            ->orderBy('redirectMatchType ASC, priority ASC');

        if ($siteId) {
            $query
                ->where(['siteId' => $siteId])
                ->orWhere(['siteId' => null]);
        }

        if ($limit) {
            $query->limit($limit);
        }

        $query->andWhere(['redirectMatchType' => $type]);

        if ($enabledOnly) {
            $query->andWhere(['enabled' => 1]);
        }

        return $query->all();
    }

    /**
     * @param int|null $limit
     * @param int|null $siteId
     *
     * @return array All of the statistics
     */
    public function getAllStaticRedirects(int $limit = null, int $siteId = null): array
    {
        // Query the db table
        $query = (new Query())
            ->from(['{{%retour_static_redirects}}'])
            ->orderBy('redirectMatchType ASC, priority ASC');
        if ($siteId) {
            $query
                ->where(['siteId' => $siteId])
                ->orWhere(['siteId' => null]);
        }
        if ($limit) {
            $query->limit($limit);
        }
        return $query->all();
    }

    /**
     * @param string $fullUrl
     * @param string $pathOnly
     * @param array $redirects
     * @param $siteId
     *
     * @return array|null
     */
    public function resolveRedirect(string $fullUrl, string $pathOnly, array $redirects, $siteId): ?array
    {
        $result = null;
        // Throw the Redirects::EVENT_BEFORE_RESOLVE_REDIRECT event
        $event = new ResolveRedirectEvent([
            'fullUrl' => $fullUrl,
            'pathOnly' => $pathOnly,
            'redirectDestUrl' => null,
            'redirectHttpCode' => 301,
            'siteId' => $siteId,
        ]);
        $this->trigger(self::EVENT_BEFORE_RESOLVE_REDIRECT, $event);
        if ($event->redirectDestUrl !== null) {
            return $this->resolveEventRedirect($event);
        }
        // Iterate through the redirects
        foreach ($redirects as $redirect) {
            // Figure out what type of source matching to do
            $redirectSrcMatch = $redirect['redirectSrcMatch'] ?? 'pathonly';
            $redirectEnabled = (bool)$redirect['enabled'];
            if ($redirectEnabled === true) {
                switch ($redirectSrcMatch) {
                    case 'pathonly':
                        $url = $pathOnly;
                        break;
                    case 'fullurl':
                        $url = $fullUrl;
                        break;
                    default:
                        $url = $pathOnly;
                        break;
                }
                $redirectMatchType = $redirect['redirectMatchType'] ?? 'notfound';
                switch ($redirectMatchType) {
                    // Do a straight up match
                    case 'exactmatch':
                        if (strcasecmp($redirect['redirectSrcUrlParsed'], $url) === 0) {
                            $this->incrementRedirectHitCount($redirect);
                            $this->saveRedirectToCache($url, $redirect);

                            // Throw the Redirects::EVENT_REDIRECT_RESOLVED event
                            $event = new RedirectResolvedEvent([
                                'fullUrl' => $fullUrl,
                                'pathOnly' => $pathOnly,
                                'redirectDestUrl' => null,
                                'redirectHttpCode' => 301,
                                'redirect' => $redirect,
                                'siteId' => $siteId,
                            ]);
                            $this->trigger(self::EVENT_REDIRECT_RESOLVED, $event);
                            if ($event->redirectDestUrl !== null) {
                                return $this->resolveEventRedirect($event, $url, $redirect);
                            }

                            return $redirect;
                        }
                        break;

                    // Do a regex match
                    case 'regexmatch':
                        $matchRegEx = '`' . $redirect['redirectSrcUrlParsed'] . '`i';
                        try {
                            if (preg_match($matchRegEx, $url) === 1) {
                                $this->incrementRedirectHitCount($redirect);
                                // If we're not associated with an EntryID, handle capture group replacement
                                if ((int)$redirect['associatedElementId'] === 0) {
                                    $redirect['redirectDestUrl'] = preg_replace(
                                        $matchRegEx,
                                        $redirect['redirectDestUrl'],
                                        $url
                                    );
                                }
                                $url = preg_replace('/([^:])(\/{2,})/', '$1/', $url);
                                $this->saveRedirectToCache($url, $redirect);

                                // Throw the Redirects::EVENT_REDIRECT_RESOLVED event
                                $event = new RedirectResolvedEvent([
                                    'fullUrl' => $fullUrl,
                                    'pathOnly' => $pathOnly,
                                    'redirectDestUrl' => null,
                                    'redirectHttpCode' => 301,
                                    'redirect' => $redirect,
                                    'siteId' => $siteId,
                                ]);
                                $this->trigger(self::EVENT_REDIRECT_RESOLVED, $event);
                                if ($event->redirectDestUrl !== null) {
                                    return $this->resolveEventRedirect($event, $url, $redirect);
                                }

                                return $redirect;
                            }
                        } catch (\Exception $e) {
                            // That's fine
                            Craft::error('Invalid Redirect Regex: ' . $matchRegEx, __METHOD__);
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
                            $result = call_user_func_array([$plugin, 'retourMatch'], $args);
                            if ($result) {
                                $this->incrementRedirectHitCount($redirect);
                                $this->saveRedirectToCache($url, $redirect);

                                // Throw the Redirects::EVENT_REDIRECT_RESOLVED event
                                $event = new RedirectResolvedEvent([
                                    'fullUrl' => $fullUrl,
                                    'pathOnly' => $pathOnly,
                                    'redirectDestUrl' => null,
                                    'redirectHttpCode' => 301,
                                    'redirect' => $redirect,
                                    'siteId' => $siteId,
                                ]);
                                $this->trigger(self::EVENT_REDIRECT_RESOLVED, $event);
                                if ($event->redirectDestUrl !== null) {
                                    return $this->resolveEventRedirect($event, $url, $redirect);
                                }

                                return $redirect;
                            }
                        }
                        break;
                }
            }
        }
        // Throw the Redirects::EVENT_AFTER_RESOLVE_REDIRECT event
        $event = new ResolveRedirectEvent([
            'fullUrl' => $fullUrl,
            'pathOnly' => $pathOnly,
            'redirectDestUrl' => null,
            'redirectHttpCode' => 301,
            'siteId' => $siteId,
        ]);
        $this->trigger(self::EVENT_AFTER_RESOLVE_REDIRECT, $event);
        if ($event->redirectDestUrl !== null) {
            return $this->resolveEventRedirect($event);
        }
        Craft::info(
            Craft::t(
                'retour',
                'Not handled-> full URL: {fullUrl}, path only: {pathOnly}',
                ['fullUrl' => $fullUrl, 'pathOnly' => $pathOnly]
            ),
            __METHOD__
        );

        return $result;
    }

    /**
     * @param ResolveRedirectEvent $event
     * @param ?string $url
     * @param ?array $redirect
     * @return null|array
     */
    public function resolveEventRedirect(ResolveRedirectEvent $event, ?string $url = null, ?array $redirect = null): ?array
    {
        $result = null;

        if ($event->redirectDestUrl !== null) {
            $resolvedRedirect = new StaticRedirectsModel([
                'id' => self::EVENT_REDIRECT_ID,
                'redirectDestUrl' => $event->redirectDestUrl,
                'redirectHttpCode' => $event->redirectHttpCode,
            ]);
            $result = $resolvedRedirect->toArray();

            if ($url !== null) {
                // Save the modified redirect to the cache
                $redirect['redirectDestUrl'] = $event->redirectDestUrl;
                $redirect['redirectHttpCode'] = $event->redirectHttpCode;
                $this->saveRedirectToCache($url, $redirect);
            }
        }

        return $result;
    }

    /**
     * Do the redirect
     *
     * @param string $fullUrl
     * @param string $pathOnly
     * @param array|null $redirect
     *
     * @return bool false if not redirected
     */
    public function doRedirect(string $fullUrl, string $pathOnly, ?array $redirect): bool
    {
        $response = Craft::$app->getResponse();
        if ($redirect !== null) {
            // Figure out what type of source matching was done
            $redirectSrcMatch = $redirect['redirectSrcMatch'] ?? 'pathonly';
            switch ($redirectSrcMatch) {
                case 'pathonly':
                    $url = $pathOnly;
                    break;
                case 'fullurl':
                    $url = $fullUrl;
                    break;
                default:
                    $url = $pathOnly;
                    break;
            }
            $dest = $redirect['redirectDestUrl'];
            // If this isn't a full URL, make it one based on the appropriate site
            if (!UrlHelper::isFullUrl($dest)) {
                try {
                    $siteId = $redirect['siteId'] ?? null;
                    if ($siteId !== null) {
                        $siteId = (int)$siteId;
                    }
                    $dest = UrlHelper::siteUrl($dest, null, null, $siteId);
                } catch (\yii\base\Exception $e) {
                }
            }
            if (Retour::$settings->preserveQueryString) {
                $request = Craft::$app->getRequest();
                $queryString = '';
                try {
                    $queryString = UrlHelper::combineQueryStringsFromUrls($dest, $request->getUrl());
                } catch (InvalidConfigException $e) {
                    // That's ok
                }
                if (!empty($queryString)) {
                    $dest = strtok($dest, '?') . '?' . $queryString;
                }
            }
            $redirectMatchType = $redirect['redirectMatchType'] ?? 'notfound';
            // Parse reference tags for exact matches
            if ($redirectMatchType === 'exactmatch') {
                $dest = Craft::$app->elements->parseRefs($dest, $redirect['siteId'] ?? null);
            }
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
            // Handle a Retour return status > 400 to render the actual error template
            if ($status >= 400) {
                Retour::$currentException->statusCode = $status;
                $errorHandler = Craft::$app->getErrorHandler();
                $errorHandler->exception = Retour::$currentException;
                try {
                    $response = Craft::$app->runAction('templates/render-error');
                } catch (InvalidRouteException $e) {
                    Craft::error($e->getMessage(), __METHOD__);
                } catch (\yii\console\Exception $e) {
                    Craft::error($e->getMessage(), __METHOD__);
                }
            }
            // Sanitize the URL
            $dest = UrlHelper::sanitizeUrl($dest);
            // Add any additional headers (existing ones will be replaced)
            if (!empty(Retour::$settings->additionalHeaders)) {
                foreach (Retour::$settings->additionalHeaders as $additionalHeader) {
                    $response->headers->set($additionalHeader['name'], $additionalHeader['value']);
                }
            }
            // Redirect the request away;
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
                $result[$plugin->getHandle()] = $plugin->name . Craft::t('retour', ' Match');
            }
        }

        return $result;
    }

    /**
     * Return a redirect by id
     *
     * @param int $id
     *
     * @return null|array The static redirect
     */
    public function getRedirectById(int $id): ?array
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
        // Trigger a 'beforeDeleteRedirect' event
        $redirectConfig = $this->getRedirectById($id);
        $isNew = (int)$redirectConfig['id'] === 0;
        $event = new RedirectEvent([
            'isNew' => $isNew,
            'legacyUrl' => $redirectConfig['redirectSrcUrlParsed'],
            'destinationUrl' => $redirectConfig['redirectDestUrl'],
            'matchType' => $redirectConfig['redirectSrcMatch'],
            'redirectType' => $redirectConfig['redirectHttpCode'],
            'siteId' => $redirectConfig['siteId'],
        ]);
        $this->trigger(self::EVENT_BEFORE_DELETE_REDIRECT, $event);
        if (!$event->isValid) {
            return 0;
        }
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
        $this->trigger(self::EVENT_AFTER_DELETE_REDIRECT, $event);

        return $result;
    }

    /**
     * Updates an associated element short link value.
     *
     * @param array $redirectConfig
     * @param array $existingData
     */
    protected function updateAssociatedElementShortLink(array $redirectConfig, array $existingData): void
    {
        if (empty($redirectConfig['associatedElementId'])) {
            return;
        }
        // Get the element and set the scenario
        $associatedElement = Craft::$app->getElements()->getElementById($redirectConfig['associatedElementId']);

        if (!$associatedElement) {
            return;
        }

        $fieldUpdated = $this->setShortLinkFieldValue($associatedElement, $existingData['redirectSrcUrl'], $redirectConfig['redirectSrcUrl']);

        if ($fieldUpdated) {
            // Prevent element from triggering an infinite loop.
            ShortLink::preventShortLinkUpdates();
            Craft::$app->getElements()->saveElement($associatedElement);
            ShortLink::allowShortLinkUpdates();
        }
    }

    /**
     * Save an element redirect.
     *
     * @param ElementInterface $element
     * @param string $sourceUrl
     * @param string $redirectSrcMatch
     * @param int $redirectHttpCode
     */
    public function enableElementRedirect(ElementInterface $element, string $sourceUrl, string $redirectSrcMatch = 'pathonly', int $redirectHttpCode = 301): void
    {
        $siteId = $element->siteId;

        $redirectConfig = [
            'redirectMatchType' => 'exactmatch',
            'redirectSrcUrl' => $sourceUrl,
            'siteId' => $siteId,
            'associatedElementId' => $element->getCanonicalId(),
            'enabled' => $element->getEnabledForSite($siteId),
            'redirectSrcMatch' => $redirectSrcMatch,
            'redirectDestUrl' => $redirectSrcMatch === 'pathonly' ? $element->uri : $element->getUrl(),
            'redirectHttpCode' => $redirectHttpCode,
        ];

        $this->saveRedirect($redirectConfig);
    }

    /**
     * Delete an element redirect.
     *
     * @param ElementInterface $element
     * @param bool $allSites Whether to delete the redirect for all sites
     * @param bool $force Whether force redirect deletion, defaults to `false`.
     */
    public function removeElementRedirect(ElementInterface $element, bool $allSites = false, bool $force = false): void
    {
        if (!$force) {
            if (!empty(self::$purgedShortLinkElementIds[$element->id])) {
                return;
            }

            self::$purgedShortLinkElementIds[$element->id] = true;
        }

        $redirects = $this->getRedirectsByElementId($element->getCanonicalId(), $allSites ? null : $element->siteId);

        if (!empty($redirects)) {
            foreach ($redirects as $redirect) {
                $this->deleteRedirectById($redirect['id']);
            }
        }
    }

    /**
     * Return redirects for a given element.
     *
     * @param int $elementId
     * @param int|null $siteId
     *
     * @return null|array
     */
    public function getRedirectsByElementId(int $elementId, int $siteId = null)
    {
        // Query the db table
        $query = (new Query())
            ->from(['{{%retour_static_redirects}}'])
            ->where(['associatedElementId' => $elementId]);
        if ($siteId !== null) {
            $query->andWhere(['siteId' => $siteId]);
        }

        return $query->all();
    }

    /**
     * Delete a short link by its ID.
     *
     * @throws \Throwable
     * @throws \craft\errors\ElementNotFoundException
     * @throws \yii\base\Exception
     */
    public function deleteShortlinkById(int $redirectId): bool
    {
        $redirect = $this->getRedirectById($redirectId);
        if (!$redirect) {
            return false;
        }
        $elementId = $redirect['associatedElementId'];
        $siteId = $redirect['siteId'];
        $element = Craft::$app->getElements()->getElementById($elementId, null, $siteId);

        if ($element) {
            $fieldUpdated = $this->setShortLinkFieldValue($element, $redirect['redirectSrcUrl'], null);

            if ($fieldUpdated) {
                // This will also delete the redirect from the table
                Craft::$app->getElements()->saveElement($element);
            }
        }

        return true;
    }

    /**
     * @param array $redirectConfig
     * @return bool
     */
    public function saveRedirect(array $redirectConfig): bool
    {
        // Handle URL encoded URLs by decoding them before saving them
        if (isset($redirectConfig['redirectMatchType']) && $redirectConfig['redirectMatchType'] === 'exactmatch') {
            $redirectConfig['redirectSrcUrl'] = urldecode($redirectConfig['redirectSrcUrl'] ?? '');
            $redirectConfig['redirectSrcUrlParsed'] = urldecode($redirectConfig['redirectSrcUrlParsed'] ?? '');
        }
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

            return false;
        }
        // Get the validated model attributes and save them to the db
        $redirectConfig = $redirect->getAttributes();
        // 0 for a siteId needs to be converted to null
        if (empty($redirectConfig['siteId']) || (int)$redirectConfig['siteId'] === 0) {
            $redirectConfig['siteId'] = null;
        }
        // Throw an event to before saving the redirect
        $db = Craft::$app->getDb();
        if (!empty($redirectConfig['associatedElementId'])) {
            $existingRedirect = (new Query())->from(['{{%retour_static_redirects}}'])->where(['id' => $redirectConfig['id']])->one();
        }

        // See if a redirect exists with this source URL already
        if ((int)$redirectConfig['id'] === 0) {
            // Query the db table
            $redirect = (new Query())
                ->from(['{{%retour_static_redirects}}'])
                ->where(['redirectSrcUrlParsed' => $redirectConfig['redirectSrcUrlParsed']])
                ->andWhere(['siteId' => $redirectConfig['siteId']])
                ->one();
            // If it exists, update it rather than having duplicates
            if (!empty($redirect)) {
                $redirectConfig['id'] = $redirect['id'];
            }
        }
        // Trigger a 'beforeSaveRedirect' event
        $isNew = (int)$redirectConfig['id'] === 0;
        $event = new RedirectEvent([
            'isNew' => $isNew,
            'legacyUrl' => $redirectConfig['redirectSrcUrlParsed'],
            'destinationUrl' => $redirectConfig['redirectDestUrl'],
            'matchType' => $redirectConfig['redirectSrcMatch'],
            'redirectType' => $redirectConfig['redirectHttpCode'],
            'siteId' => $redirectConfig['siteId'],
        ]);
        $this->trigger(self::EVENT_BEFORE_SAVE_REDIRECT, $event);
        if (!$event->isValid) {
            return false;
        }
        // See if this is an existing redirect
        if (!$isNew) {
            Craft::debug(
                Craft::t(
                    'retour',
                    'Updating existing redirect: {redirect}',
                    ['redirect' => print_r($redirectConfig, true)]
                ),
                __METHOD__
            );
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

                return false;
            }
        } else {
            Craft::debug(
                Craft::t(
                    'retour',
                    'Creating new redirect: {redirect}',
                    ['redirect' => print_r($redirectConfig, true)]
                ),
                __METHOD__
            );
            unset($redirectConfig['id']);
            // Create a new record
            try {
                $db->createCommand()->insert(
                    '{{%retour_static_redirects}}',
                    $redirectConfig
                )->execute();
            } catch (Exception $e) {
                Craft::error($e->getMessage(), __METHOD__);

                return false;
            }
        }
        // To prevent redirect loops, see if any static redirects have our redirectDestUrl as their redirectSrcUrl
        $testRedirectConfig = $this->getRedirectByRedirectSrcUrl(
            $redirectConfig['redirectDestUrl'],
            $redirectConfig['siteId']
        );
        if ($testRedirectConfig !== null) {
            Craft::debug(
                Craft::t(
                    'retour',
                    'Deleting redirect to prevent a loop: {redirect}',
                    ['redirect' => print_r($testRedirectConfig, true)]
                ),
                __METHOD__
            );
            // Delete the redirect that has a redirectSrcUrl the same as this record's redirectDestUrl
            try {
                $db->createCommand()->delete(
                    '{{%retour_static_redirects}}',
                    ['id' => $testRedirectConfig['id']]
                )->execute();
            } catch (Exception $e) {
                Craft::error($e->getMessage(), __METHOD__);
            }
        }
        // Trigger a 'afterSaveRedirect' event
        $this->trigger(self::EVENT_AFTER_SAVE_REDIRECT, $event);

        if (!empty($redirectConfig['associatedElementId']) && !empty($existingRedirect)) {
            $this->updateAssociatedElementShortLink($redirectConfig, $existingRedirect);
        }

        // Invalidate caches after saving a redirect
        $this->invalidateCaches();

        return true;
    }

    /**
     * Return a redirect by redirectSrcUrl
     *
     * @param string $redirectSrcUrl
     * @param int|null $siteId
     *
     * @return null|array
     */
    public function getRedirectByRedirectSrcUrl(string $redirectSrcUrl, int $siteId = null): ?array
    {
        // Query the db table
        $query = (new Query())
            ->from(['{{%retour_static_redirects}}'])
            ->where(['redirectSrcUrl' => $redirectSrcUrl]);
        if ($siteId) {
            $query
                ->andWhere(['or', [
                    'siteId' => $siteId,
                ], [
                    'siteId' => null,
                ]]);
        }
        $redirect = $query->one();

        return $redirect;
    }

    /**
     * Invalidate all of the redirects caches
     */
    public function invalidateCaches(): void
    {
        $cache = Craft::$app->getCache();
        TagDependency::invalidate($cache, $this::GLOBAL_REDIRECTS_CACHE_TAG);
        // Clear the GraphQL caches too
        $gql = Craft::$app->getGql();
        if (method_exists($gql, 'invalidateCaches')) {
            $gql->invalidateCaches();
        }
        Craft::debug(
            Craft::t(
                'retour',
                'All redirect caches cleared'
            ),
            __METHOD__
        );
    }

    /**
     * Find all short link fields on an element that have a matching redirect source url and update the value
     *
     * @param ElementInterface $element
     * @param string $redirectSrcUrl
     * @param mixed $newValue
     * @return bool whether a match was found
     */
    protected function setShortLinkFieldValue(ElementInterface $element, string $redirectSrcUrl, mixed $newValue): bool
    {
        $layout = $element->getFieldLayout();
        $srcUrl = $redirectSrcUrl;
        $site = $element->getSite();
        $urlLess = StringHelper::removeLeft($srcUrl, $site->getBaseUrl());

        $matchFound = false;
        foreach ($element->getFieldValues() as $fieldHandle => $fieldValue) {
            if (!is_string($fieldValue)) {
                continue;
            }
            // Compare field value with starting slashes dropped to the redirectSrcUrl value as well as one with site URL removed, just in case
            if (in_array(ltrim($fieldValue, '/'), [ltrim($srcUrl, '/'), ltrim($urlLess, '/')], true)) {
                $field = $layout->getFieldByHandle($fieldHandle);

                if ($field instanceof ShortLink) {
                    $element->setFieldValue($fieldHandle, $newValue);
                    $matchFound = true;
                }
            }
        }

        return $matchFound;
    }
}
