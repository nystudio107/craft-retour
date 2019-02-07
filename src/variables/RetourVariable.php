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

namespace nystudio107\retour\variables;

use nystudio107\retour\Retour;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class RetourVariable extends ManifestVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Returns the list of matching schemes
     *
     * @return array
     */
    public function getMatchesList(): array
    {
        return Retour::$plugin->redirects->getMatchesList();
    }

    /**
     * Return the http status code
     *
     * @return int
     */
    public function getHttpStatus(): int
    {
        return http_response_code();
    }

    /**
     * Return whether we are running Craft 3.1 or later
     *
     * @return bool
     */
    public function craft31(): bool
    {
        return Retour::$craft31;
    }

}
