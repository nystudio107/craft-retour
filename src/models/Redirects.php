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

use nystudio107\retour\validators\DbStringValidator;
use nystudio107\retour\validators\ParsedUriValidator;
use nystudio107\retour\validators\UriValidator;
use yii\behaviors\AttributeTypecastBehavior;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class Redirects extends DbModel
{
    // Public Properties
    // =========================================================================

    /**
     * @var int The id of the redirect.
     */
    public int $id = 0;

    /**
     * @var null|int The siteId of the redirect (0 or null for all sites).
     */
    public ?int $siteId = null;

    /**
     * @var int The id of the Element associated with this redirect (unused/vestigial).
     */
    public int $associatedElementId = 0;

    /**
     * @var bool Whether the redirect is enabled or not.
     */
    public bool $enabled = true;

    /**
     * @var string The unparsed URL pattern that Retour should match.
     */
    public string $redirectSrcUrl = '';

    /**
     * @var string The parsed URL pattern that Retour should match.
     */
    public string $redirectSrcUrlParsed = '';

    /**
     * @var string Should the legacy URL be matched by path or by full URL?
     */
    public string $redirectSrcMatch = '';

    /**
     * @var string Whether an `exactmatch` or `regexmatch` should be used when matching the URL.
     */
    public string $redirectMatchType = '';

    /**
     * @var string The URL that should be redirected to.
     */
    public string $redirectDestUrl = '';

    /**
     * @var int The http status code that should be used for the redirect.
     */
    public int $redirectHttpCode = 301;

    /**
     * @var int The number of times this redirect has been hit.
     */
    public int $hitCount = 0;

    /**
     * @var string A datetime string of when this redirect was last hit
     */
    public string $hitLastTime = '';

    // Public Methods
    // =========================================================================

    /**
     * @inheritDoc
     */
    public function init(): void
    {
        parent::init();
        // If the redirectSrcUrl starts with `http`, default the match type to `fullurl`
        if (strpos($this->redirectSrcUrl, 'http') === 0) {
            $this->redirectSrcMatch = 'fullurl';
        }
    }

    /**
     * @inheritdoc
     */
    public function rules(): array
    {
        return [
            ['id', 'integer'],
            ['siteId', 'integer'],
            ['siteId', 'default', 'value' => null],
            ['associatedElementId', 'default', 'value' => 0],
            ['associatedElementId', 'integer'],
            ['enabled', 'boolean'],
            ['redirectSrcMatch', 'string'],
            ['redirectSrcMatch', 'in', 'range' => ['pathonly', 'fullurl']],
            ['redirectSrcMatch', 'default', 'value' => 'pathonly'],
            ['redirectSrcMatch', DbStringValidator::class, 'max' => 32],
            ['redirectMatchType', 'string'],
            ['redirectMatchType', 'in', 'range' => ['exactmatch', 'regexmatch']],
            ['redirectMatchType', 'default', 'value' => 'exactmatch'],
            ['redirectMatchType', DbStringValidator::class, 'max' => 32],
            [
                [
                    'redirectSrcUrl',
                    'redirectSrcUrlParsed',
                    'redirectDestUrl',
                ],
                'default',
                'value' => '',
            ],
            ['redirectSrcUrlParsed', ParsedUriValidator::class, 'source' => 'redirectSrcUrl'],
            [
                [
                    'redirectSrcUrl',
                    'redirectSrcUrlParsed',
                    'redirectDestUrl',
                ],
                UriValidator::class,
            ],
            [
                [
                    'redirectSrcUrl',
                    'redirectSrcUrlParsed',
                    'redirectMatchType',
                    'redirectDestUrl',
                ],
                DbStringValidator::class,
                'max' => 255,
            ],
            [
                [
                    'redirectSrcUrl',
                    'redirectSrcUrlParsed',
                    'redirectDestUrl',
                ],
                'string',
            ],
            ['redirectHttpCode', 'integer'],
            ['redirectHttpCode', 'default', 'value' => 301],
            ['redirectHttpCode', 'in', 'range' => [301, 302, 307, 308, 410]],
            ['hitCount', 'default', 'value' => 0],
            ['hitCount', 'integer'],
            ['hitLastTime', 'safe'],
        ];
    }

    /**
     * @return array
     */
    public function behaviors(): array
    {
        return [
            'typecast' => [
                'class' => AttributeTypecastBehavior::class,
                // 'attributeTypes' will be composed automatically according to `rules()`
            ],
        ];
    }
}
