<?php
/**
 * Retour plugin for Craft CMS
 *
 * Retour allows you to intelligently redirect legacy URLs, so that you don't
 * lose SEO value when rebuilding & restructuring a website
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2019 nystudio107
 */

namespace nystudio107\retour\gql\types;

use Craft;

use craft\gql\base\ObjectType;
use GraphQL\Type\Definition\ResolveInfo;

use nystudio107\retour\gql\interfaces\RetourInterface;

/**
 * Class RetourType
 *
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.26
 */
class RetourType extends ObjectType
{
    /**
     * @inheritdoc
     */
    public function __construct(array $config)
    {
        $config['interfaces'] = [
            RetourInterface::getType(),
        ];

        parent::__construct($config);
    }

    /**
     * @inheritdoc
     */
    protected function resolve(mixed $source, array $arguments, mixed $context, ResolveInfo $resolveInfo): mixed
    {
        $fieldName = $resolveInfo->fieldName;
        $result = $source[$fieldName] ?? '';
        // Handle the `site` virtual field
        if ($fieldName === 'site') {
            $result = null;
            $siteId = $source['siteId'] ?? null;
            if ($siteId) {
                $site = Craft::$app->getSites()->getSiteById($siteId);
                if ($site !== null) {
                    $result = $site->handle;
                }
            }
        }

        if (empty($result)) {
            $result = null;
        }

        return $result;
    }
}
