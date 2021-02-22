<template>
    <div class="py-4">
        <div class="" v-show="numSelected !== 0">
            <form method="post" accept-charset="UTF-8">
                <input type="hidden" :name="csrfTokenName" :value="csrfTokenValue" />
                <input v-for="selectedId in selectedIds" type="hidden" name="redirectIds[]" :value="selectedId" />
                <label class="text-gray-600">{{ numSelected }} redirect<span v-if="numSelected !== 1">s</span>:</label>
                <div class="btngroup inline">
                    <div class="btn menubtn" data-icon="settings"></div>
                    <div class="menu" data-align="right">
                        <ul>
                            <li><a class="formsubmit" data-action="retour/redirects/delete-redirects">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
        <vuetable-filter-bar v-show="numSelected === 0"></vuetable-filter-bar>
        <div class="vuetable-pagination clearafter">
            <vuetable-pagination-info ref="paginationInfoTop"
            ></vuetable-pagination-info>
            <vuetable-pagination ref="paginationTop"
                                 @/vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
        <vuetable ref="vuetable"
                  :api-url=apiUrl
                  :per-page="20"
                  :fields="fields"
                  :css="css"
                  :sort-order="sortOrder"
                  :append-params="moreParams"
                  @/vuetable:pagination-data="onPaginationData"
        ></vuetable>
        <div class="vuetable-pagination clearafter border-solid">
            <vuetable-pagination-info ref="paginationInfo"
            ></vuetable-pagination-info>
            <vuetable-pagination ref="pagination"
                                 @/vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
    </div>
</template>

<script>
    import FieldDefs from '@/vue/RedirectsFieldDefs.js';
    import LegacyUrl from '@/vue/LegacyUrl.vue';
    import VueTable from 'vuetable-2/src/components/Vuetable.vue';
    import VueTablePagination from '@/vue/VuetablePagination.vue';
    import VueTablePaginationInfo from '@/vue/VuetablePaginationInfo.vue';
    import VueTableFilterBar from '@/vue/VuetableFilterBar.vue';

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
            },
            apiUrl: {
                type: String,
                default: '',
            },
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
                numSelected: 0,
                selectedIds: [],
            }
        },
        computed: {
            csrfTokenName: function() {
                return window.Craft.csrfTokenName;
            },
            csrfTokenValue: function() {
                return window.Craft.csrfTokenValue;
            },
        },
        mounted() {
            this.$events.$on('filter-set', eventData => this.onFilterSet(eventData));
            this.$events.$on('filter-reset', e => this.onFilterReset());
            this.$refs.vuetable.$on('vuetable:checkbox-toggled', (isChecked, dataItem) => this.onCheckboxToggled(isChecked, dataItem));
            this.$refs.vuetable.$on('vuetable:checkbox-toggled-all', (isChecked) => this.onCheckboxToggled(isChecked, null));
        },
        methods: {
            onFilterSet (filterText) {
                this.moreParams = {
                    'filter': filterText,
                    'siteId': this.siteId,
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
            onCheckboxToggled (isChecked, dataItem) {
                this.numSelected = 0;
                this.selectedIds = [];
                if (this.$refs.vuetable !== undefined && this.$refs.vuetable.selectedTo !== undefined) {
                    this.numSelected = this.$refs.vuetable.selectedTo.length;
                    this.selectedIds = this.$refs.vuetable.selectedTo;
                }
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
