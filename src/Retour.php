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

namespace nystudio107\retour;

use Craft;
use craft\base\Element;
use craft\base\Model;
use craft\base\Plugin;
use craft\events\ElementEvent;
use craft\events\ExceptionEvent;
use craft\events\PluginEvent;
use craft\events\RegisterCacheOptionsEvent;
use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterGqlQueriesEvent;
use craft\events\RegisterGqlSchemaComponentsEvent;
use craft\events\RegisterGqlTypesEvent;
use craft\events\RegisterUrlRulesEvent;
use craft\events\RegisterUserPermissionsEvent;
use craft\helpers\ElementHelper;
use craft\helpers\UrlHelper;
use craft\services\Dashboard;
use craft\services\Elements;
use craft\services\Fields;
use craft\services\Gql;
use craft\services\Plugins;
use craft\services\UserPermissions;
use craft\utilities\ClearCaches;
use craft\web\ErrorHandler;
use craft\web\twig\variables\CraftVariable;
use craft\web\UrlManager;
use nystudio107\retour\fields\ShortLink as ShortLinkField;
use nystudio107\retour\gql\interfaces\RetourInterface;
use nystudio107\retour\gql\queries\RetourQuery;
use nystudio107\retour\models\Settings;
use nystudio107\retour\services\ServicesTrait;
use nystudio107\retour\variables\RetourVariable;
use nystudio107\retour\widgets\RetourWidget;
use Twig\Error\RuntimeError;
use yii\base\Event;
use yii\web\HttpException;

/** @noinspection MissingPropertyAnnotationsInspection */

/**
 * Class Retour
 *
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 * @method Settings getSettings()
 */
class Retour extends Plugin
{
    // Traits
    // =========================================================================

    use ServicesTrait;

    // Constants
    // =========================================================================

    public const DEVMODE_CACHE_DURATION = 30;

    // Static Properties
    // =========================================================================

    /**
     * @var Retour
     */
    public static ?Plugin $plugin = null;

    /**
     * @var ?Settings
     */
    public static ?Settings $settings = null;

    /**
     * @var int
     */
    public static int $cacheDuration = 0;

    /**
     * @var ?HttpException
     */
    public static ?HttpException $currentException = null;

    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public string $schemaVersion = '3.0.12';

    /**
     * @var bool
     */
    public bool $hasCpSection = true;

    /**
     * @var bool
     */
    public bool $hasCpSettings = true;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init(): void
    {
        parent::init();
        self::$plugin = $this;
        // Initialize properties
        self::$settings = $this->getSettings();
        $this->name = self::$settings->pluginName;
        self::$cacheDuration = Craft::$app->getConfig()->getGeneral()->devMode
            ? $this::DEVMODE_CACHE_DURATION
            : 0;
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
     * Clear all the caches!
     */
    public function clearAllCaches(): void
    {
        // Clear all of Retour's caches
        self::$plugin->redirects->invalidateCaches();
    }

    /**
     * @inheritdoc
     */
    public function getSettingsResponse(): mixed
    {
        // Just redirect to the plugin settings page
        return Craft::$app->getResponse()->redirect(UrlHelper::cpUrl('retour/settings'));
    }

    /**
     * @inheritdoc
     */
    public function getCpNavItem(): ?array
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
        if ($currentUser->can('retour:shortlinks')) {
            $subNavs['shortlinks'] = [
                'label' => 'Short Links',
                'url' => 'retour/shortlinks',
            ];
        }
        $editableSettings = true;
        $general = Craft::$app->getConfig()->getGeneral();
        if (!$general->allowAdminChanges) {
            $editableSettings = false;
        }
        if ($currentUser->can('retour:settings') && $editableSettings) {
            $subNavs['settings'] = [
                'label' => 'Settings',
                'url' => 'retour/settings',
            ];
        }
        // Retour doesn't really have an index page, so if the user can't access any sub nav items, we probably shouldn't show the main sub nav item either
        if (empty($subNavs)) {
            return null;
        }
        // A single sub nav item is redundant
        if (count($subNavs) === 1) {
            $subNavs = [];
        }
        $navItem = array_merge($navItem, [
            'subnav' => $subNavs,
        ]);

        return $navItem;
    }

    // Protected Methods
    // =========================================================================

    /**
     * Install our event listeners.
     */
    protected function installEventListeners(): void
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
            function(RegisterCacheOptionsEvent $event) {
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
            function(PluginEvent $event) {
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
     * Install global event listeners for all request types
     */
    protected function installGlobalEventListeners(): void
    {
        Event::on(
            CraftVariable::class,
            CraftVariable::EVENT_INIT,
            function(Event $event) {
                /** @var CraftVariable $variable */
                $variable = $event->sender;
                $variable->set('retour', [
                    'class' => RetourVariable::class,
                    'viteService' => $this->vite,
                ]);
            }
        );

        $prepareRedirectOnElementChange = function(ElementEvent $event) {
            /** @var Element $element */
            $element = $event->element;
            if (!$event->isNew && $element->getUrl() !== null && !$element->propagating) {
                $checkElementSlug = true;
                // If we're running Craft 3.2 or later, also check that isn't not a draft or revision
                if (ElementHelper::isDraftOrRevision($element)) {
                    $checkElementSlug = false;
                }
                // Only do this for elements that aren't new, pass $checkElementSlug, and the user
                // has turned on the setting
                if (self::$settings->createUriChangeRedirects && $checkElementSlug) {
                    // Make sure this isn't a transitioning temporary draft/revision and that it's
                    // not propagating to other sites
                    if (!str_contains($element->uri, '__temp_')) {
                        Retour::$plugin->events->stashElementUris($element);
                    }
                }
            }
        };

        $insertRedirectOnElementChange = function(ElementEvent $event) {
            /** @var Element $element */
            $element = $event->element;
            if ($element !== null && !$event->isNew && $element->getUrl() !== null) {
                $checkElementSlug = true;
                if (ElementHelper::isDraftOrRevision($element)) {
                    $checkElementSlug = false;
                }
                if (self::$settings->createUriChangeRedirects && $checkElementSlug) {
                    Retour::$plugin->events->handleElementUriChange($element);
                }
            }
        };

        // Handler: Elements::EVENT_BEFORE_SAVE_ELEMENT
        Event::on(
            Elements::class,
            Elements::EVENT_BEFORE_SAVE_ELEMENT,
            static function(ElementEvent $event) use ($prepareRedirectOnElementChange) {
                Craft::debug(
                    'Elements::EVENT_BEFORE_SAVE_ELEMENT',
                    __METHOD__
                );
                $prepareRedirectOnElementChange($event);
            }
        );
        // Handler: Elements::EVENT_AFTER_SAVE_ELEMENT
        Event::on(
            Elements::class,
            Elements::EVENT_AFTER_SAVE_ELEMENT,
            static function(ElementEvent $event) use ($insertRedirectOnElementChange) {
                Craft::debug(
                    'Elements::EVENT_AFTER_SAVE_ELEMENT',
                    __METHOD__
                );
                $insertRedirectOnElementChange($event);
            }
        );
        // Handler: Elements::EVENT_BEFORE_UPDATE_SLUG_AND_URI
        Event::on(
            Elements::class,
            Elements::EVENT_BEFORE_UPDATE_SLUG_AND_URI,
            static function(ElementEvent $event) use ($prepareRedirectOnElementChange) {
                Craft::debug(
                    'Elements::EVENT_BEFORE_UPDATE_SLUG_AND_URI',
                    __METHOD__
                );
                $prepareRedirectOnElementChange($event);
            }
        );
        // Handler: Elements::EVENT_AFTER_UPDATE_SLUG_AND_URI
        Event::on(
            Elements::class,
            Elements::EVENT_AFTER_UPDATE_SLUG_AND_URI,
            static function(ElementEvent $event) use ($insertRedirectOnElementChange) {
                Craft::debug(
                    'Elements::EVENT_AFTER_UPDATE_SLUG_AND_URI',
                    __METHOD__
                );
                $insertRedirectOnElementChange($event);
            }
        );
        // Handler: Plugins::EVENT_AFTER_LOAD_PLUGINS
        Event::on(
            Plugins::class,
            Plugins::EVENT_AFTER_LOAD_PLUGINS,
            function() {
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
        // Handler: Fields::EVENT_REGISTER_FIELD_TYPES
        Event::on(
            Fields::class,
            Fields::EVENT_REGISTER_FIELD_TYPES,
            function(RegisterComponentTypesEvent $event) {
                $event->types[] = ShortLinkField::class;
            }
        );
        // Handler: Gql::EVENT_REGISTER_GQL_TYPES
        Event::on(
            Gql::class,
            Gql::EVENT_REGISTER_GQL_TYPES,
            static function(RegisterGqlTypesEvent $event) {
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
            static function(RegisterGqlQueriesEvent $event) {
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
        // Handler: Gql::EVENT_REGISTER_SCHEMA_COMPONENTS
        Event::on(
            Gql::class,
            Gql::EVENT_REGISTER_GQL_SCHEMA_COMPONENTS,
            static function(RegisterGqlSchemaComponentsEvent $event) {
                Craft::debug(
                    'Gql::EVENT_REGISTER_GQL_SCHEMA_COMPONENTS',
                    __METHOD__
                );
                $label = Craft::t('retour', 'Retour');
                $event->queries[$label]['retour.all:read'] = ['label' => Craft::t('retour', 'Query Retour data')];
            }
        );
    }

    /**
     * Handle site requests.  We do it only after we receive the event
     * EVENT_AFTER_LOAD_PLUGINS so that any pending db migrations can be run
     * before our event listeners kick in
     */
    protected function handleSiteRequest(): void
    {
        // Handler: ErrorHandler::EVENT_BEFORE_HANDLE_EXCEPTION
        Event::on(
            ErrorHandler::class,
            ErrorHandler::EVENT_BEFORE_HANDLE_EXCEPTION,
            static function(ExceptionEvent $event) {
                Craft::debug(
                    'ErrorHandler::EVENT_BEFORE_HANDLE_EXCEPTION',
                    __METHOD__
                );
                $exception = $event->exception;
                // If this is a Twig Runtime exception, use the previous one instead
                if ($exception instanceof RuntimeError &&
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
    protected function handleAdminCpRequest(): void
    {
    }

    /**
     * Install site event listeners for site requests only
     */
    protected function installSiteEventListeners(): void
    {
        // Handler: UrlManager::EVENT_REGISTER_SITE_URL_RULES
        Event::on(
            UrlManager::class,
            UrlManager::EVENT_REGISTER_SITE_URL_RULES,
            function(RegisterUrlRulesEvent $event) {
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
     * Install site event listeners for Control Panel requests only
     */
    protected function installCpEventListeners(): void
    {
        // Handler: Dashboard::EVENT_REGISTER_WIDGET_TYPES
        Event::on(
            Dashboard::class,
            Dashboard::EVENT_REGISTER_WIDGET_TYPES,
            function(RegisterComponentTypesEvent $event) {
                $currentUser = Craft::$app->getUser()->getIdentity();
                if ($currentUser->can('accessPlugin-retour')) {
                    $event->types[] = RetourWidget::class;
                }
            }
        );
        // Handler: UrlManager::EVENT_REGISTER_CP_URL_RULES
        Event::on(
            UrlManager::class,
            UrlManager::EVENT_REGISTER_CP_URL_RULES,
            function(RegisterUrlRulesEvent $event) {
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
            function(RegisterUserPermissionsEvent $event) {
                Craft::debug(
                    'UserPermissions::EVENT_REGISTER_PERMISSIONS',
                    __METHOD__
                );
                // Register our custom permissions
                $event->permissions[] = [
                    'heading' => Craft::t('retour', 'Retour'),
                    'permissions' => $this->customAdminCpPermissions(),
                ];
            }
        );
    }

    /**
     * Return the custom Control Panel routes
     *
     * @return array
     */
    protected function customAdminCpRoutes(): array
    {
        return [
            'retour' => '',

            'retour/redirects' => 'retour/redirects/redirects',
            'retour/redirects/<siteHandle:{handle}>' => 'retour/redirects/redirects',

            'retour/edit-redirect/<redirectId:\d+>' => 'retour/redirects/edit-redirect',

            'retour/add-redirect' => 'retour/redirects/edit-redirect',
            'retour/add-redirect/<siteId:\d+>' => 'retour/redirects/edit-redirect',

            'retour/dashboard' => 'retour/statistics/dashboard',
            'retour/dashboard/<siteHandle:{handle}>' => 'retour/statistics/dashboard',

            'retour/shortlinks' => 'retour/redirects/shortlinks',
            'retour/shortlinks/<siteHandle:{handle}>' => 'retour/redirects/shortlinks',

            'retour/settings' => 'retour/settings/plugin-settings',
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
            'retour:shortlinks' => [
                'label' => Craft::t('retour', 'Short Links'),
            ],
            'retour:settings' => [
                'label' => Craft::t('retour', 'Settings'),
            ],
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
     * @inheritdoc
     */
    protected function createSettingsModel(): ?Model
    {
        return new Settings();
    }
}
