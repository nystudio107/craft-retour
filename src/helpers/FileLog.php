<?php
/**
 * Retour plugin for Craft CMS 3.x
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2022 nystudio107
 */

namespace nystudio107\retour\helpers;

use Craft;
use craft\helpers\FileHelper;
use craft\log\FileTarget;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.2.0
 */
class FileLog
{
    // Public Static Methods
    // =========================================================================

    /**
     * Create an additional file log target named $filename.log that logs messages
     * in the category $category
     *
     * @param string $fileName
     * @param string $category
     * @return void
     */
    public static function create(string $fileName, string $category): void
    {
        // Create a new file target
        $fileTarget = new FileTarget([
            'categories' => [$category],
            'levels' => ['error', 'warning', 'info'],
            'logFile' => "@storage/logs/$fileName.log",
            'logVars' => [],
        ]);
        // Add the new target file target to the dispatcher
        Craft::getLogger()->dispatcher->targets[] = $fileTarget;
    }

    /**
     * Delete the passed in log file $fileName
     *
     * @param string $fileName
     * @return void
     */
    public static function delete(string $fileName): void
    {
        FileHelper::unlink(Craft::getAlias("@storage/logs/$fileName.log"));
    }

    /**
     * Get the contents of the log file
     *
     * @param string $fileName
     * @return string
     */
    public static function getContents(string $fileName): string
    {
        $contents = @file_get_contents(Craft::getAlias("@storage/logs/$fileName.log"));

        return $contents === false ? '' : $contents;
    }
}
