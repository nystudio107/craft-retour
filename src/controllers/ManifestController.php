<?php

namespace nystudio107\retour\controllers;

use nystudio107\retour\assetbundles\retour\RetourAsset;

use Craft;
use craft\web\Controller;

use yii\web\Response;

class ManifestController extends Controller
{
    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array
     */
    protected $allowAnonymous = [
        'resource'
    ];

    // Public Methods
    // =========================================================================

    /**
     * Make webpack async bundle loading work out of published AssetBundles
     *
     * @param string $resourceType
     * @param string $fileName
     *
     * @return Response
     */
    public function actionResource(string $resourceType = '', string $fileName = ''): Response
    {
        $bundle = new RetourAsset();
        $baseAssetsUrl = Craft::$app->assetManager->getPublishedUrl(
            $bundle->sourcePath,
            true
        );
        $url = "{$baseAssetsUrl}/{$resourceType}/{$fileName}";

        return $this->redirect($url);
    }

    // Protected Methods
    // =========================================================================
}
