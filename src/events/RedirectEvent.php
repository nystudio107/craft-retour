<?php
/**
 * Retour plugin for Craft CMS 3.x
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2019 nystudio107
 */

namespace nystudio107\retour\events;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.2
 */
class RedirectEvent extends \yii\base\ModelEvent
{
    // Properties
    // =========================================================================

    /**
     * @var bool Whether the redirect is brand new
     */
    public $isNew = false;

    /**
     * @var string The old URL
     */
    public $legacyUrl;

    /**
     * @var string The new URL
     */
    public $destinationUrl;

    /**
     * @var string The type of matching done on the legacyUrl
     */
    public $matchType;

    /**
     * @var string The type of redirect
     */
    public $redirectType;
}
