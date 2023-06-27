<?php

namespace nystudio107\retour\migrations;

use craft\db\Migration;

/**
 * m230627_141440_add_redirectMatchType_index migration.
 */
class m230627_141440_add_redirectMatchType_index extends Migration
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
        echo "m230627_141440_add_redirectMatchType_index cannot be reverted.\n";

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
            'redirectMatchType',
            false
        );
        $this->createIndex(
            $this->db->getIndexName(),
            '{{%retour_redirects}}',
            'redirectMatchType',
            false
        );
    }
}
