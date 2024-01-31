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

namespace nystudio107\retour\listeners;

use craft\base\Element;
use craft\helpers\UrlHelper;

use markhuot\CraftQL\Builders\Field as FieldBuilder;
use markhuot\CraftQL\Events\AlterSchemaFields;

use nystudio107\retour\models\StaticRedirects;
use nystudio107\retour\Retour;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class GetCraftQLSchema
{
    // Constants
    // =========================================================================

    const INT_FIELDS = [
        'id',
        'siteId',
        'associatedElementId',
        'redirectHttpCode',
        'hitCount',
    ];

    const BOOL_FIELDS = [
        'enabled',
    ];

    // Public Methods
    // =========================================================================

    /**
     * Add the `retour` root GraphQL field
     *
     * @param AlterSchemaFields $event
     */
    public static function handle(AlterSchemaFields $event)
    {
        $fields = StaticRedirects::instance()->fields();
        // Create the root object
        $retourField = $event->schema->createObjectType('retourData');
        // Add in the CraftQL fields
        foreach ($fields as $field) {
            // Pseudo type system
            if (in_array($field, self::BOOL_FIELDS, true)) {
                // Boolean field
                $retourField
                    ->addBooleanField($field)
                    ->resolve(function($redirect) use ($field) {
                        $result = $redirect[$field] ?? null;
                        return $result === null ? $result : (bool)$result;
                    });
            } elseif (in_array($field, self::INT_FIELDS, true)) {
                // Integer field
                $retourField
                    ->addIntField($field)
                    ->resolve(function($redirect) use ($field) {
                        $result = $redirect[$field] ?? null;
                        return $result === null ? $result : (int)$result;
                    });
            } else {
                // String field
                $retourField
                    ->addStringField($field)
                    ->resolve(function($redirect) use ($field) {
                        $result = $redirect[$field] ?? null;
                        return $result === null ? $result : (string)$result;
                    });
            }
        }
        // Add the root
        $event->schema->addField('retour')
            ->arguments(function(FieldBuilder $field) {
                $field->addStringArgument('uri');
                $field->addIntArgument('siteId');
            })
            ->type($retourField)
            ->resolve(function($root, $args, $context, $info) {
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
                $uri = trim($uri === '/' ? '__home__' : $uri);

                $redirect = null;
                // Strip the query string if `alwaysStripQueryString` is set
                if (Retour::$settings->alwaysStripQueryString) {
                    $uri = UrlHelper::stripQueryString($uri);
                }
                if (!Retour::$plugin->redirects->excludeUri($uri)) {
                    $redirect = Retour::$plugin->redirects->findRedirectMatch($uri, $uri, $siteId);
                }

                return $redirect;
            });
    }
}
