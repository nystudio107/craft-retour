<?php
/**
 * Retour plugin for Craft CMS 3.x
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace nystudio107\retour\records;

use nystudio107\retour\Retour;

use Craft;
use craft\db\ActiveRecord;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class Stats extends ActiveRecord
{
    // Public Static Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%retour_stats}}';
    }
}
