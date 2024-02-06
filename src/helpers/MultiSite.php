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
use craft\models\Site;
use yii\web\ForbiddenHttpException;
use yii\web\NotFoundHttpException;
use function count;
use function in_array;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class MultiSite
{
    // Constants
    // =========================================================================

    // Public Static Methods
    // =========================================================================

    /**
     * @param array $variables
     */
    public static function setSitesMenuVariables(array &$variables): void
    {
        // Set defaults based on the section settings
        $variables['sitesMenu'] = [
            0 => Craft::t(
                'retour',
                'All Sites'
            ),
        ];
        // Enabled sites
        $sites = Craft::$app->getSites();
        if (Craft::$app->getIsMultiSite()) {
            $editableSites = $sites->getEditableSiteIds();
            foreach ($sites->getAllGroups() as $group) {
                $groupSites = $sites->getSitesByGroupId($group->id);
                $variables['sitesMenu'][$group->name]
                    = ['optgroup' => $group->name];
                foreach ($groupSites as $groupSite) {
                    if (in_array($groupSite->id, $editableSites, false)) {
                        $variables['sitesMenu'][$groupSite->id] = $groupSite->name;
                    }
                }
            }
        }
    }

    /**
     * @param string $siteHandle
     * @param        $siteId
     * @param        $variables
     *
     * @throws ForbiddenHttpException
     */
    public static function setMultiSiteVariables($siteHandle, &$siteId, array &$variables): void
    {
        // Enabled sites
        $sites = Craft::$app->getSites();
        if (Craft::$app->getIsMultiSite()) {
            // Set defaults based on the section settings
            $variables['enabledSiteIds'] = [];
            $variables['siteIds'] = [];

            foreach ($sites->getEditableSiteIds() as $editableSiteId) {
                $variables['enabledSiteIds'][] = $editableSiteId;
                $variables['siteIds'][] = $editableSiteId;
            }

            // Make sure the $siteId they are trying to edit is in our array of editable sites
            if (!in_array($siteId, $variables['enabledSiteIds'], false)) {
                if (!empty($variables['enabledSiteIds'])) {
                    if ($siteId !== 0) {
                        $siteId = reset($variables['enabledSiteIds']);
                    }
                } else {
                    self::requirePermission('editSite:' . $siteId);
                }
            }
        }
        // Set the currentSiteId and currentSiteHandle
        $variables['currentSiteId'] = empty($siteId) ? 0 : $siteId;
        $variables['currentSiteHandle'] = empty($siteHandle)
            ? Craft::$app->getSites()->currentSite->handle
            : $siteHandle;

        // Page title
        $variables['showSites'] = (
            Craft::$app->getIsMultiSite() &&
            count($variables['enabledSiteIds'])
        );

        if ($variables['showSites']) {
            if ($variables['currentSiteId'] === 0) {
                $variables['sitesMenuLabel'] = Craft::t(
                    'retour',
                    'All Sites'
                );
            } else {
                $variables['sitesMenuLabel'] = Craft::t(
                    'site',
                    $sites->getSiteById((int)$variables['currentSiteId'])->name
                );
            }
        } else {
            $variables['currentSiteId'] = 0;
            $variables['sitesMenuLabel'] = '';
        }
    }

    /**
     * @param string $permissionName
     *
     * @throws ForbiddenHttpException
     */
    public static function requirePermission(string $permissionName): void
    {
        if (!Craft::$app->getUser()->checkPermission($permissionName)) {
            throw new ForbiddenHttpException('User is not permitted to perform this action');
        }
    }

    /**
     * Return a siteId from a siteHandle
     *
     * @param ?string $siteHandle
     *
     * @return int|null
     * @throws NotFoundHttpException
     */
    public static function getSiteIdFromHandle(?string $siteHandle): ?int
    {
        // Get the site to edit
        if ($siteHandle !== null) {
            $site = Craft::$app->getSites()->getSiteByHandle($siteHandle);
            if (!$site) {
                throw new NotFoundHttpException('Invalid site handle: ' . $siteHandle);
            }
            $siteId = $site->id;
        } else {
            $siteId = 0;
        }

        return $siteId;
    }

    // Protected Static Methods
    // =========================================================================
}
