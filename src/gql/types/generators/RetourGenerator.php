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

namespace nystudio107\retour\gql\types\generators;

use craft\gql\base\GeneratorInterface;
use craft\gql\GqlEntityRegistry;
use craft\gql\TypeLoader;

use nystudio107\retour\gql\arguments\RetourArguments;
use nystudio107\retour\gql\interfaces\RetourInterface;
use nystudio107\retour\gql\types\RetourType;

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
    public static function generateTypes(mixed $context = null): array
    {
        $gqlTypes = [];
        $retourFields = RetourInterface::getFieldDefinitions();
        $retourArgs = RetourArguments::getArguments();
        $typeName = self::getName();
        $retourType = GqlEntityRegistry::getEntity($typeName)
            ?: GqlEntityRegistry::createEntity($typeName, new RetourType([
                'name' => $typeName,
                'args' => function() use ($retourArgs) {
                    return $retourArgs;
                },
                'fields' => function() use ($retourFields) {
                    return $retourFields;
                },
                'description' => 'This entity has all the Retour fields',
            ]));

        $gqlTypes[$typeName] = $retourType;
        TypeLoader::registerType($typeName, function() use ($retourType) {
            return $retourType;
        });

        return $gqlTypes;
    }

    /**
     * @inheritdoc
     */
    public static function getName($context = null): string
    {
        return 'RetourType';
    }
}
