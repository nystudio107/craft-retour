// Field definitions for DashboardTable.vue
export default [
  {
    name: '__checkbox',
    titleClass: 'center aligned',
    dataClass: 'center aligned'
  },
  {
    name: '__component:file-not-found-url',
    sortField: 'redirectSrcUrl',
    title: Craft.t('retour', '404 File Not Found URL'),
    titleClass: 'center',
    dataClass: 'center',
  },
  {
    name: 'referrerUrl',
    sortField: 'referrerUrl',
    title: Craft.t('retour', 'Last Referrer URL'),
    titleClass: 'center',
    dataClass: 'center',
    callback: 'urlFormatter'
  },
  {
    name: 'remoteIp',
    sortField: 'remoteIp',
    title: Craft.t('retour', 'Remote IP'),
    titleClass: 'center',
    dataClass: 'center',
    callback: 'ipFormatter'
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
  {
    name: 'handledByRetour',
    sortField: 'handledByRetour',
    title: Craft.t('retour', 'Handled'),
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'boolFormatter'
  },
  {
    name: 'addLink',
    sortField: 'addLink',
    title: '',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'addUrlFormatter'
  }
];
