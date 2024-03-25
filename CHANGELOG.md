# Retour Changelog

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
