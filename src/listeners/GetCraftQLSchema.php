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

namespace nystudio107\retour\listeners;

use Craft;
use craft\helpers\Json;

use craft\base\Element;

use markhuot\CraftQL\Events\AlterSchemaFields;
use markhuot\CraftQL\Builders\Field as FieldBuilder;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class GetCraftQLSchema
{
    // Constants
    // =========================================================================

    // Public Methods
    // =========================================================================

    /**
     * Add the `retour` root GraphQL field
     *
     * @param AlterSchemaFields $event
     */
    public static function handle(AlterSchemaFields $event)
    {
        // Create the root object
        $retourField = $event->schema->createObjectType('retourData');
        // Add in the CraftQL fields
        foreach (self::CRAFT_QL_FIELDS as $fieldHandle => $containerType) {
            $retourField
                ->addStringField($fieldHandle)
                ->resolve(function (array $data) use ($containerType) {
                    // $root contains the data returned by the field below
                    $result = ContainerHelper::getContainerArrays(
                        [$containerType],
                        $data['uri'],
                        $data['siteId'],
                        $data['asArray']
                    );
                    if (!empty($result[$containerType]) && is_array($result[$containerType])) {
                        $result[$containerType] = Json::encode($result[$containerType]);
                    }

                    return $result[$containerType];
                });
        }
        // Add the root
        $event->schema->addField('seomatic')
            ->arguments(function (FieldBuilder $field) {
                $field->addStringArgument('uri');
            })
            ->type($retourField)
            ->resolve(function ($root, $args, $context, $info) {
                // If our root is an Element, extract the URI and siteId from it
                if ($root instanceof Element) {
                    /** Element $root */
                    $uri = $root->uri;
                    $siteId = $root->siteId;
                } else {
                    // Otherwise use the passed in arguments, or defaults
                    $uri = $args['uri'] ?? '/';
                    $siteId = $args['siteId'] ?? null;
                }
                $asArray = $args['asArray'] ?? false;
                $uri = trim($uri === '/' ? '__home__' : $uri, '/');

                return [
                    'uri' => $uri,
                    'siteId' => $siteId,
                    'asArray' => $asArray,
                ];
            });
    }
}
