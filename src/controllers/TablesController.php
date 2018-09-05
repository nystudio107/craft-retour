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
use craft\web\Controller;

use yii\web\ForbiddenHttpException;
use yii\web\Response;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class TablesController extends Controller
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
     * Handle requests for the dashboard statistics table
     *
     * @param string $sort
     * @param int    $page
     * @param int    $per_page
     * @param string $filter
     *
     * @return Response
     * @throws ForbiddenHttpException
     */
    public function actionDashboard(
        string $sort = 'hitCount|desc',
        int $page = 1,
        int $per_page = 20,
        $filter = ''
    ): Response {
        $this->permissionCheck('retour:dashboard');
        $data = [];
        $sortField = 'hitCount';
        $sortType = 'DESC';
        // Figure out the sorting type
        if ($sort !== '') {
            if (strpos($sort, '|') === false) {
                $sortField = $sort;
            } else {
                list($sortField, $sortType) = explode('|', $sort);
            }
        }
        // Query the db table
        $offset = ($page - 1) * $per_page;
        $query = (new Query())
            ->from(['{{%retour_stats}}'])
            ->offset($offset)
            ->limit($per_page)
            ->orderBy("{$sortField} {$sortType}");
        if ($filter !== '') {
            $query->where("`redirectSrcUrl` LIKE '%{$filter}%'");
            $query->orWhere("`referrerUrl` LIKE '%{$filter}%'");
        }
        $stats = $query->all();
        // Add in the `addLink` field
        foreach ($stats as &$stat) {
            $stat['addLink'] = !$stat['handledByRetour'];
        }
        // Format the data for the API
        if ($stats) {
            $data['data'] = $stats;
            $query = (new Query())
                ->from(['{{%retour_stats}}']);
            if ($filter !== '') {
                $query->where("`redirectSrcUrl` LIKE '%{$filter}%'");
                $query->orWhere("`referrerUrl` LIKE '%{$filter}%'");
            }
            $count = $query->count();
            $data['links']['pagination'] = [
                'total' => $count,
                'per_page' => $per_page,
                'current_page' => $page,
                'last_page' => ceil($count / $per_page),
                'next_page_url' => null,
                'prev_page_url' => null,
                'from' => $offset + 1,
                'to' => $offset + ($count > $per_page ? $per_page : $count),
            ];
        }

        return $this->asJson($data);
    }

    /**
     * Handle requests for the dashboard redirects table
     *
     * @param string $sort
     * @param int    $page
     * @param int    $per_page
     * @param string $filter
     *
     * @return Response
     * @throws ForbiddenHttpException
     */
    public function actionRedirects(
        string $sort = 'hitCount|desc',
        int $page = 1,
        int $per_page = 20,
        $filter = ''
    ): Response {
        $this->permissionCheck('retour:redirects');
        $data = [];
        $sortField = 'hitCount';
        $sortType = 'DESC';
        // Figure out the sorting type
        if ($sort !== '') {
            if (strpos($sort, '|') === false) {
                $sortField = $sort;
            } else {
                list($sortField, $sortType) = explode('|', $sort);
            }
        }
        // Query the db table
        $offset = ($page - 1) * $per_page;
        $query = (new Query())
            ->from(['{{%retour_static_redirects}}'])
            ->offset($offset)
            ->limit($per_page)
            ->orderBy("{$sortField} {$sortType}");
        if ($filter !== '') {
            $query->where("`redirectSrcUrl` LIKE '%{$filter}%'");
            $query->orWhere("`redirectDestUrl` LIKE '%{$filter}%'");
        }
        $stats = $query->all();
        // Add in the `deleteLink` field
        foreach ($stats as &$stat) {
            $stat['deleteLink'] = 1;
        }
        // Format the data for the API
        if ($stats) {
            $data['data'] = $stats;
            $query = (new Query())
                ->from(['{{%retour_static_redirects}}']);
            if ($filter !== '') {
                $query->where("`redirectSrcUrl` LIKE '%{$filter}%'");
                $query->orWhere("`redirectDestUrl` LIKE '%{$filter}%'");
            }
            $count = $query->count();
            $data['links']['pagination'] = [
                'total' => $count,
                'per_page' => $per_page,
                'current_page' => $page,
                'last_page' => ceil($count / $per_page),
                'next_page_url' => null,
                'prev_page_url' => null,
                'from' => $offset + 1,
                'to' => $offset + ($count > $per_page ? $per_page : $count),
            ];
        }
        Craft::error(print_r($data, true), __METHOD__);

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
