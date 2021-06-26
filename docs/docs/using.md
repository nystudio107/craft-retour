---
title: Using Retour
description: Using Retour documentation for the Retour plugin. The Retour plugin allows you to intelligently redirect legacy URLs, so that you don’t lose SEO value when rebuilding & restructuring a site
---
# Using Retour

## Retour Statistics

Retour keeps track of every 404 your site receives.  You can view them by clicking on **Retour->Dashboard**.  

![Screenshot](./resources/screenshots/retour-dashboard.png)

If you’re using Craft to host [multiple sites](https://docs.craftcms.com/v3/sites.html) you can view the statistics for **All Sites** or an individual site using the Sites menu at the top of the page.

You can sort by any column by clicking on the column name, and you can filter the results by typing in the **Search for:** field.

Only one record is saved per URL Pattern, so the database won’t get clogged with a ton of records.

The charts show you how many directs happened during the last month, week, and day, including how many were handled by Retour.

The **Handled** column will display an `√` if the last 404 hit to this URL was handled by Retour, and an `x` if it was not.

Clicking on the `+` next to an unhandled 404 will create a new Static Redirect with the 404’s URL set as the source.

![Screenshot](./resources/screenshots/retour-not-found-detail.png)

Hovering over the **404 File Not Found URL** will give you more detailed information on the 404 that occurred.

### Exporting Statistics to a CSV File

The **Export CSV File** button on the **Retour->Statistics** page allows you to export all of your statistics to a CSV file for external processing or archival purposes.

## Retour Widget

If you’d like to see an overview of the Retour Statistics in your dashboard, you can add a Retour widget to your Dashboard:

![Screenshot](./resources/screenshots/retour-widget.png)

It displays the total number of handled and not handled 404s, and the 5 most recent 404 URLs in each category right in your dashboard.

## GraphQL Query support

To retrieve Retour redirect data through the native [GraphQL in Craft CMS 3.3](https://docs.craftcms.com/v3/graphql.html#sending-api-requests) or the [CraftQL plugin](https://github.com/markhuot/craftql), use the `retour` field in your GraphQL query.

This is useful if your site is a SPA, and Craft is running "headless", but you still want to give your content authors a way to deal with 404s.

You must at least pass in the URI you want metadata for:

```graphql
{
  retour(uri: "/stuff") {
    redirectDestUrl
  }
}
```

...and you can also pass in an optional `siteId`:

```graphql
{
  retour(uri: "/stuff", siteId: 1) {
    redirectDestUrl
  }
}
```
Whenever you query Retour via GraphQL, it assumes a 404 has already taken place, and records the statistics for it.

If not redirect can be found to handle the 404, `null` is returned:

```json
{
  "data": {
    "retour": null
  }
}
```

Otherwise the requested data will be returned:
```json
{
  "data": {
    "retour": {
      "redirectDestUrl": "/c3"
    }
  }
}
```
![Screenshot](./resources/screenshots/retour-craftql-query.png)

Most of the time, the only thing you’ll care about is the `redirectDestUrl`, which is the route that the user should be redirected to. However, you can query for everything:

```graphql
{
  retour(uri: "/stuff") {
    id
    siteId
    associatedElementId
    enabled
    redirectSrcUrl
    redirectSrcUrlParsed
    redirectSrcMatch
    redirectMatchType
    redirectDestUrl
    redirectHttpCode
    hitCount
    hitLastTime
  }
}
```

...which results in something like this:
```json
{
  "data": {
    "retour": {
      "id": 1,
      "siteId": 1,
      "associatedElementId": 0,
      "enabled": true,
      "redirectSrcUrl": "/stuff",
      "redirectSrcUrlParsed": "/stuff",
      "redirectSrcMatch": "pathonly",
      "redirectMatchType": "exactmatch",
      "redirectDestUrl": "/c3",
      "redirectHttpCode": 301,
      "hitCount": 12,
      "hitLastTime": "2019-06-12 03:26:42"
    }
  }
}
```

## API Endpoint

**N.B.:** Anonymous access to the Retour API endpoint is disabled by default; you’ll need to enable it in Retour → Plugin Settings

Retour has an API endpoint that allows you to get a JSON array of all of the redirects.

This is useful if you have an SPA, which you want to have handle the redirects, but you want to give your content authors a GUI for managing them.

To get all of the Retour Redirects, the controller action is:

```twig
/actions/retour/api/get-redirects
```

This will return to you an array of redirects as JSON data, for example:

```json
[
  {
    "id": "1",
    "dateCreated": "2020-03-03 23:50:05",
    "dateUpdated": "2020-03-03 23:50:05",
    "uid": "0a530fb3-30fe-49a6-ab6b-363cdac8515e",
    "siteId": "2",
    "associatedElementId": "0",
    "enabled": "1",
    "redirectSrcUrl": "/blog/stuffer",
    "redirectSrcUrlParsed": "/blog/stuffer",
    "redirectSrcMatch": "pathonly",
    "redirectMatchType": "exactmatch",
    "redirectDestUrl": "/blog/stuffer-es",
    "redirectHttpCode": "301",
    "hitCount": "0",
    "hitLastTime": null
  },
  {
    "id": "2",
    "dateCreated": "2020-03-03 23:50:19",
    "dateUpdated": "2020-03-03 23:50:19",
    "uid": "f81b4752-398c-4e6d-942b-a33f19f06421",
    "siteId": "4",
    "associatedElementId": "0",
    "enabled": "1",
    "redirectSrcUrl": "/blog/stuffer",
    "redirectSrcUrlParsed": "/blog/stuffer",
    "redirectSrcMatch": "pathonly",
    "redirectMatchType": "exactmatch",
    "redirectDestUrl": "/blog/stuffer-to-to",
    "redirectHttpCode": "301",
    "hitCount": "0",
    "hitLastTime": null
  }
]
```

If you want only the redirects for a particular `siteId`, you can pass that in as a parameter as well:

```twig
/actions/retour/api/get-redirects?siteId=1
```

Brought to you by [nystudio107](https://nystudio107.com/)
