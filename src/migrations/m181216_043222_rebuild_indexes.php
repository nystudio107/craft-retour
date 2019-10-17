<?php

namespace nystudio107\retour\migrations;

use Craft;
use craft\db\Migration;

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
            $this->db->getIndexName(
                '{{%retour_static_redirects}}',
                'redirectSrcUrlParsed',
                false
            ),
            '{{%retour_static_redirects}}',
            'redirectSrcUrlParsed',
            false
        );

        $this->createIndex(
            $this->db->getIndexName(
                '{{%retour_redirects}}',
                'redirectSrcUrlParsed',
                false
            ),
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
        $this->dropIndex(
            $this->db->getIndexName(
                '{{%retour_static_redirects}}',
                'redirectSrcUrlParsed',
                true
            ),
            '{{%retour_static_redirects}}'
        );

        $this->dropIndex(
            $this->db->getIndexName(
                '{{%retour_redirects}}',
                'redirectSrcUrlParsed',
                true
            ),
            '{{%retour_redirects}}'
        );
    }
}
