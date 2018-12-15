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
     * @var int
     */
    public $id;

    /**
     * @var null|int
     */
    public $siteId;

    /**
     * @var int
     */
    public $associatedElementId;

    /**
     * @var bool
     */
    public $enabled = true;

    /**
     * @var string
     */
    public $redirectSrcUrl;

    /**
     * @var string
     */
    public $redirectSrcUrlParsed;

    /**
     * @var string
     */
    public $redirectSrcMatch;

    /**
     * @var string
     */
    public $redirectMatchType;

    /**
     * @var string
     */
    public $redirectDestUrl;

    /**
     * @var int
     */
    public $redirectHttpCode;

    /**
     * @var int
     */
    public $hitCount;

    /**
     * @var string
     */
    public $hitLastTime;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['id', 'integer'],
            ['siteId', 'integer'],
            ['siteId', 'default', 'value' => null],
            ['associatedElementId', 'default', 'value' => 0],
            ['associatedElementId', 'integer'],
            ['enabled', 'boolean'],
            ['redirectSrcMatch', 'default', 'value' => 'pathonly'],
            ['redirectSrcMatch', DbStringValidator::class, 'max' => 32],
            ['redirectSrcMatch', 'string'],
            ['redirectMatchType', 'default', 'value' => 'exactmatch'],
            ['redirectMatchType', DbStringValidator::class, 'max' => 32],
            ['redirectMatchType', 'string'],
            [
                [
                    'redirectSrcUrl',
                    'redirectSrcUrlParsed',
                    'redirectDestUrl',
                ],
                'default',
                'value' => ''
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
                'max' => 255
            ],
            [
                [
                    'redirectSrcUrl',
                    'redirectSrcUrlParsed',
                    'redirectDestUrl',
                ],
                'string'
            ],
            ['redirectHttpCode', 'integer'],
            ['redirectHttpCode', 'default', 'value' => 301],
            ['hitCount', 'default', 'value' => 0],
            ['hitCount', 'integer'],
            ['hitLastTime', 'safe'],
        ];
    }

    /**
     * @return array
     */
    public function behaviors()
    {
        return [
            'typecast' => [
                'class' => AttributeTypecastBehavior::class,
                // 'attributeTypes' will be composed automatically according to `rules()`
            ],
        ];
    }
}
