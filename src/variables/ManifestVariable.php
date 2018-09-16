<?php

namespace nystudio107\retour\variables;

use nystudio107\retour\helpers\Manifest as ManifestHelper;
use nystudio107\retour\assetbundles\retour\RetourAsset;

use Craft;
use craft\helpers\Template;

class ManifestVariable
{
    // Protected Static Properties
    // =========================================================================

    protected static $config = [
        // File system path
        'basePath'     => '',
        // Manifest names
        'manifest'     => [
            'legacy' => 'manifest-legacy.json',
            'modern' => 'manifest.json',
        ],
        // Public server config
        'server'       => [
            'publicPath' => '/',
        ],
        // If `devMode` is on, use webpack-dev-server to all for HMR (hot module reloading)
        'useDevServer' => true,
        // webpack-dev-server config
        'devServer'    => [
            'manifestPath' => 'http://127.0.0.1:8080',
            'publicPath' => '',
        ],
    ];

    // Public Methods
    // =========================================================================

    /**
     * ManifestVariable constructor.
     */
    public function __construct()
    {
        $bundle = new RetourAsset();
        self::$config['basePath'] = Craft::getAlias($bundle->sourcePath);
    }

    /**
     * @param string $moduleName
     * @param bool   $async
     *
     * @return \Twig_Markup
     */
    public function includeCssModule(string $moduleName, bool $async = false): \Twig_Markup
    {
        return Template::raw(
            ManifestHelper::getCssModuleTags(self::$config, $moduleName, $async)
        );
    }

    /**
     * @param string $moduleName
     * @param bool   $async
     *
     * @return \Twig_Markup
     */
    public function includeJsModule(string $moduleName, bool $async = false): \Twig_Markup
    {
        return Template::raw(
            ManifestHelper::getJsModuleTags(self::$config, $moduleName, $async)
        );
    }

    /**
     * @return \Twig_Markup
     */
    public function includeSafariNomoduleFix(): \Twig_Markup
    {
        return Template::raw(
            ManifestHelper::getSafariNomoduleFix()
        );
    }
}
