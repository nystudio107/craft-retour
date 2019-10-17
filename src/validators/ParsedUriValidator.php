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

use Craft;

use yii\base\InvalidConfigException;
use yii\validators\Validator;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class ParsedUriValidator extends Validator
{
    /**
     * @var null|string The source field to parse from
     */
    public $source = null;

    /**
     * @var null|bool Whether or not to actually parse
     */
    public $parse = false;

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
     * @throws InvalidConfigException
     */
    public function init()
    {
        parent::init();
        if ($this->source === null) {
            throw new InvalidConfigException('The "source" property must be set.');
        }
    }

    /**
     * @inheritdoc
     */
    public function validateAttribute($model, $attribute)
    {
        // Set the attribute to be the same value as the source
        $srcValue = $this->source;
        $value = $model->$srcValue;
        $model->$attribute = $value;
        // If we're supposed to parse it, do so
        if ($this->parse) {
        }
    }
}
