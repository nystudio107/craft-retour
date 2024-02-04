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

namespace nystudio107\retour\controllers;

use Craft;
use craft\errors\MissingComponentException;
use craft\helpers\UrlHelper;
use craft\web\Controller;
use nystudio107\retour\assetbundles\retour\RetourDashboardAsset;
use nystudio107\retour\helpers\MultiSite as MultiSiteHelper;
use nystudio107\retour\helpers\Permission as PermissionHelper;
use nystudio107\retour\Retour;
use yii\base\InvalidConfigException;
use yii\web\BadRequestHttpException;
use yii\web\ForbiddenHttpException;
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

    protected const DOCUMENTATION_URL = 'https://github.com/nystudio107/craft-retour/';

    // Protected Properties
    // =========================================================================

    protected array|bool|int $allowAnonymous = [];

    // Public Methods
    // =========================================================================


    /**
     * @param string|null $siteHandle
     * @param bool $showWelcome
     *
     * @return Response
     * @throws NotFoundHttpException
     * @throws ForbiddenHttpException
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
            '@nystudio107/retour/web/assets/dist',
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
        $siteHandleUri = Craft::$app->isMultiSite ? '/' . $siteHandle : '';
        $variables['crumbs'] = [
            [
                'label' => $pluginName,
                'url' => UrlHelper::cpUrl('retour'),
            ],
            [
                'label' => $templateTitle,
                'url' => UrlHelper::cpUrl('retour/dashboard' . $siteHandleUri),
            ],
        ];
        $variables['docTitle'] = "{$pluginName} - {$templateTitle}";
        $variables['selectedSubnavItem'] = 'dashboard';
        $variables['showWelcome'] = $showWelcome;
        $variables['settings'] = Retour::$settings;

        // Render the template
        return $this->renderTemplate('retour/dashboard/index', $variables);
    }

    /**
     * @return Response
     * @throws ForbiddenHttpException
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

    /**
     * @return ?Response
     * @throws MissingComponentException
     * @throws BadRequestHttpException
     * @throws ForbiddenHttpException
     */
    public function actionDeleteStatistics(): ?Response
    {
        PermissionHelper::controllerPermissionCheck('retour:dashboard');
        $request = Craft::$app->getRequest();
        $statisticIds = $request->getRequiredBodyParam('statisticIds');
        $stickyError = false;
        foreach ($statisticIds as $statisticId) {
            if (Retour::$plugin->statistics->deleteStatisticById($statisticId) === 0) {
                $stickyError = true;
            }
        }
        Craft::info(
            Craft::t(
                'retour',
                'Retour statistics deleted: {error}',
                ['error' => $stickyError]
            ),
            __METHOD__
        );

        Retour::$plugin->clearAllCaches();
        // Handle any cumulative errors
        if (!$stickyError) {
            // Clear the caches and continue on
            Craft::$app->getSession()->setNotice(Craft::t('retour', 'Retour statistics deleted.'));

            return $this->redirect('retour/dashboard');
        }
        Craft::$app->getSession()->setError(Craft::t('retour', "Couldn't delete statistic."));

        return null;
    }
}
