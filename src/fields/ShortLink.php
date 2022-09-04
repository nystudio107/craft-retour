<?php
/**
 * SEOmatic plugin for Craft CMS 3.x
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2017 nystudio107
 * @license   https://nystudio107.com/license
 */

namespace nystudio107\retour\fields;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\base\PreviewableFieldInterface;
use craft\helpers\ElementHelper;
use craft\helpers\Json;
use craft\helpers\UrlHelper;
use nystudio107\retour\Retour as RetourPlugin;
use yii\helpers\StringHelper;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.74
 *
 * @property-read string $contentColumnType
 */
class ShortLink extends Field implements PreviewableFieldInterface
{
    public $redirectSrcMatch = 'pathonly';
    public $redirectHttpCode = 301;

    static protected $allowShortLinkUpdates = true;

    // Static Methods

    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Craft::t('retour', 'Short Link');
    }

    /**
     * Prevent element updates from updating the short link redirects.
     */
    public static function preventShortLinkUpdates()
    {
        self::$allowShortLinkUpdates = false;
    }

    /**
     * Allow element updates to update the short link redirects.
     */
    public static function allowShortLinkUpdates()
    {
        self::$allowShortLinkUpdates = true;
    }

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function getInputHtml($value, ElementInterface $element = null): string
    {
        // Render the input template
        return Craft::$app->getView()->renderTemplate(
            'retour/_components/fields/ShortLink_input',
            [
                'name' => $this->handle,
                'value' => $value,
                'field' => $this,
            ]
        );
    }

    /**
     * @inheritdoc
     */
    public function getSettingsHtml()
    {
        return Craft::$app->getView()->renderTemplate('retour/_components/fields/ShortLink_settings',
            [
                'field' => $this,
            ]);
    }

    /**
     * @inheritdoc
     */
    public function getIsTranslatable(ElementInterface $element = null): bool
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public function afterElementSave(ElementInterface $element, bool $isNew)
    {
        if (!self::$allowShortLinkUpdates || $element->getIsDraft() || !$element->getSite()->hasUrls) {
            return;
        }

        $element->defineRules();

        $value = $element->getFieldValue($this->handle);

        // Return for propagating elements
        if ($this->redirectSrcMatch === 'pathonly') {
            $parentElement = ElementHelper::rootElement($element);
            if ($this->translationMethod === Field::TRANSLATION_METHOD_NONE && ($element->propagating || $parentElement->propagating)) {
                return;
            }
        } else if (!empty($value) && !StringHelper::startsWith($value, 'http')) {
            $value = UrlHelper::siteUrl($value, null, null, $element->siteId);
        }

        if (empty($value)) {
            RetourPlugin::$plugin->redirects->removeElementRedirect($element, false);
        } else {
            RetourPlugin::$plugin->redirects->enableElementRedirect($element, $value, $this->redirectSrcMatch, $this->redirectHttpCode);
        }

        parent::afterElementSave($element, $isNew);
    }

    /**
     * @inheritdoc
     */
    public function afterElementDelete(ElementInterface $element)
    {
        if ($element->getIsDraft()) {
            return;
        }

        RetourPlugin::$plugin->redirects->removeElementRedirect($element, true);
        parent::afterElementDelete($element);
    }

    /**
     * @inheritdoc
     */
    public function getTableAttributeHtml($value, ElementInterface $element): string
    {
        $decoded = Json::decodeIfJson($value);
        if ($decoded) {
            return $decoded['legacyUrl'] ?? '';
        }

        // Render the input template
        return $value;
    }
}
