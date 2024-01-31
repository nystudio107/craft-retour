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

namespace nystudio107\retour\gql\queries;

use craft\gql\base\Query;
use GraphQL\Type\Definition\Type;
use nystudio107\retour\gql\arguments\RetourArguments;

use nystudio107\retour\gql\interfaces\RetourInterface;
use nystudio107\retour\gql\resolvers\RetourResolver;
use nystudio107\retour\helpers\Gql as GqlHelper;

/**
 * Class RetourQuery
 *
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.26
 */
class RetourQuery extends Query
{
    /**
     * @inheritdoc
     */
    public static function getQueries($checkToken = true): array
    {
        if ($checkToken && !GqlHelper::canQueryRetour()) {
            return [];
        }

        return [
            'retour' => [
                'type' => RetourInterface::getType(),
                'args' => RetourArguments::getArguments(),
                'resolve' => RetourResolver::class . '::resolve',
                'description' => 'This query is used to query for Retour redirects.',
                'deprecationReason' => 'This query is deprecated and will be removed in the future. You should use `retourResolveRedirect` instead.',
            ],
            'retourResolveRedirect' => [
                'type' => RetourInterface::getType(),
                'args' => RetourArguments::getArguments(),
                'resolve' => RetourResolver::class . '::resolve',
                'description' => 'This query is used to query for Retour redirects.',
            ],
            'retourRedirects' => [
                'type' => Type::listOf(RetourInterface::getType()),
                'args' => [
                    'site' => [
                        'name' => 'site',
                        'type' => Type::string(),
                        'description' => 'The site handle to list all redirects for.',
                    ],
                    'siteId' => [
                        'name' => 'siteId',
                        'type' => Type::int(),
                        'description' => 'The siteId to list all redirects for.',
                    ],
                ],
                'resolve' => RetourResolver::class . '::resolveAll',
                'description' => 'This query is used to query for all Retour redirects for a site.',
            ],
        ];
    }
}
