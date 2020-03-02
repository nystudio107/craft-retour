<?php
/**
 * Retour plugin for Craft CMS 3.x
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
    // Public Static Properties
    // =========================================================================

    // Public Static Methods
    // =========================================================================

    /**
     * Sanitize the passed in URL
     *
     * @param $url
     * @param bool $encode
     *
     * @return bool|mixed|string
     */
    public static function sanitizeUrl($url, $encode = false) {
        $url = urlencode(urldecode($url));
        $url = filter_var(urldecode($url), FILTER_SANITIZE_SPECIAL_CHARS);
        if (!filter_var($url, FILTER_VALIDATE_URL)) {
            return false;
        }

        return $encode ? urlencode($url) : $url;
    }
}
