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

namespace nystudio107\retour\services;

use craft\db\Query;
use craft\helpers\Db;
use craft\helpers\StringHelper;
use craft\helpers\UrlHelper;
use nystudio107\retour\Retour;

use Craft;
use craft\base\Component;
use nystudio107\retour\records\Stats as StatsRecord;

use yii\db\Exception;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class Statistics extends Component
{
    // Constants
    // =========================================================================

    // Protected Properties
    // =========================================================================

    /**
     * @var null|array
     */
    protected $cachedStatistics;

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
     * @param int  $days The number of days to get
     * @param bool $handled
     *
     * @return array Recent statistics
     */
    public function getRecentStatistics($days = 1, $handled = false): array
    {
        // Ensure is an int
        $handledInt = (int)$handled;
        // Query the db table
        $stats = (new Query())
            ->from(['{{%retour_stats}}'])
            ->where("hitLastTime >= ( CURDATE() - INTERVAL '{$days}' DAY )")
            ->andWhere("handledByRetour = {$handledInt}")
            ->orderBy('hitLastTime DESC')
            ->all();

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
     * Increment the retour_stats record
     *
     * @param string $url The 404 url
     * @param bool   $handled
     */
    public function incrementStatistics(string $url, $handled = false)
    {
        // Ensure it's an int
        $handledInt = (int)$handled;
        $url = substr($url, 0, 255);
        $request = Craft::$app->getRequest();
        $referrer = $request->getReferrer();
        if ($referrer === null) {
            $referrer = '';
        }
        // Strip the query string if `stripQueryStringFromStats` is set
        if (Retour::$settings->stripQueryStringFromStats) {
            $url = UrlHelper::stripQueryString($url);
        }
        // Find any existing retour_stats record
        $stat = StatsRecord::find()
            ->where(['redirectSrcUrl' => $url])
            ->one();
        if ($stat === null) {
            $stat = new StatsRecord();
            $stat->redirectSrcUrl = StringHelper::encodeMb4($url);
            $stat->hitCount = 0;
        }
        $stat->referrerUrl = StringHelper::encodeMb4($referrer);
        $stat->hitLastTime = Db::prepareDateForDb(new \DateTime());
        $stat->handledByRetour = $handledInt;
        $stat->hitCount++;
        $stat->save();

        // After incrementing a statistic, trim the retour_stats db table
        $this->trimStatistics();
    }

    /**
     * Trim the retour_stats db table based on the statsStoredLimit config.php
     * setting
     *
     * @return void
     */
    public function trimStatistics()
    {
        $db = Craft::$app->getDb();
        $quotedTable = $db->quoteTableName('{{%retour_stats}}');
        $limit = Retour::$settings->statsStoredLimit;

        // As per https://stackoverflow.com/questions/578867/sql-query-delete-all-records-from-the-table-except-latest-n
        if (!empty($limit) && $limit) {
            try {
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
    }
}
