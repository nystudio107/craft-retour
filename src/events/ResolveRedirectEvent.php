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
 * @since     3.1.18
 */
class ResolveRedirectEvent extends ModelEvent
{
    // Properties
    // =========================================================================

    /**
     * @var string The full URL including hostname & protocol of the 404'd request
     */
    public string $fullUrl = '';

    /**
     * @var string The path of the 404'd request
     */
    public string $pathOnly = '';

    /**
     * @var null|string The URL that should be redirected to or null if no redirect
     *                  should take place
     */
    public ?string $redirectDestUrl = null;

    /**
     * @var int The http status code for this redirect; see https://httpstatuses.com/
     */
    public int $redirectHttpCode = 301;

    /**
     * @var null|int The siteId of the redirect (0 or null for all sites).
     */
    public ?int $siteId = null;
}
