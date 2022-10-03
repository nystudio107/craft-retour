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

namespace nystudio107\retour\helpers;

use Craft;
use yii\web\ForbiddenHttpException;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class Permission
{
    // Constants
    // =========================================================================

    // Public Methods
    // =========================================================================

    /**
     * @param string $permission
     *
     * @throws ForbiddenHttpException
     */
    public static function controllerPermissionCheck(string $permission): void
    {
        if (($currentUser = Craft::$app->getUser()->getIdentity()) === null) {
            throw new ForbiddenHttpException('Your account has no identity.');
        }

        if (!$currentUser->can($permission)) {
            throw new ForbiddenHttpException("Your account doesn't have permission to assign access this resource.");
        }
    }

    // Protected Static Methods
    // =========================================================================
}
