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

namespace nystudio107\retour\models;

use craft\base\Model;
use craft\behaviors\EnvAttributeParserBehavior;
use craft\validators\ArrayValidator;

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
    public string $pluginName = 'Retour';

    /**
     * @var bool Controls whether Retour automatically creates static redirects
     *      when an entry's URI changes.
     */
    public bool $createUriChangeRedirects = true;

    /**
     * @var string Should the legacy URL be matched by path (e.g.
     *      `/new-recipes/`) or by full URL (e.g.:
     *      `http://example.com/de/new-recipes/`)?
     */
    public string $uriChangeRedirectSrcMatch = 'pathonly';

    /**
     * @var bool Should the query string be stripped from all 404 URLs before
     *      their evaluation?
     */
    public bool $alwaysStripQueryString = false;

    /**
     * @var bool Should the query string be preserved and passed along to the
     *      redirected URL?
     */
    public bool $preserveQueryString = false;

    /**
     * @var bool Should the anonymous ip address of the client causing a 404 be
     *      recorded?
     */
    public bool $recordRemoteIp = true;

    /**
     * @var int How many static redirects to display in the Control Panel
     */
    public int $staticRedirectDisplayLimit = 100;

    /**
     * @var int How many dynamic redirects to display in the Control Panel
     */
    public int $dynamicRedirectDisplayLimit = 100;

    /**
     * @var bool Should the query string be stripped from the saved statistics
     *      source URLs?
     */
    public bool $stripQueryStringFromStats = true;

    /**
     * @var int How many stats should be stored
     */
    public int $statsStoredLimit = 1000;

    /**
     * @var int Dashboard data live refresh interval
     */
    public int $refreshIntervalSecs = 5;

    /**
     * @var bool Whether the Statistics should be trimmed after each new
     *      statistic is recorded
     */
    public bool $automaticallyTrimStatistics = true;

    /**
     * @var bool Whether statistics should be kept to track how many times
     *      a redirect has been followed
     */
    public $enableStatistics = true;

    /**
     * @var int The number of milliseconds required between trimming of
     *      statistics
     */
    public int $statisticsRateLimitMs = 3600000;

    /**
     * @var int How many stats to display in the Control Panel
     */
    public int $statsDisplayLimit = 1000;

    /**
     * @var bool Determines whether the Retour API endpoint should be enabled for anonymous frontend access
     */
    public bool $enableApiEndpoint = false;

    /**
     * @var array [Regular expressions](https://regexr.com/) to match URLs to
     *      exclude from Retour
     */
    public array $excludePatterns = [
    ];

    /**
     * @var array Additional headers to add to redirected requests
     */
    public array $additionalHeaders = [
    ];

    /**
     * @var string The delimiter between data column values for importing CSV files (normally `,`)
     */
    public string $csvColumnDelimiter = ',';

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules(): array
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
                'fullurl',
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
            [
                [
                    'excludePatterns',
                    'additionalHeaders',
                ],
                ArrayValidator::class,
            ],
        ];
    }

    /**
     * @return array
     */
    public function behaviors(): array
    {
        return [
            'parser' => [
                'class' => EnvAttributeParserBehavior::class,
                'attributes' => [
                ],
            ],
        ];
    }
}
