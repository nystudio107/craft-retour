<?php

namespace nystudio107\retour\migrations;

use craft\db\Migration;
use craft\helpers\Db;

/**
 * m181216_043222_rebuild_indexes migration.
 */
class m181216_043222_rebuild_indexes extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp(): bool
    {
        $this->dropIndexes();
        $this->createIndexes();

        return true;
    }

    /**
     * @return void
     */
    protected function dropIndexes()
    {
        Db::dropIndexIfExists('{{%retour_static_redirects}}', 'redirectSrcUrlParsed', true, $this->db);
        Db::dropIndexIfExists('{{%retour_redirects}}', 'redirectSrcUrlParsed', true, $this->db);
    }

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
    }

    /**
     * @inheritdoc
     */
    public function safeDown(): bool
    {
        echo "m181216_043222_rebuild_indexes cannot be reverted.\n";

        return false;
    }
}
