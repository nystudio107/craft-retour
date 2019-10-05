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

namespace nystudio107\retour\gql\queries;

use nystudio107\retour\gql\arguments\RetourArguments;
use nystudio107\retour\gql\interfaces\RetourInterface;
use nystudio107\retour\gql\resolvers\RetourResolver;

use craft\gql\base\Query;
use GraphQL\Type\Definition\Type;

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
        return [
            'retour' => [
                'type' => RetourInterface::getType(),
                'args' => RetourArguments::getArguments(),
                'resolve' => RetourResolver::class . '::resolve',
                'description' => 'This query is used to query for Retour redirects.'
            ],
        ];
    }
}
