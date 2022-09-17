<?php
/**
 * Retour plugin for Craft CMS
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2019 nystudio107
 */

namespace nystudio107\retour\events;

use yii\base\ModelEvent;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.2
 */
class RedirectEvent extends ModelEvent
{
    // Properties
    // =========================================================================

    /**
     * @var bool Whether the redirect is brand new
     */
    public bool $isNew = false;

    /**
     * @var string The old URL
     */
    public string $legacyUrl = '';

    /**
     * @var string The new URL
     */
    public string $destinationUrl = '';

    /**
     * @var string The type of matching done on the legacyUrl
     */
    public string $matchType = '';

    /**
     * @var string The type of redirect
     */
    public string $redirectType = '';

    /**
     * @var null|int The siteId of the redirect (0 or null for all sites).
     */
    public ?int $siteId = null;
}
