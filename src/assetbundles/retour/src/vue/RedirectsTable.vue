<template>
    <div>
        <vuetable ref="vuetable"
                  api-url="/retour/tables/redirects"
                  :per-page="20"
                  :fields="fields"
                  :css="css"
                  @vuetable:pagination-data="onPaginationData"
        ></vuetable>
        <vuetable-pagination ref="pagination"
                             @vuetable-pagination:change-page="onChangePage"
        ></vuetable-pagination>
    </div>
</template>

<script>
    // Our component exports
    export default {
        components: {
            'vuetable': () => import(/* webpackChunkName: "vuetable" */ 'vuetable-2/src/components/Vuetable.vue'),
            'vuetable-pagination': () => import(/* webpackChunkName: "vuetable-pagination" */ './VuetablePagination.vue')
        },
        props: {},
        data: function() {
            return {
                css: {
                    tableClass: 'data fullwidth',
                    ascendingIcon: 'ordered asc',
                    descendingIcon: 'ordered desc'
                },
                sortOrder: [
                    {
                        field: 'hitCount',
                        sortField: 'hitCount',
                        direction: 'desc'
                    }
                ],
                fields: [
                    {
                        name: 'redirectSrcUrl',
                        sortField: 'redirectSrcUrl',
                        title: '404 File Not Found URL',
                        titleClass: 'center',
                        dataClass: 'center',
                        callback: 'urlFormatter'

                    },
                    {
                        name: 'referrerUrl',
                        sortField: 'referrerUrl',
                        title: 'Last Referrer URL',
                        titleClass: 'center',
                        dataClass: 'center',
                        callback: 'urlFormatter'
                    },
                    {
                        name: 'hitCount',
                        sortField: 'hitCount',
                        title: 'Hits',
                        titleClass: 'center',
                        dataClass: 'center',
                    },
                    {
                        name: 'hitLastTime',
                        sortField: 'hitLastTime',
                        title: 'Last Hit',
                        titleClass: 'center',
                        dataClass: 'center',
                    },
                    {
                        name: 'handledByRetour',
                        sortField: 'hitLastTime',
                        title: 'Handled',
                        titleClass: 'center',
                        dataClass: 'center',
                        callback: 'boolFormatter'
                    },
                ],
            }
        },
        methods: {
            onPaginationData (paginationData) {
                this.$refs.pagination.setPaginationData(paginationData)
            },
            onChangePage (page) {
                this.$refs.vuetable.changePage(page)
            },
            urlFormatter(value) {
                if (value === '') {
                    return '';
                }
                return `
                <a class="go" href="${value}" title="${value}">${value}</a>
                `;
            },
            boolFormatter(value) {
                if (value) {
                    return `
                <span style="color: green;">&#x2714;</span>
                `;
                }
                return `
                <span style="color: red;">&#x2716;</span>
                `;
            },
        }
    }
</script>