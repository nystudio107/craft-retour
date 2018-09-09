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

use Craft;
use craft\db\Query;
use craft\helpers\ArrayHelper;
use craft\web\Controller;

use yii\web\ForbiddenHttpException;
use yii\web\Response;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class ChartsController extends Controller
{
    // Constants
    // =========================================================================

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array
     */
    protected $allowAnonymous = [
    ];

    // Public Methods
    // =========================================================================

    /**
     * The Dashboard chart
     *
     * @param string $range
     *
     * @return Response
     * @throws ForbiddenHttpException
     */
    public function actionDashboard(string $range = 'day'): Response
    {
        $this->permissionCheck('retour:dashboard');
        $data = [];
        $days = 1;
        switch ($range) {
            case 'day':
                $days = 1;
                break;
            case 'week':
                $days = 7;
                break;
            case 'month':
                $days = 30;
                break;
        }
        // Query the db
        $stats = (new Query())
            ->from('{{%retour_stats}}')
            ->select([
                '*',
                'COUNT(redirectSrcUrl) AS cnt',
                'COUNT(handledByRetour = 1 or null) as handled_cnt'
            ])
            ->where("hitLastTime >= ( CURDATE() - INTERVAL '{$days}' DAY )")
            ->orderBy('hitLastTime ASC')
            ->groupBy('DAY(hitLastTime)')
            ->all();
        if ($stats) {
            $data[] = [
                'name' => '404 hits',
                'data' => ArrayHelper::getColumn($stats, 'cnt'),
                'labels' => ArrayHelper::getColumn($stats, 'hitLastTime'),
            ];
            $data[] = [
                'name' => 'Handled 404 hits',
                'data' => ArrayHelper::getColumn($stats, 'handled_cnt'),
                'labels' => ArrayHelper::getColumn($stats, 'hitLastTime'),
            ];
        }

        return $this->asJson($data);
    }

    /**
     * The Dashboard chart
     *
     * @param int $days
     *
     * @return Response
     */
    public function actionWidget($days = 1): Response
    {
        $data = [];
        // Query the db
        $stats = (new Query())
            ->from('{{%retour_stats}}')
            ->where("hitLastTime >= ( CURDATE() - INTERVAL '{$days}' DAY )")
            ->count();
        $handledStats = (new Query())
            ->from('{{%retour_stats}}')
            ->where("hitLastTime >= ( CURDATE() - INTERVAL '{$days}' DAY )")
            ->andWhere('handledByRetour is TRUE')
            ->count();
        if ($stats) {
            $data = [
                (int)$stats,
                (int)$handledStats
            ];
        }
        Craft::error($data);

        return $this->asJson($data);
    }

    // Protected Methods
    // =========================================================================

    /**
     * @param string $permission
     *
     * @throws ForbiddenHttpException
     */
    protected function permissionCheck(string $permission)
    {
        if (($currentUser = Craft::$app->getUser()->getIdentity()) === null) {
            throw new ForbiddenHttpException("Your account has no identity.");
        }

        if (!$currentUser->can($permission)) {
            throw new ForbiddenHttpException("Your account doesn't have permission to assign access this resource.");
        }
    }
}
