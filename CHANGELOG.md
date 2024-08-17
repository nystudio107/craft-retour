# Retour Changelog

## 5.0.3 - UNRELEASED
### Fixed
* Fixed an issue where the "File Not Found URL" link could be wrong when clicked on in some multi-site setups ([#310](https://github.com/nystudio107/craft-retour/issues/310))

## 5.0.2 - 2024.06.24
### Added
* Separate out the plugin settings into **General**, **Statistics**, and **Advanced** tabs
* Added a **Set No-Cache Headers** setting (defaulting to on) to set `no-cache` headers on the redirect response to prevent client-side caching ([#306](https://github.com/nystudio107/craft-retour/issues/306))

### Changed
* When saving a redirect, Retour no longer deletes redirects that have the `redirectDestUrl` of the redirect being saved as their `redirectSrcUrl` ([#303](https://github.com/nystudio107/craft-retour/issues/303))

## 5.0.1 - 2024.06.19
### Added
* Added better inline preview support via `getPreviewHtml()`
* Support inline editing by implementing `InlineEditableFieldInterface`

### Changed
* Removed the now deprecated `getTableAttributeHtml` method in the Short Links field

### Fixed
* Fixed an issue where the "File Not Found URL" link could be wrong when clicked on in some multi-site setups ([#290](https://github.com/nystudio107/craft-retour/issues/290))
* Fixed an issue where Short Links wouldn't work properly if they were added to Asset elements ([#300](https://github.com/nystudio107/craft-retour/issues/300))
* Fixed an issue where a "Integrity constraint violation" error could occurr if malformed `redirectSrcUrl`s was introduced into the statistics table ([#305](https://github.com/nystudio107/craft-retour/issues/305))

## 5.0.0 - 2024.04.15
### Added
* Stable release for Craft CMS 5

### Fixed
* Fixed an issue where the down and up arrows were reversed for sorting purposes ([#299](https://github.com/nystudio107/craft-retour/issues/299))

## 5.0.0-beta.5 - 2024.03.25
### Fixed
* Fixed an issue with impropertly text-encoded characters in URLs potentially causing a db exception ([#291](https://github.com/nystudio107/craft-retour/issues/291))
* Fixed an issue where an empty redirect in the `excludePatterns` list could cause redirects to stop functioning, add logging when a redirect is excluded ([#297](https://github.com/nystudio107/craft-retour/issues/297))

## 5.0.0-beta.4 - 2024.02.09
### Fixed
* Fixed an issue with the Sites menu styling

## 5.0.0-beta.3 - 2024.02.09
### Added
* Added a custom Field icon

### Fixed
* Added  the unused `static` to the Tailwind CSS `blocklist` to avoid a name collision with a Craft CSS class ([#1412](https://github.com/nystudio107/craft-seomatic/issues/1412))

## 5.0.0-beta.2 - 2024.02.05
### Added
* Add `phpstan` and `ecs` code linting
* Add `code-analysis.yaml` GitHub action

### Changed
* PHPstan code cleanup
* ECS code cleanup

## 5.0.0-beta.1 - 2024.01.24
### Added
* Initial beta release for Craft CMS 5
