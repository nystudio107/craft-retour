<?php

namespace nystudio107\retour\migrations;

use craft\db\Migration;
use yii\base\NotSupportedException;

/**
 * m181013_122446_add_remote_ip migration.
 */
class m181013_122446_add_remote_ip extends Migration
{
    /**
     * @inheritdoc
     * @throws NotSupportedException
     */
    public function safeUp(): bool
    {
        if (!$this->db->columnExists('{{%retour_stats}}', 'remoteIp')) {
            $this->addColumn(
                '{{%retour_stats}}',
                'remoteIp',
                $this->string(45)->after('referrerUrl')->defaultValue('')
            );
        }

        return true;
    }

    /**
     * @inheritdoc
     */
    public function safeDown(): bool
    {
        echo "m181013_122446_add_remote_ip cannot be reverted.\n";
        return false;
    }
}
