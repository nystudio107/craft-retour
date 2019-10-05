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

namespace nystudio107\retour\gql\resolvers;

use craft\gql\base\Resolver;
use craft\helpers\Gql as GqlHelper;

use GraphQL\Type\Definition\ResolveInfo;

/**
 * Class RetourResolver
 *
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.26
 */
class RetourResolver extends Resolver
{
    /**
     * @inheritDoc
     */
    public static function resolve($source, array $arguments, $context, ResolveInfo $resolveInfo)
    {
    }
}
