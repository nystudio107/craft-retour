<?php

namespace nystudio107\retour\migrations;

use Craft;
use craft\db\Migration;

/**
 * m181013_202455_add_redirect_src_match migration.
 */
class m181013_202455_add_redirect_src_match extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        if (!$this->db->columnExists('{{%retour_redirects}}', 'redirectSrcMatch')) {
            $this->addColumn(
                '{{%retour_redirects}}',
                'redirectSrcMatch',
                $this->string(32)->after('redirectSrcUrlParsed')->defaultValue('pathonly')
            );
        }
        if (!$this->db->columnExists('{{%retour_static_redirects}}', 'redirectSrcMatch')) {
            $this->addColumn(
                '{{%retour_static_redirects}}',
                'redirectSrcMatch',
                $this->string(32)->after('redirectSrcUrlParsed')->defaultValue('pathonly')
            );
        }
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m181013_202455_add_redirect_src_match cannot be reverted.\n";
        return false;
    }
}
