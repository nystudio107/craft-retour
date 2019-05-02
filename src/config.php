<?php
/**
 * Retour plugin for Craft CMS 3.x
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

/**
 * Retour config.php
 *
 * This file exists only as a template for the Retour settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'retour.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

return [
    // The public facing name of the plugin
    'pluginName' => 'Retour',

    // Controls whether Retour automatically creates static redirects when an entry's URI changes.
    'createUriChangeRedirects' => true,

    // Should the query string be stripped from all 404 URLs before their evaluation?
    'alwaysStripQueryString'   => false,

    // Should the query string be stripped from the saved statistics source URLs?
    'stripQueryStringFromStats'   => true,

    // Should the anonymous ip address of the client causing a 404 be recorded?
    'recordRemoteIp' => true,

    // How many stats should be stored
    'statsStoredLimit' => 1000,

    // Dashboard data live refresh interval
    'refreshIntervalSecs' => 5,

    // Whether the Statistics should be trimmed after each new statistic is recorded
    'automaticallyTrimStatistics' => true,

    // The number of milliseconds required between trimming of statistics
    'statisticsRateLimitMs' => 3600000,

     // [Regular expressions](https://regexr.com/) to match URLs to exclude from tracking
    'excludePatterns' => [
    ],
];
