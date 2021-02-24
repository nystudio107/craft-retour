<?php
/**
 * Retour plugin for Craft CMS 3.x
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2021 nystudio107
 */

namespace nystudio107\retour\helpers;

use \Composer\InstalledVersions;
use \Composer\Semver\Semver;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.48
 */
class Version
{
    // Constants
    // =========================================================================

    const LEAGUE_CSV_PACKAGE = 'league/csv';

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
            $installedVersion = InstalledVersions::getPrettyVersion(self::LEAGUE_CSV_PACKAGE);
        } catch (\Throwable $e) {
            // That's fine
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
