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

use craft\base\Model;
use craft\behaviors\EnvAttributeParserBehavior;
use craft\validators\ArrayValidator;

use yii\behaviors\AttributeTypecastBehavior;

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
     * @var bool Controls whether Retour automatically creates static redirects
     *      when an entry's URI changes.
     */
    public $createUriChangeRedirects = true;

    /**
     * @var string Should the legacy URL be matched by path (e.g.
     *      `/new-recipes/`) or by full URL (e.g.:
     *      `http://example.com/de/new-recipes/`)?
     */
    public $uriChangeRedirectSrcMatch = 'pathonly';

    /**
     * @var bool Should the query string be stripped from all 404 URLs before
     *      their evaluation?
     */
    public $alwaysStripQueryString = false;

    /**
     * @var bool Should the query string be preserved and passed along to the
     *      redirected URL?
     */
    public $preserveQueryString = false;

    /**
     * @var bool Should the anonymous ip address of the client causing a 404 be
     *      recorded?
     */
    public $recordRemoteIp = true;

    /**
     * @var int How many static redirects to display in the Control Panel
     */
    public $staticRedirectDisplayLimit = 100;

    /**
     * @var int How many dynamic redirects to display in the Control Panel
     */
    public $dynamicRedirectDisplayLimit = 100;

    /**
     * @var bool Should the query string be stripped from the saved statistics
     *      source URLs?
     */
    public $stripQueryStringFromStats = true;

    /**
     * @var int How many stats should be stored
     */
    public $statsStoredLimit = 1000;

    /**
     * @var int Dashboard data live refresh interval
     */
    public $refreshIntervalSecs = 5;

    /**
     * @var bool Whether the Statistics should be trimmed after each new
     *      statistic is recorded
     */
    public $automaticallyTrimStatistics = true;

    /**
     * @var int The number of milliseconds required between trimming of
     *      statistics
     */
    public $statisticsRateLimitMs = 3600000;

    /**
     * @var int How many stats to display in the Control Panel
     */
    public $statsDisplayLimit = 1000;

    /**
     * @var array [Regular expressions](https://regexr.com/) to match URLs to
     *      exclude from Retour
     */
    public $excludePatterns = [
    ];

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
                    'preserveQueryString',
                    'stripQueryStringFromStats',
                    'recordRemoteIp',
                ],
                'boolean',
            ],
            ['uriChangeRedirectSrcMatch', 'default', 'value' => 'pathonly'],
            ['uriChangeRedirectSrcMatch', 'string'],
            ['uriChangeRedirectSrcMatch', 'in', 'range' => [
                'pathonly',
                'fullurl'
            ]],
            ['staticRedirectDisplayLimit', 'integer', 'min' => 1],
            ['staticRedirectDisplayLimit', 'default', 'value' => 100],
            ['dynamicRedirectDisplayLimit', 'integer', 'min' => 1],
            ['dynamicRedirectDisplayLimit', 'default', 'value' => 100],
            ['statsStoredLimit', 'integer', 'min' => 1],
            ['statsStoredLimit', 'default', 'value' => 1000],
            ['refreshIntervalSecs', 'integer', 'min' => 0],
            ['refreshIntervalSecs', 'default', 'value' => 3],
            ['statsDisplayLimit', 'integer', 'min' => 1],
            ['statsDisplayLimit', 'default', 'value' => 1000],
            ['excludePatterns', ArrayValidator::class],
        ];
    }

    /**
     * @return array
     */
    public function behaviors()
    {
        $craft31Behaviors = [];
        if (Retour::$craft31) {
            $craft31Behaviors = [
                'parser' => [
                    'class' => EnvAttributeParserBehavior::class,
                    'attributes' => [
                    ],
                ],
            ];
        }

        return array_merge($craft31Behaviors, [
            'typecast' => [
                'class' => AttributeTypecastBehavior::class,
                // 'attributeTypes' will be composed automatically according to `rules()`
            ],
        ]);
    }
}
