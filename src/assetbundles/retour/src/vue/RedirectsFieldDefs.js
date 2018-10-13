// Field definitions for RedirectsTable.vue
export default [
    {
        name: '__component:legacy-url',
        sortField: 'redirectSrcUrl',
        title: 'Legacy URL Pattern',
        titleClass: 'center',
        dataClass: 'center',
    },
    {
        name: 'redirectDestUrl',
        sortField: 'redirectDestUrl',
        title: 'Redirect To',
        titleClass: 'center',
        dataClass: 'center',
        callback: 'urlFormatter'
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
    {
        name: 'deleteLink',
        sortField: 'deleteLink',
        title: '',
        titleClass: 'text-center',
        dataClass: 'text-center',
        callback: 'deleteRedirectFormatter',
    }
];
