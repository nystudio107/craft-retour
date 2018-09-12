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

namespace nystudio107\retour\validators;

use yii\validators\Validator;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class UriValidator extends Validator
{

    /**
     * @var bool
     */
    public $skipOnEmpty = false;

    /**
     * @var bool
     */
    public $skipOnError = false;

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
    }

    /**
     * @inheritdoc
     */
    public function validateAttribute($model, $attribute)
    {
        $redirectMatchType = 'redirectMatchType';
        if (!empty($model->$redirectMatchType) && $model->$redirectMatchType === 'exactmatch') {
            // Make sure there is a leading /
            $value = $model->$attribute;
            $value = '/'.ltrim($value, '/');
            $value = preg_replace("/\r|\n/", '', $value);
            $model->$attribute = $value;
        }
    }
}
