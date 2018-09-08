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
     * @var string
     */
    public $message = 'Hello, world.';

    // Static Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Craft::t('retour', 'Retour');
    }

    /**
     * @inheritdoc
     */
    public static function iconPath()
    {
        return Craft::getAlias("@nystudio107/retour/assetbundles/retour/dist/img/Retour-icon.svg");
    }

    /**
     * @inheritdoc
     */
    public static function maxColspan()
    {
        return null;
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
                ['message', 'string'],
                ['message', 'default', 'value' => 'Hello, world.'],
            ]
        );
        return $rules;
    }

    /**
     * @inheritdoc
     */
    public function getSettingsHtml()
    {
        return Craft::$app->getView()->renderTemplate(
            'retour/_components/widgets/Retour_settings',
            [
                'widget' => $this
            ]
        );
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
                    'message' => $this->message,
                ]
            );
        } catch (\Twig_Error_Loader $e) {
            Craft::error($e->getMessage(), __METHOD__);
        } catch (Exception $e) {
            Craft::error($e->getMessage(), __METHOD__);
        }
    }
}
