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

namespace nystudio107\retour\migrations;

use Craft;
use craft\db\Migration;
use nystudio107\retour\widgets\RetourWidget;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class Install extends Migration
{
    // Public Properties
    // =========================================================================

    /**
     * @var ?string The database driver to use
     */
    public ?string $driver = null;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function safeUp(): bool
    {
        $this->driver = Craft::$app->getConfig()->getDb()->driver;
        if ($this->createTables()) {
            $this->createIndexes();
            $this->addForeignKeys();
            // Refresh the db schema caches
            Craft::$app->db->schema->refresh();
            $this->insertDefaultData();
        }

        // Update retour widget type
        $this->update('{{%widgets}}', [
            'type' => RetourWidget::class,
        ], ['type' => 'Retour']);

        return true;
    }

    /**
     * @return bool
     */
    protected function createTables(): bool
    {
        $tablesCreated = false;

        $tableSchema = Craft::$app->db->schema->getTableSchema('{{%retour_redirects}}');
        if ($tableSchema === null) {
            $tablesCreated = true;
            $this->createTable(
                '{{%retour_redirects}}',
                [
                    'id' => $this->primaryKey(),
                    'dateCreated' => $this->dateTime()->notNull(),
                    'dateUpdated' => $this->dateTime()->notNull(),
                    'uid' => $this->uid(),

                    'siteId' => $this->integer()->null()->defaultValue(null),
                    'associatedElementId' => $this->integer()->notNull(),
                    'enabled' => $this->boolean()->defaultValue(true),
                    'redirectSrcUrl' => $this->string(255)->defaultValue(''),
                    'redirectSrcUrlParsed' => $this->string(255)->defaultValue(''),
                    'redirectSrcMatch' => $this->string(32)->defaultValue('pathonly'),
                    'redirectMatchType' => $this->string(32)->defaultValue('exactmatch'),
                    'redirectDestUrl' => $this->string(255)->defaultValue(''),
                    'redirectHttpCode' => $this->integer()->defaultValue(301),
                    'priority' => $this->integer()->null()->defaultValue(5),
                    'hitCount' => $this->integer()->defaultValue(1),
                    'hitLastTime' => $this->dateTime(),
                ]
            );
        }

        $tableSchema = Craft::$app->db->schema->getTableSchema('{{%retour_static_redirects}}');
        if ($tableSchema === null) {
            $tablesCreated = true;
            $this->createTable(
                '{{%retour_static_redirects}}',
                [
                    'id' => $this->primaryKey(),
                    'dateCreated' => $this->dateTime()->notNull(),
                    'dateUpdated' => $this->dateTime()->notNull(),
                    'uid' => $this->uid(),

                    'siteId' => $this->integer()->null()->defaultValue(null),
                    'associatedElementId' => $this->integer()->notNull(),
                    'enabled' => $this->boolean()->defaultValue(true),
                    'redirectSrcUrl' => $this->string(255)->defaultValue(''),
                    'redirectSrcUrlParsed' => $this->string(255)->defaultValue(''),
                    'redirectSrcMatch' => $this->string(32)->defaultValue('pathonly'),
                    'redirectMatchType' => $this->string(32)->defaultValue('exactmatch'),
                    'redirectDestUrl' => $this->string(255)->defaultValue(''),
                    'redirectHttpCode' => $this->integer()->defaultValue(301),
                    'priority' => $this->integer()->null()->defaultValue(5),
                    'hitCount' => $this->integer()->defaultValue(1),
                    'hitLastTime' => $this->dateTime(),
                ]
            );
        }

        $tableSchema = Craft::$app->db->schema->getTableSchema('{{%retour_stats}}');
        if ($tableSchema === null) {
            $tablesCreated = true;
            $this->createTable(
                '{{%retour_stats}}',
                [
                    'id' => $this->primaryKey(),
                    'dateCreated' => $this->dateTime()->notNull(),
                    'dateUpdated' => $this->dateTime()->notNull(),
                    'uid' => $this->uid(),

                    'siteId' => $this->integer()->null()->defaultValue(null),
                    'redirectSrcUrl' => $this->string(255)->defaultValue(''),
                    'referrerUrl' => $this->string(2000)->defaultValue(''),
                    'remoteIp' => $this->string(45)->defaultValue(''),
                    'userAgent' => $this->string(255)->defaultValue(''),
                    'exceptionMessage' => $this->string(255)->defaultValue(''),
                    'exceptionFilePath' => $this->string(255)->defaultValue(''),
                    'exceptionFileLine' => $this->integer()->defaultValue(0),
                    'hitCount' => $this->integer()->defaultValue(1),
                    'hitLastTime' => $this->dateTime(),
                    'handledByRetour' => $this->boolean()->defaultValue(false),
                ]
            );
        }

        return $tablesCreated;
    }

    // Protected Methods
    // =========================================================================

    /**
     * @return void
     */
    protected function createIndexes(): void
    {
        $this->createIndex(
            $this->db->getIndexName(),
            '{{%retour_static_redirects}}',
            'redirectSrcUrlParsed',
            false
        );

        $this->createIndex(
            $this->db->getIndexName(),
            '{{%retour_redirects}}',
            'redirectSrcUrlParsed',
            false
        );

        $this->createIndex(
            $this->db->getIndexName(),
            '{{%retour_static_redirects}}',
            'redirectSrcUrl',
            false
        );

        $this->createIndex(
            $this->db->getIndexName(),
            '{{%retour_redirects}}',
            'redirectSrcUrl',
            false
        );

        $this->createIndex(
            $this->db->getIndexName(),
            '{{%retour_stats}}',
            'redirectSrcUrl',
            false
        );

        $this->createIndex(
            $this->db->getIndexName(),
            '{{%retour_static_redirects}}',
            'redirectMatchType',
            false
        );

        $this->createIndex(
            $this->db->getIndexName(),
            '{{%retour_redirects}}',
            'redirectMatchType',
            false
        );

        $this->createIndex(
            $this->db->getIndexName(),
            '{{%retour_redirects}}',
            'siteId',
            false
        );

        $this->createIndex(
            $this->db->getIndexName(),
            '{{%retour_static_redirects}}',
            'siteId',
            false
        );

        $this->createIndex(
            $this->db->getIndexName(),
            '{{%retour_stats}}',
            'siteId',
            false
        );
    }

    /**
     * @return void
     */
    protected function addForeignKeys(): void
    {
        $this->addForeignKey(
            $this->db->getForeignKeyName(),
            '{{%retour_redirects}}',
            'associatedElementId',
            '{{%elements}}',
            'id',
            'CASCADE',
            'CASCADE'
        );

        $this->addForeignKey(
            $this->db->getForeignKeyName(),
            '{{%retour_static_redirects}}',
            'siteId',
            '{{%sites}}',
            'id',
            'CASCADE',
            'CASCADE'
        );

        $this->addForeignKey(
            $this->db->getForeignKeyName(),
            '{{%retour_stats}}',
            'siteId',
            '{{%sites}}',
            'id',
            'CASCADE',
            'CASCADE'
        );
    }

    /**
     * @return void
     */
    protected function insertDefaultData(): void
    {
    }

    /**
     * @inheritdoc
     */
    public function safeDown(): bool
    {
        $this->driver = Craft::$app->getConfig()->getDb()->driver;
        $this->removeTables();

        return true;
    }

    /**
     * @return void
     */
    protected function removeTables(): void
    {
        $this->dropTableIfExists('{{%retour_redirects}}');
        $this->dropTableIfExists('{{%retour_static_redirects}}');
        $this->dropTableIfExists('{{%retour_stats}}');
    }
}
