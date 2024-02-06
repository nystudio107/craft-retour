<?php
/**
 * Retour plugin for Craft CMS
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2018 nystudio107
 */

namespace nystudio107\retour\services;

use nystudio107\pluginvite\services\VitePluginService;
use nystudio107\retour\assetbundles\retour\RetourAsset;
use yii\base\InvalidConfigException;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     4.1.4
 *
 * @property Events $events
 * @property Redirects $redirects
 * @property Statistics $statistics
 * @property VitePluginService $vite
 */
trait ServicesTrait
{
    // Public Static Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function config(): array
    {
        // Constants aren't allowed in traits until PHP >= 8.2, and config() is called before __construct(),
        // so we can't extract it from the passed in $config
        $majorVersion = '4';
        // Dev server container name & port are based on the major version of this plugin
        $devPort = 3000 + (int)$majorVersion;
        $versionName = 'v' . $majorVersion;
        return [
            'components' => [
                'events' => Events::class,
                'redirects' => Redirects::class,
                'statistics' => Statistics::class,
                // Register the vite service
                'vite' => [
                    'assetClass' => RetourAsset::class,
                    'checkDevServer' => true,
                    'class' => VitePluginService::class,
                    'devServerInternal' => 'http://craft-retour-' . $versionName . '-buildchain-dev:' . $devPort,
                    'devServerPublic' => 'http://localhost:' . $devPort,
                    'errorEntry' => 'src/js/Retour.js',
                    'useDevServer' => true,
                ],
            ],
        ];
    }

    // Public Methods
    // =========================================================================

    /**
     * Returns the events service
     *
     * @return Events The events service
     * @throws InvalidConfigException
     */
    public function getEvents(): Events
    {
        return $this->get('events');
    }

    /**
     * Returns the redirects service
     *
     * @return Redirects The redirects service
     * @throws InvalidConfigException
     */
    public function getRedirects(): Redirects
    {
        return $this->get('redirects');
    }

    /**
     * Returns the statistics service
     *
     * @return Statistics The statistics service
     * @throws InvalidConfigException
     */
    public function getStatistics(): Statistics
    {
        return $this->get('statistics');
    }

    /**
     * Returns the vite service
     *
     * @return VitePluginService The vite service
     * @throws InvalidConfigException
     */
    public function getVite(): VitePluginService
    {
        return $this->get('vite');
    }
}
