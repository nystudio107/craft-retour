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
     * @var string
     */
    public $locale;

    /**
     * @var int
     */
    public $associatedElementId;

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
            ['locale', DbStringValidator::class, 'max' => 12],
            ['locale', 'string'],
            ['locale', 'default', 'value' => ''],
            ['associatedElementId', 'default', 'value' => 0],
            ['associatedElementId', 'integer'],
            [
                [
                    'redirectSrcUrl',
                    'redirectSrcUrlParsed',
                    'redirectDestUrl',
                ],
                'default',
                'value' => ''
            ],
            ['redirectMatchType', 'default', 'value' => 'exactmatch'],
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
                    'redirectMatchType',
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
}
