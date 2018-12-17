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
                  api-url="/retour/tables/redirects"
                  :per-page="20"
                  :fields="fields"
                  :css="css"
                  :sort-order="sortOrder"
                  :append-params="moreParams"
                  @vuetable:pagination-data="onPaginationData"
        ></vuetable>
        <div class="vuetable-pagination clearafter border-solid">
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
    import FieldDefs from './RedirectsFieldDefs.js';
    import LegacyUrl from './LegacyUrl.vue';
    import VueTable from 'vuetable-2/src/components/Vuetable.vue';
    import VueTablePagination from './VuetablePagination.vue';
    import VueTablePaginationInfo from './VuetablePaginationInfo.vue';
    import VueTableFilterBar from './VuetableFilterBar.vue';

    Vue.component('legacy-url', LegacyUrl);
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
                    tableClass: 'data fullwidth retour-redirects',
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
        },
        methods: {
            onFilterSet (filterText) {
                this.moreParams = {
                    'filter': filterText,
                    'siteId': this.siteId,
                };
                console.log('onFilterSet');
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
            matchFormatter(value) {
                let label = 'Pluing Match';
                switch (value) {
                    case 'exactmatch':
                        label = 'Exact Match';
                        break;
                    case 'regexmatch':
                        label = 'RegEx Match';
                        break;
                }

                return label;
            },
            urlFormatter(value) {
                if (value === '') {
                    return '';
                }
                return `
                <a class="go" href="${value}" title="${value}" target="_blank" rel="noopener">${value}</a>
                `;
            },
            deleteRedirectFormatter(value) {
                if (value === '') {
                    return '';
                }
                return `
                <a class="delete icon" href="${value}" title="Delete"></a>
                `;
            }
        }
    }
</script>
