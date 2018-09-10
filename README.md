[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/nystudio107/craft-retour/badges/quality-score.png?b=v3)](https://scrutinizer-ci.com/g/nystudio107/craft-retour/?branch=v3) [![Code Coverage](https://scrutinizer-ci.com/g/nystudio107/craft-retour/badges/coverage.png?b=v3)](https://scrutinizer-ci.com/g/nystudio107/craft-retour/?branch=v3) [![Build Status](https://scrutinizer-ci.com/g/nystudio107/craft-retour/badges/build.png?b=v3)](https://scrutinizer-ci.com/g/nystudio107/craft-retour/build-status/v3) [![Code Intelligence Status](https://scrutinizer-ci.com/g/nystudio107/craft-retour/badges/code-intelligence.svg?b=v3)](https://scrutinizer-ci.com/code-intelligence)

# Retour plugin for Craft CMS 3.x

Retour allows you to intelligently redirect legacy URLs, so that you don't lose SEO value when rebuilding & restructuring a website

![Screenshot](resources/img/plugin-banner.jpg)

Related: [Retour for Craft 2.x](https://github.com/nystudio107/retour)

**Note**: _The license fee for this plugin is $59.00 via the Craft Plugin Store._

## Used By

![Screenshot](resources/img/moz-logo-blue.png)![Screenshot](resources/img/craft-cms-logo.png)

Retour is the 404 redirect handling tool that the SEO experts at [Moz.com](https://moz.com/) and the creators of Craft CMS, Pixel & Tonic, rely on.

## Beta Notes

Like any software, this beta version of Retour may have bugs. Please report any problems you may find on the [Retour Issues page](https://github.com/nystudio107/craft-retour/issues), and we'll get them addressed quickly.

The following things are not fully implemented for the beta:

* Redirects are not automatically created when entry slugs are renamed
* Export CSV
* Import CSV
* Dynamic redirects
* This documentation

There are entries on the [Retour Issues page](https://github.com/nystudio107/craft-retour/issues) that you can use to check on the status of the beta.

### Upgrading from Retour 1.x for Craft CMS 2.x

Even though this version of Retour was entirely rewritten for Craft CMS 3, it was designed to use all of the same data used by the Craft CMS 2.x version of Retour.

So any existing redirects and statistics will continue to be in place.

## Requirements

This plugin requires Craft CMS 3.0.0 or later.

## Installation

To install the plugin, follow these instructions.

1. Open your terminal and go to your Craft project:

        cd /path/to/project

2. Then tell Composer to load the plugin:

        composer require nystudio107/craft-retour

3. In the Control Panel, go to Settings → Plugins and click the “Install” button for Retour.

You can also install Retour via the **Plugin Store** in the Craft AdminCP.

## Retour Overview

Retour allows you to intelligently redirect legacy URLs, so that you don't lose SEO value when rebuilding & restructuring a website.

In addition to supporting traditional exact and RegEx matching of URL patterns, Retour also has a Retour Redirect FieldType that you can add to your entries. This allows you to have dynamic entry redirects that have access to the data in your entries when matching URL patterns.

Retour will also automatically create a redirect for you if you change an entry's slug, or move an entry around in a Structure.

Retour is written to be performant. There is no impact on your website's performance until a 404 exception happens; and even then the resulting matching happens with minimal impact.

Don't just rebuild a website. Transition it with Retour.

## Why Use a Plugin for Redirects?

If you have just a few static redirects, then your best bet is to put them in your `.htaccess` file, or better yet, in your `.conf` file for your virtual host.  However, there are a number of cases where using a plugin to handle it is a **better** solution:

1. If you have a large number of redirects, it will slow down every single request your web server handles unnecessarily if they are in `.htaccess` or `.conf`
2. Often the URL patterns from the legacy website do not match the new website URLs in a deterministic way, which makes creating redirects difficult
3. Sometimes you don't have access to the server config files, or you want to give your client the ability to manage redirects easily

Retour solves these problems:

1. Retour only attempts to do a redirect after the web server has already thrown a 404 exception.  Once a redirect mapping is successfully determined, it also caches the result for speedy resolution of the next redirect request.
2. Retour also gives you the ability to do Dynamic Entry Redirects that allow you to import a piece of legacy data into your entries to use as a key for determining the new URL mapping.  In this way, utterly dissimilar URLs can be mapped for redirection effectively.
3. It provides an easy to use GUI that the client can use from Craft's AdminCP, and keeps statistics on the 404 hits (and misses)

### A Word about .htaccess

People using the Apache webserver are familiar with the `.htaccess` file, and may even be using it for redirects.  It's very likely that you should not be using `.htaccess` at all; instead you should disable `.htaccess` via `AllowOverride none` and make your configuration changes in your webserver configuration files.  From [Apache HTTP Server Tutorial: .htaccess files](https://httpd.apache.org/docs/current/howto/htaccess.html)

    There are two main reasons to avoid the use of .htaccess files.

    The first of these is performance. When AllowOverride is set to allow the
    use of .htaccess files, httpd will look in every directory for .htaccess
    files. Thus, permitting .htaccess files causes a performance hit, whether or
    not you actually even use them! Also, the .htaccess file is loaded every
    time a document is requested.

    Further note that httpd must look for .htaccess files in all higher-level
    directories, in order to have a full complement of directives that it must
    apply. (See section on how directives are applied.) Thus, if a file is
    requested out of a directory /www/htdocs/example, httpd must look for the
    following files:

    /.htaccess
    /www/.htaccess
    /www/htdocs/.htaccess
    /www/htdocs/example/.htaccess

    And so, for each file access out of that directory, there are 4 additional
    file-system accesses, even if none of those files are present. (Note that
    this would only be the case if .htaccess files were enabled for /, which is
    not usually the case.)

    In the case of RewriteRule directives, in .htaccess context these regular
    expressions must be re-compiled with every request to the directory, whereas
    in main server configuration context they are compiled once and cached.
    Additionally, the rules themselves are more complicated, as one must work
    around the restrictions that come with per-directory context and
    mod_rewrite. Consult the Rewrite Guide for more detail on this subject.

As you can see, avoiding the use of `.htaccess` completely is best if at all possible, and especially avoid it for `RewriteRule` directives, such as 404 rewrites.

## Configuring Retour

### Static Redirects

#### Manually Creating Static Redirects

Static Redirects are useful when the Legacy URL Patterns and the new URL patterns are deterministic.  You can create them by clicking on **Retour->Redirects** and then clicking on the ** New Redirect** button.

* **Legacy URL Pattern** - Enter the URL pattern that Retour should match. This matches against the path, the part of the URL after the domain name. e.g.: Exact Match: `/recipes/` or RegEx Match: `.*RecipeID=(.*)`
* **Destination URL** - Enter the destination URL that should be redirected to. This can either be a fully qualified URL or a relative URL. e.g.: Exact Match: `/new-recipes/` or RegEx Match: `/new-recipes/$1`
* **Pattern Match Type** - What type of matching should be done with the Legacy URL Pattern. Details on RegEx matching can be found at [regexr.com](http://regexr.com). If a plugin provides a custom matching function, you can select it here.
* **Redirect Type** - Select whether the redirect should be permanent or temporary.

### Settings

## Using Retour

### Retour Statistics

Retour keeps track of every 404 your website receives.  You can view them by clicking on **Retour->Statistics**.  

Only one record is saved per URL Pattern, so the database won't get clogged with a ton of records.

### Retour Widget

If you'd like to see an overview of the Retour Statistics in your dashboard, you can add a Retour widget to your Dashboard:

![Screenshot](resources/screenshots/retour-widget.png)

It displays the total number of handled and not handled 404s, and the 5 most recent 404 URLs in each category right in your dashboard.

## Retour Roadmap

Some things to do, and ideas for potential features:

* Release it

Brought to you by [nystudio107](https://nystudio107.com/)
