<?php

namespace nystudio107\retour\migrations;

use craft\db\Migration;
use craft\helpers\MigrationHelper;

/**
 * m181216_043222_rebuild_indexes migration.
 */
class m181216_043222_rebuild_indexes extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->dropIndexes();
        $this->createIndexes();
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m181216_043222_rebuild_indexes cannot be reverted.\n";
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
     * @return void
     */
    protected function dropIndexes()
    {
        MigrationHelper::dropIndexIfExists('{{%retour_static_redirects}}', 'redirectSrcUrlParsed', true, $this);
        MigrationHelper::dropIndexIfExists('{{%retour_redirects}}', 'redirectSrcUrlParsed', true, $this);
    }
}
