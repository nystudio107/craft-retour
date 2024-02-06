<?php

namespace nystudio107\retour\migrations;

use craft\db\Migration;

/**
 * m181013_171315_truncate_match_type migration.
 */
class m181013_171315_truncate_match_type extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        // https://github.com/yiisoft/yii2/issues/4492
        if ($this->db->getIsPgsql()) {
            $this->alterColumn(
                '{{%retour_redirects}}',
                'redirectMatchType',
                $this->string(32)
            );
            $this->alterColumn(
                '{{%retour_redirects}}',
                'redirectMatchType',
                "SET DEFAULT 'exactmatch'"
            );
            $this->alterColumn(
                '{{%retour_static_redirects}}',
                'redirectMatchType',
                $this->string(32)
            );
            $this->alterColumn(
                '{{%retour_static_redirects}}',
                'redirectMatchType',
                "SET DEFAULT 'exactmatch'"
            );
        }
        if ($this->db->getIsMysql()) {
            $this->alterColumn(
                '{{%retour_redirects}}',
                'redirectMatchType',
                $this->string(32)->defaultValue('exactmatch')
            );
            $this->alterColumn(
                '{{%retour_static_redirects}}',
                'redirectMatchType',
                $this->string(32)->defaultValue('exactmatch')
            );
        }
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m181013_171315_truncate_match_type cannot be reverted.\n";

        return false;
    }
}
