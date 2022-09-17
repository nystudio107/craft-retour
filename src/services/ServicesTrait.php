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

use craft\helpers\ArrayHelper;
use nystudio107\pluginvite\services\VitePluginService;
use nystudio107\retour\assetbundles\retour\RetourAsset;
use yii\base\InvalidConfigException;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.2.3
 *
 * @property Events $events
 * @property Redirects $redirects
 * @property Statistics $statistics
 * @property VitePluginService $vite
 */
trait ServicesTrait
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function __construct($id, $parent = null, array $config = [])
    {
        // Merge in the passed config, so it our config can be overridden by Plugins::pluginConfigs['vite']
        // ref: https://github.com/craftcms/cms/issues/1989
        $config = ArrayHelper::merge([
            'components' => [
                'events' => Events::class,
                'redirects' => Redirects::class,
                'statistics' => Statistics::class,
                // Register the vite service
                'vite' => [
                    'class' => VitePluginService::class,
                    'assetClass' => RetourAsset::class,
                    'useDevServer' => true,
                    'devServerPublic' => 'http://localhost:3001',
                    'serverPublic' => 'http://localhost:8000',
                    'errorEntry' => 'src/js/Retour.js',
                    'devServerInternal' => 'http://craft-retour-buildchain:3001',
                    'checkDevServer' => true,
                ],
            ]
        ], $config);

        parent::__construct($id, $parent, $config);
    }

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
     * @return VitePluginService The events service
     * @throws InvalidConfigException
     */
    public function getVite(): VitePluginService
    {
        return $this->get('vite');
    }
}
