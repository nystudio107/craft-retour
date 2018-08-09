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

namespace nystudio107\retour\assetbundles\retour;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class RetourDashboardAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = '@nystudio107/retour/assetbundles/retour/dist';
        $this->depends = [
            CpAsset::class,
            RetourAsset::class
        ];
        $this->js = [
            'js/dashboard.js',
        ];

        parent::init();
    }
}
