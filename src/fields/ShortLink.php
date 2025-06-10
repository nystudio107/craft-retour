<?php
/**
 * Retour plugin for Craft CMS
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2022 nystudio107
 * @license   https://nystudio107.com/license
 */

namespace nystudio107\retour\fields;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\base\InlineEditableFieldInterface;
use craft\base\PreviewableFieldInterface;
use craft\helpers\ElementHelper;
use craft\helpers\Json;
use craft\helpers\UrlHelper;
use nystudio107\retour\Retour as RetourPlugin;
use yii\helpers\StringHelper;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     4.1.0
 *
 * @property-read string $contentColumnType
 */
class ShortLink extends Field implements PreviewableFieldInterface, InlineEditableFieldInterface
{
    protected static bool $allowShortLinkUpdates = true;
    public string $redirectSrcMatch = 'pathonly';
    public int $redirectHttpCode = 301;

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
     * @inheritdoc
     */
    public static function icon(): string
    {
        return '@nystudio107/retour/icon-mask.svg';
    }

    /**
     * Prevent element updates from updating the short link redirects.
     */
    public static function preventShortLinkUpdates(): void
    {
        self::$allowShortLinkUpdates = false;
    }

    /**
     * Allow element updates to update the short link redirects.
     */
    public static function allowShortLinkUpdates(): void
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
    public function getSettingsHtml(): string
    {
        return Craft::$app->getView()->renderTemplate('retour/_components/fields/ShortLink_settings',
            [
                'field' => $this,
            ]);
    }

    /**
     * @inheritdoc
     */
    public function getPreviewHtml($value, ElementInterface $element): string
    {
        $decoded = Json::decodeIfJson($value);
        if (is_array($decoded)) {
            $value = $decoded['legacyUrl'] ?? '';
        }
        // Render the preview template
        return Craft::$app->getView()->renderTemplate(
            'retour/_components/fields/ShortLink_preview',
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
    public function afterElementSave(ElementInterface $element, bool $isNew): void
    {
        if (!self::$allowShortLinkUpdates || $element->getIsDraft() || !$element->getSite()->hasUrls) {
            return;
        }

        $value = $element->getFieldValue($this->handle);
        // Return for propagating elements
        if ($this->redirectSrcMatch === 'pathonly') {
            $parentElement = ElementHelper::rootElement($element);
            if ($this->translationMethod === Field::TRANSLATION_METHOD_NONE && ($element->propagating || $parentElement->propagating)) {
                return;
            }
        } elseif (!empty($value) && !StringHelper::startsWith($value, 'http')) {
            $value = UrlHelper::siteUrl($value, null, null, $element->siteId);
        }

        $parentElement = ElementHelper::rootElement($element);
        RetourPlugin::$plugin->redirects->removeElementRedirect($parentElement, false);

        if (!empty($value)) {
            $redirectSrcMatch = $this->redirectSrcMatch;

            RetourPlugin::$plugin->redirects->enableElementRedirect($parentElement, $value, $redirectSrcMatch, $this->redirectHttpCode);
        }

        parent::afterElementSave($element, $isNew);
    }

    /**
     * @inheritdoc
     */
    public function afterElementDelete(ElementInterface $element): void
    {
        if (!$element->getIsCanonical()) {
            return;
        }

        RetourPlugin::$plugin->redirects->removeElementRedirect($element, true, true);
        parent::afterElementDelete($element);
    }

    /**
     * @inheritdoc
     */
    public function getElementValidationRules(): array
    {
        return [
            [
                function(ElementInterface $element) {
                    $value = $element->getFieldValue($this->handle);
                    $redirect = RetourPlugin::$plugin->getRedirects()->getRedirectByRedirectSrcUrl($value);
                    // Handle drafts
                    $element = $element->getCanonical();
                    if ($redirect && isset($redirect['associatedElementId'])) {
                        if ($redirect['associatedElementId'] == 0) {
                            $element->addError($this->handle, Craft::t('retour', 'A Retour redirect with this Legacy URL already exists.'));
                        } elseif ($redirect['associatedElementId'] !== $element->id) {
                            $element->addError($this->handle, Craft::t('retour', 'A Short Link with this URL already exists.'));
                        }
                    }
                },
            ],
        ];
    }
}
