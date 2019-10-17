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

namespace nystudio107\retour\controllers;

use nystudio107\retour\Retour;
use nystudio107\retour\assetbundles\retour\RetourAsset;
use nystudio107\retour\helpers\Permission as PermissionHelper;
use nystudio107\retour\models\Settings;

use Craft;
use craft\helpers\UrlHelper;
use craft\web\Controller;

use yii\base\InvalidConfigException;
use yii\web\NotFoundHttpException;
use yii\web\Response;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class SettingsController extends Controller
{
    // Constants
    // =========================================================================

    const DOCUMENTATION_URL = 'https://github.com/nystudio107/craft-retour/';

    // Protected Properties
    // =========================================================================

    protected $allowAnonymous = [];

    // Public Methods
    // =========================================================================

    /**
     * Plugin settings
     *
     * @param null|bool|Settings $settings
     *
     * @return Response The rendered result
     * @throws \yii\web\ForbiddenHttpException
     */
    public function actionPluginSettings($settings = null): Response
    {
        $variables = [];
        PermissionHelper::controllerPermissionCheck('retour:settings');
        if ($settings === null) {
            $settings = Retour::$settings;
        }
        /** @var Settings $settings */
        $pluginName = $settings->pluginName;
        $templateTitle = Craft::t('retour', 'Settings');
        $view = Craft::$app->getView();
        // Asset bundle
        try {
            $view->registerAssetBundle(RetourAsset::class);
        } catch (InvalidConfigException $e) {
            Craft::error($e->getMessage(), __METHOD__);
        }
        $variables['baseAssetsUrl'] = Craft::$app->assetManager->getPublishedUrl(
            '@nystudio107/retour/assetbundles/retour/dist',
            true
        );
        // Basic variables
        $variables['fullPageForm'] = true;
        $variables['docsUrl'] = self::DOCUMENTATION_URL;
        $variables['pluginName'] = $pluginName;
        $variables['title'] = $templateTitle;
        $variables['crumbs'] = [
            [
                'label' => $pluginName,
                'url' => UrlHelper::cpUrl('retour'),
            ],
            [
                'label' => $templateTitle,
                'url' => UrlHelper::cpUrl('retour/settings'),
            ],
        ];
        $variables['docTitle'] = "{$pluginName} - {$templateTitle}";
        $variables['selectedSubnavItem'] = 'settings';
        $variables['settings'] = $settings;

        // Render the template
        return $this->renderTemplate('retour/settings', $variables);
    }

    /**
     * Saves a plugin’s settings.
     *
     * @return Response|null
     * @throws NotFoundHttpException if the requested plugin cannot be found
     * @throws \yii\web\BadRequestHttpException
     * @throws \craft\errors\MissingComponentException
     * @throws \yii\web\ForbiddenHttpException
     */
    public function actionSavePluginSettings()
    {
        PermissionHelper::controllerPermissionCheck('retour:settings');
        $this->requirePostRequest();
        $pluginHandle = Craft::$app->getRequest()->getRequiredBodyParam('pluginHandle');
        $settings = Craft::$app->getRequest()->getBodyParam('settings', []);
        $plugin = Craft::$app->getPlugins()->getPlugin($pluginHandle);

        if ($plugin === null) {
            throw new NotFoundHttpException('Plugin not found');
        }

        if (!Craft::$app->getPlugins()->savePluginSettings($plugin, $settings)) {
            Craft::$app->getSession()->setError(Craft::t('app', "Couldn't save plugin settings."));

            // Send the plugin back to the template
            Craft::$app->getUrlManager()->setRouteParams([
                'plugin' => $plugin,
            ]);

            return null;
        }

        Retour::$plugin->clearAllCaches();
        Craft::$app->getSession()->setNotice(Craft::t('app', 'Plugin settings saved.'));

        return $this->redirectToPostedUrl();
    }
}
