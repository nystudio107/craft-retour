<template>
    <div class="py-4">
        <vuetable-filter-bar></vuetable-filter-bar>
        <div class="vuetable-pagination clearafter">
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
                  :sort-order="sortOrder"
                  :append-params="moreParams"
                  @vuetable:pagination-data="onPaginationData"
        ></vuetable>
        <div class="vuetable-pagination clearafter">
            <vuetable-pagination-info ref="paginationInfo"
            ></vuetable-pagination-info>
            <vuetable-pagination ref="pagination"
                                 @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import FieldDefs from './DashboardFieldDefs.js';
    import FileNotFoundUrl from './FileNotFoundUrl.vue';
    import VueTable from 'vuetable-2/src/components/Vuetable.vue';
    import VueTablePagination from './VuetablePagination.vue';
    import VueTablePaginationInfo from './VuetablePaginationInfo.vue';
    import VueTableFilterBar from './VuetableFilterBar.vue';

    Vue.component('file-not-found-url', FileNotFoundUrl);
    // Our component exports
    export default {
        components: {
            'vuetable': VueTable,
            'vuetable-pagination': VueTablePagination,
            'vuetable-pagination-info': VueTablePaginationInfo,
            'vuetable-filter-bar': VueTableFilterBar,
        },
        props: {
            siteId: {
                type: Number,
                default: 0,
            }
        },
        data: function() {
            return {
                moreParams: {
                    'siteId': this.siteId,
                },
                css: {
                    tableClass: 'data fullwidth retour-dashboard',
                    ascendingIcon: 'menubtn retour-menubtn-asc',
                    descendingIcon: 'menubtn retour-menubtn-desc'
                },
                sortOrder: [
                    {
                        field: 'hitCount',
                        sortField: 'hitCount',
                        direction: 'desc'
                    }
                ],
                fields: FieldDefs,
            }
        },
        mounted() {
            this.$events.$on('filter-set', eventData => this.onFilterSet(eventData));
            this.$events.$on('filter-reset', e => this.onFilterReset());
            // Live refresh the data
            setInterval(() => {
                this.$refs.vuetable.refresh();
            }, 3000);
        },
        methods: {
            onFilterSet (filterText) {
                this.moreParams = {
                    'siteId': this.siteId,
                    'filter': filterText,
                };
                this.$events.fire('refresh-table', this.$refs.vuetable);
            },
            onFilterReset () {
                this.moreParams = {
                    'siteId': this.siteId,
                };
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
                <a class="go" href="${value}" title="${value}" target="_blank" rel="noopener">${value}</a>
                `;
            },
            ipFormatter(value) {
                if (value === '') {
                    return '';
                }
                return `
                <a class="go" href="https://www.ipaddressguide.com/ip-geolocation?ip=${value}" title="Lookup ${value}" target="_blank" rel="noopener">${value}</a>
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
                if (value === '') {
                    return '';
                }
                return `
                <a class="add icon" href="${value}" title="Add"></a>
                `;
            }
        }
    }
</script>
