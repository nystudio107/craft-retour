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

namespace nystudio107\retour\models;

use nystudio107\retour\Retour;

use Craft;
use craft\base\Model;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class Settings extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * @var string The public-facing name of the plugin
     */
    public $pluginName = 'Retour';

    /**
     * @var bool Controls whether Retour automatically creates static redirects when an entry's URI changes.
     */
    public $createUriChangeRedirects = true;

    /**
     * @var bool Should the query string be stripped from all 404 URLs before their evaluation?
     */
    public $alwaysStripQueryString = false;

    /**
     * @var int How many static redirects to display in the Admin CP
     */
    public $staticRedirectDisplayLimit = 100;

    /**
     * @var int How many dynamic redirects to display in the Admin CP
     */
    public $dynamicRedirectDisplayLimit = 100;

    /**
     * @var bool Should the query string be stripped from the saved statistics source URLs?
     */
    public $stripQueryStringFromStats = true;

    /**
     * @var int How many stats should be stored
     */
    public $statsStoredLimit = 1000;

    /**
     * @var bool Whether the Statistics should be trimmed after each new statistic is recorded
     */
    public $automaticallyTrimStatistics = true;

    /**
     * @var int How many stats to display in the Admin CP
     */
    public $statsDisplayLimit = 1000;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['pluginName', 'string'],
            ['pluginName', 'default', 'value' => 'Retour'],
            [
                [
                    'createUriChangeRedirects',
                    'alwaysStripQueryString',
                    'stripQueryStringFromStats',
                ],
                'boolean'
            ],
            ['staticRedirectDisplayLimit', 'integer', 'min' => 1],
            ['staticRedirectDisplayLimit', 'default', 'value' => 100],
            ['dynamicRedirectDisplayLimit', 'integer', 'min' => 1],
            ['dynamicRedirectDisplayLimit', 'default', 'value' => 100],
            ['statsStoredLimit', 'integer', 'min' => 1],
            ['statsStoredLimit', 'default', 'value' => 1000],
            ['statsDisplayLimit', 'integer', 'min' => 1],
            ['statsDisplayLimit', 'default', 'value' => 1000],
        ];
    }
}
