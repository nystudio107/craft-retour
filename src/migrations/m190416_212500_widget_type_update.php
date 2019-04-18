<?php

namespace nystudio107\retour\migrations;

use nystudio107\retour\widgets\RetourWidget;

use Craft;
use craft\db\Migration;

/**
 * m190416_212500_widget_type_update migration.
 */
class m190416_212500_widget_type_update extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        // Update retour widget type
        $this->update('{{%widgets}}', [
            'type' => RetourWidget::class
        ], ['type' => 'Retour']);

        return true;
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m190416_212500_widget_type_update cannot be reverted.\n";
        return false;
    }
}
