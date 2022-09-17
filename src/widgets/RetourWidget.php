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

namespace nystudio107\retour\widgets;

use nystudio107\retour\Retour;
use nystudio107\retour\assetbundles\retour\RetourWidgetAsset;

use Craft;
use craft\base\Widget;
use yii\base\Exception;
use yii\base\InvalidConfigException;

/** @noinspection MissingPropertyAnnotationsInspection */

/**
 * Retour Widget
 *
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class RetourWidget extends Widget
{

    // Public Properties
    // =========================================================================

    /**
     * @var int
     */
    public $numberOfDays = 30;

    // Static Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Retour::$settings->pluginName;
    }

    /**
     * @inheritdoc
     */
    public static function iconPath()
    {
        return Craft::getAlias("@nystudio107/retour/web/assets/dist/img/icon-mask.svg");
    }

    /**
     * @inheritdoc
     */
    public static function maxColspan()
    {
        return 1;
    }

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        $rules = parent::rules();
        $rules = array_merge(
            $rules,
            [
                ['numberOfDays', 'integer', 'min' => 1],
                ['numberOfDays', 'default', 'value' => 30],
            ]
        );
        return $rules;
    }

    /**
     * @inheritdoc
     */
    public function getSettingsHtml()
    {
        try {
            return Craft::$app->getView()->renderTemplate(
                'retour/_components/widgets/Retour_settings',
                [
                    'widget' => $this,
                ]
            );
        } catch (\Twig\Error\LoaderError $e) {
            Craft::error($e->getMessage(), __METHOD__);
        } catch (Exception $e) {
            Craft::error($e->getMessage(), __METHOD__);
        }
    }

    /**
     * @inheritdoc
     */
    public function getBodyHtml()
    {
        try {
            Craft::$app->getView()->registerAssetBundle(RetourWidgetAsset::class);
        } catch (InvalidConfigException $e) {
            Craft::error($e->getMessage(), __METHOD__);
        }

        try {
            return Craft::$app->getView()->renderTemplate(
                'retour/_components/widgets/Retour_body',
                [
                    'numberOfDays' => $this->numberOfDays,
                ]
            );
        } catch (\Twig\Error\LoaderError $e) {
            Craft::error($e->getMessage(), __METHOD__);
        } catch (Exception $e) {
            Craft::error($e->getMessage(), __METHOD__);
        }
    }
}
