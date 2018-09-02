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

use craft\web\Controller;

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

    const TEST_DATA = [
        'data' => [
            [
                'redirectSrcUrl'  => 'Andrew',
                'referrerUrl'     => 'andrew@AmbrosiaSW.com',
                'hitCount'        => 'May 2nd',
                'hitLastTime'     => 'May 2nd',
                'handledByRetour' => 'May 2nd',
                'addLink'         => 'May 2nd',
            ],
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
     * @param int $page
     *
     * @return Response
     */
    public function actionDashboard(int $page = 1): Response
    {
        $data = self::TEST_DATA;

        return $this->asJson($data);
    }

    // Protected Methods
    // =========================================================================
}
