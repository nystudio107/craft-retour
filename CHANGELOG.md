# Retour Changelog

## 3.1.73 - 2022.06.22
### Changed
* Removed the sub resource integrity on the built JavaScript, which could fail if systems were set up that manipulated the incoming JavaScript resources dynamically ([#229](https://github.com/nystudio107/craft-retour/issues/229))

## 3.1.72 - 2022.05.18
### Fixed
* Fixed an issue where the Dashboard didn't property narrow results down to the selected site, due to `moreParams` being saved in the object state ([#236](https://github.com/nystudio107/craft-retour/issues/236))
* Fixed an issue where the Redirects didn't property narrow results down to the selected site, due to `moreParams` being saved in the object state ([#235](https://github.com/nystudio107/craft-retour/issues/235))

## 3.1.71 - 2022.04.09
### Changed
* No longer trim `/` from URLs that are presented in the Retour Dashboard ([#227](https://github.com/nystudio107/craft-retour/issues/227))

## 3.1.70 - 2022.01.17

### Fixed

* Fixed a regression which would cause the **404 File Not Found URL** to not be displayed

## 3.1.69 - 2022.01.12

### Added

* Add `.gitattributes` & `CODEOWNERS`
* Add linting to build
* Add compression of assets
* Add bundle visualizer

## 3.1.68 - 2021.12.26

### Added

* Added the ability to add **307 - Temporary Redirect** and **308 - Permanent Redirect** status code
  redirects ([#216](https://github.com/nystudio107/craft-retour/issues/216))
* Added the ability to pass in a `site` handle via GraphQL to `retourRedirects()`
  or `retourResolveRedirect()` ([#215](https://github.com/nystudio107/craft-retour/issues/215))
* Return the `site` handle via GraphQL from queries to `retourRedirects()`
  or `retourResolveRedirect()` ([#215](https://github.com/nystudio107/craft-retour/issues/215))

### Changed

* Updated the buildchain to use Node 16
* Changed buildchain to Vite from webpack 5

### Fixed

* Fixed an issue that would cause the component state to not be saved properly if you clicked on the Reset
  button ([#214](https://github.com/nystudio107/craft-retour/issues/214))
* Fixed an issue where non-ASCII characters were stripped from display of URLs in the Retour Dashboard & Redirects
  pages ([#213](https://github.com/nystudio107/craft-retour/issues/213))

## 3.1.67 - 2021.11.16

### Added

* Added the `retourResolveRedirect` GraphQL query that should be used instead of the `retour` query.
* Added the `retourRedirects` GraphQL query that returns a list of all redirects for a given site.

### Changed

* The `retour` GraphQL query is now deprecated in favor of the `retourResolveRedirect` query.

## 3.1.66 - 2021.11.10

### Changed

* Truncate the column names displayed in the Import CSV function to 50 characters to prevent
  overrun ([#209](https://github.com/nystudio107/craft-retour/issues/209))

### Fixed

* Fixed an issue where the Import CSV function would display a blank screen if the CSV was
  malformed ([#209](https://github.com/nystudio107/craft-retour/issues/209))
* Fixed an issue with `$` being stripped from displayed
  URLs ([#206](https://github.com/nystudio107/craft-retour/issues/206))

## 3.1.65 - 2021.10.29

### Fixed

* Fixed a regression that could throw an exception during automatic Entry Redirect creation

## 3.1.64 - 2021.10.28

### Added

* Added a `beforeSaveEntryRedirect` event to allow you to hook in when an Entry Redirect is automatically created

### Fixed

* Catch Exception thrown by `Reader::createFromPath()` and use
  cache ([#205](https://github.com/nystudio107/craft-retour/pull/205)) ([#204](https://github.com/nystudio107/craft-retour/issues/204))

## 3.1.63 - 2021.10.25

### Added

* Added a `$siteId` property to `RedirectEvent`, `RedirectResolvedEvent`, and `ResolveRedirectEvent` to allow for custom
  logic based on the `siteId` ([#202](https://github.com/nystudio107/craft-retour/issues/202))

## 3.1.62 - 2021.09.29

### Added

* Default the newly created redirect based on the siteId of the 404 statistic, if it isn't the default
  site ([#201](https://github.com/nystudio107/craft-retour/issues/201))

### Fixed

* Fixed an issue where the statistics for redirects via headless requests were always recorded for site ID
  1 ([#201](https://github.com/nystudio107/craft-retour/issues/201))

## 3.1.61 - 2021.08.20

### Fixed

* Fixed an issue that could throw an error on CSV import if the match type column didn't exist in the imported
  file ([#116](https://github.com/nystudio107/retour/issues/116))
* Fixed a issue where custom delimeters were not respected for the column
  names ([#199](https://github.com/nystudio107/craft-retour/issues/199))

## 3.1.60 - 2021.08.17

### Security

* Fixed a potential XSS vulnerability with a malformed Referrer header

## 3.1.59 - 2021.08.13

### Fixed

* Fix an issue where `Undefined class constant ‘EVENT_REGISTER_GQL_SCHEMA_COMPONENTS` would be thrown if you were
  running Craft CMS < `^3.5.0` ([#198](https://github.com/nystudio107/craft-retour/issues/198))

## 3.1.58 - 2021.08.04

### Added

* Use the delimiter between data column setting (normally `,`) for exporting CSV files,
  too ([#194](https://github.com/nystudio107/craft-retour/issues/194))

### Changed

* Ensure the URLs are siteUrls and not cpUrls in the Dashboard table “go”
  arrow ([#192](https://github.com/nystudio107/craft-retour/issues/192))

### Fixed

* Fixed an issue where the saved component state could cause it to not display redirects after deleting one while
  filtering the view ([#196](https://github.com/nystudio107/craft-retour/issues/196))
*

## 3.1.57 - 2021.07.08

### Fixed

* Ignore the `numSelected` and `selectedIds` properties for the Dashboard Table component's save
  state ([#191](https://github.com/nystudio107/craft-retour/issues/191))

## 3.1.56 - 2021.07.07

### Added

* Added "Per-age" pagination controls for the Redirects page
* Added “500” option to Dashboard stats & Redirects "Per-page"

### Fixed

* The filter text that the table components remember between page load is now properly
  displayed ([#190](https://github.com/nystudio107/craft-retour/issues/190))
* Fixed an issue where the selected state was remembered after doing a bulk operation (such as
  Delete) ([#191](https://github.com/nystudio107/craft-retour/issues/191))

## 3.1.55 - 2021.07.02

### Added

* Added The delimiter between data column values for importing CSV files (
  normally `,`) ([#188](https://github.com/nystudio107/craft-retour/issues/188))
* Allow the choice of how many statistics per-page to
  display ([#185](https://github.com/nystudio107/craft-retour/issues/185))
* Both the Dashboard Statistics table and the Redirects Table now remember their
  state ([#189](https://github.com/nystudio107/craft-retour/issues/189))

### Changed

* If the redirectSrcUrl starts with `http`, default the match type
  to `fullurl` ([#187](https://github.com/nystudio107/craft-retour/issues/187))
* Update the 404 statistics for the path including the query string, if it hasn't been
  stripped ([#189](https://github.com/nystudio107/craft-retour/issues/189))

### Fixed

* Fix missing use clause

## 3.1.54 - 2021.06.12

### Added

* Add GraphQL schema components for Retour.

### Changed

* Ensure that the URI doesn't match an element URI before incrementing the 404 statistics via GraphQL
  query ([#177](https://github.com/nystudio107/craft-retour/issues/177))
* Switched documentation system to VitePress

## 3.1.53 - 2021.04.30

### Added

* Strip leading and trailing spaces off of all URLs ([#173](https://github.com/nystudio107/craft-retour/issues/173))

### Fixed

* Fixed an issue where clicking the Retour CP nav item would result in a 403 exception if the current user didn't have
  permission to view the Retour dashboard. ([#151](https://github.com/nystudio107/craft-retour/issues/151))

## 3.1.52 - 2021.04.06

### Added

* Added `make update` to update NPM packages
* Added `make update-clean` to completely remove `node_modules/`, then update NPM packages

### Changed

* Use Tailwind CSS `^2.1.0` with JIT

## 3.1.51 - 2021.03.29

### Changed

* Move the manifest service registration to the constructor

### Fixed

* Fixed an issue where the CSV import wouldn't work if you were using Composer 1.x, due to package version detection
  issues

## 3.1.50 - 2021.03.27

### Changed

* Allow for automatic redirect creation during bulk resaving operations
* More consistent `makefile` build commands
* Use Tailwind 2.x & `@tailwindcss/jit`
* Move settings from the `composer.json` “extra” to the plugin main class

### Fixed

* URL decode any Legacy URLs for any Exact Match redirects on
  save ([#166](https://github.com/nystudio107/craft-retour/issues/166))

## 3.1.49 - 2021.03.03

### Changed

* Dockerized the buildchain, using `craft-plugin-manifest` for the webpack HMR bridge

## 3.1.48 - 2021.02.27

### Added

* Added support for both 8.x and 9.x versions of `league/csv` for peer compatibility
* PHP 8 compatibility for the import/export functions via `league/csv` version `^9.0`

### Changed

* Ensure the URLs are siteUrls and not cpUrls in the Redirects table “go” arrow

## 3.1.47 - 2021.02.22

### Changed

* Updated build system infra

### Fixed

* Fixed an issue where 404 stats for pages without redirects in place do not increment via GraphQL

## 3.1.46 - 2021.02.02

### Changed

* Updated Axios to `^0.21.1`
* Updated to latest npm deps
* Rebuilt frontend assets

### Fixed

* Fixed an issue that could cause migration issues from Craft 2 to Craft 3.6,
  use `Use MigrationHelper::dropIndexIfExists()`

## 3.1.45 - 2020.12.10

### Changed

* Split out vendors & commons chunks
* Check for both types of preview requests on Craft 3.2 or later
* Invalidate Retour's caches when a redirect is saved
* Also invalidate the GraphQL caches on Craft CMS 3.3 or later if a Redirect is saved

### Fixed

* If a redirect is modified by a plugin event, save the changed redirect to the cache
* Handle no `siteId` being passed into a GraphQL query properly, by defaulting to either the current site, or the
  primary site
* Fixed an issue where the Dashboard filter didn’t work in combination with Handled / Not Handled

## 3.1.44 - 2020.12.08

### Changed

* Moved the CSS/JS buildchain over to webpack 5
* Updated to latest npm deps

## 3.1.43 - 2020.12.04

### Changed

* Don't add slashes to destination URLs that contain a query string, regardless of the `addTrailingSlashesToUrls`
  setting

## 3.1.42 - 2020.10.04

### Changed

* Rebuilt CP assets using latest deps
* Refactored to use `registerJsModules` macro for JS CP assets

### Fixed

* Fixed an issue that added a `/` to Reg Ex match destination URLs if you had the `addTrailingSlashesToUrls` General
  Config setting set to `true`

## 3.1.41 - 2020.07.30

### Fixed

* Added `craftcms/cms` back in as a dependency so Craft sees updates to the plugin again

### Changed

* Overwrite existing headers rather than adding to them with the **Additional Headers** setting

## 3.1.40 - 2020.07.05

### Added

* Added the Codeception testing framework to SEOmatic
* Added a Unit Test to Retour that executes on every push to GitHub to verify there are no regressions
  for ([#110](https://github.com/nystudio107/craft-retour/issues/110))
* Added the ability to import “hits” into a redirect
* Added a `EVENT_REDIRECT_RESOLVED` to allow plugins/modules to modify redirects that have been resolved.
* Added an “Additional Headers” setting that allows you to define additional headers that are added to the redirect
  response

### Fixed

* Fixed an issue where really long ALL CAPS column names would cause the Import UI to wrap

## 3.1.39 - 2020.06.08

### Added

* Added an API endpoint to allow the fetching of all of the Retour Redirects

## 3.1.38 - 2020.04.12

### Fixed

* Also explicitly remove `\n` and `\r` characters that might be in the redirected URL

## 3.1.37 - 2020.04.02

### Fixed

* Explicitly remove any newline characters that might be in the redirected URL
* Fixed an issue with the Dashboard Widget link not being right in certain configs

### Changed

* Updated to latest npm dependencies via `npm audit fix` for both the primary app and the docs

## 3.1.36 - 2020.03.24

### Fixed

* Fixed an issue where `$siteId` might not be typecast properly when coming from the database, causing PHP to throw an
  error
* Replaced the simple `//` -> `/` replacement with a regex, to fix an issue that could inadvertently affect the protocol
  portion of a destination URL

## 3.1.35 - 2020.03.16

### Fixed

* Fixes an issue where `UrlHelper::sanitizeUrl()` would return an empty string

## 3.1.34 - 2020.03.12

### Fixed

* Handle sanitizing URLs that have special characters such as `ü` in them
* Remove any double slashes from resolved RegEx redirects

## 3.1.33 - 2020.01.10

### Fixed

* Fixed an issue with the migration that happened for sites that were upgraded from Craft 2.x

## 3.1.32 - 2020.01.09

### Added

* Added URL sanitization to the redirect URL that Retour passes to `$response->redirect()`
* If `addTrailingSlashesToUrls` is set, add a slash to the end of  **Destination URL** if the URL is a site URL
* Added indexes for `redirectSrcUrl` in all tables to make queries perform better

## 3.1.31 - 2019.12.11

### Security

* Throw an exception if an invalid sort field is passed into the controller methods, to eliminate a low-impact SQL
  injection vulnerability

## 3.1.30 - 2019.12.09

### Added

* Added the ability to use [reference tags](https://docs.craftcms.com/v3/reference-tags.html) in the Destination URL

### Fixed

* Fixed a low-impact SQL injection vulnerability

## 3.1.29 - 2019.11.18

### Changed

* Added a `try` / `catch` around regular expression parsing to gracefully handle malformed input
* Log invalid regex's to `web.log`

### Fixed

* Fixed an issue where deleting statistics could throw an error

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

* Added a **Entry Redirects URL Match Type** setting so that full URLs can be used for the automatic Entry Redirects if
  you have a site that has a sub-directory as part of the `siteUrl`

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

* Fixed an issue where a spurious redirect was created for new entries on Craft 3.2 if **Create Entry Redirects** is
  enabled

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

* Added a Statistics Trimming Rate Limit that defaults to once per hour, to prevent the statistics trimming from
  impacting performance

## 3.1.13 - 2019.04.30

### Changed

* Fixed an issue with the widget icon not showing up properly
* Fixed an issue with non-admin users being unable to export statistics

## 3.1.12 - 2019.04.25

### Changed

* Fixes an issue where Retour would delete the first redirect with a `null` siteId, when saving a new redirect
  with `siteId` set

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

* Fixed an issue where an empty **Exclude Patterns** table and the use of Project Config on Craft 3.1 or later could
  cause an exception to be thrown when a 404 is thrown

## 3.1.8 - 2019.04.02

### Added

* Added the ability to exclude URIs from Retour completely via a series of RegEx

### Changed

* If Preserve Query String is on, make sure the path `p=` isn't part of it
* Don't log stats update errors, because it's pointless, and can report meaningless deadlock errors
* Ensure that a user has permission to access a site group to redirect something to it
* Fixed an issue where automatic redirects based on renamed entries didn't create the redirect for the right `siteId` in
  multi-site setups

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
* Added `beforeSaveRedirect` and `beforeSaveRedirect` events for plugin/module
  or [Webhooks](https://github.com/craftcms/webhooks) plugin use

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

* Added the recording of the **User Agent**, **Message**, **File Name**, and **Line No.** for each 404 exception via
  hovering over the 404 URL
* Added a **Preserve Query String** option to the Settings to allow the query string be preserved and passed along to
  the redirected URL
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
