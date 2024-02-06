<?php

namespace nystudio107\retour\helpers;

use craft\helpers\Gql as GqlHelper;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.54
 */
class Gql extends GqlHelper
{
    // Public Methods
    // =========================================================================

    public static function canQueryRetour(): bool
    {
        $allowedEntities = self::extractAllowedEntitiesFromSchema();

        return isset($allowedEntities['retour']);
    }
}
