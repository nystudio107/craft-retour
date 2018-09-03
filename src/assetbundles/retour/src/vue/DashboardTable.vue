<template>
    <div>
        <vuetable ref="vuetable"
                  api-url="/retour/tables/dashboard"
                  :fields="fields"
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
            'vuetable-pagination': () => import(/* webpackChunkName: "vuetable-pagination" */ 'vuetable-2/src/components/VuetablePagination.vue')
        },
        props: {},
        data: function() {
            return {
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
                    {
                        name: 'addLink',
                        sortField: 'addLink',
                        title: '',
                        titleClass: 'center',
                        dataClass: 'center',
                        callback: 'addUrlFormatter'
                    }
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
            addUrlFormatter(value) {
                if (value === '') {
                    return '';
                }
                return `
                <a class="add icon" href="retour/add" title="Add"></a>
                `;
            }
        }
    }
</script>
