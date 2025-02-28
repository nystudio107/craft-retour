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

use Craft;
use craft\errors\SiteNotFoundException;
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
        $queryParams = array_merge([], ...$queryParams);

        return http_build_query($queryParams);
    }

    /**
     * Strip out any site-defined sub-path from the incoming $path
     * e.g. if the Site's baseUrl is set to https://example.com/es and $path is /es/blog
     * this function will return /blog
     *
     * @param string $path
     * @return string
     */
    public static function stripSitePathPrefix(string $path): string
    {
        try {
            $baseSiteUrl = self::baseSiteUrl();
        } catch (SiteNotFoundException $e) {
            $baseSiteUrl = '';
        }
        $sitePath = parse_url($baseSiteUrl, PHP_URL_PATH);
        $addSlash = str_ends_with($path, '/');
        if (!empty($sitePath)) {
            // Normalizes a URI path by trimming leading/ trailing slashes and removing double slashes
            $sitePath = '/' . preg_replace('/\/\/+/', '/', trim($sitePath, '/'));
        }
        // Strip the $sitePath from the incoming $path
        if (str_starts_with($path, $sitePath)) {
            $path = substr($path, strlen($sitePath));
            $path = '/' . preg_replace('/\/\/+/', '/', trim($path, '/'));
        }
        $path = $addSlash ? $path . '/' : $path;

        return $path;
    }

    /**
     * See if the path includes a site prefix for any site
     *
     * @param string $path
     * @return bool
     */
    public static function pathHasSitePrefix(string $path): bool
    {
        $sites = Craft::$app->getSites()->getAllSites();
        foreach ($sites as $site) {
            $sitePath = parse_url($site->baseUrl, PHP_URL_PATH);
            if (!empty($sitePath)) {
                // Normalizes a URI path by trimming leading/ trailing slashes and removing double slashes
                $sitePath = '/' . preg_replace('/\/\/+/', '/', trim($sitePath, '/'));
            }
            // See if the path begins with a site path prefix
            if ($sitePath !== '/' && str_starts_with($path, $sitePath)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Merge the $url and $path together, combining any overlapping path segments
     *
     * @param ?string $url
     * @param ?string $path
     * @return string
     */
    public static function mergeUrlWithPath(?string $url, ?string $path): string
    {
        $overlap = 0;
        $url = $url ?? '';
        $path = $path ?? '';
        $url = rtrim($url, '/') . '/';
        $path = '/' . ltrim($path, '/');
        $urlOffset = strlen($url);
        $pathLength = strlen($path);
        $pathOffset = 0;
        while ($urlOffset > 0 && $pathOffset < $pathLength) {
            $urlOffset--;
            $pathOffset++;
            if (str_starts_with($path, substr($url, $urlOffset, $pathOffset))) {
                $overlap = $pathOffset;
            }
        }

        return rtrim($url, '/') . '/' . ltrim(substr($path, $overlap), '/');
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
        $originalUrl = $url;
        // HTML decode the entities, then strip out any tags
        $url = html_entity_decode($url, ENT_NOQUOTES, 'UTF-8');
        $url = urldecode($url);
        $decodedUrl = $url;
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
        // If the URL didn't have anything stripped from it, us the original encoded URL
        if ($url === $decodedUrl) {
            $url = $originalUrl;
        }
        return $url;
    }
}
