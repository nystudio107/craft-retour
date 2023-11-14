<?php
/**
 * Retour plugin for Craft CMS
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2020 nystudio107
 */

namespace nystudio107\retour\helpers;

use craft\helpers\UrlHelper as CraftUrlHelper;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.34
 */
class UrlHelper extends CraftUrlHelper
{
    // Public Static Methods
    // =========================================================================

    /**
     * Returns a query string that is a combination of al of the query strings from
     * the passed in $urls
     *
     * @param ...$urls
     * @return string
     */
    public static function combineQueryStringsFromUrls(...$urls): string
    {
        $queryParams = [];
        foreach ($urls as $url) {
            $parsedUrl = parse_url($url);
            $params = [];
            parse_str($parsedUrl['query'] ?? '', $params);
            $queryParams[] = $params;
        }
        $queryParams = array_unique(array_merge([], ...$queryParams), SORT_REGULAR);

        return http_build_query($queryParams);
    }

    /**
     * Return a sanitized URL
     *
     * @param string $url
     *
     * @return string
     */
    public static function sanitizeUrl(string $url): string
    {
        // HTML decode the entities, then strip out any tags
        $url = html_entity_decode($url, ENT_NOQUOTES, 'UTF-8');
        $url = urldecode($url);
        $url = strip_tags($url);
        // Remove any Twig tags that somehow are present in the incoming URL
        /** @noinspection CallableParameterUseCaseInTypeContextInspection */
        $url = preg_replace('/{.*}/', '', $url);
        // Remove any linebreaks that may be errantly in the URL
        $url = (string)str_replace([
                PHP_EOL,
                "\r",
                "\n",
            ]
            , '', $url
        );

        return $url;
    }
}
