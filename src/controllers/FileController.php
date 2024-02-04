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

namespace nystudio107\retour\controllers;

use Craft;
use craft\db\Query;
use craft\errors\MissingComponentException;
use craft\helpers\ArrayHelper;
use craft\helpers\UrlHelper;
use craft\web\Controller;
use League\Csv\AbstractCsv;
use League\Csv\Exception;
use League\Csv\Reader;
use League\Csv\Statement;
use League\Csv\Writer;
use nystudio107\retour\assetbundles\retour\RetourImportAsset;
use nystudio107\retour\helpers\FileLog;
use nystudio107\retour\helpers\MultiSite as MultiSiteHelper;
use nystudio107\retour\helpers\Permission as PermissionHelper;
use nystudio107\retour\helpers\Version as VersionHelper;
use nystudio107\retour\Retour;
use SplTempFileObject;
use yii\base\InvalidConfigException;
use yii\web\BadRequestHttpException;
use yii\web\ForbiddenHttpException;
use yii\web\NotFoundHttpException;
use yii\web\Response;
use yii\web\UploadedFile;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
class FileController extends Controller
{
    // Constants
    // =========================================================================

    protected const DOCUMENTATION_URL = 'https://github.com/nystudio107/craft-retour/';

    public const LOG_FILE_NAME = 'retour-csv-import-errors';

    protected const EXPORT_REDIRECTS_CSV_FIELDS = [
        'redirectSrcUrl' => 'Legacy URL Pattern',
        'redirectDestUrl' => 'Redirect To',
        'redirectMatchType' => 'Match Type',
        'redirectHttpCode' => 'HTTP Status',
        'siteId' => 'Site ID',
        'redirectSrcMatch' => 'Legacy URL Match Type',
        'hitCount' => 'Hits',
        'associatedElementId' => 'Short Link Element ID',
        'hitLastTime' => 'Last Hit',
        'priority' => 'Priority',
    ];

    protected const EXPORT_STATISTICS_CSV_FIELDS = [
        'redirectSrcUrl' => '404 File Not Found URL',
        'referrerUrl' => 'Last Referrer URL',
        'remoteIp' => 'Remote IP',
        'hitCount' => 'Hits',
        'hitLastTime' => 'Last Hit',
        'handledByRetour' => 'Handled',
        'siteId' => 'Site ID',
    ];

    protected const IMPORT_REDIRECTS_CSV_FIELDS = [
        'redirectSrcUrl',
        'redirectDestUrl',
        'redirectMatchType',
        'redirectHttpCode',
        'siteId',
        'redirectSrcMatch',
        'hitCount',
        'associatedElementId',
        'priority',
    ];

    // Protected Properties
    // =========================================================================

    protected array|bool|int $allowAnonymous = [];

    // Public Methods
    // =========================================================================

    /**
     * @throws BadRequestHttpException
     * @throws ForbiddenHttpException
     * @throws MissingComponentException
     */
    public function actionImportCsvColumns(): void
    {
        PermissionHelper::controllerPermissionCheck('retour:redirects');
        // If your CSV document was created or is read on a Macintosh computer,
        // add the following lines before using the library to help PHP detect line ending in Mac OS X
        if (!ini_get('auto_detect_line_endings')) {
            ini_set('auto_detect_line_endings', '1');
        }
        $csv = null;
        $this->requirePostRequest();
        $filename = Craft::$app->getRequest()->getRequiredBodyParam('filename');
        $columns = Craft::$app->getRequest()->getRequiredBodyParam('columns');
        $headers = null;
        // Log the import
        Filelog::delete(self::LOG_FILE_NAME);
        FileLog::create(self::LOG_FILE_NAME, 'nystudio107\retour\*');
        try {
            $csv = Reader::createFromPath($filename);
            $csv->setDelimiter(Retour::$settings->csvColumnDelimiter ?? ',');
            $headers = array_flip($csv->fetchOne(0));
        } catch (\Exception $e) {
            // If this throws an exception, try to read the CSV file from the data cache
            // This can happen on load balancer setups where the Craft temp directory isn't shared
            $cache = Craft::$app->getCache();
            $cachedFile = $cache->get($filename);
            if ($cachedFile !== false) {
                $csv = Reader::createFromString($cachedFile);
                try {
                    $csv->setDelimiter(Retour::$settings->csvColumnDelimiter ?? ',');
                } catch (Exception $e) {
                    Craft::error($e, __METHOD__);
                }
                $headers = array_flip($csv->fetchOne(0));
                $cache->delete($filename);
            } else {
                Craft::error("Could not import ${$filename} from the file system, or the cache.", __METHOD__);
            }
        }
        $hasErrors = false;
        // If we have headers, then we have a file, so parse it
        if ($csv && $headers) {
            switch (VersionHelper::getLeagueCsvVersion()) {
                case 8:
                    $hasErrors = $this->importCsvApi8($csv, $columns, $headers);
                    break;
                case 9:
                    $hasErrors = $this->importCsvApi9($csv, $columns, $headers);
                    break;
                default:
                    Craft::$app->getSession()->setNotice(Craft::t('retour', 'Unknown league/csv package API version'));
                    break;
            }
            @unlink($filename);
            Retour::$plugin->clearAllCaches();
            Craft::$app->getSession()->setNotice(Craft::t('retour', 'Redirects imported from CSV file.'));
        } else {
            Craft::$app->getSession()->setError(Craft::t('retour', 'Redirects could not be imported.'));
        }
        if ($hasErrors) {
            $this->redirect(UrlHelper::actionUrl('retour/file/display-errors'));
        } else {
            $this->redirect('retour/redirects');
        }
    }

    /**
     * @param AbstractCsv $csv
     * @param array $columns
     * @param array $headers
     * @return bool whether the import has any errors
     */
    protected function importCsvApi8(AbstractCsv $csv, array $columns, array $headers): bool
    {
        $hasErrors = false;
        /** @phpstan-ignore-next-line */
        $csv->setOffset(1);
        $columns = ArrayHelper::filterEmptyStringsFromArray($columns);
        $rowIndex = 1;
        /** @phpstan-ignore-next-line */
        $csv->each(function($row) use ($headers, $columns, &$rowIndex, &$hasErrors) {
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
            $redirectDump = print_r($redirectConfig, true);
            Craft::debug("-> ROW #$rowIndex contents: " . $redirectDump, __METHOD__);
            if (!Retour::$plugin->redirects->saveRedirect($redirectConfig)) {
                Craft::info("-> ROW #$rowIndex contents: " . $redirectDump, __METHOD__);
                $hasErrors = true;
            }
            $rowIndex++;

            return true;
        });

        return $hasErrors;
    }

    /**
     * @param Reader $csv
     * @param array $columns
     * @param array $headers
     * @return bool whether the import has any errors
     * @throws Exception
     */
    protected function importCsvApi9(Reader $csv, array $columns, array $headers): bool
    {
        $hasErrors = false;
        $stmt = (new Statement())
            ->offset(1);
        $rows = $stmt->process($csv);
        $columns = ArrayHelper::filterEmptyStringsFromArray($columns);
        $rowIndex = 1;
        foreach ($rows as $row) {
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
            $redirectDump = print_r($redirectConfig, true);
            Craft::debug("-> ROW #$rowIndex contents: " . $redirectDump, __METHOD__);
            if (!Retour::$plugin->redirects->saveRedirect($redirectConfig)) {
                Craft::info("-> ROW #$rowIndex contents: " . $redirectDump, __METHOD__);
                $hasErrors = true;
            }
            $rowIndex++;
        }

        return $hasErrors;
    }

    /**
     * @param string|null $siteHandle
     *
     * @return Response
     * @throws ForbiddenHttpException
     * @throws NotFoundHttpException
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
            '@nystudio107/retour/web/assets/dist',
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
        $siteHandleUri = Craft::$app->isMultiSite ? '/' . $siteHandle : '';
        $variables['crumbs'] = [
            [
                'label' => $pluginName,
                'url' => UrlHelper::cpUrl('retour'),
            ],
            [
                'label' => 'Redirects',
                'url' => UrlHelper::cpUrl('retour/redirects' . $siteHandleUri),
            ],
        ];
        $variables['docTitle'] = "{$pluginName} - Redirects - {$templateTitle}";
        $variables['selectedSubnavItem'] = 'redirects';

        // The CSV file
        $file = UploadedFile::getInstanceByName('file');
        if ($file !== null) {
            $filename = uniqid($file->name, true);
            $filePath = Craft::$app->getPath()->getTempPath() . DIRECTORY_SEPARATOR . $filename;
            $file->saveAs($filePath, false);
            // Also save the file to the cache as a backup way to access it
            $fileContents = @file_get_contents($filePath);
            if ($fileContents) {
                Craft::$app->getCache()->set($filePath, $fileContents);
            }
            // Read in the headers
            $csv = Reader::createFromPath($file->tempName);
            try {
                $csv->setDelimiter(Retour::$settings->csvColumnDelimiter ?? ',');
            } catch (Exception $e) {
                Craft::error($e, __METHOD__);
            }
            $headers = $csv->fetchOne(0);
            Craft::info(print_r($headers, true), __METHOD__);
            $variables['headers'] = $headers;
            $variables['filename'] = $filePath;
        }

        // Render the template
        return $this->renderTemplate('retour/import/index', $variables);
    }

    /**
     * Display the error log if something went wrong
     *
     * @return Response
     * @throws \yii\web\ForbiddenHttpException
     */
    public function actionDisplayErrors(): Response
    {
        $variables = [];
        PermissionHelper::controllerPermissionCheck('retour:redirects');
        $pluginName = Retour::$settings->pluginName;
        $templateTitle = Craft::t('retour', 'CSV File Import Errors');
        $view = Craft::$app->getView();
        // Asset bundle
        try {
            $view->registerAssetBundle(RetourImportAsset::class);
        } catch (InvalidConfigException $e) {
            Craft::error($e->getMessage(), __METHOD__);
        }
        $variables['baseAssetsUrl'] = Craft::$app->assetManager->getPublishedUrl(
            '@nystudio107/retour/web/assets/dist',
            true
        );
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
        // The error log
        $variables['errorLogContents'] = FileLog::getContents(self::LOG_FILE_NAME);

        // Render the template
        return $this->renderTemplate('retour/import/errors', $variables);
    }


    // Public Methods
    // =========================================================================

    /**
     * Export the statistics table as a CSV file
     *
     * @throws ForbiddenHttpException
     */
    public function actionExportStatistics(): void
    {
        PermissionHelper::controllerPermissionCheck('retour:redirects');
        //Allow the fields to be localized
        $fields = self::EXPORT_STATISTICS_CSV_FIELDS;
        foreach ($fields as $key => $field) {
            $fields[$key] = Craft::t('retour', $field);
        }
        $this->exportCsvFile('retour-statistics', '{{%retour_stats}}', $fields);
    }

    /**
     * @param string $filename
     * @param string $table
     * @param array $columns
     */
    protected function exportCsvFile(string $filename, string $table, array $columns): void
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
        $csv = Writer::createFromFileObject(new SplTempFileObject());
        try {
            $csv->setDelimiter(Retour::$settings->csvColumnDelimiter ?? ',');
        } catch (Exception $e) {
            Craft::error($e, __METHOD__);
        }
        $csv->insertOne(array_values($columns));
        $csv->insertAll($data);
        $csv->output($filename . '.csv');
        exit(0);
    }

    /**
     * Export the redirects table as a CSV file
     *
     * @throws ForbiddenHttpException
     */
    public function actionExportRedirects(): void
    {
        PermissionHelper::controllerPermissionCheck('retour:redirects');
        //Allow the fields to be localized
        $fields = self::EXPORT_REDIRECTS_CSV_FIELDS;
        foreach ($fields as $key => $field) {
            $fields[$key] = Craft::t('retour', $field);
        }
        $this->exportCsvFile('retour-redirects', '{{%retour_static_redirects}}', $fields);
    }
}
