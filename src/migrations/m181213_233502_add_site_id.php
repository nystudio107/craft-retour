<?php

namespace nystudio107\retour\migrations;

use craft\db\Migration;

/**
 * m181213_233502_add_site_id migration.
 */
class m181213_233502_add_site_id extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        // Drop the locale columns
        if ($this->db->columnExists('{{%retour_redirects}}', 'locale')) {
            $this->dropColumn(
                '{{%retour_redirects}}',
                'locale'
            );
        }
        if ($this->db->columnExists('{{%retour_static_redirects}}', 'locale')) {
            $this->dropColumn(
                '{{%retour_static_redirects}}',
                'locale'
            );
        }
        // Add in the siteId columns
        if (!$this->db->columnExists('{{%retour_redirects}}', 'siteId')) {
            $this->addColumn(
                '{{%retour_redirects}}',
                'siteId',
                $this->integer()->null()->after('uid')->defaultValue(null)
            );
        }
        if (!$this->db->columnExists('{{%retour_static_redirects}}', 'siteId')) {
            $this->addColumn(
                '{{%retour_static_redirects}}',
                'siteId',
                $this->integer()->null()->after('uid')->defaultValue(null)
            );
        }
        if (!$this->db->columnExists('{{%retour_stats}}', 'siteId')) {
            $this->addColumn(
                '{{%retour_stats}}',
                'siteId',
                $this->integer()->null()->after('uid')->defaultValue(null)
            );
        }
        // Add foreign keys
        $this->addForeignKeys();
        // Create indexes
        $this->createIndexes();
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m181213_233502_add_site_id cannot be reverted.\n";
        return false;
    }

    /**
     * @return void
     */
    protected function createIndexes()
    {
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
    protected function addForeignKeys()
    {
        $this->addForeignKey(
            $this->db->getForeignKeyName('{{%retour_static_redirects}}', 'siteId'),
            '{{%retour_static_redirects}}',
            'siteId',
            '{{%sites}}',
            'id',
            'CASCADE',
            'CASCADE'
        );

        $this->addForeignKey(
            $this->db->getForeignKeyName('{{%retour_stats}}', 'siteId'),
            '{{%retour_stats}}',
            'siteId',
            '{{%sites}}',
            'id',
            'CASCADE',
            'CASCADE'
        );
    }
}
