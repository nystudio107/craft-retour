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

namespace nystudio107\retour\validators;

use craft\helpers\UrlHelper;
use nystudio107\retour\models\StaticRedirects;
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
    public function init(): void
    {
        parent::init();
    }

    /**
     * @inheritdoc
     */
    public function validateAttribute($model, $attribute): void
    {
        /** @var StaticRedirects $model */
        $value = $model->$attribute;
        $redirectMatchType = 'redirectMatchType';
        // Always remove whitespace
        $value = preg_replace("/\r|\n/", '', $value);
        $value = trim($value);
        $model->$attribute = $value;
        // Only do any kind of validation for exact match redirects
        if ($model->$redirectMatchType !== 'exactmatch') {
            return;
        }
        // Don't mess with URLs that are already full URLs
        if (UrlHelper::isFullUrl($value)) {
            return;
        }
        // Make sure there is a leading /
        $value = '/' . ltrim($value, '/');
        $model->$attribute = $value;
    }
}
