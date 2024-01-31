<?php
/**
 * Retour plugin for Craft CMS
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2019 nystudio107
 */

namespace nystudio107\retour\gql\interfaces;

use craft\gql\base\InterfaceType as BaseInterfaceType;

use craft\gql\GqlEntityRegistry;
use GraphQL\Type\Definition\InterfaceType;

use GraphQL\Type\Definition\Type;
use nystudio107\retour\gql\types\generators\RetourGenerator;

/**
 * Class RetourInterface
 *
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.26
 */
class RetourInterface extends BaseInterfaceType
{
    /**
     * @inheritdoc
     */
    public static function getTypeGenerator(): string
    {
        return RetourGenerator::class;
    }

    /**
     * @inheritdoc
     */
    public static function getType($fields = null): Type
    {
        if ($type = GqlEntityRegistry::getEntity(self::class)) {
            return $type;
        }

        $type = GqlEntityRegistry::createEntity(self::class, new InterfaceType([
            'name' => static::getName(),
            'fields' => self::class . '::getFieldDefinitions',
            'description' => 'This is the interface implemented by Retour.',
            'resolveType' => function(array $value) {
                return GqlEntityRegistry::getEntity(RetourGenerator::getName());
            },
        ]));
        RetourGenerator::generateTypes();

        return $type;
    }

    /**
     * @inheritdoc
     */
    public static function getName(): string
    {
        return 'RetourInterface';
    }

    /**
     * @inheritdoc
     */
    public static function getFieldDefinitions(): array
    {
        return array_merge(parent::getFieldDefinitions(), [
            'id' => [
                'name' => 'id',
                'type' => Type::int(),
                'description' => 'The id of the redirect.',
            ],
            'site' => [
                'name' => 'site',
                'type' => Type::string(),
                'description' => 'The site handle of the redirect (or null for all sites).',
            ],
            'siteId' => [
                'name' => 'siteId',
                'type' => Type::int(),
                'description' => 'The siteId of the redirect (0 or null for all sites).',
            ],
            'associatedElementId' => [
                'name' => 'associatedElementId',
                'type' => Type::int(),
                'description' => 'The id of the Element associated with this redirect (unused/vestigial).',
            ],
            'enabled' => [
                'name' => 'enabled',
                'type' => Type::boolean(),
                'description' => 'Whether the redirect is enabled or not.',
            ],
            'redirectSrcUrl' => [
                'name' => 'redirectSrcUrl',
                'type' => Type::string(),
                'description' => 'The unparsed URL pattern that Retour should match.',
            ],
            'redirectSrcUrlParsed' => [
                'name' => 'redirectSrcUrlParsed',
                'type' => Type::string(),
                'description' => 'The parsed URL pattern that Retour should match.',
            ],
            'redirectSrcMatch' => [
                'name' => 'redirectSrcMatch',
                'type' => Type::string(),
                'description' => 'Should the legacy URL be matched by path or by full URL?',
            ],
            'redirectMatchType' => [
                'name' => 'redirectMatchType',
                'type' => Type::string(),
                'description' => 'Whether an `exactmatch` or `regexmatch` should be used when matching the URL.',
            ],
            'redirectDestUrl' => [
                'name' => 'redirectDestUrl',
                'type' => Type::string(),
                'description' => 'The URL that should be redirected to.',
            ],
            'redirectHttpCode' => [
                'name' => 'redirectHttpCode',
                'type' => Type::int(),
                'description' => 'The http status code that should be used for the redirect.',
            ],
            'hitCount' => [
                'name' => 'hitCount',
                'type' => Type::int(),
                'description' => 'The number of times this redirect has been hit.',
            ],
            'hitLastTime' => [
                'name' => 'hitLastTime',
                'type' => Type::string(),
                'description' => 'A datetime string of when this redirect was last hit.',
            ],
        ]);
    }
}
