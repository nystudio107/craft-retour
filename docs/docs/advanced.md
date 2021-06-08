# Advanced Usage

## Console Command

Retour has a built-in `retour/stats/trim` console command that allows you to manually trim the Statistics database table:

```bash
vagrant@homestead ~/sites/craft3 $ ./craft retour/stats/trim
Trimming statistics
Trimmed 0 from retour_stats table
```

This will trim the `retour_stats` table so that it has only the number of statistics in the table as you've specified via the **Statistics to Store** Setting.

When the `retour_stats` table is trimmed, it sorts the statistics by the **Last Hit** time, and only trims the oldest statistics.

Normally this is done automatically when a new statistic is recored, but for high traffic sites that are constantly hit by bots, you might want to do it manually at regular intervals.

You can also pass in an optional `--limit` to override the **Statistics to Store** Setting, and trim to a specified number of statistics:

```bash
vagrant@homestead ~/sites/craft3 $ ./craft retour/stats/trim --limit=1
Trimming statistics
Trimmed 2 from retour_stats table
```

## Utility Functions

`craft.retour.getHttpStatus` in your templates will return the HTTP Status code for the current template, so you can display a special message for people who end up on a page via a `301` or `302` redirect.


## Redirect Events

Retour throws several Redirect events, in case you want to listen for them in your custom plugin/module, or use them in conjunction with the [Webhooks](https://github.com/craftcms/webhooks) plugin.

`beforeSaveRedirect` is the event that is triggered before the redirect is saved. You may set [[RedirectEvent::isValid]] to `false` to prevent the redirect from getting saved:

```php
use nystudio107\retour\services\Redirects;
use nystudio107\retour\events\RedirectEvent;

Event::on(Redirects::class,
     Redirects::EVENT_BEFORE_SAVE_REDIRECT,
     function(RedirectEvent $event) {
         // potentially set $event->isValid;
     }
 );
```

`afterSaveRedirect` is the event that is triggered after the redirect is saved.

```php
use nystudio107\retour\services\Redirects;
use nystudio107\retour\events\RedirectEvent;

Event::on(Redirects::class,
     Redirects::EVENT_AFTER_SAVE_REDIRECT,
     function(RedirectEvent $event) {
         // the redirect was saved
     }
 );
```

The `RedirectEvent` has the following read-only properties that you can use for informational purposes:
```php
    /**
     * @var bool Whether the redirect is brand new
     */
    public $isNew = false;

    /**
     * @var string The old URL
     */
    public $legacyUrl;

    /**
     * @var string The new URL
     */
    public $destinationUrl;

    /**
     * @var string The type of matching done on the legacyUrl
     */
    public $matchType;

    /**
     * @var string The type of redirect
     */
    public $redirectType;
```

## Resolve Redirect Events

Retour throws several Resolve Redirect events, in case you want to listen for them in your custom plugin/module, or use them in conjunction with the [Webhooks](https://github.com/craftcms/webhooks) plugin.

`beforeResolveRedirect` The event that is triggered before Retour has attempted to resolve redirects. You may set [[ResolveRedirectEvent::redirectDestUrl]] to the URL that it should redirect to, or null if no redirect should happen:
     
```php
use nystudio107\retour\services\Redirects;
use nystudio107\retour\events\ResolveRedirectEvent;

Event::on(Redirects::class,
    Redirects::EVENT_BEFORE_RESOLVE_REDIRECT,
    function(ResolveRedirectEvent $event) {
        // potentially set $event->redirectDestUrl;
    }
);
```

`afterResolveRedirect` The event that is triggered after Retour has attempted to resolve redirects. You may set [[ResolveRedirectEvent::redirectDestUrl]] to the URL that it should redirect to, or null if no redirect should happen:

```php
use nystudio107\retour\services\Redirects;
use nystudio107\retour\events\ResolveRedirectEvent;

Event::on(Redirects::class,
    Redirects::EVENT_AFTER_RESOLVE_REDIRECT,
    function(ResolveRedirectEvent $event) {
        // potentially set $event->redirectDestUrl;
    }
);
```

The `ResolveRedirectEvent` has the following read-only properties that you can use to attempt to match purposes:

```php
    /**
     * @var string The full URL including hostname & protocol of the 404'd request
     */
    public $fullUrl;

    /**
     * @var string The path of the 404'd request
     */
    public $pathOnly;

```

The `ResolveRedirectEvent` has the following properties that you can set:

```php
    /**
     * @var null|string The URL that should be redirected to or null if no redirect
     *                  should take place
     */
    public $redirectDestUrl = null;

    /**
     * @var int The http status code for this redirect; see https://httpstatuses.com/
     */
    public $redirectHttpCode = 301;
```

If your plugin/module wishes to cause a redirect, it should set the `$redirectDestUrl` property to the URL it wants to redirect to.

## Redirect Resolved events

Retour will throw an event once it has successfully resolved a redirect, allowing your custom plugin/module to potentially modify where it redirects to despite the redirect being resolved fully.

`RedirectResolvedEvent` is the event that is triggered once Retour has resolved a redirect. [[RedirectResolvedEvent::redirect]] will be set to the redirect that was resolved. You may set [[RedirectResolvedEvent::redirectDestUrl]] to to a different URL that it should redirect to, or leave it null if the  redirect should happen as resolved.

```php
use nystudio107\retour\services\Redirects;
use nystudio107\retour\events\RedirectResolvedEvent;

Event::on(Redirects::class,
    Redirects::EVENT_REDIRECT_RESOLVED,
    function(RedirectResolvedEvent $event) {
        // potentially set $event->redirectDestUrl;
    }
);
```

## Custom Match Functions via Plugin

The patterns mentioned below still work, but are deprecated. It's recommend that you use the **Resolve Redirect Events** mentioned above.

Retour allows you to implement a custom matching function via plugin, if the Exact and RegEx matching are not sufficient for your purposes.

In your main plugin class file, simply add this function:

```php
/**
 * retourMatch gives your plugin a chance to use whatever custom logic is needed for URL redirection.  You are passed
 * in an array that contains the details of the redirect.  Do whatever matching logic, then return true if is a
 * matched, false if it is not.
 *
 * You can alter the 'redirectDestUrl' to change what URL they should be redirected to, as well as the 'redirectHttpCode'
 * to change the type of redirect.  None of the changes made are saved in the database.
 *
 * @param mixed An array of arguments that define the redirect
 *            $args = array(
 *                'redirect' => array(
 *                    'id' => the id of the redirect record in the retour_redirects table
 *                    'associatedElementId' => the id of the entry if this is a Dynamic Entry Redirect; 0 otherwise
 *                    'redirectSrcUrl' => the legacy URL as entered by the user
 *                    'redirectSrcUrlParsed' => the redirectSrcUrl after it has been parsed as a micro template for {variables}
 *                        via renderObjectTemplate().  This is typically what you would want to match against.
 *                    'redirectMatchType' => the type of match; this will be set to your plugin's ClassHandle
 *                    'redirectDestUrl' => the destination URL for the entry this redirect is associated with, or the
 *                        destination URL that was manually entered by the user
 *                    'redirectHttpCode' => the redirect HTTP code (typically 301 or 302)
 *                    'hitCount' => the number of times this redirect has been matched, and the redirect done in the browser
 *                    'hitLastTime' => the date and time of the when this redirect was matched
 *                    'locale' => the locale of this redirect
 *                )
 *            );
 * @return bool Return true if it's a match, false otherwise
 */
public function retourMatch($args)
{
    return true;
}
```
Your plugin will then appear in the list of Pattern Match Types that can be chosen from via **Retour->Redirects**.

Brought to you by [nystudio107](https://nystudio107.com/)
