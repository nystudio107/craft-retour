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

use yii\behaviors\AttributeTypecastBehavior;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class Stats extends DbModel
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
     * @var string
     */
    public $redirectSrcUrl;

    /**
     * @var string
     */
    public $referrerUrl;

    /**
     * @var string
     */
    public $remoteIp;

    /**
     * @var string
     */
    public $userAgent;

    /**
     * @var string
     */
    public $exceptionMessage;

    /**
     * @var string
     */
    public $exceptionFilePath;

    /**
     * @var int
     */
    public $exceptionFileLine;

    /**
     * @var int
     */
    public $hitCount;

    /**
     * @var string
     */
    public $hitLastTime;

    /**
     * @var int
     */
    public $handledByRetour;

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
            [
                [
                    'redirectSrcUrl',
                    'userAgent',
                    'exceptionMessage',
                    'exceptionFilePath',
                ],
                DbStringValidator::class,
                'max' => 255
            ],
            [
                [
                    'redirectSrcUrl',
                    'userAgent',
                    'exceptionMessage',
                    'exceptionFilePath',
                ],
                'string'
            ],
            [
                [
                    'redirectSrcUrl',
                    'userAgent',
                    'exceptionMessage',
                    'exceptionFilePath',
                ],
                'default',
                'value' => ''
            ],
            ['exceptionFileLine', 'integer'],
            ['exceptionFileLine', 'default', 'value' => 0],
            ['referrerUrl', DbStringValidator::class, 'max' => 2000],
            ['referrerUrl', 'string'],
            ['referrerUrl', 'default', 'value' => ''],
            ['remoteIp', DbStringValidator::class, 'max' => 45],
            ['remoteIp', 'string'],
            ['remoteIp', 'default', 'value' => ''],
            ['hitCount', 'integer'],
            ['hitCount', 'default', 'value' => 0],
            ['hitLastTime', 'safe'],
            ['handledByRetour', 'integer', 'min' => 0, 'max' => 1],
            ['handledByRetour', 'default', 'value' => 0],
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
