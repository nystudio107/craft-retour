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

namespace nystudio107\retour\services;

use nystudio107\retour\Retour;

use Craft;
use craft\base\Component;

use yii\caching\TagDependency;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class Redirects extends Component
{
    // Constants
    // =========================================================================

    const GLOBAL_REDIRECTS_CACHE_TAG = 'retour_redirects';

    // Protected Properties
    // =========================================================================

    /**
     * @var
     */
    protected $redirectsContainer;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
    }

    /**
     * Load in the redirects containers
     */
    public function loadRedirectsContainers()
    {
    }

    /**
     * Handle 404s by looking for redirects
     */
    public function handle404()
    {
    }

    /**
     * Invalidate all of the redirects caches
     */
    public function invalidateCaches()
    {
        $cache = Craft::$app->getCache();
        TagDependency::invalidate($cache, $this::GLOBAL_REDIRECTS_CACHE_TAG);
        Craft::info(
            'All redirect caches cleared',
            __METHOD__
        );
    }
}
