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

namespace nystudio107\retour\services;

use Craft;
use craft\base\Component;
use craft\db\Query;
use craft\helpers\Db;
use craft\helpers\UrlHelper;
use DateTime;
use nystudio107\retour\models\Stats as StatsModel;
use nystudio107\retour\Retour;
use yii\db\Exception;

/** @noinspection MissingPropertyAnnotationsInspection */

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class Statistics extends Component
{
    // Constants
    // =========================================================================

    public const LAST_STATISTICS_TRIM_CACHE_KEY = 'retour-last-statistics-trim';

    // Protected Properties
    // =========================================================================

    /**
     * @var null|array
     */
    protected ?array $cachedStatistics;

    // Public Methods
    // =========================================================================

    /**
     * @return array All of the statistics
     */
    public function getAllStatistics(): array
    {
        // Cache it in our class; no need to fetch it more than once
        if ($this->cachedStatistics !== null) {
            return $this->cachedStatistics;
        }
        // Query the db table
        $stats = (new Query())
            ->from(['{{%retour_stats}}'])
            ->orderBy('hitCount DESC')
            ->limit(Retour::$settings->statsDisplayLimit)
            ->all();
        // Cache for future accesses
        $this->cachedStatistics = $stats;

        return $stats;
    }

    /**
     * @param int $days The number of days to get
     * @param bool $handled
     *
     * @return array Recent statistics
     */
    public function getRecentStatistics(int $days = 1, bool $handled = false): array
    {
        // Ensure is an int
        $handledInt = (int)$handled;
        $stats = [];
        $db = Craft::$app->getDb();
        if ($db->getIsMysql()) {
            // Query the db table
            $stats = (new Query())
                ->from(['{{%retour_stats}}'])
                ->where("hitLastTime >= ( CURDATE() - INTERVAL '{$days}' DAY )")
                ->andWhere("handledByRetour = {$handledInt}")
                ->orderBy('hitLastTime DESC')
                ->all();
        }
        if ($db->getIsPgsql()) {
            // Query the db table
            $stats = (new Query())
                ->from(['{{%retour_stats}}'])
                ->where("\"hitLastTime\" >= ( CURRENT_TIMESTAMP - INTERVAL '{$days} days' )")
                ->andWhere(['handledByRetour' => $handledInt])
                ->orderBy('hitLastTime DESC')
                ->all();
        }

        return $stats;
    }

    /**
     * @return int
     */
    public function clearStatistics(): int
    {
        $db = Craft::$app->getDb();
        try {
            $result = $db->createCommand()
                ->truncateTable('{{%retour_stats}}')
                ->execute();
        } catch (Exception $e) {
            $result = -1;
            Craft::error($e->getMessage(), __METHOD__);
        }

        return $result;
    }

    /**
     * Delete a statistic by id
     *
     * @param int $id
     *
     * @return int The result
     */
    public function deleteStatisticById(int $id): int
    {
        $db = Craft::$app->getDb();
        // Delete a row from the db table
        try {
            $result = $db->createCommand()->delete(
                '{{%retour_stats}}',
                [
                    'id' => $id,
                ]
            )->execute();
        } catch (Exception $e) {
            Craft::error($e->getMessage(), __METHOD__);
            $result = 0;
        }

        return $result;
    }

    /**
     * Increment the retour_stats record
     *
     * @param string $url The 404 url
     * @param bool $handled
     * @param null $siteId
     */
    public function incrementStatistics(string $url, bool $handled = false, $siteId = null): void
    {
        if (Retour::$settings->enableStatistics === false) {
            return;
        }

        $referrer = $remoteIp = null;
        $request = Craft::$app->getRequest();
        if ($siteId === null) {
            $siteId = Craft::$app->getSites()->currentSite->id;
        }
        if (!$request->isConsoleRequest) {
            $referrer = $request->getReferrer();
            if (Retour::$settings->recordRemoteIp) {
                $remoteIp = $request->getUserIP();
            }
            $userAgent = $request->getUserAgent();
            if (Retour::$currentException !== null) {
                $exceptionMessage = Retour::$currentException->getMessage();
                $exceptionFilePath = Retour::$currentException->getFile();
                $exceptionFileLine = Retour::$currentException->getLine();
            }
        }
        $referrer = $referrer ?? '';
        $remoteIp = $remoteIp ?? '';
        $userAgent = $userAgent ?? '';
        $exceptionMessage = $exceptionMessage ?? '';
        $exceptionFilePath = $exceptionFilePath ?? '';
        $exceptionFileLine = $exceptionFileLine ?? 0;
        // Strip the query string if `stripQueryStringFromStats` is set
        if (Retour::$settings->stripQueryStringFromStats) {
            $url = UrlHelper::stripQueryString($url);
            $referrer = UrlHelper::stripQueryString($referrer);
        }
        // Normalize the $url via the validator
        $stats = new StatsModel([
            'redirectSrcUrl' => $url,
        ]);
        $stats->validate();
        // Find any existing retour_stats record
        $statsConfig = (new Query())
            ->from(['{{%retour_stats}}'])
            ->where(['redirectSrcUrl' => $stats->redirectSrcUrl])
            ->one();
        // If no record is found, initialize some values
        if ($statsConfig === null) {
            $stats->id = 0;
            $stats->hitCount = 0;
        } else {
            $stats->id = $statsConfig['id'];
            $stats->hitCount = $statsConfig['hitCount'];
        }
        // Merge in the updated info
        $stats->siteId = $siteId;
        $stats->referrerUrl = $referrer;
        $stats->remoteIp = $remoteIp;
        $stats->userAgent = $userAgent;
        $stats->exceptionMessage = $exceptionMessage;
        $stats->exceptionFilePath = $exceptionFilePath;
        $stats->exceptionFileLine = (int)$exceptionFileLine;
        $stats->hitLastTime = Db::prepareDateForDb(new DateTime());
        $stats->handledByRetour = (int)$handled;
        $stats->hitCount++;
        $statsConfig = $stats->getAttributes();
        // Record the updated statistics
        $this->saveStatistics($statsConfig);
        // After incrementing a statistic, trim the retour_stats db table
        if (Retour::$settings->automaticallyTrimStatistics && !$this->rateLimited()) {
            $this->trimStatistics();
        }
    }

    /**
     * @param array $statsConfig
     */
    public function saveStatistics(array $statsConfig): void
    {
        // Validate the model before saving it to the db
        $stats = new StatsModel($statsConfig);
        if ($stats->validate() === false) {
            Craft::error(
                Craft::t(
                    'retour',
                    'Error validating statistics {id}: {errors}',
                    ['id' => $stats->id, 'errors' => print_r($stats->getErrors(), true)]
                ),
                __METHOD__
            );

            return;
        }
        // Get the validated model attributes and save them to the db
        $statsConfig = $stats->getAttributes();
        $db = Craft::$app->getDb();
        if ($statsConfig['id'] !== 0) {
            // Update the existing record
            try {
                $result = $db->createCommand()->update(
                    '{{%retour_stats}}',
                    $statsConfig,
                    [
                        'id' => $statsConfig['id'],
                    ]
                )->execute();
            } catch (Exception $e) {
                // We don't log this error on purpose, because it's just a stats
                // update, and deadlock errors can potentially occur
                // Craft::error($e->getMessage(), __METHOD__);
            }
        } else {
            unset($statsConfig['id']);
            // Create a new record
            try {
                $db->createCommand()->insert(
                    '{{%retour_stats}}',
                    $statsConfig
                )->execute();
            } catch (Exception $e) {
                Craft::error($e->getMessage(), __METHOD__);
            }
        }
    }

    /**
     * Don't trim more than a given interval, so that performance is not affected
     *
     * @return bool
     */
    protected function rateLimited(): bool
    {
        $limited = false;
        $now = round(microtime(true) * 1000);
        $cache = Craft::$app->getCache();
        $then = $cache->get(self::LAST_STATISTICS_TRIM_CACHE_KEY);
        if (($then !== false) && ($now - (int)$then < Retour::$settings->statisticsRateLimitMs)) {
            $limited = true;
        }
        $cache->set(self::LAST_STATISTICS_TRIM_CACHE_KEY, $now, 0);

        return $limited;
    }

    // Protected Methods
    // =========================================================================

    /**
     * Trim the retour_stats db table based on the statsStoredLimit config.php
     * setting
     *
     * @param int|null $limit
     *
     * @return int
     */
    public function trimStatistics(int $limit = null): int
    {
        $affectedRows = 0;
        $db = Craft::$app->getDb();
        $quotedTable = $db->quoteTableName('{{%retour_stats}}');
        $limit = $limit ?? Retour::$settings->statsStoredLimit;

        if ($limit !== null) {
            //  https://stackoverflow.com/questions/578867/sql-query-delete-all-records-from-the-table-except-latest-n
            try {
                if ($db->getIsMysql()) {
                    // Handle MySQL
                    $affectedRows = $db->createCommand(/** @lang mysql */
                        "
                        DELETE FROM {$quotedTable}
                        WHERE id NOT IN (
                          SELECT id
                          FROM (
                            SELECT id
                            FROM {$quotedTable}
                            ORDER BY hitLastTime DESC
                            LIMIT {$limit}
                          ) foo
                        )
                        "
                    )->execute();
                }
                if ($db->getIsPgsql()) {
                    // Handle Postgres
                    $affectedRows = $db->createCommand(/** @lang mysql */
                        "
                        DELETE FROM {$quotedTable}
                        WHERE id NOT IN (
                          SELECT id
                          FROM (
                            SELECT id
                            FROM {$quotedTable}
                            ORDER BY \"hitLastTime\" DESC
                            LIMIT {$limit}
                          ) foo
                        )
                        "
                    )->execute();
                }
            } catch (Exception $e) {
                Craft::error($e->getMessage(), __METHOD__);
            }
            Craft::info(
                Craft::t(
                    'retour',
                    'Trimmed {rows} from retour_stats table',
                    ['rows' => $affectedRows]
                ),
                __METHOD__
            );
        }

        return $affectedRows;
    }
}
