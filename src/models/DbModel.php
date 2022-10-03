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

namespace nystudio107\retour\models;

use craft\base\Model;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class DbModel extends Model
{
    // Static Protected Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function __construct(array $config = [])
    {
        // Unset any deprecated properties
        self::cleanProperties(static::class, $config);
        parent::__construct($config);
    }

    // Public Methods
    // =========================================================================

    /**
     * Remove any properties that don't exist in the model
     *
     * @param string $class
     * @param array $config
     */
    protected static function cleanProperties(string $class, array &$config): void
    {
        foreach ($config as $propName => $propValue) {
            if (!property_exists($class, $propName)) {
                unset($config[$propName]);
            }
        }
    }
}
