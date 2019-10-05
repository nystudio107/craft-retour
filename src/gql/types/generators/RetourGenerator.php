<?php
/**
 * Retour plugin for Craft CMS 3.x
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2019 nystudio107
 */

namespace nystudio107\retour\gql\types\generators;

use nystudio107\retour\gql\interfaces\RetourInterface;
use nystudio107\retour\gql\types\RetourType;

use craft\gql\base\GeneratorInterface;
use craft\gql\GqlEntityRegistry;
use craft\gql\TypeLoader;
use craft\helpers\Gql as GqlHelper;
use GraphQL\Type\Definition\Type;

/**
 * Class RetourGenerator
 *
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.26
 */
class RetourGenerator implements GeneratorInterface
{

    /**
     * @inheritdoc
     */
    public static function generateTypes($context = null): array
    {
        $retourFields = [
            // static fields
            'optimizedImageUrls' => [
                'name' => 'optimizedImageUrls',
                'description' => 'An array of optimized image variant URLs',
                'type' => Type::listOf(Type::string()),
            ],
        ];
        $typeName = RetourInterface::getName();
        $retourType = GqlEntityRegistry::getEntity($typeName)
            ?: GqlEntityRegistry::createEntity($typeName, new RetourType([
                'name' => $typeName,
                'description' => 'This entity has all the Retour fields',
                'fields' => function () use ($retourFields) {
                    return $retourFields;
                },
            ]));

        TypeLoader::registerType($typeName, function () use ($retourType) {
            return $retourType;
        });

        return [$retourType];
    }
}
