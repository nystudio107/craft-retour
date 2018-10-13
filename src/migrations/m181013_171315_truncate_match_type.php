<?php

namespace nystudio107\retour\migrations;

use Craft;
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
        $this->alterColumn(
            '{{%retour_redirects}}',
            'redirectMatchType',
            $this->string(16)->defaultValue('exactmatch')
        );
        $this->alterColumn(
            '{{%retour_static_redirects}}',
            'redirectMatchType',
            $this->string(16)->defaultValue('exactmatch')
        );
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
