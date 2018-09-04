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

    const TEST_DATA = [
        [
            'name' => 'Total 404s',
            'data' => [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46],
        ],
        [
            'name' => 'Handled 404s',
            'data' => [47, 45, 54, 38, 56, 53, 61, 27, 54, 43, 19, 46, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 9],
        ],
    ];

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
     * Make webpack async bundle loading work out of published AssetBundles
     *
     * @param string $range
     *
     * @return Response
     */
    public function actionDashboard(string $range = 'day'): Response
    {
        $data = [];
        $whereQuery = 'BETWEEN (CURRENT_DATE() - INTERVAL 1 DAY) AND CURRENT_DATE()';
        switch ($range) {
            case 'day':
                $whereQuery = 'BETWEEN (CURRENT_DATE() - INTERVAL 1 DAY) AND CURRENT_DATE()';
                break;
            case 'week':
                $whereQuery = 'BETWEEN (CURRENT_DATE() - INTERVAL 1 WEEK) AND CURRENT_DATE()';
                break;
            case 'month':
                $whereQuery = 'BETWEEN (CURRENT_DATE() - INTERVAL 1 MONTH) AND CURRENT_DATE()';
                break;
        }

        $stats = (new Query())
            ->from('{{%retour_stats}}')
            ->select([
                'COUNT(redirectSrcUrl) AS cnt'
            ])
            ->where("hitLastTime {$whereQuery}")
            ->groupBy('DAY(hitLastTime)')
            ->all();
        $handledStats = (new Query())
            ->from('{{%retour_stats}}')
            ->select([
                'COUNT(redirectSrcUrl) AS cnt'
            ])
            ->where("hitLastTime {$whereQuery}")
            ->andWhere('handledByRetour IS TRUE')
            ->groupBy('DAY(hitLastTime)')
            ->all();
        if ($stats && $handledStats) {
            $data[] = [
                'name' => '404 hits',
                'data' => ArrayHelper::getColumn($stats, 'cnt')
            ];
            $data[] = [
                'name' => 'Handled 404 hits',
                'data' => ArrayHelper::getColumn($handledStats, 'cnt')
            ];
        }

        return $this->asJson($data);
    }

    // Protected Methods
    // =========================================================================
}
