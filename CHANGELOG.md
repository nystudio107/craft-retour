# Retour Changelog

## 3.0.0 - 2018-09-12
### Added
* Finalized documentation

## 3.0.0-beta.6 - 2018-09-12
### Added
* Automatically created redirects for elements that have their URI changed
* Redirect loop prevention by eliminating old redirects where the source url matches the new redirect's destination url

### Changed
* Fixed a type coercion issue which caused RegEx capture groups to not work
* Fixed an issue with the `+` button to add redirects not having the correct URL
* Fix the URI validator such that full URLs are not affected

## 3.0.0-beta.5 - 2018-09-11
### Changed
* Fixed the `+` link on the Statistics page
* Only validate URIs if the type is `exactmatch`

## 3.0.0-beta.4 - 2018-09-11
### Added
* Added sorting icons to the Dashboard and Redirects tables
* Added CSV file exporting for Statistics and Redirects

### Changed
* Better columns widths for the Redirects table
* Fixed the sorting by Handled in the Dashboard table
* Fixed an issue where editing a redirect would reset the Hits and Last Hit fields

## 3.0.0-beta.3 - 2018-09-10
### Added
* Added CSV importing with a GUI to pick the field mapping

## 3.0.0-beta.2 - 2018-09-10
### Changed
* Fixed an issue where the Settings page would throw an error if you didn't have SEOmatic installed
* Allow statistics trimming on Postgres db as well as MySQL

## 3.0.0-beta.1 - 2018-09-09
### Added
* Initial beta release
