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

use Craft;
use craft\base\Element;
use craft\gql\base\Resolver;

use craft\helpers\UrlHelper;
use GraphQL\Type\Definition\ResolveInfo;
use nystudio107\retour\Retour;

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
        // If our source is an Element, extract the URI and siteId from it
        if ($source instanceof Element) {
            /** Element $source */
            $uri = $source->uri;
            $siteId = $source->siteId;
        } else {
            // Otherwise use the passed in arguments, or defaults
            $uri = $arguments['uri'] ?? '/';
            $siteId = $arguments['siteId'] ?? null;
        }
        $uri = trim($uri === '/' ? '__home__' : $uri);

        $redirect = null;
        // Strip the query string if `alwaysStripQueryString` is set
        if (Retour::$settings->alwaysStripQueryString) {
            $uri = UrlHelper::stripQueryString($uri);
        }
        if (!Retour::$plugin->redirects->excludeUri($uri)) {
            $redirect = Retour::$plugin->redirects->findRedirectMatch($uri, $uri, $siteId);
            if ($redirect === null && Craft::$app->getElements()->getElementByUri(trim($uri, '/'), $siteId) === null) {
                // Increment the stats
                Retour::$plugin->statistics->incrementStatistics($uri, false, $siteId);
            }
        }

        return $redirect;
    }
}
