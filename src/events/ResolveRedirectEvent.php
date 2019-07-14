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

use nystudio107\retour\models\StaticRedirects;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.18
 */
class ResolveRedirectEvent extends \yii\base\ModelEvent
{
    // Properties
    // =========================================================================

    /**
     * @var string The full URL including hostname & protocol of the 404'd request
     */
    public $fullUrl;

    /**
     * @var string The path of the 404'd request
     */
    public $pathOnly;

    /**
     * @var null|string The URL that should be redirected to or null if no redirect
     *                  should take place
     */
    public $redirectDestUrl;

    /**
     * @var int The http status code for this redirect; see https://httpstatuses.com/
     */
    public $redirectHttpCode = 301;
}
