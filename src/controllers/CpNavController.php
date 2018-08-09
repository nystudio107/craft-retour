<?php
/**
 * Retour plugin for Craft CMS 3.x
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace nystudio107\retour\controllers;

use craft\helpers\UrlHelper;
use craft\models\Site;
use nystudio107\retour\Retour;
use nystudio107\retour\assetbundles\retour\RetourAsset;
use nystudio107\retour\assetbundles\retour\RetourDashboardAsset;

use Craft;
use craft\web\Controller;

use yii\base\InvalidConfigException;
use yii\web\NotFoundHttpException;
use yii\web\Response;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class CpNavController extends Controller
{
    // Constants
    // =========================================================================

    const DOCUMENTATION_URL = 'https://github.com/nystudio107/craft-retour/';

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = [
    ];

    // Public Methods
    // =========================================================================

    public function actionDashboard(string $siteHandle = null, bool $showWelcome = false): Response
    {
        $variables = [];
        // Get the site to edit
        $siteId = $this->getSiteIdFromHandle($siteHandle);
        $pluginName = Retour::$plugin->getSettings()->pluginName;
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
        $this->setMultiSiteVariables($siteHandle, $siteId, $variables);
        $variables['controllerHandle'] = 'dashboard';

        // Basic variables
        $variables['fullPageForm'] = false;
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
                'url' => UrlHelper::cpUrl('retour/dashboard'),
            ],
        ];
        $variables['selectedSubnavItem'] = 'dashboard';
        $variables['showWelcome'] = $showWelcome;

        // Render the template
        return $this->renderTemplate('retour/dashboard/index', $variables);
    }


    /**
     * Saves a plugin’s settings.
     *
     * @return Response|null
     * @throws NotFoundHttpException if the requested plugin cannot be found
     * @throws \yii\web\BadRequestHttpException
     * @throws \craft\errors\MissingComponentException
     */
    public function actionSavePluginSettings()
    {
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

    /**
     * Hack to make webbpack async bundle loading work
     *
     * @param string $sectionHandle
     * @param string $resourceType
     * @param string $fileName
     */
    public function actionResource(string $sectionHandle, string $resourceType, string $fileName)
    {
        $baseAssetsUrl = Craft::$app->assetManager->getPublishedUrl(
            '@nystudio107/retour/assetbundles/retour/dist',
            true
        );
        $url = $baseAssetsUrl . '/' . $resourceType . '/' . $fileName;

        $this->redirect($url);
    }
    // Protected Methods
    // =========================================================================

    /**
     * @param string $siteHandle
     * @param        $siteId
     * @param        $variables
     *
     * @throws \yii\web\ForbiddenHttpException
     */
    protected function setMultiSiteVariables($siteHandle, &$siteId, array &$variables)
    {
        // Enabled sites
        $sites = Craft::$app->getSites();
        if (Craft::$app->getIsMultiSite()) {
            // Set defaults based on the section settings
            $variables['enabledSiteIds'] = [];
            $variables['siteIds'] = [];

            /** @var Site $site */
            foreach ($sites->getEditableSiteIds() as $editableSiteId) {
                $variables['enabledSiteIds'][] = $editableSiteId;
                $variables['siteIds'][] = $editableSiteId;
            }

            // Make sure the $siteId they are trying to edit is in our array of editable sites
            if (!\in_array($siteId, $variables['enabledSiteIds'], false)) {
                if (!empty($variables['enabledSiteIds'])) {
                    $siteId = reset($variables['enabledSiteIds']);
                } else {
                    $this->requirePermission('editSite:'.$siteId);
                }
            }
        }
        // Set the currentSiteId and currentSiteHandle
        $variables['currentSiteId'] = empty($siteId) ? Craft::$app->getSites()->currentSite->id : $siteId;
        $variables['currentSiteHandle'] = empty($siteHandle)
            ? Craft::$app->getSites()->currentSite->handle
            : $siteHandle;

        // Page title
        $variables['showSites'] = (
            Craft::$app->getIsMultiSite() &&
            \count($variables['enabledSiteIds'])
        );

        if ($variables['showSites']) {
            $variables['sitesMenuLabel'] = Craft::t(
                'site',
                $sites->getSiteById((int)$variables['currentSiteId'])->name
            );
        } else {
            $variables['sitesMenuLabel'] = '';
        }
    }

    /**
     * Return a siteId from a siteHandle
     *
     * @param string $siteHandle
     *
     * @return int|null
     * @throws NotFoundHttpException
     */
    protected function getSiteIdFromHandle($siteHandle)
    {
        // Get the site to edit
        if ($siteHandle !== null) {
            $site = Craft::$app->getSites()->getSiteByHandle($siteHandle);
            if (!$site) {
                throw new NotFoundHttpException('Invalid site handle: '.$siteHandle);
            }
            $siteId = $site->id;
        } else {
            $siteId = Craft::$app->getSites()->currentSite->id;
        }

        return $siteId;
    }
}
