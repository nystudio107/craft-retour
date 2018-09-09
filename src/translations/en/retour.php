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

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.0.0
 */
return [
    '404 URL: {url}'                                                                               => '404 URL: {url}',
    'Cached redirect hit for {url}'                                                                => 'Cached redirect hit for {url}',
    'Not handled: {url}'                                                                           => 'Not handled: {url}',
    'Redirect cache miss for site {siteId}, url {url}'                                             => 'Redirect cache miss for site {siteId}, url {url}',
    'Error updating statistics for {id} {url}'                                                     => 'Error updating statistics for {id} {url}',
    'Create Entry Redirects'                                                                       => 'Create Entry Redirects',
    'Trimmed {rows} from retour_stats table'                                                       => 'Trimmed {rows} from retour_stats table',
    'Cached redirect saved for {url}'                                                              => 'Cached redirect saved for {url}',
    'Controls whether Retour automatically creates static redirects when an entry\'s URI changes.' => 'Controls whether Retour automatically creates static redirects when an entry\'s URI changes.',
    'Click Me!'                                                                                    => 'Click Me!',
    'Dashboard'                                                                                    => 'Dashboard',
    'Should the query string be stripped from all 404 URLs before their evaluation?'               => 'Should the query string be stripped from all 404 URLs before their evaluation?',
    'All redirect caches cleared'                                                                  => 'All redirect caches cleared',
    'Plugin name'                                                                                  => 'Plugin name',
    'Retour'                                                                                       => 'Retour',
    'Should the query string be stripped from the saved statistics source URLs?'                   => 'Should the query string be stripped from the saved statistics source URLs?',
    'The public-facing name of the plugin'                                                         => 'The public-facing name of the plugin',
    'Redirecting {url} to {dest} with status {status}'                                             => 'Redirecting {url} to {dest} with status {status}',
    'Settings'                                                                                     => 'Settings',
    'Strip Query String from Statistics'                                                           => 'Strip Query String from Statistics',
    'Retour CP Section body goes here'                                                             => 'Retour CP Section body goes here',
    'Redirects'                                                                                    => 'Redirects',
    '{name} plugin loaded'                                                                         => '{name} plugin loaded',
    'Strip Query String from 404s'                                                                 => 'Strip Query String from 404s',
    'A 404 exception occurred'                                                                     => 'A 404 exception occurred',
    'Plugin Settings'                                                                              => 'Plugin Settings',
    'Statistics Display'                                                                           => 'Statistics Display',
    'General'                                                                                      => 'General',
    'Dynamic Redirect Display'                   => 'Dynamic Redirect Display',
    'Static Redirect Display'                    => 'Static Redirect Display',
    'Statistics to Store'                        => 'Statistics to Store',
    'Retour redirect caches'                     => 'Retour redirect caches',
    'Error validating statistics {id}: {errors}'                                                                                                                                                                                => 'Error validating statistics {id}: {errors}',
    'Error validating redirect {id}: {errors}'                                                                                                                                                                                  => 'Error validating redirect {id}: {errors}',
    ' Match'                                                                                                                                                                                                                    => ' Match',
    'Retour statistics cleared: {error}'                                                                                                                                                                                        => 'Retour statistics cleared: {error}',
    'Exact Match'                                                                                                                                                                                                               => 'Exact Match',
    'RegEx Match'                                                                                                                                                                                                               => 'RegEx Match',
    'Retour statistics cleared.'                                                                                                                                                                                                => 'Retour statistics cleared.',
    'Legacy URL Pattern'                                                                                                                                                                                                        => 'Legacy URL Pattern',
    'Couldn\'t load redirect id {id}'                                                                                                                                                                                           => 'Couldn\'t load redirect id {id}',
    'Enter the URL pattern that Retour should match.  This matches against the path, the part of the URL after the domain name.  e.g.: Exact Match: `/recipes/` or RegEx Match: `.*RecipeID=(.*)`'                              => 'Enter the URL pattern that Retour should match.  This matches against the path, the part of the URL after the domain name.  e.g.: Exact Match: `/recipes/` or RegEx Match: `.*RecipeID=(.*)`',
    'Redirect Type'                                                                                                                                                                                                             => 'Redirect Type',
    'Enter the destination URL that should be redirected to.  This can either be a fully qualified URL or a relative URL.  e.g.: Exact Match: `/new-recipes/` or RegEx Match: `/new-recipes/$1`'                                => 'Enter the destination URL that should be redirected to.  This can either be a fully qualified URL or a relative URL.  e.g.: Exact Match: `/new-recipes/` or RegEx Match: `/new-recipes/$1`',
    '410 - Gone'                                                                                                                                                                                                                => '410 - Gone',
    'Match Type'                                                                                                                                                                                                                => 'Match Type',
    '301 - Permanent'                                                                                                                                                                                                           => '301 - Permanent',
    '302 - Temporary'                                                                                                                                                                                                           => '302 - Temporary',
    'Destination URL'                                                                                                                                                                                                           => 'Destination URL',
    'Select whether the redirect should be permanent or temporary.'                                                                                                                                                             => 'Select whether the redirect should be permanent or temporary.',
    'What type of matching should be done with the Legacy URL Pattern.  Details on RegEx matching can be found at [regexr.com](http://regexr.com/).  If a plugin provides a custom matching function, you can select it here.'  => 'What type of matching should be done with the Legacy URL Pattern.  Details on RegEx matching can be found at [regexr.com](http://regexr.com/).  If a plugin provides a custom matching function, you can select it here.',
    'Edit Redirect'                                                                                                                                                                                                             => 'Edit Redirect',
    'What type of matching should be done with the Legacy URL Pattern.  Details on RegEx matching can be found at [regexr.com/](http://regexr.com/).  If a plugin provides a custom matching function, you can select it here.' => 'What type of matching should be done with the Legacy URL Pattern.  Details on RegEx matching can be found at [regexr.com/](http://regexr.com/).  If a plugin provides a custom matching function, you can select it here.'
];
