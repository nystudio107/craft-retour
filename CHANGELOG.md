# Retour Changelog

## 3.1.29 - 2019.11.18
### Changed
* Added a `try` / `catch` around regular expression parsing to gracefully handle malformed input

## 3.1.28 - 2019.11.11
### Added
* Added the ability to bulk delete Statistics & Redirects
* Added the ability to display only handled or not handled statistics

## 3.1.27 - 2019.10.24
### Changed
* Added a CSV import field for **Legacy URL Match Type**
* Cleaned up the GraphQL type generator

## 3.1.26 - 2019.10.07
### Changed
* Added native GraphQL support

## 3.1.25 - 2019.09.27
### Changed
* Fixed an issue where the enabled/disabled status of a redirect wasn't correctly shown in the list view
* Fixed an issue where the IP address lookup was no longer working
* Added **Sites** to the Redirects table listing

## 3.1.24 - 2019.09.09
### Changed
* Replaced frontend api route with an actionUrl()

## 3.1.23 - 2019.08.21
### Added
* Added a **Entry Redirects URL Match Type** setting so that full URLs can be used for the automatic Entry Redirects if you have a site that has a sub-directory as part of the `siteUrl`

### Changed
* Updated assets build to update to the latest npm packages

## 3.1.22 - 2019.07.18
### Changed
* Proper fix for an issue that would cause uploading assets on Craft 3.2 to fail with "Asset is missing its folder ID" 

## 3.1.21 - 2019.07.18
### Changed
* Removed the pointless language switcher from the Import CSV File template
* Fixed an issue that would cause uploading assets on Craft 3.2 to fail with "Asset is missing its folder ID" 

## 3.1.20 - 2019.07.17
### Changed
* Fixed a regression that could throw an exception when an entry's slug is changed on pre-Craft 3.2

## 3.1.19 - 2019.07.17
### Changed
* Fixed an issue where a spurious redirect was created for new entries on Craft 3.2 if **Create Entry Redirects** is enabled

## 3.1.18 - 2019.07.15
### Added
* Added a `ResolveRedirectEvent` that modules/plugins can listen to if they want to resolve their own redirects

### Changed
* Store uploaded CSV files in the cache, as a fallback method to accessing it
* Handle `addTrailingSlashesToUrls` config setting for automatic slug change redirects

## 3.1.17 - 2019.07.10
### Changed
* Do not try to create automatic redirects for drafts and revisions in Craft 3.2 or later

## 3.1.16 - 2019.06.12
### Added
* Added GraphQL support so SPAs can give their content authors a way to manage 404s via the CP

### Changed
* Updated to Tailwind CSS `^1.0.0`
* Updated to the latest ApexCharts, fixed issues due to changed APIs
* Fixed an issue with really long field titles overflowing the Import CSV File UI

## 3.1.15 - 2019.05.21
### Changed
* Updated build system

## 3.1.14 - 2019.05.02
### Changed
* Added a Statistics Trimming Rate Limit that defaults to once per hour, to prevent the statistics trimming from impacting performance

## 3.1.13 - 2019.04.30
### Changed
* Fixed an issue with the widget icon not showing up properly
* Fixed an issue with non-admin users being unable to export statistics

## 3.1.12 - 2019.04.25
### Changed
* Fixes an issue where Retour would delete the first redirect with a `null` siteId, when saving a new redirect with `siteId` set

## 3.1.11 - 2019.04.22
### Changed
* Updated Twig namespacing to be compliant with deprecated class aliases in 2.7.x

## 3.1.10 - 2019.04.18
### Changed
* Make sure the URL we redirect to is a full URL, and is based on the defined `siteUrl`
* Migration for Retour widgets
* Added a **Dashboard Refresh Interval** control to let people choose the refresh interval (or disable it)
* Ensure the user has permission for a given site to be able to edit redirects for it

## 3.1.9 - 2019.04.09
### Changed
* Fixed an issue where an empty **Exclude Patterns** table and the use of Project Config on Craft 3.1 or later could cause an exception to be thrown when a 404 is thrown

## 3.1.8 - 2019.04.02
### Added
* Added the ability to exclude URIs from Retour completely via a series of RegEx

### Changed
* If Preserve Query String is on, make sure the path `p=` isn't part of it
* Don't log stats update errors, because it's pointless, and can report meaningless deadlock errors
* Ensure that a user has permission to access a site group to redirect something to it
* Fixed an issue where automatic redirects based on renamed entries didn't create the redirect for the right `siteId` in multi-site setups

## 3.1.7 - 2019.03.20
### Changed
* Fixed an issue with pagination of statistics and redirects when limiting them to a specific site
* Don't allow editing of the plugin settings if `allowAdminChanges` is false
* Record the user IP instead of Proxy IP
* Disable "Redirect To" link when there is a token in the destination url
* Display an error when a redirect is not saved because it'd create a redirect loop

## 3.1.6 - 2019.02.04
### Changed
* Reverted the semver on `league/csv` back to `^8.2` due to incompatible APIs
* Fixed an issue with a missing Dashboard icon

## 3.1.5 - 2019.01.23
### Changed
* Updated the semver on `league/csv` to `^8.2|^9.1`

## 3.1.4 - 2019.01.18
### Changed
* Fixed the breadcrumbs in the CP to respect the currently selected site

## 3.1.3 - 2019.01.10
### Changed
* Fixed an issue where the live reload of 404 data would cause the pagination to reset to viewing the first page

## 3.1.2 - 2019.01.03
### Changed
* Register cache options for every type of request
* Added `beforeSaveRedirect` and `beforeSaveRedirect` events for plugin/module or [Webhooks](https://github.com/craftcms/webhooks) plugin use

## 3.1.1 - 2018.12.19
### Changed
* For multi-site setups, auto-create slug redirects for the element's site only
* Fixed a minor JavaScript issue visible only in `webpack-dev-server`
* Updated the PostCSS build packages & config

## 3.1.0 - 2018.12.17
### Added
* Added the ability to have true multi-site capabilities, with redirects that only affect specific sites
* Added live refresh of the Dashboard data

## 3.0.18 - 2018.11.23
### Changed
* Fixed an issue with the charts controller for the Widget charts on Postgres
* Fixed an issue in Statistics.php with Postgres

## 3.0.17 - 2018.11.05
### Changed
* Fix missing welcome icon

## 3.0.16 - 2018.11.04
### Changed
* Fixed an issue with `trimStatistics()` if you're using Postgres
* Retooled the JavaScript build system to be more compatible with edge case server setups

## 3.0.15 - 2018.10.29
### Changed
* Handle a Retour return status > 400 to render the actual error template
* Fixed a console error in the Dashboard if no data was returned for a chart
* Updated the build system

## 3.0.14 - 2018-10-18
## Added
* Added the recording of the **User Agent**, **Message**, **File Name**, and **Line No.** for each 404 exception via hovering over the 404 URL
* Added a **Preserve Query String** option to the Settings to allow the query string be preserved and passed along to the redirected URL
* Added the ability to set whether redirects are **Enabled** or not, without deleting them

## 3.0.13 - 2018-10-17
### Changed
* Fixed an issue where the charts wouldn't generate properly if you were using MySQL 5.7 or later
* Fixed an issue with the charts not generating properly if you were using Postgres
* Fixed a padding issue with the widget chart

## 3.0.12 - 2018-10-14
### Added
* Added the ability to redirect based on **Path Only** or **Full URL**, to allow for site-specific redirects
* Added **Legacy URL Match Type** and **Remote IP** to the import and export fields

### Changed
* Trimmed the database tables to be more storage space efficient

## 3.0.11 - 2018-10-13
### Added
* Added **Remote IP** to the Dashboard statistics, with a link to look up a geo-location
* Added config setting for **Record Remote IP**

### Changed
* Fixed an issue where the search function wouldn't work in the Control Panel if you were using Postgres
* Fixed incorrect links to the documentation
* Fixed an issue where a user with the proper permissions could not save a new redirect
* Fixed the build process so it will no longer look for `devServer` on installs

## 3.0.10 - 2018-10-05
### Changed
* Updated build process

## 3.0.9 - 2018-09-24
### Changed
* Modernized package.json and webpack build

## 3.0.8 - 2018-09-20
### Changed
* Fixed a regression that caused you to be unable to click on a redirect to edit it
* Added automatic manifest cache invalidation

## 3.0.7 - 2018-09-19
### Added
* Added a `retour/stats/trim` console command to manually trim the statistics table

### Changed
* Added an **Automatically Trim Statistics** option (defaults to `true`) in Settings and `config.php`

## 3.0.6 - 2018-09-18
### Changed
* Fixed an issue when creating new redirects on a Postgres database
* Fixed a cosmetic issue where RegEx's with a `|` in them were not displayed correctly in the table
* Fixed an issue where the `+` add button didn't work right on some configurations

## 3.0.5 - 2018-09-14
### Changed
* Fixed an error with multi-site when an element existed on one site, but not the main site

## 3.0.4 - 2018-09-13
### Changed
* Fixed an issue where RegEx redirects would have the Destination URL overwritten by the parsed result after a hit
* Fixed an issue where cached resolved redirects would not increment statistics

## 3.0.3 - 2018-09-13
### Added
* Added documentation for User Group based Permissions in Retour

### Changed
* Fixed an issue with line endings for CSV files that were generated by Mac computers

## 3.0.2 - 2018-09-12
### Changed
* Fixed issues with the `+` and `x` URLs in the Control Panel not working as intended

## 3.0.1 - 2018-09-12
### Changed
* Fixed the CSV importer to it imports more than just the first entry in the CSV

## 3.0.0 - 2018-09-12
### Added
* Initial release
