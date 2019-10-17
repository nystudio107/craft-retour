<?php

namespace nystudio107\retour\migrations;

use Craft;
use craft\db\Migration;

/**
 * m181018_135656_add_redirect_status migration.
 */
class m181018_135656_add_redirect_status extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        if (!$this->db->columnExists('{{%retour_redirects}}', 'enabled')) {
            $this->addColumn(
                '{{%retour_redirects}}',
                'enabled',
                $this->boolean()->after('associatedElementId')->defaultValue(true)
            );
        }
        if (!$this->db->columnExists('{{%retour_static_redirects}}', 'enabled')) {
            $this->addColumn(
                '{{%retour_static_redirects}}',
                'enabled',
                $this->boolean()->after('associatedElementId')->defaultValue(true)
            );
        }
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m181018_135656_add_redirect_status cannot be reverted.\n";

        return false;
    }
}
