# Retour Changelog

## 4.1.15 - 2024.02.05
### Added
* Add `phpstan` and `ecs` code linting
* Add `code-analysis.yaml` GitHub action

### Changed
* Switch over to Vite `^5.0.0` & Node `^20.0.0` for the buildchain
* Updated docs to use node 20 & a new sitemap plugin
* PHPstan code cleanup
* ECS code cleanup

### Fixed
* Fixed an issue that could cause an exception to be thrown if the **Preserve Query String** setting is on
* Fixed an issue where the filter controls didn't work properly for Short Links

## 4.1.14 - 2023.10.26
### Fixed
* Fixes issue where only first line of uploaded CSV is saved in cache in load balanced environment ([#286](https://github.com/nystudio107/craft-retour/pull/286))
* Strip off a leading `/` before making a site URL from a path, because otherwise `Craft.getUrl()` considers it an absolute URL and returns it ([#281](https://github.com/nystudio107/craft-retour/issues/281))

## 4.1.13 - 2023.08.15
### Added
* Add db index for `redirectMatchType` to help with query performance ([#282](https://github.com/nystudio107/craft-retour/issues/282))

### Changed
* Add permission fallback logic to the dashboard for Short Links access

### Security
* Fixed a potential XSS vulnerability with a malformed `referrer` header

## 4.1.12 - 2023.04.07
### Changed
* Enforce full URL matching for short links when used within a multi-site setup and enabling any of the content translation method for the field. ([#277](https://github.com/nystudio107/craft-retour/issues/277))

### Fixed
* Fixed a bug where short links would not work correctly within Matrix fields. ([#279](https://github.com/nystudio107/craft-retour/issues/279))
* Fixed a bug where short links would not be cleaned up appropriately when updating a Short Link value on an element. ([#277](https://github.com/nystudio107/craft-retour/issues/277))
* Fixed a bug where short links would not work correctly with multi-sites. ([#277](https://github.com/nystudio107/craft-retour/issues/277))

## 4.1.11 - 2023.03.07
### Added
* Added the ability to disable statistics recording entirely via `enableStatistics` in the `config.php` ([#272](https://github.com/nystudio107/craft-retour/pull/272))

### Changed
* Add versioning to the docs

### Fixed
* Fixed an issue where no events triggered when using `exactMatch` redirect ([#273](https://github.com/nystudio107/craft-retour/issues/273))
* Fixed a bug where deleting a revision would also delete all the short links associated with the element ([#270](https://github.com/nystudio107/craft-retour/issues/270))

## 4.1.10 - 2023.02.09
### Changed
* Use dynamic docker container name & port for the `buildchain`
* Update the `buildchain` to use Vite `^4.0.0`
* Refactored the docs buildchain to use a dynamic docker container setup

### Fixed
* Fixed an issue with the rebuild indexes migration ([#269](https://github.com/nystudio107/craft-retour/pull/269))

## 4.1.9 - 2022.12.08
### Fixed
* Added missing `priority` column to the `retour_static_redirects` too, in `Install.php` migration ([#262](https://github.com/nystudio107/craft-retour/issues/262))

## 4.1.8 - 2022.12.07
### Fixed
* Added missing `priority` column to the `Install.php` migration ([#262](https://github.com/nystudio107/craft-retour/issues/262))

## 4.1.7 - 2022.12.05
### Added
* Added the ability to set a **Priority** for regex redirects, so you have control over the order in which they execute ([#74](https://github.com/nystudio107/craft-retour/issues/74))

### Fixed
* Fixed an issue that would cause `getStaticRedirect()` to return a redirect regardless of whether or not it is enabled ([#260](https://github.com/nystudio107/craft-retour/issues/260))

## 4.1.6 - 2022.11.28
### Added
* Added `EVENT_BEFORE_DELETE_REDIRECT` & `EVENT_AFTER_DELETE_REDIRECT` events, so you can hook in before & after a redirect is deleted ([#259](https://github.com/nystudio107/craft-retour/issues/259))

### Changed
* Updated docs to use VitePress `^1.0.0-alpha.29`

### Fixed
* Fixed an issue with the console command throwing an exception due to an uninitialized typed property ([#257](https://github.com/nystudio107/craft-retour/issues/257))

## 4.1.5 - 2022.11.03
### Changed
 * Fixed HMR in local dev with explicit alias that resolves to the actual directory
* Add `import.meta.hot.accept` for entrypoint JavaScript for HMR

### Fixed
* Fixed an issue where the default value for `redirectHttpCode` would cause a validation error to be displayed when creating a new static redirect ([#255](https://github.com/nystudio107/craft-retour/issues/255))
* Fixed an issue where the default value for `redirectHttpCode` would cause importing a CSV file to fail if no `redirectHttpCode` was provided in the CSV file ([#253](https://github.com/nystudio107/craft-retour/issues/253))

## 4.1.4 - 2022.10.03
### Changed
* Move to using `ServicesTrait` and add getter methods for services
* Users must have permission to access Retour to be able to use the Retour widget ([#251](https://github.com/nystudio107/craft-retour/issues/251))

### Fixed
* Ensure that `$driver` is nullable in the install migration ([#252](https://github.com/nystudio107/craft-retour/issues/252)) ([#250](https://github.com/nystudio107/craft-retour/pull/250))

## 4.1.3 - 2022.09.14
### Changed
* Fixed an issue where element types that update their `uriFormat` directly rather than re-saving the elements will generate automatic element redirects ([#248](https://github.com/nystudio107/craft-retour/issues/248))
* Updated how Retour's components are registered, to allow for overriding via plugin config ([#1989](https://github.com/craftcms/cms/issues/1989)) ([#11039](https://github.com/craftcms/cms/pull/11039))
* Update the buildchain to use Vite `^3.1.0` for building frontend assets

## 4.1.2 - 2022.09.08
### Changed
* Whether a Short Link redirect is created for "All Sites" or on a per-site basis is now determined by the propagation method of the Short Link field
* Include "Short Link Element ID" in the CSV redirects export
* Allow for the localization of the exported redirects & statistics column names

### Fixed
* Fix improperly named field input template (casing) ([#247](https://github.com/nystudio107/craft-retour/pull/247))
* Editing a Short Link field's redirect in the CP now properly preserves its Short Link status, and redirects to the Short Links page

## 4.1.1 - 2022.09.02
### Fixed
* Fixed an issue that could cause redirects to not function as expected ([#245](https://github.com/nystudio107/craft-retour/issues/245))

## 4.1.0 - 2022.08.30
### Added
* Added the **Short Link** field type that allows content authors to add short link redirects in an entry
* Added translations in the Javascript views that Retour uses, allowing for better localization ([#222](https://github.com/nystudio107/craft-retour/issues/222))
* If a CSV import has errors, they are displayed on the frontend to make them easier to diagnose ([#219](https://github.com/nystudio107/craft-retour/issues/219))

### Changed
* Improved the performance when resolving exact match redirects by doing a database query. ([#217](https://github.com/nystudio107/craft-retour/pull/217))
* If the Preserve Query String plugin setting is enabled, query strings from the incoming request and the destination URL will be combined ([#242](https://github.com/nystudio107/craft-retour/issues/242))

## 4.0.2 - 2022.06.22
### Changed
* Removed the sub resource integrity on the built JavaScript, which could fail if systems were set up that manipulated the incoming JavaScript resources dynamically ([#229](https://github.com/nystudio107/craft-retour/issues/229))

## 4.0.1 - 2022.05.31
### Fixed
* Fixed a "must not be accessed before initialization" error that could occur using GraphQL ([#238](https://github.com/nystudio107/craft-retour/issues/238))

## 4.0.0 - 2022.05.18
### Added
* Initial release for Craft CMS 4

### Fixed
* Fixed an issue where the Dashboard didn't property narrow results down to the selected site, due to `moreParams` being saved in the object state ([#236](https://github.com/nystudio107/craft-retour/issues/236))
* Fixed an issue where the Redirects didn't property narrow results down to the selected site, due to `moreParams` being saved in the object state ([#235](https://github.com/nystudio107/craft-retour/issues/235))

## 4.0.0-beta.4 - 2022.04.09
### Changed
* No longer trim `/` from URLs that are presented in the Retour Dashboard ([#227](https://github.com/nystudio107/craft-retour/issues/227))
* Remove deprecated CraftQL support
* Remove unneeded feature checks based on Craft 3.x versions

### Fixed
* Fixed an issue where an exception could be thrown in production due to incompatible types

## 4.0.0-beta.3 - 2022.03.18

### Fixed

* Fix registering permissions ([#224](https://github.com/nystudio107/craft-retour/issues/224))

## 4.0.0-beta.2 - 2022.03.04

### Fixed

* Updated types for Craft CMS `4.0.0-alpha.1` via Rector

## 4.0.0-beta.1 - 2022.02.07

### Added

* Initial Craft CMS 4 compatibility
