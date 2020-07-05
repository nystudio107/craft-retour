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

    const EXPORT_REDIRECTS_CSV_FIELDS = [
        'redirectSrcUrl' => 'Legacy URL Pattern',
        'redirectDestUrl' => 'Redirect To',
        'redirectMatchType' => 'Match Type',
        'redirectHttpCode' => 'HTTP Status',
        'siteId' => 'Site ID',
        'redirectSrcMatch' => 'Legacy URL Match Type',
        'hitCount' => 'Hits',
        'hitLastTime' => 'Last Hit',
    ];

    const EXPORT_STATISTICS_CSV_FIELDS = [
        'redirectSrcUrl' => '404 File Not Found URL',
        'referrerUrl' => 'Last Referrer URL',
        'remoteIp' => 'Remote IP',
        'hitCount' => 'Hits',
        'hitLastTime' => 'Last Hit',
        'handledByRetour' => 'Handled',
        'siteId' => 'Site ID',
    ];

    const IMPORT_REDIRECTS_CSV_FIELDS = [
        'redirectSrcUrl',
        'redirectDestUrl',
        'redirectMatchType',
        'redirectHttpCode',
        'siteId',
        'redirectSrcMatch',
        'hitCount'
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
        // If your CSV document was created or is read on a Macintosh computer,
        // add the following lines before using the library to help PHP detect line ending in Mac OS X
        if (!ini_get('auto_detect_line_endings')) {
            ini_set('auto_detect_line_endings', '1');
        }
        $this->requirePostRequest();
        $filename = Craft::$app->getRequest()->getRequiredBodyParam('filename');
        $columns = Craft::$app->getRequest()->getRequiredBodyParam('columns');
        $headers = null;
        $csv = Reader::createFromPath($filename);
        try {
            $headers = array_flip($csv->fetchOne(0));
        } catch (\Exception $e) {
            // If this throws an exception, try to read the CSV file from the data cache
            // This can happen on load balancer setups where the Craft temp directory isn't shared
            $cache = Craft::$app->getCache();
            $cachedFile = $cache->get($filename);
            if ($cachedFile !== false) {
                $csv = Reader::createFromString($cachedFile);
                $headers = array_flip($csv->fetchOne(0));
                $cache->delete($filename);
            } else {
                Craft::error("Could not import ${$filename} from the file system, or the cache.", __METHOD__);
            }
        }
        // If we have headers, then we have a file, so parse it
        if ($headers !== null) {
            $csv->setOffset(1);
            $columns = ArrayHelper::filterEmptyStringsFromArray($columns);
            $csv->each(function ($row) use ($headers, $columns) {
                $redirectConfig = [
                    'id' => 0,
                ];
                $index = 0;
                foreach (self::IMPORT_REDIRECTS_CSV_FIELDS as $importField) {
                    if (isset($columns[$index], $headers[$columns[$index]])) {
                        $redirectConfig[$importField] = empty($row[$headers[$columns[$index]]])
                            ? null
                            : $row[$headers[$columns[$index]]];
                    }
                    $index++;
                }
                Craft::debug('Importing row: '.print_r($redirectConfig, true), __METHOD__);
                Retour::$plugin->redirects->saveRedirect($redirectConfig);

                return true;
            });
            @unlink($filename);
            Retour::$plugin->clearAllCaches();
            Craft::$app->getSession()->setNotice(Craft::t('retour', 'Redirects imported from CSV file.'));
        } else {
            Craft::$app->getSession()->setError(Craft::t('retour', 'Redirects could not be imported.'));
        }

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
        // If your CSV document was created or is read on a Macintosh computer,
        // add the following lines before using the library to help PHP detect line ending in Mac OS X
        if (!ini_get('auto_detect_line_endings')) {
            ini_set('auto_detect_line_endings', '1');
        }
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
        $siteHandleUri = Craft::$app->isMultiSite ? '/'.$siteHandle : '';
        $variables['crumbs'] = [
            [
                'label' => $pluginName,
                'url' => UrlHelper::cpUrl('retour'),
            ],
            [
                'label' => 'Redirects',
                'url' => UrlHelper::cpUrl('retour/redirects'.$siteHandleUri),
            ],
        ];
        $variables['docTitle'] = "{$pluginName} - Redirects - {$templateTitle}";
        $variables['selectedSubnavItem'] = 'redirects';

        // The CSV file
        $file = UploadedFile::getInstanceByName('file');
        if ($file !== null) {
            $filename = uniqid($file->name, true);
            $filePath = Craft::$app->getPath()->getTempPath().DIRECTORY_SEPARATOR.$filename;
            $file->saveAs($filePath, false);
            // Also save the file to the cache as a backup way to access it
            $cache = Craft::$app->getCache();
            $fileHandle = fopen($filePath, 'r');
            if ($fileHandle) {
                $fileContents = fgets($fileHandle);
                if ($fileContents) {
                    $cache->set($filePath, $fileContents);
                }
                fclose($fileHandle);
            }
            // Read in the headers
            $csv = Reader::createFromPath($file->tempName);
            $headers = $csv->fetchOne(0);
            Craft::info(print_r($headers, true), __METHOD__);
            $variables['headers'] = $headers;
            $variables['filename'] = $filePath;
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
        PermissionHelper::controllerPermissionCheck('retour:redirects');
        $this->exportCsvFile('retour-statistics', '{{%retour_stats}}', self::EXPORT_STATISTICS_CSV_FIELDS);
    }

    /**
     * Export the redirects table as a CSV file
     *
     * @throws \yii\web\ForbiddenHttpException
     */
    public function actionExportRedirects()
    {
        PermissionHelper::controllerPermissionCheck('retour:redirects');
        $this->exportCsvFile('retour-redirects', '{{%retour_static_redirects}}', self::EXPORT_REDIRECTS_CSV_FIELDS);
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
        // If your CSV document was created or is read on a Macintosh computer,
        // add the following lines before using the library to help PHP detect line ending in Mac OS X
        if (!ini_get('auto_detect_line_endings')) {
            ini_set('auto_detect_line_endings', '1');
        }
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
