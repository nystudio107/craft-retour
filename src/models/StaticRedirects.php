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

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class StaticRedirects extends DbModel
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
    public $associatedElement;

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
            [
                [
                    'redirectSrcUrl',
                    'redirectSrcUrlParsed',
                    'redirectMatchType',
                    'redirectDestUrl',
                ],
                'default',
                'value' => ''
            ],
            ['redirectHttpCode', 'integer'],
            ['redirectHttpCode', 'default', 'value' => 301],
            ['hitCount', 'integer'],
            ['hitCount', 'default', 'value' => 0],
            ['hitLastTime', 'safe'],
        ];
    }
}
