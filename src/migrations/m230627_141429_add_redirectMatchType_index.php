<?php

namespace nystudio107\retour\migrations;

use craft\db\Migration;

/**
 * m230627_141429_add_redirectMatchType_index migration.
 */
class m230627_141429_add_redirectMatchType_index extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp(): bool
    {
        $this->createIndexes();

        return true;
    }

    /**
     * @return void
     */
    protected function createIndexes(): void
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

    /**
     * @inheritdoc
     */
    public function safeDown(): bool
    {
        echo "m230627_141429_add_redirectMatchType_index cannot be reverted.\n";
        return false;
    }
}
