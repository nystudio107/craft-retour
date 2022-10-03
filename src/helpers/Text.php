<?php
/**
 * Retour plugin for Craft CMS
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace nystudio107\retour\helpers;

use Stringy\Stringy;
use function function_exists;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class Text
{
    // Constants
    // =========================================================================

    // Public Static Methods
    // =========================================================================

    /**
     * Truncates the string to a given length. If $substring is provided, and
     * truncating occurs, the string is further truncated so that the substring
     * may be appended without exceeding the desired length.
     *
     * @param string $string The string to truncate
     * @param int $length Desired length of the truncated string
     * @param string $substring The substring to append if it can fit
     *
     * @return string with the resulting $str after truncating
     */
    public static function truncate(string $string, int $length, string $substring = '…'): string
    {
        $result = $string;

        if (!empty($string)) {
            $string = strip_tags($string);
            $result = (string)Stringy::create($string)->truncate($length, $substring);
        }

        return $result;
    }

    /**
     * Truncates the string to a given length, while ensuring that it does not
     * split words. If $substring is provided, and truncating occurs, the
     * string is further truncated so that the substring may be appended without
     * exceeding the desired length.
     *
     * @param string $string The string to truncate
     * @param int $length Desired length of the truncated string
     * @param string $substring The substring to append if it can fit
     *
     * @return string with the resulting $str after truncating
     */
    public static function truncateOnWord(string $string, int $length, string $substring = '…'): string
    {
        $result = $string;

        if (!empty($string)) {
            $string = strip_tags($string);
            $result = (string)Stringy::create($string)->safeTruncate($length, $substring);
        }

        return $result;
    }

    /**
     * Clean up the passed in text by converting it to UTF-8, stripping tags,
     * removing whitespace, and decoding HTML entities
     *
     * @param string $text
     *
     * @return string
     */
    public static function cleanupText(string $text): string
    {
        if (empty($text)) {
            return '';
        }
        // Convert to UTF-8
        if (function_exists('iconv')) {
            $text = iconv(mb_detect_encoding($text, mb_detect_order(), true), 'UTF-8//IGNORE', $text);
        } else {
            ini_set('mbstring.substitute_character', 'none');
            $text = mb_convert_encoding($text, 'UTF-8', 'UTF-8');
        }
        // Strip HTML tags
        $text = strip_tags($text);
        // Remove excess whitespace
        $text = preg_replace('/\s{2,}/u', ' ', $text);
        // Decode any HTML entities
        $text = html_entity_decode($text);

        return $text;
    }

    // Protected Static Methods
    // =========================================================================
}
