<template>
    <div class="py-4">
        <vuetable-filter-bar></vuetable-filter-bar>
        <div class="vuetable-pagination">
            <vuetable-pagination-info ref="paginationInfoTop"
            ></vuetable-pagination-info>
            <vuetable-pagination ref="paginationTop"
                                 @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
        <vuetable ref="vuetable"
                  api-url="/retour/tables/dashboard"
                  :per-page="20"
                  :fields="fields"
                  :css="css"
                  :append-params="moreParams"
                  @vuetable:pagination-data="onPaginationData"
        ></vuetable>
        <div class="vuetable-pagination">
            <vuetable-pagination-info ref="paginationInfo"
            ></vuetable-pagination-info>
            <vuetable-pagination ref="pagination"
                                 @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
    </div>
</template>

<script>
    // Our component exports
    export default {
        components: {
            'vuetable': () => import(/* webpackChunkName: "vuetable" */ 'vuetable-2/src/components/Vuetable.vue'),
            'vuetable-pagination': () => import(/* webpackChunkName: "vuetable-pagination" */ './VuetablePagination.vue'),
            'vuetable-pagination-info': () => import(/* webpackChunkName: "vuetable-pagination-info" */ './VuetablePaginationInfo.vue'),
            'vuetable-filter-bar': () => import(/* webpackChunkName: "vuetable-filter-bar" */ './VuetableFilterBar.vue'),
        },
        props: {},
        data: function() {
            return {
                moreParams: {},
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
                        name: 'handledByRetour',
                        sortField: 'hitLastTime',
                        title: 'Handled',
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
                ],
            }
        },
        mounted() {
            this.$events.$on('filter-set', eventData => this.onFilterSet(eventData));
            this.$events.$on('filter-reset', e => this.onFilterReset());
        },
        methods: {
            onFilterSet (filterText) {
                this.moreParams = {
                    'filter': filterText
                };
                console.log('onFilterSet');
                this.$events.fire('refresh-table', this.$refs.vuetable);
            },
            onFilterReset () {
                this.moreParams = {};
                this.$events.fire('refresh-table', this.$refs.vuetable);
            },
            onPaginationData (paginationData) {
                this.$refs.paginationTop.setPaginationData(paginationData);
                this.$refs.paginationInfoTop.setPaginationData(paginationData);

                this.$refs.pagination.setPaginationData(paginationData);
                this.$refs.paginationInfo.setPaginationData(paginationData);
            },
            onChangePage (page) {
                this.$refs.vuetable.changePage(page);
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
                if (value == 1) {
                    return `
                <span style="color: green;">&#x2714;</span>
                `;
                }
                return `
                <span style="color: red;">&#x2716;</span>
                `;
            },
            addUrlFormatter(value) {
                if (value == 1) {
                    return `
                <a class="add icon" href="retour/add" title="Add"></a>
                `;
                }
                return '';
            }
        }
    }
</script>
