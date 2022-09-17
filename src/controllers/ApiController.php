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

use nystudio107\retour\Retour;
use craft\web\Controller;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.39
 */
class ApiController extends Controller
{
    // Constants
    // =========================================================================

    // Protected Properties
    // =========================================================================

    /**
     * @inheritdoc
     */
    protected $allowAnonymous = [
        'get-redirects',
    ];

    // Public Methods
    // =========================================================================

    /**
     * @inheritDoc
     */
    public function beforeAction($action)
    {
        if (!Retour::$settings->enableApiEndpoint) {
            $this->allowAnonymous = false;
        }

        return parent::beforeAction($action);
    }

    /**
     * @param null $siteId
     * @return \yii\web\Response
     */
    public function actionGetRedirects($siteId = null)
    {
        $redirects = Retour::$plugin->redirects->getAllStaticRedirects(null, $siteId);

        return $this->asJson($redirects ?? []);
    }
}
