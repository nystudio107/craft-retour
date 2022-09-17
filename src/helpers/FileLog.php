<?php
/**
 * Retour plugin for Craft CMS
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
use craft\log\MonologTarget;
use Monolog\Formatter\LineFormatter;
use Psr\Log\LogLevel;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     4.1.0
 */
class FileLog
{
    // Constants
    // =========================================================================

    public const FILE_PER_DAY = 'Y-m-d';

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
        $fileTarget = new MonologTarget([
            'name' => $fileName,
            'categories' => [$category],
            'level' => LogLevel::INFO,
            'logContext' => false,
            'allowLineBreaks' => true,
            'formatter' => new LineFormatter(
                format: "%datetime% [%channel%.%level_name%] [%extra.yii_category%] %message% %context% %extra%\n",
                dateFormat: 'Y-m-d H:i:s',
                allowInlineLineBreaks: true,
                ignoreEmptyContextAndExtra: true,
            ),
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
        FileHelper::unlink(self::getLogFilePath($fileName));
    }

    /**
     * Get the contents of the log file
     *
     * @param string $fileName
     * @return string
     */
    public static function getContents(string $fileName): string
    {
        $contents = @file_get_contents(self::getLogFilePath($fileName));

        return $contents === false ? '' : $contents;
    }

    /**
     * Return a full path to the log file
     *
     * @param string $fileName
     * @return string
     */
    public static function getLogFilePath(string $fileName): string
    {
        $logfile = $fileName . "-" . date(self::FILE_PER_DAY);

        return Craft::getAlias("@storage/logs/$logfile.log");
    }
}
