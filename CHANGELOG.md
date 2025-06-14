# Retour Changelog

## 5.0.11 - 2025.06.13
### Changed
* Allow `RedirectEvent`s to change the redirect that is saved ([#342](https://github.com/nystudio107/craft-retour/issues/342))
* "Redirect To" links on the **Redirects** page are no longer relative, so they will work with non-standard Craft URL setups ([#341](https://github.com/nystudio107/craft-retour/issues/341))

### Fixed
* Don't append `/`'s errantly to URLs that have fragments in them if `addTrailingSlashesToUrls` is set to `true` in `config/general.php`
* Fixed an issue where GraphQL wouldn't return `redirectDestUrl` URLs with query strings in them ([#327](https://github.com/nystudio107/craft-retour/issues/327#issuecomment-2894811915))
* ShortLinks no longer attempt to localize the redirect value for translated fields ([#313](https://github.com/nystudio107/craft-retour/issues/313#issuecomment-2898486055))

## 5.0.10 - 2025.04.22
### Added
* Added the **Resolve Craft Sites** setting to allow user control over whether Craft sites should be factored in to destination URLs ([#334](https://github.com/nystudio107/craft-retour/issues/334))
* Added validation on Short Link fields so you cannot create one if the Short Link already exists at that URL ([#340](https://github.com/nystudio107/craft-retour/issues/340))

## 5.0.9 - 2024.04.03
### Changed
* Only look at adding site prefixes to `pathonly` redirects via GraphQL

### Fixed
* Fixed an issue with Postgres throwing a `PDOException` ([#336](https://github.com/nystudio107/craft-retour/issues/336))

## 5.0.8 - 2025.03.05
### Fixed
* Fixed an issue where redirects with a path site prefix were processed in the wrong order, and might not work as expected
* Fixed a logic error where query parameters with duplicate values could be removed from the resulting destination URL
* Destination URLs are no longer URL decoded _unless_ a malicious payload was stripped from them ([#330](https://github.com/nystudio107/craft-retour/issues/330))

## 5.0.7 - 2025.02.12
### Changed
* Update buildchain to Vite 6 & Tailwind CSS 4

### Fixed
* Fixed an issue where query strings and fragments could be stripped from the destination URL ([#327](https://github.com/nystudio107/craft-retour/issues/327))

## 5.0.6 - 2025.01.27
### Fixed
* Fixed an issue where redirects were not, in fact, redirecting with the appropriate site URL prefix as expected ([#325](https://github.com/nystudio107/craft-retour/issues/325))

## 5.0.5 - 2025.01.08
### Changed
* Fixed an issue where a GraphQL Retour query could return a URL with a `/` prefixed to it if the destination was a full URL ([#320](https://github.com/nystudio107/craft-retour/issues/320))

## 5.0.4 - 2024.12.14
### Changed
* Retour now strips site path prefixes from incoming 404 URL paths, such that redirects will work as expected (any Site sub-path prefix is ignored) ([#288](https://github.com/nystudio107/craft-retour/issues/288))
* Don't create automatic redirects for elements that are not enabled

### Fixed
* Fixed an issue where `410 Gone` redirects returned a generic browser error rather than a custom-defined Craft template ([#11](https://github.com/nystudio107/craft-retour/issues/311))
* Fixed an issue where an exception could be thrown if a Site had no `baseUrl` defined
* Normalize the incoming `url` and `path` so that `mergUrlWithPath()` handles edge-cases properly ([#1512](https://github.com/nystudio107/craft-seomatic/issues/1512))
* Fixed an issue where deprecation errors would occur when an element does not have a `uri` ([#317](https://github.com/nystudio107/craft-retour/issues/317))

## 5.0.3 - 2024.08.19
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
