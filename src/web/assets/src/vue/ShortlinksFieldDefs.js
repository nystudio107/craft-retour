// Field definitions for ShortlinksTable.vue
export default [
  {
    name: '__checkbox',
    titleClass: 'center aligned',
    dataClass: 'center aligned'
  },
  {
    name: '__component:legacy-url',
    sortField: 'redirectSrcUrl',
    title: 'Short Link',
    titleClass: 'center',
    dataClass: 'center',
  },
  {
    name: '__component:element-url',
    sortField: 'elementTitle',
    title: 'Redirect To',
    titleClass: 'center',
    dataClass: 'center',
  },
  {
    name: 'redirectMatchType',
    sortField: 'redirectMatchType',
    title: 'Match Type',
    titleClass: 'text-left',
    dataClass: 'text-left',
    callback: 'matchFormatter'
  },
  {
    name: 'siteName',
    sortField: 'siteId',
    title: 'Sites',
    titleClass: 'text-left',
    dataClass: 'text-left',
  },
  {
    name: 'redirectHttpCode',
    sortField: 'redirectHttpCode',
    title: 'Status',
    titleClass: 'text-left',
    dataClass: 'text-left',
  },
  {
    name: 'hitCount',
    sortField: 'hitCount',
    title: 'Hits',
    titleClass: 'text-right',
    dataClass: 'text-right',
  },
  {
    name: 'hitLastTime',
    sortField: 'hitLastTime',
    title: 'Last Hit',
    titleClass: 'center',
    dataClass: 'center',
  },
];
