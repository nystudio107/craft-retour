<?php

namespace nystudio107\retourtests\unit;

use nystudio107\retour\Retour;
use nystudio107\retour\services\Redirects;

use Craft;

use Codeception\Test\Unit;
use UnitTester;

/**
 * Regression tests for multi-site redirect cache partitioning
 */
class RedirectsServiceCacheTest extends Unit
{
    protected UnitTester $tester;

    private Redirects $redirects;

    protected function _before(): void
    {
        parent::_before();
        $this->redirects = Retour::$plugin->redirects;
    }

    public function testSaveRedirectToCacheUsesExplicitSitePartition(): void
    {
        $sites = Craft::$app->getSites();
        $primarySiteId = (int)$sites->getPrimarySite()->id;
        $otherSiteId = $primarySiteId === 1 ? 2 : 1;

        $row = [
            'id' => 999001,
            'siteId' => $otherSiteId,
            'enabled' => 1,
            'redirectSrcUrl' => '/locations',
            'redirectSrcUrlParsed' => '/locations',
            'redirectSrcMatch' => 'pathonly',
            'redirectMatchType' => 'exactmatch',
            'redirectDestUrl' => '/our-locations',
            'redirectHttpCode' => 301,
        ];

        $path = '/locations';
        $this->redirects->saveRedirectToCache($path, $row, $otherSiteId);

        $fromPartition = $this->redirects->getRedirectFromCache($path, $otherSiteId);
        $this->assertIsArray($fromPartition);
        $this->assertSame($otherSiteId, (int)$fromPartition['siteId']);

        $wrongPartition = $this->redirects->getRedirectFromCache($path, $primarySiteId);
        $this->assertNotTrue((bool)$wrongPartition);
    }

    public function testFindRedirectMatchIgnoresCacheEntryForDifferentSite(): void
    {
        $sites = Craft::$app->getSites();
        $primarySiteId = (int)$sites->getPrimarySite()->id;
        $otherSiteId = $primarySiteId === 1 ? 2 : 1;

        $path = '/retour-cache-regression-' . bin2hex(random_bytes(4));
        $row = [
            'id' => 999002,
            'siteId' => $otherSiteId,
            'enabled' => 1,
            'redirectSrcUrl' => $path,
            'redirectSrcUrlParsed' => $path,
            'redirectSrcMatch' => 'pathonly',
            'redirectMatchType' => 'exactmatch',
            'redirectDestUrl' => '/somewhere-else',
            'redirectHttpCode' => 301,
        ];

        $this->redirects->saveRedirectToCache($path, $row, $primarySiteId);

        $match = $this->redirects->findRedirectMatch('https://example.test' . $path, $path, $primarySiteId);
        $this->assertNull($match);

        $stillPoisoned = $this->redirects->getRedirectFromCache($path, $primarySiteId);
        $this->assertNotTrue((bool)$stillPoisoned);
    }
}
