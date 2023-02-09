// Field definitions for RedirectsTable.vue
export default [
  {
    name: '__checkbox',
    titleClass: 'center aligned',
    dataClass: 'center aligned'
  },
  {
    name: '__component:legacy-url',
    sortField: 'redirectSrcUrl',
    title: Craft.t('retour', 'Legacy URL Pattern'),
    titleClass: 'center vuetable-th-redirectSrcUrl',
    dataClass: 'center vuetable-td-redirectSrcUrl',
  },
  {
    name: 'redirectDestUrl',
    sortField: 'redirectDestUrl',
    title: Craft.t('retour', 'Redirect To'),
    titleClass: 'center',
    dataClass: 'center',
    callback: 'urlFormatter'
  },
  {
    name: 'redirectMatchType',
    sortField: 'redirectMatchType',
    title: Craft.t('retour', 'Match Type'),
    titleClass: 'text-left',
    dataClass: 'text-left',
    callback: 'matchFormatter'
  },
  {
    name: 'siteName',
    sortField: 'siteId',
    title: Craft.t('retour', 'Sites'),
    titleClass: 'text-left',
    dataClass: 'text-left',
  },
  {
    name: 'redirectHttpCode',
    sortField: 'redirectHttpCode',
    title: Craft.t('retour', 'Status'),
    titleClass: 'text-left',
    dataClass: 'text-left',
  },
  {
    name: '__component:priority-value',
    sortField: 'priority',
    title: Craft.t('retour', 'Priority'),
    titleClass: 'text-right vuetable-th-priority',
    dataClass: 'text-right vuetable-td-priority',
  },
  {
    name: 'hitCount',
    sortField: 'hitCount',
    title: Craft.t('retour', 'Hits'),
    titleClass: 'text-right',
    dataClass: 'text-right',
  },
  {
    name: 'hitLastTime',
    sortField: 'hitLastTime',
    title: Craft.t('retour', 'Last Hit'),
    titleClass: 'center',
    dataClass: 'center',
  },
];
