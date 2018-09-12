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

namespace nystudio107\retour\controllers;

use nystudio107\retour\Retour;
use nystudio107\retour\assetbundles\retour\RetourImportAsset;
use nystudio107\retour\helpers\MultiSite as MultiSiteHelper;
use nystudio107\retour\helpers\Permission as PermissionHelper;

use Craft;
use craft\db\Query;
use craft\helpers\ArrayHelper;
use craft\helpers\UrlHelper;
use craft\web\Controller;

use yii\base\InvalidConfigException;
use yii\web\Response;
use yii\web\UploadedFile;

use League\Csv\Reader;
use League\Csv\Writer;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class FileController extends Controller
{
    // Constants
    // =========================================================================

    const DOCUMENTATION_URL = 'https://github.com/nystudio107/craft-retour/';

    const REDIRECTS_CSV_FIELDS = [
        'redirectSrcUrl' => 'Legacy URL Pattern',
        'redirectDestUrl' => 'Redirect To',
        'redirectMatchType' => 'Match Type',
        'redirectHttpCode' => 'HTTP Status',
        'hitCount' => 'Hits',
        'hitLastTime' => 'Last Hit',
    ];

    const STATISTICS_CSV_FIELDS = [
        'redirectSrcUrl' => '404 File Not Found URL',
        'referrerUrl' => 'Last Referrer URL',
        'hitCount' => 'Hits',
        'hitLastTime' => 'Last Hit',
        'handledByRetour' => 'Handled',
    ];

    // Protected Properties
    // =========================================================================

    protected $allowAnonymous = [];

    // Public Methods
    // =========================================================================

    /**
     * @throws \yii\web\BadRequestHttpException
     * @throws \yii\web\ForbiddenHttpException
     * @throws \craft\errors\MissingComponentException
     */
    public function actionImportCsvColumns()
    {
        PermissionHelper::controllerPermissionCheck('retour:redirects');
        $this->requirePostRequest();
        $filename = Craft::$app->getRequest()->getRequiredBodyParam('filename');
        $columns = Craft::$app->getRequest()->getRequiredBodyParam('columns');
        $csv = Reader::createFromPath($filename);
        $headers = array_flip($csv->fetchOne(0));
        $csv->setOffset(1);
        $columns = ArrayHelper::filterEmptyStringsFromArray($columns);
        $csv->each(function ($row) use ($headers, $columns) {
            $redirectConfig = [
                'id' => 0,
            ];
            if (isset($columns[0], $headers[$columns[0]])) {
                $redirectConfig['redirectSrcUrl'] = $row[$headers[$columns[0]]] ?? null;
            }
            if (isset($columns[1], $headers[$columns[1]])) {
                $redirectConfig['redirectDestUrl'] = $row[$headers[$columns[1]]] ?? null;
            }
            if (isset($columns[2], $headers[$columns[2]])) {
                $redirectConfig['redirectMatchType'] = $row[$headers[$columns[2]]] ?? null;
            }
            if (isset($columns[3], $headers[$columns[3]])) {
                $redirectConfig['redirectHttpCode'] = $row[$headers[$columns[3]]] ?? null;
            }
            Retour::$plugin->redirects->saveRedirect($redirectConfig);
        });

        @unlink($filename);
        Retour::$plugin->clearAllCaches();
        Craft::$app->getSession()->setNotice(Craft::t('retour', 'Redirects imported from CSV file.'));

        $this->redirect('retour/redirects');
    }

    /**
     * @param string|null $siteHandle
     *
     * @return Response
     * @throws \yii\web\ForbiddenHttpException
     * @throws \yii\web\NotFoundHttpException
     */
    public function actionImportCsv(string $siteHandle = null): Response
    {
        $variables = [];
        PermissionHelper::controllerPermissionCheck('retour:redirects');
        // Get the site to edit
        $siteId = MultiSiteHelper::getSiteIdFromHandle($siteHandle);
        $pluginName = Retour::$settings->pluginName;
        $templateTitle = Craft::t('retour', 'Import CSV File');
        $view = Craft::$app->getView();
        // Asset bundle
        try {
            $view->registerAssetBundle(RetourImportAsset::class);
        } catch (InvalidConfigException $e) {
            Craft::error($e->getMessage(), __METHOD__);
        }
        $variables['baseAssetsUrl'] = Craft::$app->assetManager->getPublishedUrl(
            '@nystudio107/retour/assetbundles/retour/dist',
            true
        );
        // Enabled sites
        MultiSiteHelper::setMultiSiteVariables($siteHandle, $siteId, $variables);
        $variables['controllerHandle'] = 'file';

        // Basic variables
        $variables['fullPageForm'] = true;
        $variables['docsUrl'] = self::DOCUMENTATION_URL;
        $variables['pluginName'] = $pluginName;
        $variables['title'] = $templateTitle;
        $variables['crumbs'] = [
            [
                'label' => $pluginName,
                'url' => UrlHelper::cpUrl('retour'),
            ],
            [
                'label' => 'Redirects',
                'url' => UrlHelper::cpUrl('retour/redirects'),
            ],
        ];
        $variables['docTitle'] = "{$pluginName} - Redirects - {$templateTitle}";
        $variables['selectedSubnavItem'] = 'redirects';

        // The CSV file
        $file = UploadedFile::getInstanceByName('file');
        if ($file !== null) {
            $filename = Craft::$app->getPath()->getTempPath().DIRECTORY_SEPARATOR.uniqid($file->name, true);
            $file->saveAs($filename, false);
            $csv = Reader::createFromPath($file->tempName);
            $headers = $csv->fetchOne(0);
            Craft::info(print_r($headers, true), __METHOD__);
            $variables['headers'] = $headers;
            $variables['filename'] = $filename;
        }

        // Render the template
        return $this->renderTemplate('retour/import/index', $variables);
    }

    /**
     * Export the statistics table as a CSV file
     *
     * @throws \yii\web\ForbiddenHttpException
     */
    public function actionExportStatistics()
    {
        PermissionHelper::controllerPermissionCheck('retour:statistics');
        $this->exportCsvFile('retour-statistics', '{{%retour_stats}}', self::STATISTICS_CSV_FIELDS);
    }

    /**
     * Export the statistics table as a CSV file
     *
     * @throws \yii\web\ForbiddenHttpException
     */
    public function actionExportRedirects()
    {
        PermissionHelper::controllerPermissionCheck('retour:redirects');
        $this->exportCsvFile('retour-redirects', '{{%retour_static_redirects}}', self::REDIRECTS_CSV_FIELDS);
    }

    // Public Methods
    // =========================================================================

    /**
     * @param string $filename
     * @param string $table
     * @param array  $columns
     */
    protected function exportCsvFile(string $filename, string $table, array $columns)
    {
        // Query the db table
        $data = (new Query())
            ->from([$table])
            ->select(array_keys($columns))
            ->orderBy('hitCount DESC')
            ->all();
        // Create our CSV file writer
        $csv = Writer::createFromFileObject(new \SplTempFileObject());
        $csv->insertOne(array_values($columns));
        $csv->insertAll($data);
        $csv->output($filename.'.csv');
        exit(0);
    }
}
