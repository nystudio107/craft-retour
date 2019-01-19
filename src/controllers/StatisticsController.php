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
use nystudio107\retour\assetbundles\retour\RetourDashboardAsset;
use nystudio107\retour\helpers\MultiSite as MultiSiteHelper;
use nystudio107\retour\helpers\Permission as PermissionHelper;

use Craft;
use craft\web\Controller;
use craft\errors\MissingComponentException;
use craft\helpers\UrlHelper;

use yii\base\InvalidConfigException;
use yii\web\NotFoundHttpException;
use yii\web\Response;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class StatisticsController extends Controller
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
     * @param string|null $siteHandle
     * @param bool        $showWelcome
     *
     * @return Response
     * @throws NotFoundHttpException
     * @throws \yii\web\ForbiddenHttpException
     */
    public function actionDashboard(string $siteHandle = null, bool $showWelcome = false): Response
    {
        $variables = [];
        PermissionHelper::controllerPermissionCheck('retour:dashboard');
        // Trim the statistics
        Retour::$plugin->statistics->trimStatistics();
        // Get the site to edit
        $siteId = MultiSiteHelper::getSiteIdFromHandle($siteHandle);
        $pluginName = Retour::$settings->pluginName;
        $templateTitle = Craft::t('retour', 'Dashboard');
        $view = Craft::$app->getView();
        // Asset bundle
        try {
            $view->registerAssetBundle(RetourDashboardAsset::class);
        } catch (InvalidConfigException $e) {
            Craft::error($e->getMessage(), __METHOD__);
        }
        $variables['baseAssetsUrl'] = Craft::$app->assetManager->getPublishedUrl(
            '@nystudio107/retour/assetbundles/retour/dist',
            true
        );
        // Enabled sites
        MultiSiteHelper::setMultiSiteVariables($siteHandle, $siteId, $variables);
        $variables['controllerHandle'] = 'dashboard';

        // Basic variables
        $variables['fullPageForm'] = false;
        $variables['docsUrl'] = self::DOCUMENTATION_URL;
        $variables['pluginName'] = $pluginName;
        $variables['title'] = $templateTitle;
        $siteHandleUri = Craft::$app->isMultiSite ? '/'.$siteHandle : '';
        $variables['crumbs'] = [
            [
                'label' => $pluginName,
                'url' => UrlHelper::cpUrl('retour'),
            ],
            [
                'label' => $templateTitle,
                'url' => UrlHelper::cpUrl('retour/dashboard'.$siteHandleUri),
            ],
        ];
        $variables['docTitle'] = "{$pluginName} - {$templateTitle}";
        $variables['selectedSubnavItem'] = 'dashboard';
        $variables['showWelcome'] = $showWelcome;

        // Render the template
        return $this->renderTemplate('retour/dashboard/index', $variables);
    }

    /**
     * @return Response
     * @throws \yii\web\ForbiddenHttpException
     */
    public function actionClearStatistics(): Response
    {
        PermissionHelper::controllerPermissionCheck('retour:dashboard');
        $error = Retour::$plugin->statistics->clearStatistics();
        Craft::info(
            Craft::t(
                'retour',
                'Retour statistics cleared: {error}',
                ['error' => $error]
            ),
            __METHOD__
        );
        Retour::$plugin->clearAllCaches();
        try {
            Craft::$app->getSession()->setNotice(Craft::t('retour', 'Retour statistics cleared.'));
        } catch (MissingComponentException $e) {
            Craft::error($e->getMessage(), __METHOD__);
        }

        return $this->redirect('retour/dashboard');
    }
}
