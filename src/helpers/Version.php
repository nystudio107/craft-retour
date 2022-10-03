<?php
/**
 * Retour plugin for Craft CMS
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2021 nystudio107
 */

namespace nystudio107\retour\helpers;

use Composer\Semver\Semver;
use Craft;
use Jean85\PrettyVersions;
use Throwable;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.48
 */
class Version
{
    // Constants
    // =========================================================================

    protected const LEAGUE_CSV_PACKAGE = 'league/csv';

    // Public Static Methods
    // =========================================================================

    /**
     * Return the API version for `league/csv` package
     *
     * @return int API version (or 0 for not installed)
     */
    public static function getLeagueCsvVersion(): int
    {
        $version = 0;
        $installedVersion = null;
        try {
            $pv = PrettyVersions::getVersion(self::LEAGUE_CSV_PACKAGE);
            $installedVersion = $pv->getPrettyVersion();
        } catch (Throwable $e) {
            Craft::error($e, __METHOD__);
        }
        if ($installedVersion) {
            if (Semver::satisfies($installedVersion, '^8.0.0')) {
                $version = 8;
            }
            if (Semver::satisfies($installedVersion, '^9.0.0')) {
                $version = 9;
            }
        }

        return $version;
    }
}
