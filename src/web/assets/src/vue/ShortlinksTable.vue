<template>
  <div>
    <div
      v-show="numSelected !== 0"
      className=""
    >
      <form
        accept-charset="UTF-8"
        method="post"
      >
        <input
          :name="csrfTokenName"
          :value="csrfTokenValue"
          type="hidden"
        >
        <input
          v-for="selectedId in selectedIds"
          :key="selectedId"
          :value="selectedId"
          name="redirectIds[]"
          type="hidden"
        >
        <label className="text-gray-600">{{ numSelected }} <span v-if="numSelected === 1">{{
            s
              ringRedirect
          }}</span><span
          v-if="numSelected !== 1">{{ stringRedirects }}</span>:</label>
        <div className="btngroup inline">
          <div
            className="btn menubtn"
            data-icon="settings"
          />
          <div
            className="menu"
            data-align="right"
          >
            <ul>
              <li>
                <a
                  className="formsubmit"
                  data-action="retour/redirects/delete-redirects"
                >{{ stringDelete }}</a>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
    <vuetable-filter-bar
      v-show="numSelected === 0"
      :initial-filter-text="filterText"
    />
    <div className="vuetable-pagination clearafter">
      <vuetable-pagination-info ref="paginationInfoTop"/>

      <div className="floated left vuetable-pagination-info py-3">
        <div className="inline pl-3 text-gray-600">
          {{ stringPerPage }}
        </div>
        <div className="inline pl-3 text-gray-600">
          <div className="select">
            <select
              v-model="perPage"
              className="fieldtoggle"
              data-target-prefix="per-page-"
              name="perPage"
            >
              <option
                selected
                value="20"
              >
                20
              </option>
              <option value="50">
                50
              </option>
              <option value="100">
                100
              </option>
              <option value="500">
                500
              </option>
            </select>
          </div>
        </div>
      </div>

      <vuetable-pagination
        ref="paginationTop"
        @vuetable-pagination:change-page="onChangePage"
      />
    </div>
    <vuetable
      ref="vuetable"
      :api-url="apiUrl"
      :append-params="moreParams"
      :css="css"
      :fields="fields"
      :per-page="perPage"
      :sort-order="sortOrder"
      @vuetable:pagination-data="onPaginationData"
    />
    <div className="vuetable-pagination clearafter border-solid">
      <vuetable-pagination-info ref="paginationInfo"/>
      <vuetable-pagination
        ref="pagination"
        @vuetable-pagination:change-page="onChangePage"
      />
    </div>
  </div>
</template>

<script>
import FieldDefs from '@/vue/ShortlinksFieldDefs.js';
import LegacyUrl from '@/vue/LegacyUrl.vue';
import ElementUrl from '@/vue/ElementUrl.vue';
import VueTable from 'vuetable-2/src/components/Vuetable.vue';
import VueTablePagination from '@/vue/VuetablePagination.vue';
import VueTablePaginationInfo from '@/vue/VuetablePaginationInfo.vue';
import VueTableFilterBar from '@/vue/VuetableFilterBar.vue';
import saveState from 'vue-save-state';
import DOMPurify from 'dompurify';

Vue.component('LegacyUrl', LegacyUrl);
Vue.component('ElementUrl', ElementUrl);
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
    apiUrl: {
      type: String,
      default: '',
    },
  },
  data: function () {
    return {
      moreParams: {
        'siteId': this.siteId,
        'shortLinks': true,
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
      filterText: '',
      perPage: 20,
      stringPerPage: Craft.t('retour', 'Per-page:'),
      stringDelete: Craft.t('retour', 'Delete'),
      stringRedirect: Craft.t('retour', 'redirect'),
      stringRedirects: Craft.t('retour', 'redirects'),
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
    perPage: function () {
      this.$events.fire('refresh-table', this.$refs.vuetable);
    }
  },
  mounted() {
    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData));
    this.$events.$on('filter-reset', () => this.onFilterReset());
    this.$refs.vuetable.$on('vuetable:checkbox-toggled', (isChecked, dataItem) => this.onCheckboxToggled(isChecked, dataItem));
    this.$refs.vuetable.$on('vuetable:checkbox-toggled-all', (isChecked) => this.onCheckboxToggled(isChecked, null));
  },
  methods: {
    getSaveStateConfig() {
      const cacheKey = 'retour-shortlinks-state-' + Craft.username + Craft.siteId;
      return {
        'cacheKey': cacheKey,
        'ignoreProperties': ['numSelected', 'selectedIds', 'moreParams'],
      };
    },
    onFilterSet(filterText) {
      this.filterText = filterText;
      this.moreParams = {
        'filter': this.filterText,
        'siteId': this.siteId,
      };
      this.$events.fire('refresh-table', this.$refs.vuetable);
    },
    onFilterReset() {
      this.filterText = '';
      this.moreParams = {
        'filter': this.filterText,
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
    onCheckboxToggled() {
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
      value = DOMPurify.sanitize(value);
      let url = value;
      let absoluteUrl = new RegExp('^(?:[a-z]+:)?//', 'i');
      if (!absoluteUrl.test(url) && !url.includes('$')) {
        url = Craft.getSiteUrl(value);
      }
      return `
                <a class="go" href="${url}" title="${url}" target="_blank" rel="noopener">${value}</a>
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
