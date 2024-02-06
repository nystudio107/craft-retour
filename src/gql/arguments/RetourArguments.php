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

namespace nystudio107\retour\gql\arguments;

use craft\gql\base\Arguments;
use GraphQL\Type\Definition\Type;

/**
 * Class RetourArguments
 *
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.26
 */
class RetourArguments extends Arguments
{
    /**
     * @inheritdoc
     */
    public static function getArguments(): array
    {
        return [
            'uri' => [
                'name' => 'uri',
                'type' => Type::string(),
                'description' => 'The URI to resolve a redirect for.',
            ],
            'site' => [
                'name' => 'site',
                'type' => Type::string(),
                'description' => 'The site handle to resolve a redirect for.',
            ],
            'siteId' => [
                'name' => 'siteId',
                'type' => Type::int(),
                'description' => 'The siteId to resolve a redirect for.',
            ],
        ];
    }
}
