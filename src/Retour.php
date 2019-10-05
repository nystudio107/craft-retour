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

use nystudio107\retour\gql\interfaces\RetourInterface;
use nystudio107\retour\gql\queries\RetourQuery;
use nystudio107\retour\listeners\GetCraftQLSchema;
use nystudio107\retour\models\Settings;
use nystudio107\retour\services\Redirects;
use nystudio107\retour\services\Statistics;
use nystudio107\retour\variables\RetourVariable;
use nystudio107\retour\widgets\RetourWidget;

use Craft;
use craft\base\Element;
use craft\base\Plugin;
use craft\events\ElementEvent;
use craft\events\ExceptionEvent;
use craft\events\RegisterGqlQueriesEvent;
use craft\events\RegisterGqlTypesEvent;
use craft\events\PluginEvent;
use craft\events\RegisterCacheOptionsEvent;
use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterUrlRulesEvent;
use craft\events\RegisterUserPermissionsEvent;
use craft\helpers\ElementHelper;
use craft\helpers\UrlHelper;
use craft\services\Elements;
use craft\services\Dashboard;
use craft\services\Gql;
use craft\services\Plugins;
use craft\services\UserPermissions;
use craft\utilities\ClearCaches;
use craft\web\ErrorHandler;
use craft\web\twig\variables\CraftVariable;
use craft\web\UrlManager;

use yii\base\Event;
use yii\base\Exception;
use yii\web\HttpException;

use markhuot\CraftQL\Builders\Schema;
use markhuot\CraftQL\CraftQL;
use markhuot\CraftQL\Events\AlterSchemaFields;

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

    /**
     * @var HttpException
     */
    public static $currentException;

    /**
     * @var bool
     */
    public static $craft31 = false;

    /**
     * @var bool
     */
    public static $craft32 = false;

    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $schemaVersion = '3.0.7';


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
        self::$craft31 = version_compare(Craft::$app->getVersion(), '3.1', '>=');
        self::$craft32 = version_compare(Craft::$app->getVersion(), '3.2', '>=');
        $this->name = self::$settings->pluginName;
        self::$cacheDuration = Craft::$app->getConfig()->getGeneral()->devMode
            ? $this::DEVMODE_CACHE_DURATION
            : null;
        // Handle any console commands
        $request = Craft::$app->getRequest();
        if ($request->getIsConsoleRequest()) {
            $this->controllerNamespace = 'nystudio107\retour\console\controllers';
        }
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
        $editableSettings = true;
        $general = Craft::$app->getConfig()->getGeneral();
        if (self::$craft31 && !$general->allowAdminChanges) {
            $editableSettings = false;
        }
        if ($currentUser->can('retour:settings') && $editableSettings) {
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
            // Install only for non-console Control Panel requests
            if ($request->getIsCpRequest() && !$request->getIsConsoleRequest()) {
                $this->installCpEventListeners();
            }
        }
        // Handler: ClearCaches::EVENT_REGISTER_CACHE_OPTIONS
        Event::on(
            ClearCaches::class,
            ClearCaches::EVENT_REGISTER_CACHE_OPTIONS,
            function (RegisterCacheOptionsEvent $event) {
                Craft::debug(
                    'ClearCaches::EVENT_REGISTER_CACHE_OPTIONS',
                    __METHOD__
                );
                // Register our Control Panel routes
                $event->options = array_merge(
                    $event->options,
                    $this->customAdminCpCacheOptions()
                );
            }
        );
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
                if ($element !== null && !$event->isNew && $element->getUrl() !== null && !$element->propagating) {
                    $checkElementSlug = true;
                    // If we're running Craft 3.2 or later, also check that the element isn't bulk
                    // re-saving, and that isn't not a draft or revision
                    if (Retour::$craft32 && (
                            $element->resaving ||
                            ElementHelper::isDraftOrRevision($element)
                        )) {
                        $checkElementSlug = false;
                    }
                    // Only do this for elements that aren't new, pass $checkElementSlug, and the user
                    // has turned on the setting
                    if (self::$settings->createUriChangeRedirects && $checkElementSlug) {
                        // Make sure this isn't a transitioning temporary draft/revision and that it's
                        // not propagating to other sites
                        if (strpos($element->uri, '__temp_') === false && !$element->propagating) {
                            // Stash the old URLs by element id, and do so only once,
                            // in case we are called more than once per request
                            if (empty($this->oldElementUris[$element->id])) {
                                $this->oldElementUris[$element->id] = $this->getAllElementUris($element);
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
                if ($element !== null && !$event->isNew && $element->getUrl() !== null) {
                    $checkElementSlug = true;
                    if (Retour::$craft32 && ElementHelper::isDraftOrRevision($element)) {
                        $checkElementSlug = false;
                    }
                    if (self::$settings->createUriChangeRedirects && $checkElementSlug) {
                        $this->handleElementUriChange($element);
                    }
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
                // Respond to Control Panel requests
                if ($request->getIsCpRequest() && !$request->getIsConsoleRequest()) {
                    $this->handleAdminCpRequest();
                }
            }
        );
        // Handler: Gql::EVENT_REGISTER_GQL_TYPES
        Event::on(
            Gql::class,
            Gql::EVENT_REGISTER_GQL_TYPES,
            function (RegisterGqlTypesEvent $event) {
                Craft::debug(
                    'Gql::EVENT_REGISTER_GQL_TYPES',
                    __METHOD__
                );
                $event->types[] = RetourInterface::class;
            }
        );
        // Handler: Gql::EVENT_REGISTER_GQL_QUERIES
        Event::on(
            Gql::class,
            Gql::EVENT_REGISTER_GQL_QUERIES,
            function (RegisterGqlQueriesEvent $event) {
                Craft::debug(
                    'Gql::EVENT_REGISTER_GQL_QUERIES',
                    __METHOD__
                );
                $queries = RetourQuery::getQueries();
                foreach ($queries as $key => $value) {
                    $event->queries[$key] = $value;
                }
            }
        );
        // CraftQL Support
        if (class_exists(CraftQL::class)) {
            Event::on(
                Schema::class,
                AlterSchemaFields::EVENT,
                [GetCraftQLSchema::class, 'handle']
            );
        }
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
                // Register our Control Panel routes
                $event->rules = array_merge(
                    $event->rules,
                    $this->customFrontendRoutes()
                );
            }
        );
    }

    /**
     * Install site event listeners for Control Panel requests only
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
                // Register our Control Panel routes
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
                if ($exception instanceof \Twig\Error\RuntimeError &&
                    ($previousException = $exception->getPrevious()) !== null) {
                    $exception = $previousException;
                }
                // If this is a 404 error, see if we can handle it
                if ($exception instanceof HttpException && $exception->statusCode === 404) {
                    self::$currentException = $exception;
                    Retour::$plugin->redirects->handle404();
                }
            }
        );
    }

    /**
     * Handle Control Panel requests. We do it only after we receive the event
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
                        if (self::$settings->uriChangeRedirectSrcMatch === 'fullurl') {
                            try {
                                $oldUri = UrlHelper::siteUrl($oldUri, null, null, $redirectSiteId);
                                $newUri = UrlHelper::siteUrl($newUri, null, null, $redirectSiteId);
                            } catch (Exception $e) {
                                // That's fine
                            }
                        }
                        $redirectConfig = [
                            'id' => 0,
                            'redirectMatchType' => 'exactmatch',
                            'redirectHttpCode' => 301,
                            'redirectSrcMatch' => self::$settings->uriChangeRedirectSrcMatch,
                            'redirectSrcUrl' => $oldUri,
                            'redirectDestUrl' => $newUri,
                            'siteId' => $redirectSiteId,
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
        if (!self::$craft32 || !ElementHelper::isDraftOrRevision($element)) {
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

    /**
     * Return the custom Control Panel routes
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

            'retour/add-redirect' => 'retour/redirects/edit-redirect',
            'retour/add-redirect/<siteId:\d+>' => 'retour/redirects/edit-redirect',

            'retour/delete-redirect/<redirectId:\d+>' => 'retour/redirects/delete-redirect',

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
        ];
    }

    /**
     * Returns the custom Control Panel cache options.
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
     * Returns the custom Control Panel user permissions.
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
