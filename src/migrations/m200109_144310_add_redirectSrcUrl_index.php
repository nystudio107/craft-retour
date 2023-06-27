<?php

namespace nystudio107\retour\migrations;

use craft\db\Migration;

/**
 * m200109_144310_add_redirectSrcUrl_index migration.
 */
class m200109_144310_add_redirectSrcUrl_index extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createIndexes();

        return true;
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m200109_144310_add_redirectSrcUrl_index cannot be reverted.\n";
        return false;
    }

    /**
     * @return void
     */
    protected function createIndexes()
    {
        $this->createIndex(
            $this->db->getIndexName(),
            '{{%retour_static_redirects}}',
            'redirectSrcUrl',
            false
        );

        $this->createIndex(
            $this->db->getIndexName(),
            '{{%retour_stats}}',
            'redirectSrcUrl',
            false
        );
    }
}
