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

namespace nystudio107\retour\console\controllers;

use nystudio107\retour\Retour;

use Craft;
use yii\console\Controller;

use yii\console\Response;

/**
 * Retour Stats command
 *
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class StatsController extends Controller
{
    // Public Properties
    // =========================================================================

    /**
     * @var null|int
     */
    public $limit;

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
     * @param string $actionID
     *
     * @return array|string[]
     */
    public function options($actionID): array
    {
        return [
            'limit'
        ];
    }

    /**
     * Trim the Retour statistics database table
     *
     * @return int
     */
    public function actionTrim(): int
    {
        echo Craft::t('retour', 'Trimming statistics').PHP_EOL;
        $affectedRows = Retour::$plugin->statistics->trimStatistics($this->limit);
        echo Craft::t(
            'retour',
            'Trimmed {rows} from retour_stats table',
            ['rows' => $affectedRows]
        ).PHP_EOL;

        return 0;
    }

    // Protected Methods
    // =========================================================================
}
