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

namespace nystudio107\retour;

use craft\base\Element;
use nystudio107\retour\models\Settings;
use nystudio107\retour\services\Redirects;
use nystudio107\retour\services\Statistics;
use nystudio107\retour\variables\RetourVariable;
use nystudio107\retour\widgets\RetourWidget;

use Craft;
use craft\base\Plugin;
use craft\events\ElementEvent;
use craft\events\ExceptionEvent;
use craft\events\PluginEvent;
use craft\events\RegisterCacheOptionsEvent;
use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterUrlRulesEvent;
use craft\events\RegisterUserPermissionsEvent;
use craft\helpers\UrlHelper;
use craft\services\Elements;
use craft\services\Dashboard;
use craft\services\Plugins;
use craft\services\UserPermissions;
use craft\utilities\ClearCaches;
use craft\web\ErrorHandler;
use craft\web\twig\variables\CraftVariable;
use craft\web\UrlManager;

use yii\base\Event;
use yii\web\HttpException;

/** @noinspection MissingPropertyAnnotationsInspection */

/**
 * Class Retour
 *
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 *
 * @property  Redirects  $redirects
 * @property  Statistics $statistics
 */
class Retour extends Plugin
{
    // Constants
    // =========================================================================

    const DEVMODE_CACHE_DURATION = 30;

    // Static Properties
    // =========================================================================

    /**
     * @var Retour
     */
    public static $plugin;

    /**
     * @var Settings
     */
    public static $settings;

    /**
     * @var int
     */
    public static $cacheDuration;

    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $schemaVersion = '3.0.0';


    /**
     * @var array The URIs for the element before it was saved
     */
    public $oldElementUris = [];

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
        self::$plugin = $this;
        // Initialize properties
        self::$settings = $this->getSettings();
        $this->name = self::$settings->pluginName;
        self::$cacheDuration = Craft::$app->getConfig()->getGeneral()->devMode
            ? $this::DEVMODE_CACHE_DURATION
            : null;
        // Install our event listeners
        $this->installEventListeners();
        // Log that Retour has been loaded
        Craft::info(
            Craft::t(
                'retour',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );
    }

    /**
     * @inheritdoc
     */
    public function getSettingsResponse()
    {
        // Just redirect to the plugin settings page
        Craft::$app->getResponse()->redirect(UrlHelper::cpUrl('retour/settings'));
    }

    /**
     * @inheritdoc
     */
    public function getCpNavItem()
    {
        $subNavs = [];
        $navItem = parent::getCpNavItem();
        $currentUser = Craft::$app->getUser()->getIdentity();
        // Only show sub-navs the user has permission to view
        if ($currentUser->can('retour:dashboard')) {
            $subNavs['dashboard'] = [
                'label' => 'Dashboard',
                'url' => 'retour/dashboard',
            ];
        }
        if ($currentUser->can('retour:redirects')) {
            $subNavs['redirects'] = [
                'label' => 'Redirects',
                'url' => 'retour/redirects',
            ];
        }
        if ($currentUser->can('retour:settings')) {
            $subNavs['settings'] = [
                'label' => 'Settings',
                'url' => 'retour/settings',
            ];
        }
        $navItem = array_merge($navItem, [
            'subnav' => $subNavs,
        ]);

        return $navItem;
    }

    /**
     * Clear all the caches!
     */
    public function clearAllCaches()
    {
        // Clear all of Retour's caches
        self::$plugin->redirects->invalidateCaches();
    }

    // Protected Methods
    // =========================================================================

    /**
     * Determine whether our table schema exists or not; this is needed because
     * migrations such as the install migration and base_install migration may
     * not have been run by the time our init() method has been called
     *
     * @return bool
     */
    protected function tableSchemaExists(): bool
    {
        return (Craft::$app->db->schema->getTableSchema('{{%retour_redirects}}') !== null);
    }

    /**
     * Install our event listeners.
     */
    protected function installEventListeners()
    {
        // Install our event listeners only if our table schema exists
        if ($this->tableSchemaExists()) {
            $request = Craft::$app->getRequest();
            // Add in our event listeners that are needed for every request
            $this->installGlobalEventListeners();
            // Install only for non-console site requests
            if ($request->getIsSiteRequest() && !$request->getIsConsoleRequest()) {
                $this->installSiteEventListeners();
            }
            // Install only for non-console AdminCP requests
            if ($request->getIsCpRequest() && !$request->getIsConsoleRequest()) {
                $this->installCpEventListeners();
            }
        }
        // Handler: EVENT_AFTER_INSTALL_PLUGIN
        Event::on(
            Plugins::class,
            Plugins::EVENT_AFTER_INSTALL_PLUGIN,
            function (PluginEvent $event) {
                if ($event->plugin === $this) {
                    // Invalidate our caches after we've been installed
                    $this->clearAllCaches();
                    // Send them to our welcome screen
                    $request = Craft::$app->getRequest();
                    if ($request->isCpRequest) {
                        Craft::$app->getResponse()->redirect(UrlHelper::cpUrl(
                            'retour/dashboard',
                            [
                                'showWelcome' => true,
                            ]
                        ))->send();
                    }
                }
            }
        );
    }

    /**
     * Install global event listeners for all request types
     */
    protected function installGlobalEventListeners()
    {
        Event::on(
            CraftVariable::class,
            CraftVariable::EVENT_INIT,
            function (Event $event) {
                /** @var CraftVariable $variable */
                $variable = $event->sender;
                $variable->set('retour', RetourVariable::class);
            }
        );
        // Handler: Elements::EVENT_BEFORE_SAVE_ELEMENT
        Event::on(
            Elements::class,
            Elements::EVENT_BEFORE_SAVE_ELEMENT,
            function (ElementEvent $event) {
                Craft::debug(
                    'Elements::EVENT_BEFORE_SAVE_ELEMENT',
                    __METHOD__
                );
                /** @var Element $element */
                $element = $event->element;
                if (!$event->isNew && self::$settings->createUriChangeRedirects) {
                    if ($element !== null && $element->getUrl() !== null) {
                        // We want the already saved representation of this element, not the one we are passed
                        /** @var Element $oldElement */
                        $oldElement = Craft::$app->getElements()->getElementById($element->id);
                        if ($oldElement !== null) {
                            // Stash the old URLs by element id, and do so only once,
                            // in case we are called more than once per request
                            if (empty($this->oldElementUris[$oldElement->id])) {
                                $this->oldElementUris[$oldElement->id] = $this->getAllElementUris($oldElement);
                            }
                        }
                    }
                }
            }
        );
        // Handler: Elements::EVENT_AFTER_SAVE_ELEMENT
        Event::on(
            Elements::class,
            Elements::EVENT_AFTER_SAVE_ELEMENT,
            function (ElementEvent $event) {
                Craft::debug(
                    'Elements::EVENT_AFTER_SAVE_ELEMENT',
                    __METHOD__
                );
                /** @var Element $element */
                $element = $event->element;
                if (!$event->isNew && self::$settings->createUriChangeRedirects && $element->getUrl() !== null) {
                    $this->handleElementUriChange($element);
                }
            }
        );
        // Handler: Plugins::EVENT_AFTER_LOAD_PLUGINS
        Event::on(
            Plugins::class,
            Plugins::EVENT_AFTER_LOAD_PLUGINS,
            function () {
                // Install these only after all other plugins have loaded
                $request = Craft::$app->getRequest();
                // Only respond to non-console site requests
                if ($request->getIsSiteRequest() && !$request->getIsConsoleRequest()) {
                    $this->handleSiteRequest();
                }
                // Respond to AdminCP requests
                if ($request->getIsCpRequest() && !$request->getIsConsoleRequest()) {
                    $this->handleAdminCpRequest();
                }
            }
        );
    }

    /**
     * Install site event listeners for site requests only
     */
    protected function installSiteEventListeners()
    {
        // Handler: UrlManager::EVENT_REGISTER_SITE_URL_RULES
        Event::on(
            UrlManager::class,
            UrlManager::EVENT_REGISTER_SITE_URL_RULES,
            function (RegisterUrlRulesEvent $event) {
                Craft::debug(
                    'UrlManager::EVENT_REGISTER_SITE_URL_RULES',
                    __METHOD__
                );
                // Register our AdminCP routes
                $event->rules = array_merge(
                    $event->rules,
                    $this->customFrontendRoutes()
                );
            }
        );
    }

    /**
     * Install site event listeners for AdminCP requests only
     */
    protected function installCpEventListeners()
    {
        // Handler: Dashboard::EVENT_REGISTER_WIDGET_TYPES
        Event::on(
            Dashboard::class,
            Dashboard::EVENT_REGISTER_WIDGET_TYPES,
            function (RegisterComponentTypesEvent $event) {
                $event->types[] = RetourWidget::class;
            }
        );
        // Handler: UrlManager::EVENT_REGISTER_CP_URL_RULES
        Event::on(
            UrlManager::class,
            UrlManager::EVENT_REGISTER_CP_URL_RULES,
            function (RegisterUrlRulesEvent $event) {
                Craft::debug(
                    'UrlManager::EVENT_REGISTER_CP_URL_RULES',
                    __METHOD__
                );
                // Register our AdminCP routes
                $event->rules = array_merge(
                    $event->rules,
                    $this->customAdminCpRoutes()
                );
            }
        );
        // Handler: UserPermissions::EVENT_REGISTER_PERMISSIONS
        Event::on(
            UserPermissions::class,
            UserPermissions::EVENT_REGISTER_PERMISSIONS,
            function (RegisterUserPermissionsEvent $event) {
                Craft::debug(
                    'UserPermissions::EVENT_REGISTER_PERMISSIONS',
                    __METHOD__
                );
                // Register our custom permissions
                $event->permissions[Craft::t('retour', 'Retour')] = $this->customAdminCpPermissions();
            }
        );
        // Handler: ClearCaches::EVENT_REGISTER_CACHE_OPTIONS
        Event::on(
            ClearCaches::class,
            ClearCaches::EVENT_REGISTER_CACHE_OPTIONS,
            function (RegisterCacheOptionsEvent $event) {
                Craft::debug(
                    'ClearCaches::EVENT_REGISTER_CACHE_OPTIONS',
                    __METHOD__
                );
                // Register our AdminCP routes
                $event->options = array_merge(
                    $event->options,
                    $this->customAdminCpCacheOptions()
                );
            }
        );
    }

    /**
     * Handle site requests.  We do it only after we receive the event
     * EVENT_AFTER_LOAD_PLUGINS so that any pending db migrations can be run
     * before our event listeners kick in
     */
    protected function handleSiteRequest()
    {
        // Handler: ErrorHandler::EVENT_BEFORE_HANDLE_EXCEPTION
        Event::on(
            ErrorHandler::class,
            ErrorHandler::EVENT_BEFORE_HANDLE_EXCEPTION,
            function (ExceptionEvent $event) {
                Craft::debug(
                    'ErrorHandler::EVENT_BEFORE_HANDLE_EXCEPTION',
                    __METHOD__
                );
                $exception = $event->exception;
                // If this is a Twig Runtime exception, use the previous one instead
                if ($exception instanceof \Twig_Error_Runtime &&
                    ($previousException = $exception->getPrevious()) !== null) {
                    $exception = $previousException;
                }
                // If this is a 404 error, see if we can handle it
                if ($exception instanceof HttpException && $exception->statusCode === 404) {
                    Retour::$plugin->redirects->handle404();
                }
            }
        );
    }

    /**
     * Handle AdminCP requests. We do it only after we receive the event
     * EVENT_AFTER_LOAD_PLUGINS so that any pending db migrations can be run
     * before our event listeners kick in
     */
    protected function handleAdminCpRequest()
    {
    }

    /**
     * @inheritdoc
     */
    protected function createSettingsModel()
    {
        return new Settings();
    }

    /**
     * @param Element $element
     */
    protected function handleElementUriChange(Element $element)
    {
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
                    if (strcmp($oldUri, $newUri) !== 0) {
                        $redirectConfig = [
                            'id' => 0,
                            'redirectMatchType' => 'exactmatch',
                            'redirectHttpCode' => 301,
                            'redirectSrcUrl' => $oldUri,
                            'redirectDestUrl' => $newUri
                        ];
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
        $sites = Craft::$app->getSites()->getAllSites();
        foreach ($sites as $site) {
            $uri = Craft::$app->getElements()->getElementUriForSite($element->id, $site->id);
            if ($uri !== null) {
                $uris[$site->id] = $uri;
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

    /**
     * Return the custom AdminCP routes
     *
     * @return array
     */
    protected function customAdminCpRoutes(): array
    {
        return [
            'retour' => 'retour/statistics/dashboard',

            'retour/redirects' => 'retour/redirects/redirects',
            'retour/redirects/<siteHandle:{handle}>' => 'retour/redirects/redirects',

            'retour/edit-redirect/<redirectId:\d+>' => 'retour/redirects/edit-redirect',
            'retour/edit-redirect/<redirectId:\d+>/<siteHandle:{handle}>' => 'retour/redirects/edit-redirect',

            'retour/add-redirect' => 'retour/redirects/edit-redirect',
            'retour/add-redirect/<siteHandle:{handle}>' => 'retour/redirects/edit-redirect',

            'retour/delete-redirect/<redirectId:\d+>' => 'retour/redirects/delete-redirect',
            'retour/delete-redirect/<redirectId:\d+>/<siteHandle:{handle}>' => 'retour/redirects/delete-redirect',

            'retour/dashboard' => 'retour/statistics/dashboard',
            'retour/dashboard/<siteHandle:{handle}>' => 'retour/statistics/dashboard',

            'retour/settings' => 'retour/settings/plugin-settings',
        ];
    }

    /**
     * Return the custom frontend routes
     *
     * @return array
     */
    protected function customFrontendRoutes(): array
    {
        return [
            // Tables
            '/retour/tables/dashboard' => 'retour/tables/dashboard',
            '/retour/tables/redirects' => 'retour/tables/redirects',
            // Charts
            '/retour/charts/dashboard/<range:{handle}>' => 'retour/charts/dashboard',
            '/retour/charts/widget/<days>' => 'retour/charts/widget',
            // Make webpack async bundle loading work out of published AssetBundles
            '/cpresources/retour/<resourceType:{handle}>/<fileName>' => 'retour/manifest/resource',
        ];
    }

    /**
     * Returns the custom AdminCP cache options.
     *
     * @return array
     */
    protected function customAdminCpCacheOptions(): array
    {
        return [
            [
                'key' => 'retour-redirect-caches',
                'label' => Craft::t('retour', 'Retour redirect caches'),
                'action' => [self::$plugin->redirects, 'invalidateCaches'],
            ],
        ];
    }

    /**
     * Returns the custom AdminCP user permissions.
     *
     * @return array
     */
    protected function customAdminCpPermissions(): array
    {
        return [
            'retour:dashboard' => [
                'label' => Craft::t('retour', 'Dashboard'),
            ],
            'retour:redirects' => [
                'label' => Craft::t('retour', 'Redirects'),
            ],
            'retour:settings' => [
                'label' => Craft::t('retour', 'Settings'),
            ],
        ];
    }
}
