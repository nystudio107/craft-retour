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
use craft\helpers\Json;
use nystudio107\retour\Retour as RetourPlugin;
use yii\db\Schema;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.74
 *
 * @property-read string $contentColumnType
 */
class ShortLink extends Field implements PreviewableFieldInterface
{
    // Static Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Craft::t('retour', 'Short Link');
    }

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function getContentColumnType(): string
    {
        return Schema::TYPE_TEXT;
    }

    /**
     * @inheritdoc
     */
    public function getInputHtml($value, ElementInterface $element = null): string
    {
        $decoded = Json::decodeIfJson($value);

        // Render the input template
        return Craft::$app->getView()->renderTemplate(
            'retour/_components/fields/Retour_input',
            [
                'value' => is_array($decoded) ? $decoded : [],
                'fieldName' => $this->handle
            ]
        );
    }

    /**
     * @inheritdoc
     */
    public function afterElementSave(ElementInterface $element, bool $isNew)
    {
        if ($element->getIsDraft()) {
            return;
        }

        $value = $element->{$this->handle};
        $decoded = Json::decodeIfJson($value);
        if (is_array($decoded)) {
            $delete = (empty($decoded['enabled']) && !empty($decoded['redirectSrcUrl'])) || !$element->getEnabledForSite($element->siteId);
            if (!$delete) {
                RetourPlugin::$plugin->redirects->enableElementRedirect($element, $decoded);
            } else {
                RetourPlugin::$plugin->redirects->removeElementRedirect($element);
            }
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
