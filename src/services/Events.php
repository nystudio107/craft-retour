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
use craft\base\Element;
use craft\helpers\ElementHelper;
use nystudio107\retour\events\RedirectEvent;
use nystudio107\retour\helpers\UrlHelper;
use nystudio107\retour\Retour;
use yii\base\Exception;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.64
 */
class Events extends Component
{
    // Constants
    // =========================================================================

    /**
     * @event RedirectEvent The event that is triggered before an Entry redirect is automatically
     * saved when an Entry's URI is changed (assuming the **Create Entry Redirects** setting is enabled).
     * You may set [[RedirectEvent::isValid]] to `false` to prevent the redirect from getting saved.
     *
     * ```php
     * use nystudio107\retour\services\Events;
     * use nystudio107\retour\events\RedirectEvent;
     *
     * Event::on(Events::class,
     *     Events::EVENT_BEFORE_SAVE_ENTRY_REDIRECT,
     *     function(RedirectEvent $event) {
     *         // potentially set $event->isValid;
     *     }
     * );
     * ```
     */
    public const EVENT_BEFORE_SAVE_ENTRY_REDIRECT = 'beforeSaveEntryRedirect';

    // Public Properties
    // =========================================================================

    /**
     * @var array The URIs for the element before it was saved
     */
    public array $oldElementUris = [];

    /**
     * @var array A list of element ids that have their redirects already created
     */
    protected array $elementsWithCreatedRedirects = [];

    // Public Methods
    // =========================================================================

    /**
     * @param $element
     */
    public function stashElementUris($element): void
    {
        // Stash the old URLs by element id, and do so only once,
        // in case we are called more than once per request
        if (empty($this->oldElementUris[$element->id])) {
            $this->oldElementUris[$element->id] = $this->getAllElementUris($element);
        }
    }

    /**
     * @param Element $element
     */
    public function handleElementUriChange(Element $element): void
    {
        if (array_key_exists($element->id, $this->elementsWithCreatedRedirects)) {
            return;
        }
        $this->elementsWithCreatedRedirects[] = $element->id;

        $uris = $this->getAllElementUris($element);
        if (!empty($this->oldElementUris[$element->id])) {
            $oldElementUris = $this->oldElementUris[$element->id];
            foreach ($uris as $siteId => $newUri) {
                if (!empty($oldElementUris[$siteId])) {
                    $oldUri = $oldElementUris[$siteId];
                    Craft::debug(
                        Craft::t(
                            'retour',
                            'Comparing old: {oldUri} to new: {newUri}',
                            ['oldUri' => print_r($oldUri, true), 'newUri' => print_r($newUri, true)]
                        ),
                        __METHOD__
                    );
                    // Handle the siteId
                    $redirectSiteId = null;
                    if (Craft::$app->getIsMultiSite()) {
                        $redirectSiteId = $siteId;
                    }
                    // Make sure the URIs are not the same
                    if (strcmp($oldUri, $newUri) !== 0) {
                        // Handle trailing slash config setting
                        if (Craft::$app->config->general->addTrailingSlashesToUrls) {
                            $oldUri = rtrim($oldUri, '/') . '/';
                            $newUri = rtrim($newUri, '/') . '/';
                        }
                        // Handle the URL match type
                        if (Retour::$settings->uriChangeRedirectSrcMatch === 'fullurl') {
                            try {
                                if ($redirectSiteId !== null) {
                                    $redirectSiteId = (int)$redirectSiteId;
                                }
                                $oldUri = \craft\helpers\UrlHelper::siteUrl($oldUri, null, null, $redirectSiteId);
                                $newUri = UrlHelper::siteUrl($newUri, null, null, $redirectSiteId);
                            } catch (Exception $e) {
                                // That's fine
                            }
                        }
                        $redirectConfig = [
                            'id' => 0,
                            'redirectMatchType' => 'exactmatch',
                            'redirectHttpCode' => 301,
                            'redirectSrcMatch' => Retour::$settings->uriChangeRedirectSrcMatch,
                            'redirectSrcUrl' => $oldUri,
                            'redirectDestUrl' => $newUri,
                            'siteId' => $redirectSiteId,
                        ];
                        // Trigger a 'beforeSaveEntryRedirect' event
                        $isNew = (int)$redirectConfig['id'] === 0;
                        $event = new RedirectEvent([
                            'isNew' => $isNew,
                            'legacyUrl' => $redirectConfig['redirectSrcUrl'],
                            'destinationUrl' => $redirectConfig['redirectDestUrl'],
                            'matchType' => $redirectConfig['redirectSrcMatch'],
                            'redirectType' => $redirectConfig['redirectHttpCode'],
                            'siteId' => $redirectConfig['siteId'],
                        ]);
                        $this->trigger(self::EVENT_BEFORE_SAVE_ENTRY_REDIRECT, $event);
                        if (!$event->isValid) {
                            return;
                        }
                        Retour::$plugin->redirects->saveRedirect($redirectConfig);
                    }
                }
            }
        }
    }

    /**
     * Get the URIs for each site for the element
     *
     * @param Element $element
     *
     * @return array
     */
    protected function getAllElementUris(Element $element): array
    {
        $uris = [];
        if (!ElementHelper::isDraftOrRevision($element)) {
            $sites = Craft::$app->getSites()->getAllSites();
            foreach ($sites as $site) {
                $uri = Craft::$app->getElements()->getElementUriForSite($element->id, $site->id);
                if ($uri !== null) {
                    $uris[$site->id] = $uri;
                }
            }
        }

        Craft::debug(
            Craft::t(
                'retour',
                'Getting Element URIs: {uris}',
                ['uris' => print_r($uris, true)]
            ),
            __METHOD__
        );

        return $uris;
    }
}
