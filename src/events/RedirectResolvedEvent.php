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

use nystudio107\retour\models\StaticRedirects;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.40
 */
class RedirectResolvedEvent extends ResolveRedirectEvent
{
    // Properties
    // =========================================================================

    /**
     * @var StaticRedirects|array|null The redirect that was resolved
     */
    public StaticRedirects|array|null $redirect = null;
}
