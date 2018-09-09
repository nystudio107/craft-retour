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

use craft\errors\MissingComponentException;
use nystudio107\retour\Retour;

use Craft;
use craft\web\Controller;

use yii\web\Response;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class StatisticsController extends Controller
{
    // Protected Properties
    // =========================================================================

    protected $allowAnonymous = [];

    // Public Methods
    // =========================================================================

    /**
     * @return Response
     * @throws \yii\web\BadRequestHttpException
     */
    public function actionClearStatistics(): Response
    {
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
