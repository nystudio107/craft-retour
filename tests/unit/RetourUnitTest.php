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

namespace nystudio107\retourtests\unit;

use nystudio107\retour\Retour;
use nystudio107\retour\helpers\UrlHelper;

use Craft;

use Codeception\Test\Unit;
use UnitTester;

/**
 * ExampleUnitTest
 *
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.40
 */
class RetourUnitTest extends Unit
{
    // Properties
    // =========================================================================

    /**
     * @var UnitTester
     */
    protected $tester;

    // Public methods
    // =========================================================================

    // Tests
    // =========================================================================

    /**
     * Test the sanitizeUrl() method to ensure it sanitizes URLs properly
     */
    public function testSanitizeUrl()
    {
        // Strip line feeds
        $this->assertSame(
            'One fish, Two fish, Red fish, Blue fish.',
            UrlHelper::sanitizeUrl(implode(
                "",
                [
                    "One fish, ",
                    PHP_EOL,
                    "Two fish, ",
                    "\r",
                    "Red fish, ",
                    "\n",
                    "Blue fish.",
                ]
            ))
        );
        // Strip Twig code
        $this->assertSame(
            '',
            UrlHelper::sanitizeUrl('{{ craft.app.config.general.actionTrigger }}')
        );
        // Strip object syntax Twig code
        $this->assertSame(
            '',
            UrlHelper::sanitizeUrl('{ craft.app.config.general.actionTrigger }')
        );
        // Strip URL-encoded Twig code
        $this->assertSame(
            '',
            UrlHelper::sanitizeUrl('%7B%7B%20craft.app.config.general.actionTrigger%20%7D%7D')
        );
        // Strip URL-encoded object syntax Twig code
        $this->assertSame(
            '',
            UrlHelper::sanitizeUrl('%7B%20craft.app.config.general.actionTrigger%20%7D')
        );
        // Strip HTML entity-encoded Twig code
        $this->assertSame(
            '',
            UrlHelper::sanitizeUrl('&#x7B;&#x7B;&#x20;&#x63;&#x72;&#x61;&#x66;&#x74;&#x2E;&#x61;&#x70;&#x70;&#x2E;&#x63;&#x6F;&#x6E;&#x66;&#x69;&#x67;&#x2E;&#x67;&#x65;&#x6E;&#x65;&#x72;&#x61;&#x6C;&#x2E;&#x61;&#x63;&#x74;&#x69;&#x6F;&#x6E;&#x54;&#x72;&#x69;&#x67;&#x67;&#x65;&#x72;&#x20;&#x7D;&#x7D;')
        );
        // Strip HTML entity-encoded object syntax Twig code
        $this->assertSame(
            '',
            UrlHelper::sanitizeUrl('&#x7B;&#x20;&#x63;&#x72;&#x61;&#x66;&#x74;&#x2E;&#x61;&#x70;&#x70;&#x2E;&#x63;&#x6F;&#x6E;&#x66;&#x69;&#x67;&#x2E;&#x67;&#x65;&#x6E;&#x65;&#x72;&#x61;&#x6C;&#x2E;&#x61;&#x63;&#x74;&#x69;&#x6F;&#x6E;&#x54;&#x72;&#x69;&#x67;&#x67;&#x65;&#x72;&#x20;&#x7D;')
        );
        // Strip HTML
        $this->assertSame(
            '/woof/hello',
            UrlHelper::sanitizeUrl('/woof/<blockquote>hello</blockquote>')
        );
    }
}
