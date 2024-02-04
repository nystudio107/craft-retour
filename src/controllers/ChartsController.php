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
use craft\db\Query;
use craft\helpers\ArrayHelper;
use craft\web\Controller;
use nystudio107\retour\helpers\Permission as PermissionHelper;
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
     * @inerhitdoc
     */
    protected array|bool|int $allowAnonymous = [
    ];

    // Public Methods
    // =========================================================================

    /**
     * The Dashboard chart
     *
     * @param string $range
     * @param int $siteId
     *
     * @return Response
     * @throws ForbiddenHttpException
     */
    public function actionDashboard(string $range = 'day', int $siteId = 0): Response
    {
        PermissionHelper::controllerPermissionCheck('retour:dashboard');
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
        // Different dbs do it different ways
        $stats = null;
        $db = Craft::$app->getDb();
        if ($db->getIsMysql()) {
            // Query the db
            $query = (new Query())
                ->from('{{%retour_stats}}')
                ->select([
                    "DATE_FORMAT(hitLastTime, '%Y-%m-%d') AS date_formatted",
                    'COUNT(redirectSrcUrl) AS cnt',
                    'COUNT(handledByRetour = 1 or null) as handled_cnt',
                ])
                ->where("hitLastTime >= ( CURDATE() - INTERVAL '{$days}' DAY )");
            if ((int)$siteId !== 0) {
                $query->andWhere(['siteId' => $siteId]);
            }
            $query
                ->orderBy('date_formatted ASC')
                ->groupBy('date_formatted');
            $stats = $query->all();
        }
        if ($db->getIsPgsql()) {
            // Query the db
            $query = (new Query())
                ->from('{{%retour_stats}}')
                ->select([
                    "to_char(\"hitLastTime\", 'yyyy-mm-dd') AS date_formatted",
                    "COUNT(\"redirectSrcUrl\") AS cnt",
                    "COUNT(CASE WHEN \"handledByRetour\" = true THEN 1 END) as handled_cnt",
                ])
                ->where("\"hitLastTime\" >= ( CURRENT_TIMESTAMP - INTERVAL '{$days} days' )");
            if ((int)$siteId !== 0) {
                $query->andWhere(['siteId' => $siteId]);
            }
            $query
                ->orderBy('date_formatted ASC')
                ->groupBy('date_formatted');
            $stats = $query->all();
        }
        if ($stats) {
            $data[] = [
                'name' => '404 hits',
                'data' => array_merge(['0'], ArrayHelper::getColumn($stats, 'cnt')),
                'labels' => array_merge(['-'], ArrayHelper::getColumn($stats, 'date_formatted')),
            ];
            $data[] = [
                'name' => 'Handled 404 hits',
                'data' => array_merge(['0'], ArrayHelper::getColumn($stats, 'handled_cnt')),
                'labels' => array_merge(['-'], ArrayHelper::getColumn($stats, 'date_formatted')),
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
    public function actionWidget(int $days = 1): Response
    {
        $data = [];
        // Different dbs do it different ways
        $stats = null;
        $handledStats = null;
        $db = Craft::$app->getDb();
        if ($db->getIsMysql()) {
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
        }
        if ($db->getIsPgsql()) {
            // Query the db
            $stats = (new Query())
                ->from('{{%retour_stats}}')
                ->where("\"hitLastTime\" >= ( CURRENT_TIMESTAMP - INTERVAL '{$days} days' )")
                ->count();
            $handledStats = (new Query())
                ->from('{{%retour_stats}}')
                ->where("\"hitLastTime\" >= ( CURRENT_TIMESTAMP - INTERVAL '{$days} days' )")
                ->andWhere('"handledByRetour" = TRUE')
                ->count();
        }
        if ($stats) {
            $data = [
                (int)$stats,
                (int)$handledStats,
            ];
        }

        return $this->asJson($data);
    }

    // Protected Methods
    // =========================================================================
}
