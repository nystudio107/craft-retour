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
     * Make webpack async bundle loading work out of published AssetBundles
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
                '*',
                'COUNT(redirectSrcUrl) AS cnt'
            ])
            ->where("hitLastTime {$whereQuery}")
            ->groupBy('DAY(hitLastTime)')
            ->all();
        $handledStats = $stats;
        foreach ($handledStats as &$handledStat) {
            if ($handledStat['handledByRetour'] != 1) {
                $handledStat['cnt'] = 0;
            }
        }
        if ($stats && $handledStats) {
            $data[] = [
                'name' => '404 hits',
                'data' => ArrayHelper::getColumn($stats, 'cnt'),
                'labels' => ArrayHelper::getColumn($stats, 'redirectSrcUrl'),
            ];
            $data[] = [
                'name' => 'Handled 404 hits',
                'data' => ArrayHelper::getColumn($handledStats, 'cnt'),
                'labels' => ArrayHelper::getColumn($stats, 'redirectSrcUrl'),
            ];
        }

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
