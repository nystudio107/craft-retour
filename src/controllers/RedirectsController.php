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
use nystudio107\retour\assetbundles\retour\RetourRedirectsAsset;
use nystudio107\retour\helpers\MultiSite as MultiSiteHelper;
use nystudio107\retour\helpers\Permission as PermissionHelper;
use nystudio107\retour\models\StaticRedirects as StaticRedirectsModel;

use Craft;
use craft\web\Controller;
use craft\helpers\UrlHelper;

use yii\base\InvalidConfigException;
use yii\web\NotFoundHttpException;
use yii\web\Response;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class RedirectsController extends Controller
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
     * Show the redirects table
     *
     * @param string|null $siteHandle
     *
     * @return Response
     * @throws \yii\web\ForbiddenHttpException
     * @throws \yii\web\NotFoundHttpException
     */
    public function actionRedirects(string $siteHandle = null): Response
    {
        $variables = [];
        PermissionHelper::controllerPermissionCheck('retour:redirects');
        // Get the site to edit
        $siteId = MultiSiteHelper::getSiteIdFromHandle($siteHandle);
        $pluginName = Retour::$settings->pluginName;
        $templateTitle = Craft::t('retour', 'Redirects');
        $view = Craft::$app->getView();
        // Asset bundle
        try {
            $view->registerAssetBundle(RetourRedirectsAsset::class);
        } catch (InvalidConfigException $e) {
            Craft::error($e->getMessage(), __METHOD__);
        }
        $variables['baseAssetsUrl'] = Craft::$app->assetManager->getPublishedUrl(
            '@nystudio107/retour/assetbundles/retour/dist',
            true
        );
        // Enabled sites
        MultiSiteHelper::setMultiSiteVariables($siteHandle, $siteId, $variables);
        $variables['controllerHandle'] = 'redirects';

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
                'url' => UrlHelper::cpUrl('retour/redirects'.$siteHandleUri),
            ],
        ];
        $variables['docTitle'] = "{$pluginName} - {$templateTitle}";
        $variables['selectedSubnavItem'] = 'redirects';

        // Render the template
        return $this->renderTemplate('retour/redirects/index', $variables);
    }

    /**
     * Edit the redirect
     *
     * @param int                       $redirectId
     * @param string                    $defaultUrl
     * @param int                       $siteId
     * @param null|StaticRedirectsModel $redirect
     *
     * @return Response
     * @throws NotFoundHttpException
     * @throws \yii\web\ForbiddenHttpException
     */
    public function actionEditRedirect(
        int $redirectId = 0,
        string $defaultUrl = '',
        int $siteId = 0,
        StaticRedirectsModel $redirect = null
    ): Response {
        $variables = [];
        PermissionHelper::controllerPermissionCheck('retour:redirects');

        // Load in the redirect
        if ($redirectId === 0) {
            $redirect = new StaticRedirectsModel([
                'id' => 0,
                'siteId' => $siteId,
                'redirectSrcUrl' => urldecode($defaultUrl),
            ]);
        }
        if ($redirect === null) {
            $redirectConfig = Retour::$plugin->redirects->getRedirectById($redirectId);
            if ($redirectConfig === null) {
                $redirectConfig = [];
                Craft::error(
                    Craft::t(
                        'retour',
                        "Couldn't load redirect id {id}",
                        ['id' => $redirectId]
                    ),
                    __METHOD__
                );
            }
            $redirect = new StaticRedirectsModel($redirectConfig);
        }
        $redirect->validate();
        // Ensure the user has permissions to edit this redirect
        $sites = Craft::$app->getSites();
        if ($redirect->siteId) {
            $site = $sites->getSiteById($redirect->siteId);
            if ($site) {
                MultiSiteHelper::requirePermission('editSite:'.$site->uid);
            }
        }
        if ($siteId) {
            $site = $sites->getSiteById($siteId);
            if ($site) {
                MultiSiteHelper::requirePermission('editSite:'.$site->uid);
            }
        }
        $pluginName = Retour::$settings->pluginName;
        $templateTitle = Craft::t('retour', 'Edit Redirect');
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
        // Sites menu
        MultiSiteHelper::setSitesMenuVariables($variables);
        $variables['controllerHandle'] = 'redirects';

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
                'label' => 'Redirects',
                'url' => UrlHelper::cpUrl('retour/redirects'),
            ],
            [
                'label' => $templateTitle,
                'url' => UrlHelper::cpUrl('retour/edit-redirect/'.$redirectId),
            ],
        ];
        $variables['docTitle'] = "{$pluginName} - Redirects - {$templateTitle}";
        $variables['selectedSubnavItem'] = 'redirects';
        $variables['redirect'] = $redirect;

        // Render the template
        return $this->renderTemplate('retour/redirects/_edit', $variables);
    }

    /**
     * @return Response|void
     * @throws \craft\errors\MissingComponentException
     * @throws \yii\web\ForbiddenHttpException
     */
    public function actionDeleteRedirects()
    {
        PermissionHelper::controllerPermissionCheck('retour:redirects');
        $request = Craft::$app->getRequest();
        $redirectIds = $request->getRequiredBodyParam('redirectIds');
        $stickyError = false;
        foreach ($redirectIds as $redirectId) {
            if (Retour::$plugin->redirects->deleteRedirectById($redirectId) === 0) {
                $stickyError = true;
            }
        }
        Retour::$plugin->clearAllCaches();
        // Handle any cumulative errors
        if (!$stickyError) {
            // Clear the caches and continue on
            Craft::$app->getSession()->setNotice(Craft::t('retour', 'Retour redirects deleted.'));

            return $this->redirect('retour/redirects');
        }
        Craft::$app->getSession()->setError(Craft::t('retour', "Couldn't delete redirect."));

        return;
    }

    /**
     * Save the redirect
     *
     * @return null|Response
     * @throws \craft\errors\MissingComponentException
     * @throws \yii\web\BadRequestHttpException
     * @throws \yii\web\ForbiddenHttpException
     * @throws NotFoundHttpException
     */
    public function actionSaveRedirect()
    {
        PermissionHelper::controllerPermissionCheck('retour:redirects');
        $this->requirePostRequest();
        /** @var StaticRedirectsModel $redirect */
        $redirectConfig = Craft::$app->getRequest()->getRequiredBodyParam('redirectConfig');
        if ($redirectConfig === null) {
            throw new NotFoundHttpException('Redirect not found');
        }
        $redirectConfig['id'] = (int)$redirectConfig['id'];
        // Handle enforcing trailing slashes
        $generalConfig = Craft::$app->getConfig()->getGeneral();
        if ($generalConfig->addTrailingSlashesToUrls && $redirectConfig['redirectMatchType'] === 'exactmatch') {
            $destUrl = $redirectConfig['redirectDestUrl'] ?? '';
            $redirectConfig['redirectDestUrl'] = $this->addSlashToSiteUrls($destUrl);
        }
        $redirect = new StaticRedirectsModel($redirectConfig);
        // Make sure the redirect validates
        if (!$redirect->validate()) {
            Craft::$app->getSession()->setError(Craft::t('app', "Couldn't save redirect settings."));
            // Send the redirect back to the template
            Craft::$app->getUrlManager()->setRouteParams([
                'redirect' => $redirect,
            ]);

            return null;
        }
        // Save the redirect
        $redirectConfig = $redirect->getAttributes();
        Retour::$plugin->redirects->saveRedirect($redirectConfig);
        // Handle the case where the redirect wasn't saved because it'd create a redirect loop
        $testRedirectConfig = Retour::$plugin->redirects->getRedirectByRedirectSrcUrl(
            $redirectConfig['redirectSrcUrl'],
            $redirectConfig['siteId']
        );
        if ($testRedirectConfig === null) {
            Craft::$app->getSession()->setError(Craft::t('app', "Couldn't save redirect settings because it'd create a redirect loop."));
            // Send the redirect back to the template
            Craft::$app->getUrlManager()->setRouteParams([
                'redirect' => $redirect,
            ]);

            return null;
        }
        // Clear the caches and continue on
        Retour::$plugin->clearAllCaches();
        Craft::$app->getSession()->setNotice(Craft::t('retour', 'Redirect settings saved.'));

        return $this->redirectToPostedUrl();
    }

    // Protected Methods
    // =========================================================================

    /**
     * If the $url appears to be a site URL, add a slash to the end of it
     *
     * @param string $url
     *
     * @return string
     */
    protected function addSlashToSiteUrls(string $url): string
    {
        // Make sure the URL doesn't end with a file extension, e.g.: .jpg
        if (!preg_match('/\.[^\/]+$/', $url)) {
            // If it's a root relative URL, assume it's a site URL
            if (UrlHelper::isRootRelativeUrl($url)) {
                return rtrim($url, '/') . '/';
            }
            // If the URL matches any of the site's base URLs, assume it's a site URL
            $sites = Craft::$app->getSites()->getAllSites();
            foreach ($sites as $site) {
                if (strpos($url, $site->getBaseUrl()) === 0) {
                    return rtrim($url, '/') . '/';
                }
            }
        }

        return $url;
    }
}
