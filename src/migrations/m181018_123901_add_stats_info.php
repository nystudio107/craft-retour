<?php

namespace nystudio107\retour\migrations;

use craft\db\Migration;

/**
 * m181018_123901_add_stats_info migration.
 */
class m181018_123901_add_stats_info extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp(): bool
    {
        if (!$this->db->columnExists('{{%retour_stats}}', 'exceptionFileLine')) {
            $this->addColumn(
                '{{%retour_stats}}',
                'exceptionFileLine',
                $this->integer(45)->after('remoteIp')->defaultValue(0)
            );
        }
        if (!$this->db->columnExists('{{%retour_stats}}', 'exceptionFilePath')) {
            $this->addColumn(
                '{{%retour_stats}}',
                'exceptionFilePath',
                $this->string(255)->after('remoteIp')->defaultValue('')
            );
        }
        if (!$this->db->columnExists('{{%retour_stats}}', 'exceptionMessage')) {
            $this->addColumn(
                '{{%retour_stats}}',
                'exceptionMessage',
                $this->string(255)->after('remoteIp')->defaultValue('')
            );
        }
        if (!$this->db->columnExists('{{%retour_stats}}', 'userAgent')) {
            $this->addColumn(
                '{{%retour_stats}}',
                'userAgent',
                $this->string(255)->after('remoteIp')->defaultValue('')
            );
        }

        return true;
    }

    /**
     * @inheritdoc
     */
    public function safeDown(): bool
    {
        echo "m181018_123901_add_stats_info cannot be reverted.\n";

        return false;
    }
}
