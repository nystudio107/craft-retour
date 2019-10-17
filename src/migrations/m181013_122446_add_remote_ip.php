<?php

namespace nystudio107\retour\migrations;

use Craft;
use craft\db\Migration;

/**
 * m181013_122446_add_remote_ip migration.
 */
class m181013_122446_add_remote_ip extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        if (!$this->db->columnExists('{{%retour_stats}}', 'remoteIp')) {
            $this->addColumn(
                '{{%retour_stats}}',
                'remoteIp',
                $this->string(45)->after('referrerUrl')->defaultValue('')
            );
        }
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m181013_122446_add_remote_ip cannot be reverted.\n";
        return false;
    }
}
