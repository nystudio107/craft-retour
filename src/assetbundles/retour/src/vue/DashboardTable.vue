<template>
  <div class="py-4">
    <div class="" v-show="numSelected !== 0">
      <form method="post" accept-charset="UTF-8">
        <input type="hidden" :name="csrfTokenName" :value="csrfTokenValue"/>
        <input v-for="selectedId in selectedIds" type="hidden" name="statisticIds[]" :value="selectedId"/>
        <label class="text-gray-600">{{ numSelected }} statistic<span v-if="numSelected !== 1">s</span>:</label>
        <div class="btngroup inline">
          <div class="btn menubtn" data-icon="settings"></div>
          <div class="menu" data-align="right">
            <ul>
              <li><a class="formsubmit" data-action="retour/statistics/delete-statistics">Delete</a></li>
            </ul>
          </div>
        </div>
      </form>
    </div>
    <vuetable-filter-bar :initial-filter-text="filterText" v-show="numSelected === 0"></vuetable-filter-bar>
    <div class="vuetable-pagination clearafter">
      <vuetable-pagination-info ref="paginationInfoTop"
      ></vuetable-pagination-info>

      <div class="floated left pl-3 pt-3 text-gray-600">
        <div class="select">
          <select v-model="retourHandled" class="fieldtoggle" data-target-prefix="retour-handled-" name="retourHandled">
            <option value="all" selected>All</option>
            <option value="handled">Handled</option>
            <option value="nothandled">Not Handled</option>
          </select>
        </div>
      </div>

      <vuetable-pagination ref="paginationTop"
                           @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>

      <div class="floated left vuetable-pagination-info py-3">
        <div class="inline pl-3 text-gray-600">Per-page:</div>
        <div class="inline pl-3 text-gray-600">
          <div class="select">
            <select v-model="perPage" class="fieldtoggle" data-target-prefix="per-page-" name="perPage">
              <option value="20" selected>20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="500">500</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <vuetable ref="vuetable"
              :api-url=apiUrl
              :per-page="perPage"
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
import FieldDefs from '@/vue/DashboardFieldDefs.js';
import FileNotFoundUrl from '@/vue/FileNotFoundUrl.vue';
import VueTable from 'vuetable-2/src/components/Vuetable.vue';
import VueTablePagination from '@/vue/VuetablePagination.vue';
import VueTablePaginationInfo from '@/vue/VuetablePaginationInfo.vue';
import VueTableFilterBar from '@/vue/VuetableFilterBar.vue';
import saveState from 'vue-save-state';
import DOMPurify from 'dompurify';

Vue.component('file-not-found-url', FileNotFoundUrl);
// Our component exports
export default {
  components: {
    'vuetable': VueTable,
    'vuetable-pagination': VueTablePagination,
    'vuetable-pagination-info': VueTablePaginationInfo,
    'vuetable-filter-bar': VueTableFilterBar,
  },
  mixins: [saveState],
  props: {
    siteId: {
      type: Number,
      default: 0,
    },
    refreshIntervalSecs: {
      type: Number,
      default: 3,
    },
    apiUrl: {
      type: String,
      default: '',
    },
  },
  data: function () {
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
      numSelected: 0,
      perPage: 20,
      selectedIds: [],
      retourHandled: 'all',
      filterText: '',
    }
  },
  computed: {
    csrfTokenName: function () {
      return window.Craft.csrfTokenName;
    },
    csrfTokenValue: function () {
      return window.Craft.csrfTokenValue;
    },
  },
  watch: {
    retourHandled: function (val) {
      this.moreParams = {
        'siteId': this.siteId,
      };
      this.moreParams = {
        'siteId': this.siteId,
        'filter': this.filterText,
        'handled': this.retourHandled,
      };
      this.$events.fire('refresh-table', this.$refs.vuetable);
    },
    perPage: function (val) {
      this.$events.fire('refresh-table', this.$refs.vuetable);
    }
  },
  mounted() {
    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData));
    this.$events.$on('filter-reset', e => this.onFilterReset());
    this.$refs.vuetable.$on('vuetable:checkbox-toggled', (isChecked, dataItem) => this.onCheckboxToggled(isChecked, dataItem));
    this.$refs.vuetable.$on('vuetable:checkbox-toggled-all', (isChecked) => this.onCheckboxToggled(isChecked, null));
    // Live refresh the data
    if (this.refreshIntervalSecs) {
      setInterval(() => {
        if ((typeof this.$refs.pagination !== 'undefined') && (this.$refs.pagination.isOnFirstPage)) {
          if (typeof this.$refs.vuetable !== 'undefined') {
            this.$refs.vuetable.refresh();
          }
        }
      }, this.refreshIntervalSecs * 1000);
    }
  },
  methods: {
    getSaveStateConfig() {
      const cacheKey = 'retour-dashboard-state-' + Craft.username + Craft.siteId;
      return {
        'cacheKey': cacheKey,
        'ignoreProperties': ['numSelected', 'selectedIds'],
      };
    },
    onFilterSet(filterText) {
      this.filterText = filterText;
      this.moreParams = {
        'siteId': this.siteId,
        'filter': this.filterText,
        'handled': this.retourHandled,
      };
      this.$events.fire('refresh-table', this.$refs.vuetable);
    },
    onFilterReset() {
      this.moreParams = {
        'siteId': this.siteId,
      };
      this.$events.fire('refresh-table', this.$refs.vuetable);
    },
    onPaginationData(paginationData) {
      this.$refs.paginationTop.setPaginationData(paginationData);
      this.$refs.paginationInfoTop.setPaginationData(paginationData);

      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    onCheckboxToggled(isChecked, dataItem) {
      this.numSelected = 0;
      this.selectedIds = [];
      if (this.$refs.vuetable !== undefined && this.$refs.vuetable.selectedTo !== undefined) {
        this.numSelected = this.$refs.vuetable.selectedTo.length;
        this.selectedIds = this.$refs.vuetable.selectedTo;
      }
    },
    urlFormatter(value) {
      if (value === '') {
        return '';
      }
      value = DOMPurify.sanitize(value);
      return `
                <a class="go" href="${value}" title="${value}" target="_blank" rel="noopener">${value}</a>
                `;
    },
    ipFormatter(value) {
      if (value === '') {
        return '';
      }
      value = DOMPurify.sanitize(value);
      return `
                <a class="go" href="https://whatismyipaddress.com/ip/${value}" title="Lookup ${value}" target="_blank" rel="noopener">${value}</a>
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
