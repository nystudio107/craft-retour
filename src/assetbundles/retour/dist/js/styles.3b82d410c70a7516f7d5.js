(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-confetti */ "./node_modules/vue-confetti/dist/vue-confetti.js");
/* harmony import */ var vue_confetti__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_confetti__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//




vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_confetti__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        this.$confetti.start();
        setTimeout(() => {
            this.$confetti.stop();
        }, 5000);
    },
    methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//


const chartDataBaseUrl = '/retour/charts/dashboard/';

// Get the largest number from the passed in arrays
const largestNumber = mainArray => {
    return mainArray.map(function (subArray) {
        return Math.max.apply(null, subArray);
    });
};

// Configure the api endpoint
const configureApi = url => {
    return {
        baseURL: url,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    };
};
// Query our API endpoint via an XHR GET
const queryApi = (api, uri, callback) => {
    api.get(uri).then(result => {
        if (callback) {
            callback(result.data);
        }
        console.log(result.data);
    }).catch(error => {
        console.log(error);
    });
};

// Our component exports
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'apexcharts': () => __webpack_require__.e(/*! import() | apexcharts */ "vendors~apexcharts").then(__webpack_require__.t.bind(null, /*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js", 7))
    },
    props: {
        title: String,
        subTitle: String,
        range: String
    },
    methods: {
        // Load in our chart data asynchronously
        getSeriesData: async function getSeriesData() {
            const axios = await __webpack_require__.e(/*! import() | axios */ "vendors~axios").then(__webpack_require__.t.bind(null, /*! axios */ "./node_modules/axios/index.js", 7));
            const chartsAPI = axios.create(configureApi(chartDataBaseUrl));
            await queryApi(chartsAPI, this.range, data => {
                // Clone the chartOptions object, and replace the needed values
                const options = Object.assign({}, this.chartOptions);
                options.yaxis.max = Math.round(largestNumber([data[0]['data']])[0] + 1.5);
                options.labels = data[0]['labels'];
                this.chartOptions = options;
                //this.chartOptions.yaxis.max = largestNumber([data[0]['data']])[0] * 3;
                this.series = data;
            });
        }
    },
    created: function created() {
        this.getSeriesData();
    },
    data: function data() {
        return {
            chartOptions: {
                chart: {
                    id: 'vuechart-example',
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                colors: ['#008FFB', '#DCE6EC'],
                stroke: {
                    curve: 'straight',
                    width: 3
                },
                fill: {
                    opacity: 0.2,
                    gradient: {
                        enabled: true
                    }
                },
                xaxis: {
                    crosshairs: {
                        width: 1
                    }
                },
                labels: [],
                yaxis: {
                    min: 0,
                    max: 0
                },
                title: {
                    text: this.title,
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                        cssClass: 'apexcharts-yaxis-title'
                    }
                },
                subtitle: {
                    text: this.subTitle,
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                        cssClass: 'apexcharts-yaxis-title'
                    }
                }
            },
            series: [{
                name: 'placeholder',
                data: [0]
            }]
        };
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Our component exports
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'vuetable': () => Promise.all(/*! import() | vuetable */[__webpack_require__.e("styles"), __webpack_require__.e("vendors~vuetable")]).then(__webpack_require__.bind(null, /*! vuetable-2/src/components/Vuetable.vue */ "./node_modules/vuetable-2/src/components/Vuetable.vue")),
        'vuetable-pagination': () => __webpack_require__.e(/*! import() | vuetable-pagination */ "styles").then(__webpack_require__.bind(null, /*! ./VuetablePagination.vue */ "./src/assetbundles/retour/src/vue/VuetablePagination.vue"))
    },
    props: {},
    data: function data() {
        return {
            css: {
                tableClass: 'data fullwidth',
                ascendingIcon: 'ordered asc',
                descendingIcon: 'ordered desc'
            },
            sortOrder: [{
                field: 'hitCount',
                sortField: 'hitCount',
                direction: 'desc'
            }],
            fields: [{
                name: 'redirectSrcUrl',
                sortField: 'redirectSrcUrl',
                title: '404 File Not Found URL',
                titleClass: 'center',
                dataClass: 'center',
                callback: 'urlFormatter'

            }, {
                name: 'referrerUrl',
                sortField: 'referrerUrl',
                title: 'Last Referrer URL',
                titleClass: 'center',
                dataClass: 'center',
                callback: 'urlFormatter'
            }, {
                name: 'hitCount',
                sortField: 'hitCount',
                title: 'Hits',
                titleClass: 'text-right',
                dataClass: 'text-right'
            }, {
                name: 'hitLastTime',
                sortField: 'hitLastTime',
                title: 'Last Hit',
                titleClass: 'center',
                dataClass: 'center'
            }, {
                name: 'handledByRetour',
                sortField: 'hitLastTime',
                title: 'Handled',
                titleClass: 'text-center',
                dataClass: 'text-center',
                callback: 'boolFormatter'
            }, {
                name: 'addLink',
                sortField: 'addLink',
                title: '',
                titleClass: 'text-center',
                dataClass: 'text-center',
                callback: 'addUrlFormatter'
            }]
        };
    },
    methods: {
        onPaginationData(paginationData) {
            this.$refs.pagination.setPaginationData(paginationData);
        },
        onChangePage(page) {
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
            if (value === '') {
                return '';
            }
            return `
            <a class="add icon" href="retour/add" title="Add"></a>
            `;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/RedirectsTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/RedirectsTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Our component exports
/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'vuetable': () => Promise.all(/*! import() | vuetable */[__webpack_require__.e("styles"), __webpack_require__.e("vendors~vuetable")]).then(__webpack_require__.bind(null, /*! vuetable-2/src/components/Vuetable.vue */ "./node_modules/vuetable-2/src/components/Vuetable.vue")),
        'vuetable-pagination': () => __webpack_require__.e(/*! import() | vuetable-pagination */ "styles").then(__webpack_require__.bind(null, /*! ./VuetablePagination.vue */ "./src/assetbundles/retour/src/vue/VuetablePagination.vue"))
    },
    props: {},
    data: function data() {
        return {
            css: {
                tableClass: 'data fullwidth',
                ascendingIcon: 'ordered asc',
                descendingIcon: 'ordered desc'
            },
            sortOrder: [{
                field: 'hitCount',
                sortField: 'hitCount',
                direction: 'desc'
            }],
            fields: [{
                name: 'redirectSrcUrl',
                sortField: 'redirectSrcUrl',
                title: '404 File Not Found URL',
                titleClass: 'center',
                dataClass: 'center',
                callback: 'urlFormatter'

            }, {
                name: 'referrerUrl',
                sortField: 'referrerUrl',
                title: 'Last Referrer URL',
                titleClass: 'center',
                dataClass: 'center',
                callback: 'urlFormatter'
            }, {
                name: 'hitCount',
                sortField: 'hitCount',
                title: 'Hits',
                titleClass: 'center',
                dataClass: 'center'
            }, {
                name: 'hitLastTime',
                sortField: 'hitLastTime',
                title: 'Last Hit',
                titleClass: 'center',
                dataClass: 'center'
            }, {
                name: 'handledByRetour',
                sortField: 'hitLastTime',
                title: 'Handled',
                titleClass: 'center',
                dataClass: 'center',
                callback: 'boolFormatter'
            }]
        };
    },
    methods: {
        onPaginationData(paginationData) {
            this.$refs.pagination.setPaginationData(paginationData);
        },
        onChangePage(page) {
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
            if (value) {
                return `
            <span style="color: green;">&#x2714;</span>
            `;
            }
            return `
            <span style="color: red;">&#x2716;</span>
            `;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuetablePaginationMixin_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuetablePaginationMixin.vue */ "./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_VuetablePaginationMixin_vue__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    css: {
      type: Object,
      default() {
        return {
          wrapperClass: 'vuetable ui right floated pagination menu',
          activeClass: 'active large',
          disabledClass: 'disabled',
          pageClass: 'item',
          linkClass: 'icon item',
          paginationClass: 'ui bottom attached segment grid',
          paginationInfoClass: 'left floated left aligned six wide column',
          dropdownClass: 'ui search dropdown',
          icons: {
            first: 'angle double left icon',
            prev: 'left chevron icon',
            next: 'right chevron icon',
            last: 'angle double right icon'
          }
        };
      }
    },
    onEachSide: {
      type: Number,
      default() {
        return 2;
      }
    }
  },
  data: function data() {
    return {
      eventPrefix: 'vuetable-pagination:',
      tablePagination: null
    };
  },
  computed: {
    totalPage() {
      return this.tablePagination === null ? 0 : this.tablePagination.last_page;
    },
    isOnFirstPage() {
      return this.tablePagination === null ? false : this.tablePagination.current_page === 1;
    },
    isOnLastPage() {
      return this.tablePagination === null ? false : this.tablePagination.current_page === this.tablePagination.last_page;
    },
    notEnoughPages() {
      return this.totalPage < this.onEachSide * 2 + 4;
    },
    windowSize() {
      return this.onEachSide * 2 + 1;
    },
    windowStart() {
      if (!this.tablePagination || this.tablePagination.current_page <= this.onEachSide) {
        return 1;
      } else if (this.tablePagination.current_page >= this.totalPage - this.onEachSide) {
        return this.totalPage - this.onEachSide * 2;
      }

      return this.tablePagination.current_page - this.onEachSide;
    }
  },
  methods: {
    loadPage(page) {
      this.$emit(this.eventPrefix + 'change-page', page);
    },
    isCurrentPage(page) {
      return page === this.tablePagination.current_page;
    },
    setPaginationData(tablePagination) {
      this.tablePagination = tablePagination;
    },
    resetData() {
      this.tablePagination = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/ignore-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ignore-loader!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/vuetable-2/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    fields: {
      type: Array,
      required: true
    },
    loadOnStart: {
      type: Boolean,
      default: true
    },
    apiUrl: {
        type: String,
        default: ''
    },
    httpMethod: {
        type: String,
        default: 'get',
        validator: (value) => {
          return ['get', 'post'].indexOf(value) > -1
        }
    },
    reactiveApiUrl: {
        type: Boolean,
        default: true
    },
    apiMode: {
      type: Boolean,
      default: true
    },
    data: {
      type: [Array, Object],
      default: null
    },
    dataTotal: {
      type: Number,
      default: 0
    },
    dataManager: {
      type: Function,
      default: null
    },
    dataPath: {
        type: String,
        default: 'data'
    },
    paginationPath: {
        type: [String],
        default: 'links.pagination'
    },
    queryParams: {
      type: [Object, Function],
      default () {
        return {
          sort: 'sort',
          page: 'page',
          perPage: 'per_page'
        }
      }
    },
    appendParams: {
      type: Object,
      default () {
        return {}
      }
    },
    httpOptions: {
      type: Object,
      default () {
        return {}
      }
    },
    httpFetch: {
      type: Function,
      default: null
    },
    perPage: {
        type: Number,
        default: 10
    },
    initialPage: {
      type: Number,
      default: 1
    },
    sortOrder: {
      type: Array,
      default () {
        return []
      }
    },
    multiSort: {
      type: Boolean,
      default () {
        return false
      }
    },
    tableHeight: {
      type: String,
      default: null
    },
    /*
     * physical key that will trigger multi-sort option
     * possible values: 'alt', 'ctrl', 'meta', 'shift'
     * 'ctrl' might not work as expected on Mac
     */
    multiSortKey: {
      type: String,
      default: 'alt'
    },
    /* deprecated */
    rowClassCallback: {
      type: [String, Function],
      default: ''
    },
    rowClass: {
      type: [String, Function],
      default: ''
    },
    detailRowComponent: {
      type: String,
      default: ''
    },
    detailRowTransition: {
      type: String,
      default: ''
    },
    trackBy: {
      type: String,
      default: 'id'
    },
    css: {
      type: Object,
      default () {
        return {
          tableClass: 'ui blue selectable celled stackable attached table',
          loadingClass: 'loading',
          ascendingIcon: 'blue chevron up icon',
          descendingIcon: 'blue chevron down icon',
          ascendingClass: 'sorted-asc',
          descendingClass: 'sorted-desc',
          sortableIcon: '',
          detailRowClass: 'vuetable-detail-row',
          handleIcon: 'grey sidebar icon',
          tableBodyClass: 'vuetable-semantic-no-top vuetable-fixed-layout',
          tableHeaderClass: 'vuetable-fixed-layout'
        }
      }
    },
    minRows: {
      type: Number,
      default: 0
    },
    silent: {
      type: Boolean,
      default: false
    },
    noDataTemplate: {
      type: String,
      default() {
        return 'No Data Available'
      }
    },
    showSortIcons: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      eventPrefix: 'vuetable:',
      tableFields: [],
      tableData: null,
      tablePagination: null,
      currentPage: this.initialPage,
      selectedTo: [],
      visibleDetailRows: [],
      lastScrollPosition: 0,
      scrollBarWidth: '17px', //chrome default
      scrollVisible: false,
    }
  },
  mounted () {
    this.normalizeFields()
    this.normalizeSortOrder()
    if (this.isFixedHeader) {
      this.scrollBarWidth = this.getScrollBarWidth() + 'px';
    }
    this.$nextTick(function() {
      this.fireEvent('initialized', this.tableFields)
    })

    if (this.loadOnStart) {
      this.loadData()
    }
    if (this.isFixedHeader) {
      let elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];
      if (elem != null) {
        elem.addEventListener('scroll', this.handleScroll);
      }
    }
  },
  destroyed () {
    let elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];
    if (elem != null) {
      elem.removeEventListener('scroll', this.handleScroll);
    }
  },
  computed: {
    version: () => VERSION,
    useDetailRow () {
      if (this.tableData && this.tableData[0] && this.detailRowComponent !== '' && typeof this.tableData[0][this.trackBy] === 'undefined') {
        this.warn('You need to define unique row identifier in order for detail-row feature to work. Use `track-by` prop to define one!')
        return false
      }

      return this.detailRowComponent !== ''
    },
    countVisibleFields () {
      return this.tableFields.filter(function(field) {
        return field.visible
      }).length
    },
    countTableData () {
      if (this.tableData === null) {
        return 0
      }
      return this.tableData.length
    },
    displayEmptyDataRow () {
      return this.countTableData === 0 && this.noDataTemplate.length > 0
    },
    lessThanMinRows () {
      if (this.tableData === null || this.tableData.length === 0) {
        return true
      }
      return this.tableData.length < this.minRows
    },
    blankRows () {
      if (this.tableData === null || this.tableData.length === 0) {
        return this.minRows
      }
      if (this.tableData.length >= this.minRows) {
        return 0
      }

      return this.minRows - this.tableData.length
    },
    isApiMode () {
      return this.apiMode
    },
    isDataMode () {
      return ! this.apiMode
    },
    isFixedHeader () {
      return this.tableHeight != null
    }
  },
  methods: {
    getScrollBarWidth () {
      const outer = document.createElement('div');
      const inner = document.createElement('div');

      outer.style.visibility = 'hidden';
      outer.style.width = '100px';

      inner.style.width = '100%';


      outer.appendChild(inner);
      document.body.appendChild(outer);


      const widthWithoutScrollbar = outer.offsetWidth;

      outer.style.overflow = 'scroll';

      const widthWithScrollbar = inner.offsetWidth;


      document.body.removeChild(outer);


      return (widthWithoutScrollbar - widthWithScrollbar);
    },
    handleScroll (e) { //make sure that the header and the body are aligned when scrolling horizontally on a table that is wider than the viewport
      let horizontal = e.currentTarget.scrollLeft;
      if (horizontal != this.lastScrollPosition) { //don't modify header scroll if we are scrolling vertically
        let header = this.$el.getElementsByClassName('vuetable-head-wrapper')[0]
        if (header != null) {
          header.scrollLeft = horizontal;
        }
        this.lastScrollPosition = horizontal;
      }

    },
    normalizeFields () {
      if (typeof(this.fields) === 'undefined') {
        this.warn('You need to provide "fields" prop.')
        return
      }

      this.tableFields = []
      let self = this
      let obj
      this.fields.forEach(function(field, i) {
        if (typeof (field) === 'string') {
          obj = {
            name: field,
            title: self.setTitle(field),
            titleClass: '',
            dataClass: '',
            callback: null,
            visible: true,
          }
        } else {
          obj = {
            name: field.name,
            width: field.width,
            title: (field.title === undefined) ? self.setTitle(field.name) : field.title,
            sortField: field.sortField,
            titleClass: (field.titleClass === undefined) ? '' : field.titleClass,
            dataClass: (field.dataClass === undefined) ? '' : field.dataClass,
            callback: (field.callback === undefined) ? '' : field.callback,
            visible: (field.visible === undefined) ? true : field.visible,
          }
        }
        self.tableFields.push(obj)
      })
    },
    setData (data) {
      if (data === null || typeof(data) === 'undefined') return

      this.fireEvent('loading')

      if (Array.isArray(data)) {
        this.tableData = data
        this.fireEvent('loaded')
        return
      }

      this.tableData = this.getObjectValue(data, this.dataPath, null)
      this.tablePagination = this.getObjectValue(data, this.paginationPath, null)

      this.$nextTick(function() {
        this.fixHeader()
        this.fireEvent('pagination-data', this.tablePagination)
        this.fireEvent('loaded')
      })
    },
    setTitle (str) {
      if (this.isSpecialField(str)) {
        return ''
      }

      return this.titleCase(str)
    },
    getTitle (field) {
      if (typeof(field.title) === 'function') return field.title()

      return typeof(field.title) === 'undefined'
        ? field.name.replace('.', ' ')
        : field.title
    },
    renderTitle (field) {
      let title = this.getTitle(field)

      if (title.length > 0 && this.isInCurrentSortGroup(field) || this.hasSortableIcon(field)) {
        let style = `opacity:${this.sortIconOpacity(field)};position:relative;float:right`
        let iconTag = this.showSortIcons ? this.renderIconTag(['sort-icon', this.sortIcon(field)], `style="${style}"`) : ''
        return title + ' ' + iconTag
      }

      return title
    },
    renderSequence (index) {
      return this.tablePagination
        ? this.tablePagination.from + index
        : index
    },
    renderNormalField (field, item) {
      return this.hasCallback(field)
        ? this.callCallback(field, item)
        : this.getObjectValue(item, field.name, '')
    },
    isSpecialField (fieldName) {
      return fieldName.slice(0, 2) === '__'
    },
    titleCase (str) {
      return str.replace(/\w+/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },
    camelCase (str, delimiter = '_') {
      let self = this
      return str.split(delimiter).map(function(item) {
        return self.titleCase(item)
      }).join('')
    },
    notIn (str, arr) {
      return arr.indexOf(str) === -1
    },
    loadData (success = this.loadSuccess, failed = this.loadFailed) {
      if (this.isDataMode) {
        this.callDataManager()
        return
      }

      this.fireEvent('loading')

      this.httpOptions['params'] = this.getAppendParams( this.getAllQueryParams() )

      return this.fetch(this.apiUrl, this.httpOptions).then(
          success,
          failed
      ).catch(() => failed())
    },
    fetch (apiUrl, httpOptions) {
      return this.httpFetch
          ? this.httpFetch(apiUrl, httpOptions)
          : axios__WEBPACK_IMPORTED_MODULE_0___default.a[this.httpMethod](apiUrl, httpOptions)
    },
    loadSuccess (response) {
      this.fireEvent('load-success', response)

      let body = this.transform(response.data)

      this.tableData = this.getObjectValue(body, this.dataPath, null)
      this.tablePagination = this.getObjectValue(body, this.paginationPath, null)

      if (this.tablePagination === null) {
        this.warn('vuetable: pagination-path "' + this.paginationPath + '" not found. '
          + 'It looks like the data returned from the sever does not have pagination information '
          + "or you may have set it incorrectly.\n"
          + 'You can explicitly suppress this warning by setting pagination-path="".'
        )
      }

      this.$nextTick(function() {
        this.fixHeader()
        this.fireEvent('pagination-data', this.tablePagination)
        this.fireEvent('loaded')
      })
    },
    fixHeader() {
      if (!this.isFixedHeader) {
        return;
      }

      let elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0]
      if (elem != null) {
        if (elem.scrollHeight > elem.clientHeight) {
          this.scrollVisible = true;
        }
        else {
          this.scrollVisible = false;
        }
      }
    },
    loadFailed (response) {
      console.error('load-error', response)
      this.fireEvent('load-error', response)
      this.fireEvent('loaded')
    },
    transform (data) {
      let func = 'transform'

      if (this.parentFunctionExists(func)) {
          return this.$parent[func].call(this.$parent, data)
      }

      return data
    },
    parentFunctionExists (func) {
      return (func !== '' && typeof this.$parent[func] === 'function')
    },
    callParentFunction (func, args, defaultValue = null) {
      if (this.parentFunctionExists(func)) {
        return this.$parent[func].call(this.$parent, args)
      }

      return defaultValue
    },
    fireEvent (eventName, args) {
      this.$emit(this.eventPrefix + eventName, args)
    },
    warn (msg) {
      if (!this.silent) {
        console.warn(msg)
      }
    },
    getAllQueryParams () {
      let params = {}

      if (typeof(this.queryParams) === 'function') {
        params = this.queryParams(this.sortOrder, this.currentPage, this.perPage)
        return typeof(params) !== 'object' ? {} : params
      }

      params[this.queryParams.sort] = this.getSortParam()
      params[this.queryParams.page] = this.currentPage
      params[this.queryParams.perPage] = this.perPage

      return params
    },
    getSortParam () {
      if (!this.sortOrder || this.sortOrder.field == '') {
        return ''
      }

      if (typeof this.$parent['getSortParam'] === 'function') {
        return this.$parent['getSortParam'].call(this.$parent, this.sortOrder)
      }

      return this.getDefaultSortParam()
    },
    getDefaultSortParam () {
      let result = '';

      for (let i = 0; i < this.sortOrder.length; i++) {
        let fieldName = (typeof this.sortOrder[i].sortField === 'undefined')
          ? this.sortOrder[i].field
          : this.sortOrder[i].sortField;

        result += fieldName + '|' + this.sortOrder[i].direction + ((i+1) < this.sortOrder.length ? ',' : '');
      }
      return result;
    },
    getAppendParams (params) {
      for (let x in this.appendParams) {
        params[x] = this.appendParams[x]
      }

      return params
    },
    extractName (string) {
      return string.split(':')[0].trim()
    },
    extractArgs (string) {
      return string.split(':')[1]
    },
    isSortable (field) {
      return !(typeof field.sortField === 'undefined')
    },
    isInCurrentSortGroup (field) {
      return this.currentSortOrderPosition(field) !== false;
    },
    hasSortableIcon (field) {
      return this.isSortable(field) && this.css.sortableIcon != ''
    },
    currentSortOrderPosition (field) {
      if ( ! this.isSortable(field)) {
        return false
      }

      for (let i = 0; i < this.sortOrder.length; i++) {
        if (this.fieldIsInSortOrderPosition(field, i)) {
          return i;
        }
      }

      return false;
    },
    fieldIsInSortOrderPosition (field, i) {
      return this.sortOrder[i].field === field.name && this.sortOrder[i].sortField === field.sortField
    },
    orderBy (field, event) {
      if ( ! this.isSortable(field) ) return

      let key = this.multiSortKey.toLowerCase() + 'Key'

      if (this.multiSort && event[key]) { //adding column to multisort
        this.multiColumnSort(field)
      } else {
        //no multisort, or resetting sort
        this.singleColumnSort(field)
      }

      this.currentPage = 1    // reset page index
      if (this.apiMode || this.dataManager) {
        this.loadData()
      }
    },
    multiColumnSort (field) {
      let i = this.currentSortOrderPosition(field);

      if(i === false) { //this field is not in the sort array yet
        this.sortOrder.push({
          field: field.name,
          sortField: field.sortField,
          direction: 'asc'
        });
      } else { //this field is in the sort array, now we change its state
        if(this.sortOrder[i].direction === 'asc') {
          // switch direction
          this.sortOrder[i].direction = 'desc'
        } else {
          //remove sort condition
          this.sortOrder.splice(i, 1);
        }
      }
    },
    singleColumnSort (field) {
      if (this.sortOrder.length === 0) {
        this.clearSortOrder()
      }

      this.sortOrder.splice(1); //removes additional columns

      if (this.fieldIsInSortOrderPosition(field, 0)) {
        // change sort direction
        this.sortOrder[0].direction = this.sortOrder[0].direction === 'asc' ? 'desc' : 'asc'
      } else {
        // reset sort direction
        this.sortOrder[0].direction = 'asc'
      }
      this.sortOrder[0].field = field.name
      this.sortOrder[0].sortField = field.sortField
    },
    clearSortOrder () {
      this.sortOrder.push({
        field: '',
        sortField: '',
        direction: 'asc'
      });
    },
    sortClass (field) {
      let cls = ''
      let i = this.currentSortOrderPosition(field)

      if (i !== false) {
        cls = (this.sortOrder[i].direction == 'asc') ? this.css.ascendingClass : this.css.descendingClass
      }

      return cls
    },
    sortIcon (field) {
      let cls = this.css.sortableIcon
      let i = this.currentSortOrderPosition(field)

      if (i !== false) {
        cls = (this.sortOrder[i].direction == 'asc') ? this.css.ascendingIcon : this.css.descendingIcon
      }

      return cls;
    },
    sortIconOpacity (field) {
      /*
       * fields with stronger precedence have darker color
       *
       * if there are few fields, we go down by 0.3
       * ex. 2 fields are selected: 1.0, 0.7
       *
       * if there are more we go down evenly on the given spectrum
       * ex. 6 fields are selected: 1.0, 0.86, 0.72, 0.58, 0.44, 0.3
       */
      let max = 1.0,
          min = 0.3,
          step = 0.3

      let count = this.sortOrder.length;
      let current = this.currentSortOrderPosition(field)


      if(max - count * step < min) {
        step = (max - min) / (count-1)
      }

      let opacity = max - current * step

      return opacity
    },
    hasCallback (item) {
      return item.callback ? true : false
    },
    callCallback (field, item) {
      if ( ! this.hasCallback(field)) return

      if(typeof(field.callback) == 'function') {
       return field.callback(this.getObjectValue(item, field.name))
      }

      let args = field.callback.split('|')
      let func = args.shift()

      if (typeof this.$parent[func] === 'function') {
        let value = this.getObjectValue(item, field.name)

        return (args.length > 0)
          ? this.$parent[func].apply(this.$parent, [value].concat(args))
          : this.$parent[func].call(this.$parent, value)
      }

      return null
    },
    getObjectValue (object, path, defaultValue) {
      defaultValue = (typeof defaultValue === 'undefined') ? null : defaultValue

      let obj = object
      if (path.trim() != '') {
        let keys = path.split('.')
        keys.forEach(function(key) {
          if (obj !== null && typeof obj[key] !== 'undefined' && obj[key] !== null) {
            obj = obj[key]
          } else {
            obj = defaultValue
            return
          }
        })
      }
      return obj
    },
    toggleCheckbox (dataItem, fieldName, event) {
      let isChecked = event.target.checked
      let idColumn = this.trackBy

      if (dataItem[idColumn] === undefined) {
        this.warn('__checkbox field: The "'+this.trackBy+'" field does not exist! Make sure the field you specify in "track-by" prop does exist.')
        return
      }

      let key = dataItem[idColumn]
      if (isChecked) {
        this.selectId(key)
      } else {
        this.unselectId(key)
      }
      this.$emit('vuetable:checkbox-toggled', isChecked, dataItem)
    },
    selectId (key) {
      if ( ! this.isSelectedRow(key)) {
        this.selectedTo.push(key)
      }
    },
    unselectId (key) {
      this.selectedTo = this.selectedTo.filter(function(item) {
        return item !== key
      })
    },
    isSelectedRow (key) {
      return this.selectedTo.indexOf(key) >= 0
    },
    rowSelected (dataItem, fieldName){
      let idColumn = this.trackBy
      let key = dataItem[idColumn]

      return this.isSelectedRow(key)
    },
    checkCheckboxesState (fieldName) {
      if (! this.tableData) return

      let self = this
      let idColumn = this.trackBy
      let selector = 'th.vuetable-th-checkbox-' + idColumn + ' input[type=checkbox]'
      let els = document.querySelectorAll(selector)

      //fixed:document.querySelectorAll return the typeof nodeList not array
      if (els.forEach===undefined)
        els.forEach=function(cb){
          [].forEach.call(els, cb);
        }

      // count how many checkbox row in the current page has been checked
      let selected = this.tableData.filter(function(item) {
        return self.selectedTo.indexOf(item[idColumn]) >= 0
      })

      // count == 0, clear the checkbox
      if (selected.length <= 0) {
        els.forEach(function(el) {
          el.indeterminate = false
        })
        return false
      }
      // count > 0 and count < perPage, set checkbox state to 'indeterminate'
      else if (selected.length < this.perPage) {
        els.forEach(function(el) {
          el.indeterminate = true
        })
        return true
      }
      // count == perPage, set checkbox state to 'checked'
      else {
        els.forEach(function(el) {
          el.indeterminate = false
        })
        return true
      }
    },
    toggleAllCheckboxes (fieldName, event) {
      let self = this
      let isChecked = event.target.checked
      let idColumn = this.trackBy

      if (isChecked) {
        this.tableData.forEach(function(dataItem) {
          self.selectId(dataItem[idColumn])
        })
      } else {
        this.tableData.forEach(function(dataItem) {
          self.unselectId(dataItem[idColumn])
        })
      }
      this.$emit('vuetable:checkbox-toggled-all', isChecked)
    },
    gotoPreviousPage () {
      if (this.currentPage > 1) {
        this.currentPage--
        this.loadData()
      }
    },
    gotoNextPage () {
      if (this.currentPage < this.tablePagination.last_page) {
        this.currentPage++
        this.loadData()
      }
    },
    gotoPage (page) {
      if (page != this.currentPage && (page > 0 && page <= this.tablePagination.last_page)) {
        this.currentPage = page
        this.loadData()
      }
    },
    isVisibleDetailRow (rowId) {
      return this.visibleDetailRows.indexOf( rowId ) >= 0
    },
    showDetailRow (rowId) {
      if (!this.isVisibleDetailRow(rowId)) {
        this.visibleDetailRows.push(rowId)
      }
    },
    hideDetailRow (rowId) {
      if (this.isVisibleDetailRow(rowId)) {
        this.visibleDetailRows.splice(
          this.visibleDetailRows.indexOf(rowId),
          1
        )
      }
    },
    toggleDetailRow (rowId) {
      if (this.isVisibleDetailRow(rowId)) {
        this.hideDetailRow(rowId)
      } else {
        this.showDetailRow(rowId)
      }
    },
    showField (index) {
      if (index < 0 || index > this.tableFields.length) return

      this.tableFields[index].visible = true
    },
    hideField (index) {
      if (index < 0 || index > this.tableFields.length) return

      this.tableFields[index].visible = false
    },
    toggleField (index) {
      if (index < 0 || index > this.tableFields.length) return

      this.tableFields[index].visible = ! this.tableFields[index].visible
    },
    renderIconTag (classes, options = '') {
      return typeof(this.css.renderIcon) === 'undefined'
        ? `<i class="${classes.join(' ')}" ${options}></i>`
        : this.css.renderIcon(classes, options)
    },
    makePagination (total = null, perPage = null, currentPage = null) {
      let pagination = {}
      total = total === null ? this.dataTotal : total
      perPage = perPage === null ? this.perPage : perPage
      currentPage = currentPage === null ? this.currentPage : currentPage

      return {
        'total': total,
        'per_page': perPage,
        'current_page': currentPage,
        'last_page': Math.ceil(total / perPage) || 0,
        'next_page_url': '',
        'prev_page_url': '',
        'from': (currentPage -1) * perPage +1,
        'to': Math.min(currentPage * perPage, total)
      }
    },
    normalizeSortOrder () {
      this.sortOrder.forEach(function(item) {
        item.sortField = item.sortField || item.field
      })
    },
    callDataManager () {
      if (this.dataManager === null && this.data === null) return

      if (Array.isArray(this.data)) {
        return this.setData(this.data)
      } 
      
      this.normalizeSortOrder()

      return this.setData(
        this.dataManager
          ? this.dataManager(this.sortOrder, this.makePagination())
          : this.data
      )
    },
    onRowClass (dataItem, index) {
      if (this.rowClassCallback !== '') {
        this.warn('"row-class-callback" prop is deprecated, please use "row-class" prop instead.')
        return
      }

      if (typeof(this.rowClass) === 'function') {
        return this.rowClass(dataItem, index)
      }

      return this.rowClass
    },
    onRowChanged (dataItem) {
      this.fireEvent('row-changed', dataItem)
      return true
    },
    onRowClicked (dataItem, event) {
      this.$emit(this.eventPrefix + 'row-clicked', dataItem, event)
      return true
    },
    onRowDoubleClicked (dataItem, event) {
      this.$emit(this.eventPrefix + 'row-dblclicked', dataItem, event)
    },
    onDetailRowClick (dataItem, event) {
      this.$emit(this.eventPrefix + 'detail-row-clicked', dataItem, event)
    },
    onCellClicked (dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-clicked', dataItem, field, event)
    },
    onCellDoubleClicked (dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-dblclicked', dataItem, field, event)
    },
    onCellRightClicked (dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-rightclicked', dataItem, field, event)
    },
    /*
     * API for externals
     */
    changePage (page) {
      if (page === 'prev') {
        this.gotoPreviousPage()
      } else if (page === 'next') {
        this.gotoNextPage()
      } else {
        this.gotoPage(page)
      }
    },
    reload () {
      return this.loadData()
    },
    refresh () {
      this.currentPage = 1
      return this.loadData()
    },
    resetData () {
      this.tableData = null
      this.tablePagination = null
      this.fireEvent('data-reset')
    }
  }, // end: methods
  watch: {
    'multiSort' (newVal, oldVal) {
      if (newVal === false && this.sortOrder.length > 1) {
        this.sortOrder.splice(1);
        this.loadData();
      }
    },
    'apiUrl'  (newVal, oldVal) {
      if(this.reactiveApiUrl && newVal !== oldVal)
        this.refresh()
    },
    'data' (newVal, oldVal) {
      this.setData(newVal)
    },
    'tableHeight' (newVal, oldVal) {
      this.fixHeader()
    }
  },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isFixedHeader
    ? _c("div", [
        _c("div", { staticClass: "vuetable-head-wrapper" }, [
          _c(
            "table",
            {
              class: ["vuetable", _vm.css.tableClass, _vm.css.tableHeaderClass]
            },
            [
              _c("thead", [
                _c(
                  "tr",
                  [
                    _vm._l(_vm.tableFields, function(field, fieldIndex) {
                      return [
                        field.visible
                          ? [
                              _vm.isSpecialField(field.name)
                                ? [
                                    _vm.extractName(field.name) == "__checkbox"
                                      ? _c(
                                          "th",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-th-checkbox-" +
                                                _vm.trackBy,
                                              field.titleClass
                                            ],
                                            style: { width: field.width }
                                          },
                                          [
                                            _c("input", {
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked: _vm.checkCheckboxesState(
                                                  field.name
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  _vm.toggleAllCheckboxes(
                                                    field.name,
                                                    $event
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__component"
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-component-" +
                                              _vm.trackBy,
                                            field.titleClass,
                                            _vm.sortClass(field),
                                            { sortable: _vm.isSortable(field) }
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.orderBy(field, $event)
                                            }
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__slot"
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-slot-" +
                                              _vm.extractArgs(field.name),
                                            field.titleClass,
                                            _vm.sortClass(field),
                                            { sortable: _vm.isSortable(field) }
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.orderBy(field, $event)
                                            }
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__sequence"
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-sequence",
                                            field.titleClass || ""
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.notIn(_vm.extractName(field.name), [
                                      "__sequence",
                                      "__checkbox",
                                      "__component",
                                      "__slot"
                                    ])
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-" + field.name,
                                            field.titleClass || ""
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
                                          }
                                        })
                                      : _vm._e()
                                  ]
                                : [
                                    _c("th", {
                                      key: fieldIndex,
                                      class: [
                                        "vuetable-th-" + field.name,
                                        field.titleClass,
                                        _vm.sortClass(field),
                                        { sortable: _vm.isSortable(field) }
                                      ],
                                      style: { width: field.width },
                                      attrs: { id: "_" + field.name },
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.renderTitle(field)
                                        )
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.orderBy(field, $event)
                                        }
                                      }
                                    })
                                  ]
                            ]
                          : _vm._e()
                      ]
                    }),
                    _vm._v(" "),
                    _vm.scrollVisible
                      ? _c("th", {
                          staticClass: "vuetable-gutter-col",
                          style: { width: _vm.scrollBarWidth }
                        })
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "vuetable-body-wrapper",
            style: { height: _vm.tableHeight }
          },
          [
            _c(
              "table",
              {
                class: ["vuetable", _vm.css.tableClass, _vm.css.tableBodyClass]
              },
              [
                _c(
                  "colgroup",
                  [
                    _vm._l(_vm.tableFields, function(field, fieldIndex) {
                      return [
                        field.visible
                          ? [
                              _c("col", {
                                key: fieldIndex,
                                class: [
                                  "vuetable-th-" + field.name,
                                  field.titleClass
                                ],
                                style: { width: field.width },
                                attrs: { id: "_col_" + field.name }
                              })
                            ]
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "tbody",
                  { staticClass: "vuetable-body" },
                  [
                    _vm._l(_vm.tableData, function(item, itemIndex) {
                      return [
                        _c(
                          "tr",
                          {
                            key: itemIndex,
                            class: _vm.onRowClass(item, itemIndex),
                            attrs: {
                              "item-index": itemIndex,
                              render: _vm.onRowChanged(item)
                            },
                            on: {
                              click: function($event) {
                                _vm.onRowClicked(item, $event)
                              },
                              dblclick: function($event) {
                                _vm.onRowDoubleClicked(item, $event)
                              }
                            }
                          },
                          [
                            _vm._l(_vm.tableFields, function(
                              field,
                              fieldIndex
                            ) {
                              return [
                                field.visible
                                  ? [
                                      _vm.isSpecialField(field.name)
                                        ? [
                                            _vm.extractName(field.name) ==
                                            "__sequence"
                                              ? _c("td", {
                                                  key: fieldIndex,
                                                  class: [
                                                    "vuetable-sequence",
                                                    field.dataClass
                                                  ],
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      _vm.renderSequence(
                                                        itemIndex
                                                      )
                                                    )
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.extractName(field.name) ==
                                            "__handle"
                                              ? _c("td", {
                                                  key: fieldIndex,
                                                  class: [
                                                    "vuetable-handle",
                                                    field.dataClass
                                                  ],
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      _vm.renderIconTag([
                                                        "handle-icon",
                                                        _vm.css.handleIcon
                                                      ])
                                                    )
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.extractName(field.name) ==
                                            "__checkbox"
                                              ? _c(
                                                  "td",
                                                  {
                                                    key: fieldIndex,
                                                    class: [
                                                      "vuetable-checkboxes",
                                                      field.dataClass
                                                    ]
                                                  },
                                                  [
                                                    _c("input", {
                                                      attrs: {
                                                        type: "checkbox"
                                                      },
                                                      domProps: {
                                                        checked: _vm.rowSelected(
                                                          item,
                                                          field.name
                                                        )
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          _vm.toggleCheckbox(
                                                            item,
                                                            field.name,
                                                            $event
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.extractName(field.name) ===
                                            "__component"
                                              ? _c(
                                                  "td",
                                                  {
                                                    key: fieldIndex,
                                                    class: [
                                                      "vuetable-component",
                                                      field.dataClass
                                                    ]
                                                  },
                                                  [
                                                    _c(
                                                      _vm.extractArgs(
                                                        field.name
                                                      ),
                                                      {
                                                        tag: "component",
                                                        attrs: {
                                                          "row-data": item,
                                                          "row-index": itemIndex,
                                                          "row-field":
                                                            field.sortField
                                                        }
                                                      }
                                                    )
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.extractName(field.name) ===
                                            "__slot"
                                              ? _c(
                                                  "td",
                                                  {
                                                    key: fieldIndex,
                                                    class: [
                                                      "vuetable-slot",
                                                      field.dataClass
                                                    ]
                                                  },
                                                  [
                                                    _vm._t(
                                                      _vm.extractArgs(
                                                        field.name
                                                      ),
                                                      null,
                                                      {
                                                        rowData: item,
                                                        rowIndex: itemIndex,
                                                        rowField:
                                                          field.sortField
                                                      }
                                                    )
                                                  ],
                                                  2
                                                )
                                              : _vm._e()
                                          ]
                                        : [
                                            _c("td", {
                                              key: fieldIndex,
                                              class: field.dataClass,
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.renderNormalField(
                                                    field,
                                                    item
                                                  )
                                                )
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.onCellClicked(
                                                    item,
                                                    field,
                                                    $event
                                                  )
                                                },
                                                dblclick: function($event) {
                                                  _vm.onCellDoubleClicked(
                                                    item,
                                                    field,
                                                    $event
                                                  )
                                                },
                                                contextmenu: function($event) {
                                                  _vm.onCellRightClicked(
                                                    item,
                                                    field,
                                                    $event
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                    ]
                                  : _vm._e()
                              ]
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.useDetailRow
                          ? [
                              _c(
                                "transition",
                                {
                                  key: itemIndex,
                                  attrs: { name: _vm.detailRowTransition }
                                },
                                [
                                  _vm.isVisibleDetailRow(item[_vm.trackBy])
                                    ? _c(
                                        "tr",
                                        {
                                          class: [_vm.css.detailRowClass],
                                          on: {
                                            click: function($event) {
                                              _vm.onDetailRowClick(item, $event)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "td",
                                            {
                                              attrs: {
                                                colspan: _vm.countVisibleFields
                                              }
                                            },
                                            [
                                              _c(_vm.detailRowComponent, {
                                                tag: "component",
                                                attrs: {
                                                  "row-data": item,
                                                  "row-index": itemIndex
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            ]
                          : _vm._e()
                      ]
                    }),
                    _vm._v(" "),
                    _vm.displayEmptyDataRow
                      ? [
                          _c("tr", [
                            _c("td", {
                              staticClass: "vuetable-empty-result",
                              attrs: { colspan: _vm.countVisibleFields },
                              domProps: {
                                innerHTML: _vm._s(_vm.noDataTemplate)
                              }
                            })
                          ])
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.lessThanMinRows
                      ? _vm._l(_vm.blankRows, function(i) {
                          return _c(
                            "tr",
                            { key: i, staticClass: "blank-row" },
                            [
                              _vm._l(_vm.tableFields, function(
                                field,
                                fieldIndex
                              ) {
                                return [
                                  field.visible
                                    ? _c("td", { key: fieldIndex }, [
                                        _vm._v(" ")
                                      ])
                                    : _vm._e()
                                ]
                              })
                            ],
                            2
                          )
                        })
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          ]
        )
      ])
    : _c("table", { class: ["vuetable", _vm.css.tableClass] }, [
        _c("thead", [
          _c(
            "tr",
            [
              _vm._l(_vm.tableFields, function(field, fieldIndex) {
                return [
                  field.visible
                    ? [
                        _vm.isSpecialField(field.name)
                          ? [
                              _vm.extractName(field.name) == "__checkbox"
                                ? _c(
                                    "th",
                                    {
                                      key: fieldIndex,
                                      class: [
                                        "vuetable-th-checkbox-" + _vm.trackBy,
                                        field.titleClass
                                      ],
                                      style: { width: field.width }
                                    },
                                    [
                                      _c("input", {
                                        attrs: { type: "checkbox" },
                                        domProps: {
                                          checked: _vm.checkCheckboxesState(
                                            field.name
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.toggleAllCheckboxes(
                                              field.name,
                                              $event
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.extractName(field.name) == "__component"
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-component-" + _vm.trackBy,
                                      field.titleClass,
                                      _vm.sortClass(field),
                                      { sortable: _vm.isSortable(field) }
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field))
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.orderBy(field, $event)
                                      }
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.extractName(field.name) == "__slot"
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-slot-" +
                                        _vm.extractArgs(field.name),
                                      field.titleClass,
                                      _vm.sortClass(field),
                                      { sortable: _vm.isSortable(field) }
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field))
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.orderBy(field, $event)
                                      }
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.extractName(field.name) == "__sequence"
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-sequence",
                                      field.titleClass || "",
                                      _vm.sortClass(field)
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field))
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.notIn(_vm.extractName(field.name), [
                                "__sequence",
                                "__checkbox",
                                "__component",
                                "__slot"
                              ])
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-" + field.name,
                                      field.titleClass || "",
                                      _vm.sortClass(field)
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field))
                                    }
                                  })
                                : _vm._e()
                            ]
                          : [
                              _c("th", {
                                key: fieldIndex,
                                class: [
                                  "vuetable-th-" + field.name,
                                  field.titleClass,
                                  _vm.sortClass(field),
                                  { sortable: _vm.isSortable(field) }
                                ],
                                style: { width: field.width },
                                attrs: { id: "_" + field.name },
                                domProps: {
                                  innerHTML: _vm._s(_vm.renderTitle(field))
                                },
                                on: {
                                  click: function($event) {
                                    _vm.orderBy(field, $event)
                                  }
                                }
                              })
                            ]
                      ]
                    : _vm._e()
                ]
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          { staticClass: "vuetable-body" },
          [
            _vm._l(_vm.tableData, function(item, itemIndex) {
              return [
                _c(
                  "tr",
                  {
                    key: itemIndex,
                    class: _vm.onRowClass(item, itemIndex),
                    attrs: {
                      "item-index": itemIndex,
                      render: _vm.onRowChanged(item)
                    },
                    on: {
                      dblclick: function($event) {
                        _vm.onRowDoubleClicked(item, $event)
                      },
                      click: function($event) {
                        _vm.onRowClicked(item, $event)
                      }
                    }
                  },
                  [
                    _vm._l(_vm.tableFields, function(field, fieldIndex) {
                      return [
                        field.visible
                          ? [
                              _vm.isSpecialField(field.name)
                                ? [
                                    _vm.extractName(field.name) == "__sequence"
                                      ? _c("td", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-sequence",
                                            field.dataClass
                                          ],
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderSequence(itemIndex)
                                            )
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__handle"
                                      ? _c("td", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-handle",
                                            field.dataClass
                                          ],
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderIconTag([
                                                "handle-icon",
                                                _vm.css.handleIcon
                                              ])
                                            )
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__checkbox"
                                      ? _c(
                                          "td",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-checkboxes",
                                              field.dataClass
                                            ]
                                          },
                                          [
                                            _c("input", {
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked: _vm.rowSelected(
                                                  item,
                                                  field.name
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  _vm.toggleCheckbox(
                                                    item,
                                                    field.name,
                                                    $event
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) ===
                                    "__component"
                                      ? _c(
                                          "td",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-component",
                                              field.dataClass
                                            ]
                                          },
                                          [
                                            _c(_vm.extractArgs(field.name), {
                                              tag: "component",
                                              attrs: {
                                                "row-data": item,
                                                "row-index": itemIndex,
                                                "row-field": field.sortField
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) === "__slot"
                                      ? _c(
                                          "td",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-slot",
                                              field.dataClass
                                            ]
                                          },
                                          [
                                            _vm._t(
                                              _vm.extractArgs(field.name),
                                              null,
                                              {
                                                rowData: item,
                                                rowIndex: itemIndex,
                                                rowField: field.sortField
                                              }
                                            )
                                          ],
                                          2
                                        )
                                      : _vm._e()
                                  ]
                                : [
                                    _vm.hasCallback(field)
                                      ? _c("td", {
                                          key: fieldIndex,
                                          class: field.dataClass,
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.callCallback(field, item)
                                            )
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.onCellClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            dblclick: function($event) {
                                              _vm.onCellDoubleClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            contextmenu: function($event) {
                                              _vm.onCellRightClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            }
                                          }
                                        })
                                      : _c("td", {
                                          key: fieldIndex,
                                          class: field.dataClass,
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.getObjectValue(
                                                item,
                                                field.name,
                                                ""
                                              )
                                            )
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.onCellClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            dblclick: function($event) {
                                              _vm.onCellDoubleClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            contextmenu: function($event) {
                                              _vm.onCellRightClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            }
                                          }
                                        })
                                  ]
                            ]
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.useDetailRow
                  ? [
                      _c(
                        "transition",
                        {
                          key: itemIndex,
                          attrs: { name: _vm.detailRowTransition }
                        },
                        [
                          _vm.isVisibleDetailRow(item[_vm.trackBy])
                            ? _c(
                                "tr",
                                {
                                  class: [_vm.css.detailRowClass],
                                  on: {
                                    click: function($event) {
                                      _vm.onDetailRowClick(item, $event)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "td",
                                    {
                                      attrs: { colspan: _vm.countVisibleFields }
                                    },
                                    [
                                      _c(_vm.detailRowComponent, {
                                        tag: "component",
                                        attrs: {
                                          "row-data": item,
                                          "row-index": itemIndex
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    ]
                  : _vm._e()
              ]
            }),
            _vm._v(" "),
            _vm.displayEmptyDataRow
              ? [
                  _c("tr", [
                    _c("td", {
                      staticClass: "vuetable-empty-result",
                      attrs: { colspan: _vm.countVisibleFields },
                      domProps: { innerHTML: _vm._s(_vm.noDataTemplate) }
                    })
                  ])
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.lessThanMinRows
              ? _vm._l(_vm.blankRows, function(i) {
                  return _c(
                    "tr",
                    { key: i, staticClass: "blank-row" },
                    [
                      _vm._l(_vm.tableFields, function(field, fieldIndex) {
                        return [
                          field.visible
                            ? _c("td", { key: fieldIndex }, [_vm._v(" ")])
                            : _vm._e()
                        ]
                      })
                    ],
                    2
                  )
                })
              : _vm._e()
          ],
          2
        )
      ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=template&id=772d712a&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=template&id=772d712a& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=template&id=f09ad966&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=template&id=f09ad966& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("apexcharts", {
    attrs: {
      width: "100%",
      height: "200px",
      type: "area",
      options: _vm.chartOptions,
      series: _vm.series
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=template&id=9a290186&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=template&id=9a290186& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("vuetable", {
        ref: "vuetable",
        attrs: {
          "api-url": "/retour/tables/dashboard",
          "per-page": 20,
          fields: _vm.fields,
          css: _vm.css
        },
        on: { "vuetable:pagination-data": _vm.onPaginationData }
      }),
      _vm._v(" "),
      _c("vuetable-pagination", {
        ref: "pagination",
        on: { "vuetable-pagination:change-page": _vm.onChangePage }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/RedirectsTable.vue?vue&type=template&id=2e15691a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/RedirectsTable.vue?vue&type=template&id=2e15691a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("vuetable", {
        ref: "vuetable",
        attrs: {
          "api-url": "/retour/tables/dashboard",
          "per-page": 20,
          fields: _vm.fields,
          css: _vm.css
        },
        on: { "vuetable:pagination-data": _vm.onPaginationData }
      }),
      _vm._v(" "),
      _c("vuetable-pagination", {
        ref: "pagination",
        on: { "vuetable-pagination:change-page": _vm.onChangePage }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=template&id=1b582036&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=template&id=1b582036& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.tablePagination && _vm.tablePagination.last_page > 1,
          expression: "tablePagination && tablePagination.last_page > 1"
        }
      ],
      class: _vm.css.wrapperClass
    },
    [
      _c(
        "a",
        {
          class: [
            "btn-nav",
            _vm.css.linkClass,
            _vm.isOnFirstPage ? _vm.css.disabledClass : ""
          ],
          on: {
            click: function($event) {
              _vm.loadPage(1)
            }
          }
        },
        [
          _vm.css.icons.first != ""
            ? _c("i", { class: [_vm.css.icons.first] })
            : _c("span", [_vm._v("«")])
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          class: [
            "btn-nav",
            _vm.css.linkClass,
            _vm.isOnFirstPage ? _vm.css.disabledClass : ""
          ],
          on: {
            click: function($event) {
              _vm.loadPage("prev")
            }
          }
        },
        [
          _vm.css.icons.next != ""
            ? _c("i", { class: [_vm.css.icons.prev] })
            : _c("span", [_vm._v(" ‹")])
        ]
      ),
      _vm._v(" "),
      _vm.notEnoughPages
        ? [
            _vm._l(_vm.totalPage, function(n) {
              return [
                _c("a", {
                  class: [
                    _vm.css.pageClass,
                    _vm.isCurrentPage(n) ? _vm.css.activeClass : ""
                  ],
                  domProps: { innerHTML: _vm._s(n) },
                  on: {
                    click: function($event) {
                      _vm.loadPage(n)
                    }
                  }
                })
              ]
            })
          ]
        : [
            _vm._l(_vm.windowSize, function(n) {
              return [
                _c("a", {
                  class: [
                    _vm.css.pageClass,
                    _vm.isCurrentPage(_vm.windowStart + n - 1)
                      ? _vm.css.activeClass
                      : ""
                  ],
                  domProps: { innerHTML: _vm._s(_vm.windowStart + n - 1) },
                  on: {
                    click: function($event) {
                      _vm.loadPage(_vm.windowStart + n - 1)
                    }
                  }
                })
              ]
            })
          ],
      _vm._v(" "),
      _c(
        "a",
        {
          class: [
            "btn-nav",
            _vm.css.linkClass,
            _vm.isOnLastPage ? _vm.css.disabledClass : ""
          ],
          on: {
            click: function($event) {
              _vm.loadPage("next")
            }
          }
        },
        [
          _vm.css.icons.next != ""
            ? _c("i", { class: [_vm.css.icons.next] })
            : _c("span", [_vm._v("› ")])
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          class: [
            "btn-nav",
            _vm.css.linkClass,
            _vm.isOnLastPage ? _vm.css.disabledClass : ""
          ],
          on: {
            click: function($event) {
              _vm.loadPage(_vm.totalPage)
            }
          }
        },
        [
          _vm.css.icons.last != ""
            ? _c("i", { class: [_vm.css.icons.last] })
            : _c("span", [_vm._v("»")])
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetable-2/src/components/Vuetable.vue":
/*!*************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/Vuetable.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vuetable.vue?vue&type=template&id=15965e3b&scoped=true& */ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true&");
/* harmony import */ var _Vuetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vuetable.vue?vue&type=script&lang=js& */ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& */ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Vuetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "15965e3b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vuetable-2/src/components/Vuetable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib??vue-loader-options!./Vuetable.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ignore_loader_index_js_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../ignore-loader!../../../vue-loader/lib??vue-loader-options!./Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css& */ "./node_modules/ignore-loader/index.js!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=style&index=0&id=15965e3b&scoped=true&lang=css&");
/* harmony import */ var _ignore_loader_index_js_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ignore_loader_index_js_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ignore_loader_index_js_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ignore_loader_index_js_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_ignore_loader_index_js_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_style_index_0_id_15965e3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./Vuetable.vue?vue&type=template&id=15965e3b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vuetable-2/src/components/Vuetable.vue?vue&type=template&id=15965e3b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_Vuetable_vue_vue_type_template_id_15965e3b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assetbundles/retour/src/css/app.pcss":
/*!**************************************************!*\
  !*** ./src/assetbundles/retour/src/css/app.pcss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assetbundles/retour/src/vue/Confetti.vue":
/*!******************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/Confetti.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Confetti_vue_vue_type_template_id_772d712a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Confetti.vue?vue&type=template&id=772d712a& */ "./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=template&id=772d712a&");
/* harmony import */ var _Confetti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Confetti.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Confetti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Confetti_vue_vue_type_template_id_772d712a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Confetti_vue_vue_type_template_id_772d712a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/Confetti.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confetti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Confetti.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confetti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=template&id=772d712a&":
/*!*************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=template&id=772d712a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Confetti_vue_vue_type_template_id_772d712a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Confetti.vue?vue&type=template&id=772d712a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/Confetti.vue?vue&type=template&id=772d712a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Confetti_vue_vue_type_template_id_772d712a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Confetti_vue_vue_type_template_id_772d712a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assetbundles/retour/src/vue/DashboardChart.vue":
/*!************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/DashboardChart.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardChart_vue_vue_type_template_id_f09ad966___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardChart.vue?vue&type=template&id=f09ad966& */ "./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=template&id=f09ad966&");
/* harmony import */ var _DashboardChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardChart.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardChart_vue_vue_type_template_id_f09ad966___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardChart_vue_vue_type_template_id_f09ad966___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/DashboardChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=template&id=f09ad966&":
/*!*******************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=template&id=f09ad966& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardChart_vue_vue_type_template_id_f09ad966___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardChart.vue?vue&type=template&id=f09ad966& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardChart.vue?vue&type=template&id=f09ad966&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardChart_vue_vue_type_template_id_f09ad966___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardChart_vue_vue_type_template_id_f09ad966___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assetbundles/retour/src/vue/DashboardTable.vue":
/*!************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/DashboardTable.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardTable_vue_vue_type_template_id_9a290186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardTable.vue?vue&type=template&id=9a290186& */ "./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=template&id=9a290186&");
/* harmony import */ var _DashboardTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardTable.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardTable_vue_vue_type_template_id_9a290186___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardTable_vue_vue_type_template_id_9a290186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/DashboardTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=template&id=9a290186&":
/*!*******************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=template&id=9a290186& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTable_vue_vue_type_template_id_9a290186___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardTable.vue?vue&type=template&id=9a290186& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/DashboardTable.vue?vue&type=template&id=9a290186&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTable_vue_vue_type_template_id_9a290186___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTable_vue_vue_type_template_id_9a290186___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assetbundles/retour/src/vue/RedirectsTable.vue":
/*!************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/RedirectsTable.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RedirectsTable_vue_vue_type_template_id_2e15691a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedirectsTable.vue?vue&type=template&id=2e15691a& */ "./src/assetbundles/retour/src/vue/RedirectsTable.vue?vue&type=template&id=2e15691a&");
/* harmony import */ var _RedirectsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RedirectsTable.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/RedirectsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RedirectsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RedirectsTable_vue_vue_type_template_id_2e15691a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RedirectsTable_vue_vue_type_template_id_2e15691a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/RedirectsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/RedirectsTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/RedirectsTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RedirectsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RedirectsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/RedirectsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RedirectsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/RedirectsTable.vue?vue&type=template&id=2e15691a&":
/*!*******************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/RedirectsTable.vue?vue&type=template&id=2e15691a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RedirectsTable_vue_vue_type_template_id_2e15691a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RedirectsTable.vue?vue&type=template&id=2e15691a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/RedirectsTable.vue?vue&type=template&id=2e15691a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RedirectsTable_vue_vue_type_template_id_2e15691a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RedirectsTable_vue_vue_type_template_id_2e15691a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePagination.vue":
/*!****************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePagination.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuetablePagination_vue_vue_type_template_id_1b582036___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuetablePagination.vue?vue&type=template&id=1b582036& */ "./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=template&id=1b582036&");
/* harmony import */ var _VuetablePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VuetablePagination.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VuetablePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VuetablePagination_vue_vue_type_template_id_1b582036___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VuetablePagination_vue_vue_type_template_id_1b582036___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/VuetablePagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VuetablePagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=template&id=1b582036&":
/*!***********************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=template&id=1b582036& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePagination_vue_vue_type_template_id_1b582036___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VuetablePagination.vue?vue&type=template&id=1b582036& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePagination.vue?vue&type=template&id=1b582036&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePagination_vue_vue_type_template_id_1b582036___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePagination_vue_vue_type_template_id_1b582036___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue":
/*!*********************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuetablePaginationMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuetablePaginationMixin.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _VuetablePaginationMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePaginationMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VuetablePaginationMixin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePaginationMixin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePaginationMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9Db25mZXR0aS52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkQ2hhcnQudnVlIiwid2VicGFjazovLy9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0Rhc2hib2FyZFRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9SZWRpcmVjdHNUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVQYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9WdWV0YWJsZVBhZ2luYXRpb25NaXhpbi52dWUiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWU/MmE5OSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0NvbmZldHRpLnZ1ZT82NWJhIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkQ2hhcnQudnVlPzg1Y2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9EYXNoYm9hcmRUYWJsZS52dWU/ZjUxYiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1JlZGlyZWN0c1RhYmxlLnZ1ZT84ZDNiIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVQYWdpbmF0aW9uLnZ1ZT9hYjRkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWU/NDVkMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWU/ZWUzNSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0NvbmZldHRpLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0NvbmZldHRpLnZ1ZT9jZjIzIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkQ2hhcnQudnVlIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkQ2hhcnQudnVlP2JiNTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9EYXNoYm9hcmRUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9EYXNoYm9hcmRUYWJsZS52dWU/MmY0NiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1JlZGlyZWN0c1RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1JlZGlyZWN0c1RhYmxlLnZ1ZT9iYmViIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVQYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbi52dWU/NWIyOSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZT80YzY1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLElBRkE7QUFHQSxLQU5BO0FBT0E7QUFQQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUZBO0FBR0EsQ0FKQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBTUEsQ0FQQTtBQVFBO0FBQ0E7QUFDQSxpQkFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTkEsRUFNQSxLQU5BLENBTUE7QUFDQTtBQUNBLEtBUkE7QUFTQSxDQVZBOztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBREEsS0FEQTtBQUlBO0FBQ0EscUJBREE7QUFFQSx3QkFGQTtBQUdBO0FBSEEsS0FKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFSQTtBQVNBO0FBZEEsS0FUQTtBQXlCQTtBQUNBO0FBQ0EsS0EzQkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FEQTtBQUVBO0FBQ0E7QUFEQSxxQkFGQTtBQUtBO0FBQ0E7QUFEQTtBQUxBLGlCQURBO0FBVUEsOENBVkE7QUFXQTtBQUNBLHFDQURBO0FBRUE7QUFGQSxpQkFYQTtBQWVBO0FBQ0EsZ0NBREE7QUFFQTtBQUNBO0FBREE7QUFGQSxpQkFmQTtBQXFCQTtBQUNBO0FBQ0E7QUFEQTtBQURBLGlCQXJCQTtBQTBCQSwwQkExQkE7QUEy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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDc1RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8bWFpbj5cbiAgICA8L21haW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xuICAgIGltcG9ydCBWdWVDb25mZXR0aSBmcm9tICd2dWUtY29uZmV0dGknXG5cbiAgICBWdWUudXNlKFZ1ZUNvbmZldHRpKTtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLiRjb25mZXR0aS5zdGFydCgpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29uZmV0dGkuc3RvcCgpO1xuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxhcGV4Y2hhcnRzIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjIwMHB4XCIgdHlwZT1cImFyZWFcIiA6b3B0aW9ucz1cImNoYXJ0T3B0aW9uc1wiIDpzZXJpZXM9XCJzZXJpZXNcIj48L2FwZXhjaGFydHM+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gICAgY29uc3QgY2hhcnREYXRhQmFzZVVybCA9ICcvcmV0b3VyL2NoYXJ0cy9kYXNoYm9hcmQvJztcblxuICAgIC8vIEdldCB0aGUgbGFyZ2VzdCBudW1iZXIgZnJvbSB0aGUgcGFzc2VkIGluIGFycmF5c1xuICAgIGNvbnN0IGxhcmdlc3ROdW1iZXIgPSAobWFpbkFycmF5KSA9PiB7XG4gICAgICAgIHJldHVybiBtYWluQXJyYXkubWFwKGZ1bmN0aW9uKHN1YkFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgc3ViQXJyYXkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gQ29uZmlndXJlIHRoZSBhcGkgZW5kcG9pbnRcbiAgICBjb25zdCBjb25maWd1cmVBcGkgPSAodXJsKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBiYXNlVVJMOiB1cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvLyBRdWVyeSBvdXIgQVBJIGVuZHBvaW50IHZpYSBhbiBYSFIgR0VUXG4gICAgY29uc3QgcXVlcnlBcGkgPSAoYXBpLCB1cmksIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGFwaS5nZXQodXJpXG4gICAgICAgICkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICAvLyBPdXIgY29tcG9uZW50IGV4cG9ydHNcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdhcGV4Y2hhcnRzJzogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYXBleGNoYXJ0c1wiICovICd2dWUtYXBleGNoYXJ0cycpXG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICAgICAgc3ViVGl0bGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJhbmdlOiBTdHJpbmcsXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC8vIExvYWQgaW4gb3VyIGNoYXJ0IGRhdGEgYXN5bmNocm9ub3VzbHlcbiAgICAgICAgICAgIGdldFNlcmllc0RhdGE6IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYXhpb3NcIiAqLyAnYXhpb3MnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFydHNBUEkgPSBheGlvcy5jcmVhdGUoY29uZmlndXJlQXBpKGNoYXJ0RGF0YUJhc2VVcmwpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBxdWVyeUFwaShjaGFydHNBUEksIHRoaXMucmFuZ2UsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsb25lIHRoZSBjaGFydE9wdGlvbnMgb2JqZWN0LCBhbmQgcmVwbGFjZSB0aGUgbmVlZGVkIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jaGFydE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnlheGlzLm1heCA9IE1hdGgucm91bmQobGFyZ2VzdE51bWJlcihbZGF0YVswXVsnZGF0YSddXSlbMF0gKyAxLjUpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmxhYmVscyA9IGRhdGFbMF1bJ2xhYmVscyddO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jaGFydE9wdGlvbnMueWF4aXMubWF4ID0gbGFyZ2VzdE51bWJlcihbZGF0YVswXVsnZGF0YSddXSlbMF0gKiAzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmllcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmdldFNlcmllc0RhdGEoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6ICd2dWVjaGFydC1leGFtcGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFya2xpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzAwOEZGQicsICcjRENFNkVDJ10sXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6ICdzdHJhaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcm9zc2hhaXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogW10sXG4gICAgICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FwZXhjaGFydHMteWF4aXMtdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnN1YlRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FwZXhjaGFydHMteWF4aXMtdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogWzBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDx2dWV0YWJsZSByZWY9XCJ2dWV0YWJsZVwiXG4gICAgICAgICAgICAgICAgICBhcGktdXJsPVwiL3JldG91ci90YWJsZXMvZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgIDpwZXItcGFnZT1cIjIwXCJcbiAgICAgICAgICAgICAgICAgIDpmaWVsZHM9XCJmaWVsZHNcIlxuICAgICAgICAgICAgICAgICAgOmNzcz1cImNzc1wiXG4gICAgICAgICAgICAgICAgICBAdnVldGFibGU6cGFnaW5hdGlvbi1kYXRhPVwib25QYWdpbmF0aW9uRGF0YVwiXG4gICAgICAgID48L3Z1ZXRhYmxlPlxuICAgICAgICA8dnVldGFibGUtcGFnaW5hdGlvbiByZWY9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHZ1ZXRhYmxlLXBhZ2luYXRpb246Y2hhbmdlLXBhZ2U9XCJvbkNoYW5nZVBhZ2VcIlxuICAgICAgICA+PC92dWV0YWJsZS1wYWdpbmF0aW9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICAvLyBPdXIgY29tcG9uZW50IGV4cG9ydHNcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICd2dWV0YWJsZSc6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInZ1ZXRhYmxlXCIgKi8gJ3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlJyksXG4gICAgICAgICAgICAndnVldGFibGUtcGFnaW5hdGlvbic6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInZ1ZXRhYmxlLXBhZ2luYXRpb25cIiAqLyAnLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlJylcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6IHt9LFxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlQ2xhc3M6ICdkYXRhIGZ1bGx3aWR0aCcsXG4gICAgICAgICAgICAgICAgICAgIGFzY2VuZGluZ0ljb246ICdvcmRlcmVkIGFzYycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NlbmRpbmdJY29uOiAnb3JkZXJlZCBkZXNjJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc29ydE9yZGVyOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnaGl0Q291bnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkOiAnaGl0Q291bnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnZGVzYydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWRpcmVjdFNyY1VybCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ6ICdyZWRpcmVjdFNyY1VybCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJzQwNCBGaWxlIE5vdCBGb3VuZCBVUkwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVDbGFzczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2xhc3M6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICd1cmxGb3JtYXR0ZXInXG5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmVycmVyVXJsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZDogJ3JlZmVycmVyVXJsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTGFzdCBSZWZlcnJlciBVUkwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVDbGFzczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2xhc3M6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICd1cmxGb3JtYXR0ZXInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdoaXRDb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ6ICdoaXRDb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0hpdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVDbGFzczogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNsYXNzOiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdoaXRMYXN0VGltZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ6ICdoaXRMYXN0VGltZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0xhc3QgSGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlQ2xhc3M6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNsYXNzOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2hhbmRsZWRCeVJldG91cicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ6ICdoaXRMYXN0VGltZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0hhbmRsZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVDbGFzczogJ3RleHQtY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDbGFzczogJ3RleHQtY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAnYm9vbEZvcm1hdHRlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZExpbmsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkOiAnYWRkTGluaycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUNsYXNzOiAndGV4dC1jZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNsYXNzOiAndGV4dC1jZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICdhZGRVcmxGb3JtYXR0ZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvblBhZ2luYXRpb25EYXRhIChwYWdpbmF0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGFnaW5hdGlvbi5zZXRQYWdpbmF0aW9uRGF0YShwYWdpbmF0aW9uRGF0YSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZVBhZ2UgKHBhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnZ1ZXRhYmxlLmNoYW5nZVBhZ2UocGFnZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmxGb3JtYXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImdvXCIgaHJlZj1cIiR7dmFsdWV9XCIgdGl0bGU9XCIke3ZhbHVlfVwiPiR7dmFsdWV9PC9hPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9vbEZvcm1hdHRlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogZ3JlZW47XCI+JiN4MjcxNDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiByZWQ7XCI+JiN4MjcxNjs8L3NwYW4+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRVcmxGb3JtYXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImFkZCBpY29uXCIgaHJlZj1cInJldG91ci9hZGRcIiB0aXRsZT1cIkFkZFwiPjwvYT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHZ1ZXRhYmxlIHJlZj1cInZ1ZXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgIGFwaS11cmw9XCIvcmV0b3VyL3RhYmxlcy9kYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgOnBlci1wYWdlPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgOmZpZWxkcz1cImZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICA6Y3NzPVwiY3NzXCJcbiAgICAgICAgICAgICAgICAgIEB2dWV0YWJsZTpwYWdpbmF0aW9uLWRhdGE9XCJvblBhZ2luYXRpb25EYXRhXCJcbiAgICAgICAgPjwvdnVldGFibGU+XG4gICAgICAgIDx2dWV0YWJsZS1wYWdpbmF0aW9uIHJlZj1cInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdnVldGFibGUtcGFnaW5hdGlvbjpjaGFuZ2UtcGFnZT1cIm9uQ2hhbmdlUGFnZVwiXG4gICAgICAgID48L3Z1ZXRhYmxlLXBhZ2luYXRpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIC8vIE91ciBjb21wb25lbnQgZXhwb3J0c1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3Z1ZXRhYmxlJzogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidnVldGFibGVcIiAqLyAndnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWUnKSxcbiAgICAgICAgICAgICd2dWV0YWJsZS1wYWdpbmF0aW9uJzogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidnVldGFibGUtcGFnaW5hdGlvblwiICovICcuL1Z1ZXRhYmxlUGFnaW5hdGlvbi52dWUnKVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge30sXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzczogJ2RhdGEgZnVsbHdpZHRoJyxcbiAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nSWNvbjogJ29yZGVyZWQgYXNjJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY2VuZGluZ0ljb246ICdvcmRlcmVkIGRlc2MnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzb3J0T3JkZXI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdoaXRDb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ6ICdoaXRDb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdkZXNjJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZGlyZWN0U3JjVXJsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZDogJ3JlZGlyZWN0U3JjVXJsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnNDA0IEZpbGUgTm90IEZvdW5kIFVSTCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUNsYXNzOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDbGFzczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogJ3VybEZvcm1hdHRlcidcblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmZXJyZXJVcmwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkOiAncmVmZXJyZXJVcmwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdMYXN0IFJlZmVycmVyIFVSTCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUNsYXNzOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDbGFzczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogJ3VybEZvcm1hdHRlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2hpdENvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZDogJ2hpdENvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSGl0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUNsYXNzOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDbGFzczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdoaXRMYXN0VGltZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ6ICdoaXRMYXN0VGltZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0xhc3QgSGl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlQ2xhc3M6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNsYXNzOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2hhbmRsZWRCeVJldG91cicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ6ICdoaXRMYXN0VGltZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0hhbmRsZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVDbGFzczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2xhc3M6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICdib29sRm9ybWF0dGVyJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uUGFnaW5hdGlvbkRhdGEgKHBhZ2luYXRpb25EYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wYWdpbmF0aW9uLnNldFBhZ2luYXRpb25EYXRhKHBhZ2luYXRpb25EYXRhKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2hhbmdlUGFnZSAocGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMudnVldGFibGUuY2hhbmdlUGFnZShwYWdlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybEZvcm1hdHRlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZ29cIiBocmVmPVwiJHt2YWx1ZX1cIiB0aXRsZT1cIiR7dmFsdWV9XCI+JHt2YWx1ZX08L2E+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib29sRm9ybWF0dGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogZ3JlZW47XCI+JiN4MjcxNDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiByZWQ7XCI+JiN4MjcxNjs8L3NwYW4+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHYtc2hvdz1cInRhYmxlUGFnaW5hdGlvbiAmJiB0YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlID4gMVwiIDpjbGFzcz1cImNzcy53cmFwcGVyQ2xhc3NcIj5cclxuICAgIDxhIEBjbGljaz1cImxvYWRQYWdlKDEpXCJcclxuICAgICAgOmNsYXNzPVwiWydidG4tbmF2JywgY3NzLmxpbmtDbGFzcywgaXNPbkZpcnN0UGFnZSA/IGNzcy5kaXNhYmxlZENsYXNzIDogJyddXCI+XHJcbiAgICAgICAgPGkgdi1pZj1cImNzcy5pY29ucy5maXJzdCAhPSAnJ1wiIDpjbGFzcz1cIltjc3MuaWNvbnMuZmlyc3RdXCI+PC9pPlxyXG4gICAgICAgIDxzcGFuIHYtZWxzZT4mbGFxdW87PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPGEgQGNsaWNrPVwibG9hZFBhZ2UoJ3ByZXYnKVwiXHJcbiAgICAgIDpjbGFzcz1cIlsnYnRuLW5hdicsIGNzcy5saW5rQ2xhc3MsIGlzT25GaXJzdFBhZ2UgPyBjc3MuZGlzYWJsZWRDbGFzcyA6ICcnXVwiPlxyXG4gICAgICAgIDxpIHYtaWY9XCJjc3MuaWNvbnMubmV4dCAhPSAnJ1wiIDpjbGFzcz1cIltjc3MuaWNvbnMucHJldl1cIj48L2k+XHJcbiAgICAgICAgPHNwYW4gdi1lbHNlPiZuYnNwOyZsc2FxdW87PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHRlbXBsYXRlIHYtaWY9XCJub3RFbm91Z2hQYWdlc1wiPlxyXG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCJuIGluIHRvdGFsUGFnZVwiPlxyXG4gICAgICAgIDxhIEBjbGljaz1cImxvYWRQYWdlKG4pXCJcclxuICAgICAgICAgIDpjbGFzcz1cIltjc3MucGFnZUNsYXNzLCBpc0N1cnJlbnRQYWdlKG4pID8gY3NzLmFjdGl2ZUNsYXNzIDogJyddXCJcclxuICAgICAgICAgIHYtaHRtbD1cIm5cIj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgPHRlbXBsYXRlIHYtZm9yPVwibiBpbiB3aW5kb3dTaXplXCI+XHJcbiAgICAgICAgPGEgQGNsaWNrPVwibG9hZFBhZ2Uod2luZG93U3RhcnQrbi0xKVwiXHJcbiAgICAgICAgICA6Y2xhc3M9XCJbY3NzLnBhZ2VDbGFzcywgaXNDdXJyZW50UGFnZSh3aW5kb3dTdGFydCtuLTEpID8gY3NzLmFjdGl2ZUNsYXNzIDogJyddXCJcclxuICAgICAgICAgIHYtaHRtbD1cIndpbmRvd1N0YXJ0K24tMVwiPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8YSBAY2xpY2s9XCJsb2FkUGFnZSgnbmV4dCcpXCJcclxuICAgICAgOmNsYXNzPVwiWydidG4tbmF2JywgY3NzLmxpbmtDbGFzcywgaXNPbkxhc3RQYWdlID8gY3NzLmRpc2FibGVkQ2xhc3MgOiAnJ11cIj5cclxuICAgICAgPGkgdi1pZj1cImNzcy5pY29ucy5uZXh0ICE9ICcnXCIgOmNsYXNzPVwiW2Nzcy5pY29ucy5uZXh0XVwiPjwvaT5cclxuICAgICAgPHNwYW4gdi1lbHNlPiZyc2FxdW87Jm5ic3A7PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPGEgQGNsaWNrPVwibG9hZFBhZ2UodG90YWxQYWdlKVwiXHJcbiAgICAgIDpjbGFzcz1cIlsnYnRuLW5hdicsIGNzcy5saW5rQ2xhc3MsIGlzT25MYXN0UGFnZSA/IGNzcy5kaXNhYmxlZENsYXNzIDogJyddXCI+XHJcbiAgICAgIDxpIHYtaWY9XCJjc3MuaWNvbnMubGFzdCAhPSAnJ1wiIDpjbGFzcz1cIltjc3MuaWNvbnMubGFzdF1cIj48L2k+XHJcbiAgICAgIDxzcGFuIHYtZWxzZT4mcmFxdW87PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFBhZ2luYXRpb25NaXhpbiBmcm9tICcuL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtaXhpbnM6IFtQYWdpbmF0aW9uTWl4aW5dLFxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGNzczoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICd2dWV0YWJsZSB1aSByaWdodCBmbG9hdGVkIHBhZ2luYXRpb24gbWVudScsXHJcbiAgICAgICAgICBhY3RpdmVDbGFzczogJ2FjdGl2ZSBsYXJnZScsXHJcbiAgICAgICAgICBkaXNhYmxlZENsYXNzOiAnZGlzYWJsZWQnLFxyXG4gICAgICAgICAgcGFnZUNsYXNzOiAnaXRlbScsXHJcbiAgICAgICAgICBsaW5rQ2xhc3M6ICdpY29uIGl0ZW0nLFxyXG4gICAgICAgICAgcGFnaW5hdGlvbkNsYXNzOiAndWkgYm90dG9tIGF0dGFjaGVkIHNlZ21lbnQgZ3JpZCcsXHJcbiAgICAgICAgICBwYWdpbmF0aW9uSW5mb0NsYXNzOiAnbGVmdCBmbG9hdGVkIGxlZnQgYWxpZ25lZCBzaXggd2lkZSBjb2x1bW4nLFxyXG4gICAgICAgICAgZHJvcGRvd25DbGFzczogJ3VpIHNlYXJjaCBkcm9wZG93bicsXHJcbiAgICAgICAgICBpY29uczoge1xyXG4gICAgICAgICAgICBmaXJzdDogJ2FuZ2xlIGRvdWJsZSBsZWZ0IGljb24nLFxyXG4gICAgICAgICAgICBwcmV2OiAnbGVmdCBjaGV2cm9uIGljb24nLFxyXG4gICAgICAgICAgICBuZXh0OiAncmlnaHQgY2hldnJvbiBpY29uJyxcclxuICAgICAgICAgICAgbGFzdDogJ2FuZ2xlIGRvdWJsZSByaWdodCBpY29uJyxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkVhY2hTaWRlOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXZlbnRQcmVmaXg6ICd2dWV0YWJsZS1wYWdpbmF0aW9uOicsXHJcbiAgICAgIHRhYmxlUGFnaW5hdGlvbjogbnVsbFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHRvdGFsUGFnZSAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9PT0gbnVsbFxyXG4gICAgICAgID8gMFxyXG4gICAgICAgIDogdGhpcy50YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlXHJcbiAgICB9LFxyXG4gICAgaXNPbkZpcnN0UGFnZSAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9PT0gbnVsbFxyXG4gICAgICAgID8gZmFsc2VcclxuICAgICAgICA6IHRoaXMudGFibGVQYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSA9PT0gMVxyXG4gICAgfSxcclxuICAgIGlzT25MYXN0UGFnZSAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9PT0gbnVsbFxyXG4gICAgICAgID8gZmFsc2VcclxuICAgICAgICA6IHRoaXMudGFibGVQYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSA9PT0gdGhpcy50YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlXHJcbiAgICB9LFxyXG4gICAgbm90RW5vdWdoUGFnZXMgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50b3RhbFBhZ2UgPCAodGhpcy5vbkVhY2hTaWRlICogMikgKyA0XHJcbiAgICB9LFxyXG4gICAgd2luZG93U2l6ZSAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9uRWFjaFNpZGUgKiAyICsxO1xyXG4gICAgfSxcclxuICAgIHdpbmRvd1N0YXJ0ICgpIHtcclxuICAgICAgaWYgKCF0aGlzLnRhYmxlUGFnaW5hdGlvbiB8fCB0aGlzLnRhYmxlUGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgPD0gdGhpcy5vbkVhY2hTaWRlKSB7XHJcbiAgICAgICAgcmV0dXJuIDFcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlUGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgPj0gKHRoaXMudG90YWxQYWdlIC0gdGhpcy5vbkVhY2hTaWRlKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsUGFnZSAtIHRoaXMub25FYWNoU2lkZSoyXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlUGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgLSB0aGlzLm9uRWFjaFNpZGVcclxuICAgIH0sXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBsb2FkUGFnZSAocGFnZSkge1xyXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXgrJ2NoYW5nZS1wYWdlJywgcGFnZSlcclxuICAgIH0sXHJcbiAgICBpc0N1cnJlbnRQYWdlIChwYWdlKSB7XHJcbiAgICAgIHJldHVybiBwYWdlID09PSB0aGlzLnRhYmxlUGFnaW5hdGlvbi5jdXJyZW50X3BhZ2VcclxuICAgIH0sXHJcbiAgICBzZXRQYWdpbmF0aW9uRGF0YSAodGFibGVQYWdpbmF0aW9uKSB7XHJcbiAgICAgIHRoaXMudGFibGVQYWdpbmF0aW9uID0gdGFibGVQYWdpbmF0aW9uXHJcbiAgICB9LFxyXG4gICAgcmVzZXREYXRhICgpIHtcclxuICAgICAgdGhpcy50YWJsZVBhZ2luYXRpb24gPSBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbjxkaXYgdi1pZj1cImlzRml4ZWRIZWFkZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwidnVldGFibGUtaGVhZC13cmFwcGVyXCI+XHJcbiAgICA8dGFibGUgOmNsYXNzPVwiWyd2dWV0YWJsZScsIGNzcy50YWJsZUNsYXNzLCBjc3MudGFibGVIZWFkZXJDbGFzc11cIj5cclxuICAgIDx0aGVhZD5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcIj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZmllbGQudmlzaWJsZVwiPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXCI+XHJcbiAgICAgICAgICAgICAgPHRoIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jaGVja2JveCdcIlxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1jaGVja2JveC0nK3RyYWNrQnksIGZpZWxkLnRpdGxlQ2xhc3NdXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgQGNoYW5nZT1cInRvZ2dsZUFsbENoZWNrYm94ZXMoZmllbGQubmFtZSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVwiY2hlY2tDaGVja2JveGVzU3RhdGUoZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fY29tcG9uZW50J1wiXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLWNvbXBvbmVudC0nK3RyYWNrQnksIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksIHsnc29ydGFibGUnOiBpc1NvcnRhYmxlKGZpZWxkKX1dXCJcclxuICAgICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3Nsb3QnXCJcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtc2xvdC0nK2V4dHJhY3RBcmdzKGZpZWxkLm5hbWUpLCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVwiXHJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwib3JkZXJCeShmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19zZXF1ZW5jZSdcIlxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1zZXF1ZW5jZScsIGZpZWxkLnRpdGxlQ2xhc3MgfHwgJyddXCIgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICA8dGggdi1pZj1cIm5vdEluKGV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpLCBbJ19fc2VxdWVuY2UnLCAnX19jaGVja2JveCcsICdfX2NvbXBvbmVudCcsICdfX3Nsb3QnXSlcIlxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC0nK2ZpZWxkLm5hbWUsIGZpZWxkLnRpdGxlQ2xhc3MgfHwgJyddXCIgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICA8dGggQGNsaWNrPVwib3JkZXJCeShmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6aWQ9XCInXycgKyBmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtJytmaWVsZC5uYW1lLCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVwiXHJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIlxyXG4gICAgICAgICAgICAgID48L3RoPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDx0aCB2LWlmPVwic2Nyb2xsVmlzaWJsZVwiIDpzdHlsZT1cInt3aWR0aDogc2Nyb2xsQmFyV2lkdGh9XCIgY2xhc3M9XCJ2dWV0YWJsZS1ndXR0ZXItY29sXCI+PC90aD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcbiAgICA8L3RhYmxlPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ2dWV0YWJsZS1ib2R5LXdyYXBwZXJcIiA6c3R5bGU9XCJ7aGVpZ2h0OiB0YWJsZUhlaWdodH1cIj5cclxuICAgIDx0YWJsZSA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlJywgY3NzLnRhYmxlQ2xhc3MsIGNzcy50YWJsZUJvZHlDbGFzc11cIj5cclxuICAgICAgPGNvbGdyb3VwPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcIj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZmllbGQudmlzaWJsZVwiPlxyXG4gICAgICAgICAgICA8Y29sXHJcbiAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgIDppZD1cIidfY29sXycgKyBmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC0nK2ZpZWxkLm5hbWUsIGZpZWxkLnRpdGxlQ2xhc3NdXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9jb2xncm91cD5cclxuICAgICAgPHRib2R5IHYtY2xvYWsgY2xhc3M9XCJ2dWV0YWJsZS1ib2R5XCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGl0ZW0sIGl0ZW1JbmRleCkgaW4gdGFibGVEYXRhXCI+XHJcbiAgICAgICAgICA8dHIgXHJcbiAgICAgICAgICAgIDprZXk9XCJpdGVtSW5kZXhcIlxyXG4gICAgICAgICAgICA6aXRlbS1pbmRleD1cIml0ZW1JbmRleFwiIFxyXG4gICAgICAgICAgICA6cmVuZGVyPVwib25Sb3dDaGFuZ2VkKGl0ZW0pXCIgXHJcbiAgICAgICAgICAgIDpjbGFzcz1cIm9uUm93Q2xhc3MoaXRlbSwgaXRlbUluZGV4KVwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cIm9uUm93Q2xpY2tlZChpdGVtLCAkZXZlbnQpXCIgXHJcbiAgICAgICAgICAgIEBkYmxjbGljaz1cIm9uUm93RG91YmxlQ2xpY2tlZChpdGVtLCAkZXZlbnQpXCIgXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcIj5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZWxkLnZpc2libGVcIj5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19zZXF1ZW5jZSdcIiBcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1zZXF1ZW5jZScsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlclNlcXVlbmNlKGl0ZW1JbmRleClcIj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19oYW5kbGUnXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtaGFuZGxlJywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVySWNvblRhZyhbJ2hhbmRsZS1pY29uJywgY3NzLmhhbmRsZUljb25dKVwiXHJcbiAgICAgICAgICAgICAgICAgID48L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NoZWNrYm94J1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLWNoZWNrYm94ZXMnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInRvZ2dsZUNoZWNrYm94KGl0ZW0sIGZpZWxkLm5hbWUsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJyb3dTZWxlY3RlZChpdGVtLCBmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PSAnX19jb21wb25lbnQnXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtY29tcG9uZW50JywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDpyb3ctZGF0YT1cIml0ZW1cIiA6cm93LWluZGV4PVwiaXRlbUluZGV4XCIgOnJvdy1maWVsZD1cImZpZWxkLnNvcnRGaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvY29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PSAnX19zbG90J1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXNsb3QnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbG90IDpuYW1lPVwiZXh0cmFjdEFyZ3MoZmllbGQubmFtZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOnJvdy1kYXRhPVwiaXRlbVwiIDpyb3ctaW5kZXg9XCJpdGVtSW5kZXhcIiA6cm93LWZpZWxkPVwiZmllbGQuc29ydEZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9zbG90PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCA6Y2xhc3M9XCJmaWVsZC5kYXRhQ2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJOb3JtYWxGaWVsZChmaWVsZCwgaXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uQ2VsbENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBkYmxjbGljaz1cIm9uQ2VsbERvdWJsZUNsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjb250ZXh0bWVudT1cIm9uQ2VsbFJpZ2h0Q2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgID48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwidXNlRGV0YWlsUm93XCI+XHJcbiAgICAgICAgICAgIDx0cmFuc2l0aW9uIDpuYW1lPVwiZGV0YWlsUm93VHJhbnNpdGlvblwiIDprZXk9XCJpdGVtSW5kZXhcIj5cclxuICAgICAgICAgICAgICA8dHIgdi1pZj1cImlzVmlzaWJsZURldGFpbFJvdyhpdGVtW3RyYWNrQnldKVwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbY3NzLmRldGFpbFJvd0NsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkRldGFpbFJvd0NsaWNrKGl0ZW0sICRldmVudClcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx0ZCA6Y29sc3Bhbj1cImNvdW50VmlzaWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImRldGFpbFJvd0NvbXBvbmVudFwiIDpyb3ctZGF0YT1cIml0ZW1cIiA6cm93LWluZGV4PVwiaXRlbUluZGV4XCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImRpc3BsYXlFbXB0eURhdGFSb3dcIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIDpjb2xzcGFuPVwiY291bnRWaXNpYmxlRmllbGRzXCIgY2xhc3M9XCJ2dWV0YWJsZS1lbXB0eS1yZXN1bHRcIiB2LWh0bWw9XCJub0RhdGFUZW1wbGF0ZVwiPjwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJsZXNzVGhhbk1pblJvd3NcIj5cclxuICAgICAgICAgIDx0ciB2LWZvcj1cImkgaW4gYmxhbmtSb3dzXCIgY2xhc3M9XCJibGFuay1yb3dcIiA6a2V5PVwiaVwiPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJmaWVsZC52aXNpYmxlXCIgOmtleT1cImZpZWxkSW5kZXhcIj4mbmJzcDs8L3RkPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjx0YWJsZSB2LWVsc2UgOmNsYXNzPVwiWyd2dWV0YWJsZScsIGNzcy50YWJsZUNsYXNzXVwiPiA8IS0tIG5vIGZpeGVkIGhlYWRlciAtIHJlZ3VsYXIgdGFibGUgLS0+XHJcbiAgPHRoZWFkPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWVsZC52aXNpYmxlXCI+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXCI+XHJcbiAgICAgICAgICAgIDx0aCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fY2hlY2tib3gnXCJcclxuICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtY2hlY2tib3gtJyt0cmFja0J5LCBmaWVsZC50aXRsZUNsYXNzXVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgQGNoYW5nZT1cInRvZ2dsZUFsbENoZWNrYm94ZXMoZmllbGQubmFtZSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cImNoZWNrQ2hlY2tib3hlc1N0YXRlKGZpZWxkLm5hbWUpXCI+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fY29tcG9uZW50J1wiXHJcbiAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLWNvbXBvbmVudC0nK3RyYWNrQnksIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksIHsnc29ydGFibGUnOiBpc1NvcnRhYmxlKGZpZWxkKX1dXCJcclxuICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIlxyXG4gICAgICAgICAgICAgIEBjbGljaz1cIm9yZGVyQnkoZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgPHRoIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19zbG90J1wiXHJcbiAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLXNsb3QtJytleHRyYWN0QXJncyhmaWVsZC5uYW1lKSwgZmllbGQudGl0bGVDbGFzcywgc29ydENsYXNzKGZpZWxkKSwgeydzb3J0YWJsZSc6IGlzU29ydGFibGUoZmllbGQpfV1cIlxyXG4gICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgQGNsaWNrPVwib3JkZXJCeShmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L3RoPlxyXG4gICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3NlcXVlbmNlJ1wiXHJcbiAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLXNlcXVlbmNlJywgZmllbGQudGl0bGVDbGFzcyB8fCAnJywgc29ydENsYXNzKGZpZWxkKV1cIiB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIlxyXG4gICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgPHRoIHYtaWY9XCJub3RJbihleHRyYWN0TmFtZShmaWVsZC5uYW1lKSwgWydfX3NlcXVlbmNlJywgJ19fY2hlY2tib3gnLCAnX19jb21wb25lbnQnLCAnX19zbG90J10pXCJcclxuICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtJytmaWVsZC5uYW1lLCBmaWVsZC50aXRsZUNsYXNzIHx8ICcnLCBzb3J0Q2xhc3MoZmllbGQpXVwiIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgID48L3RoPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgIDx0aCBAY2xpY2s9XCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgOmlkPVwiJ18nICsgZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtJytmaWVsZC5uYW1lLCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCAgeydzb3J0YWJsZSc6IGlzU29ydGFibGUoZmllbGQpfV1cIlxyXG4gICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgID48L3RoPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC90cj5cclxuICA8L3RoZWFkPlxyXG4gIDx0Ym9keSB2LWNsb2FrIGNsYXNzPVwidnVldGFibGUtYm9keVwiPlxyXG4gICAgPHRlbXBsYXRlIHYtZm9yPVwiKGl0ZW0sIGl0ZW1JbmRleCkgaW4gdGFibGVEYXRhXCI+XHJcbiAgICAgIDx0ciBAZGJsY2xpY2s9XCJvblJvd0RvdWJsZUNsaWNrZWQoaXRlbSwgJGV2ZW50KVwiIFxyXG4gICAgICAgIDprZXk9XCJpdGVtSW5kZXhcIlxyXG4gICAgICAgIDppdGVtLWluZGV4PVwiaXRlbUluZGV4XCIgXHJcbiAgICAgICAgOnJlbmRlcj1cIm9uUm93Q2hhbmdlZChpdGVtKVwiIFxyXG4gICAgICAgIDpjbGFzcz1cIm9uUm93Q2xhc3MoaXRlbSwgaXRlbUluZGV4KVwiXHJcbiAgICAgICAgQGNsaWNrPVwib25Sb3dDbGlja2VkKGl0ZW0sICRldmVudClcIiBcclxuICAgICAgPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcIj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZmllbGQudmlzaWJsZVwiPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXCI+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19zZXF1ZW5jZSdcIiBcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtc2VxdWVuY2UnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlclNlcXVlbmNlKGl0ZW1JbmRleClcIlxyXG4gICAgICAgICAgICAgID48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19faGFuZGxlJ1wiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1oYW5kbGUnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlckljb25UYWcoWydoYW5kbGUtaWNvbicsIGNzcy5oYW5kbGVJY29uXSlcIlxyXG4gICAgICAgICAgICAgID48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fY2hlY2tib3gnXCIgXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLWNoZWNrYm94ZXMnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInRvZ2dsZUNoZWNrYm94KGl0ZW0sIGZpZWxkLm5hbWUsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cInJvd1NlbGVjdGVkKGl0ZW0sIGZpZWxkLm5hbWUpXCI+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PSAnX19jb21wb25lbnQnXCIgXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLWNvbXBvbmVudCcsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiZXh0cmFjdEFyZ3MoZmllbGQubmFtZSlcIlxyXG4gICAgICAgICAgICAgICAgICA6cm93LWRhdGE9XCJpdGVtXCIgOnJvdy1pbmRleD1cIml0ZW1JbmRleFwiIDpyb3ctZmllbGQ9XCJmaWVsZC5zb3J0RmllbGRcIlxyXG4gICAgICAgICAgICAgICAgPjwvY29tcG9uZW50PlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT0gJ19fc2xvdCdcIiBcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtc2xvdCcsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzbG90IDpuYW1lPVwiZXh0cmFjdEFyZ3MoZmllbGQubmFtZSlcIlxyXG4gICAgICAgICAgICAgICAgICA6cm93LWRhdGE9XCJpdGVtXCIgOnJvdy1pbmRleD1cIml0ZW1JbmRleFwiIDpyb3ctZmllbGQ9XCJmaWVsZC5zb3J0RmllbGRcIlxyXG4gICAgICAgICAgICAgICAgPjwvc2xvdD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiaGFzQ2FsbGJhY2soZmllbGQpXCIgXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJmaWVsZC5kYXRhQ2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgdi1odG1sPVwiY2FsbENhbGxiYWNrKGZpZWxkLCBpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkNlbGxDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIEBkYmxjbGljaz1cIm9uQ2VsbERvdWJsZUNsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgQGNvbnRleHRtZW51PVwib25DZWxsUmlnaHRDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1lbHNlIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiZmllbGQuZGF0YUNsYXNzXCJcclxuICAgICAgICAgICAgICAgIHYtaHRtbD1cImdldE9iamVjdFZhbHVlKGl0ZW0sIGZpZWxkLm5hbWUsICcnKVwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkNlbGxDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIEBkYmxjbGljaz1cIm9uQ2VsbERvdWJsZUNsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgQGNvbnRleHRtZW51PVwib25DZWxsUmlnaHRDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ1c2VEZXRhaWxSb3dcIj5cclxuICAgICAgICA8dHJhbnNpdGlvbiA6bmFtZT1cImRldGFpbFJvd1RyYW5zaXRpb25cIiA6a2V5PVwiaXRlbUluZGV4XCI+XHJcbiAgICAgICAgICA8dHIgdi1pZj1cImlzVmlzaWJsZURldGFpbFJvdyhpdGVtW3RyYWNrQnldKVwiXHJcbiAgICAgICAgICAgIDpjbGFzcz1cIltjc3MuZGV0YWlsUm93Q2xhc3NdXCJcclxuICAgICAgICAgICAgQGNsaWNrPVwib25EZXRhaWxSb3dDbGljayhpdGVtLCAkZXZlbnQpXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHRkIDpjb2xzcGFuPVwiY291bnRWaXNpYmxlRmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJkZXRhaWxSb3dDb21wb25lbnRcIiA6cm93LWRhdGE9XCJpdGVtXCIgOnJvdy1pbmRleD1cIml0ZW1JbmRleFwiPjwvY29tcG9uZW50PlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtaWY9XCJkaXNwbGF5RW1wdHlEYXRhUm93XCI+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQgOmNvbHNwYW49XCJjb3VudFZpc2libGVGaWVsZHNcIiBjbGFzcz1cInZ1ZXRhYmxlLWVtcHR5LXJlc3VsdFwiIHYtaHRtbD1cIm5vRGF0YVRlbXBsYXRlXCI+PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1pZj1cImxlc3NUaGFuTWluUm93c1wiPlxyXG4gICAgICA8dHIgdi1mb3I9XCJpIGluIGJsYW5rUm93c1wiIGNsYXNzPVwiYmxhbmstcm93XCIgOmtleT1cImlcIj5cclxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXCI+XHJcbiAgICAgICAgICA8dGQgdi1pZj1cImZpZWxkLnZpc2libGVcIiA6a2V5PVwiZmllbGRJbmRleFwiPiZuYnNwOzwvdGQ+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgPC90Ym9keT5cclxuPC90YWJsZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGxvYWRPblN0YXJ0OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBhcGlVcmw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJydcclxuICAgIH0sXHJcbiAgICBodHRwTWV0aG9kOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICdnZXQnLFxyXG4gICAgICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gWydnZXQnLCAncG9zdCddLmluZGV4T2YodmFsdWUpID4gLTFcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVhY3RpdmVBcGlVcmw6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBhcGlNb2RlOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHR5cGU6IFtBcnJheSwgT2JqZWN0XSxcclxuICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgfSxcclxuICAgIGRhdGFUb3RhbDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDBcclxuICAgIH0sXHJcbiAgICBkYXRhTWFuYWdlcjoge1xyXG4gICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgfSxcclxuICAgIGRhdGFQYXRoOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICdkYXRhJ1xyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb25QYXRoOiB7XHJcbiAgICAgICAgdHlwZTogW1N0cmluZ10sXHJcbiAgICAgICAgZGVmYXVsdDogJ2xpbmtzLnBhZ2luYXRpb24nXHJcbiAgICB9LFxyXG4gICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgdHlwZTogW09iamVjdCwgRnVuY3Rpb25dLFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgc29ydDogJ3NvcnQnLFxyXG4gICAgICAgICAgcGFnZTogJ3BhZ2UnLFxyXG4gICAgICAgICAgcGVyUGFnZTogJ3Blcl9wYWdlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFwcGVuZFBhcmFtczoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgIHJldHVybiB7fVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHR0cE9wdGlvbnM6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4ge31cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGh0dHBGZXRjaDoge1xyXG4gICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgfSxcclxuICAgIHBlclBhZ2U6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgZGVmYXVsdDogMTBcclxuICAgIH0sXHJcbiAgICBpbml0aWFsUGFnZToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDFcclxuICAgIH0sXHJcbiAgICBzb3J0T3JkZXI6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbXVsdGlTb3J0OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGFibGVIZWlnaHQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICB9LFxyXG4gICAgLypcclxuICAgICAqIHBoeXNpY2FsIGtleSB0aGF0IHdpbGwgdHJpZ2dlciBtdWx0aS1zb3J0IG9wdGlvblxyXG4gICAgICogcG9zc2libGUgdmFsdWVzOiAnYWx0JywgJ2N0cmwnLCAnbWV0YScsICdzaGlmdCdcclxuICAgICAqICdjdHJsJyBtaWdodCBub3Qgd29yayBhcyBleHBlY3RlZCBvbiBNYWNcclxuICAgICAqL1xyXG4gICAgbXVsdGlTb3J0S2V5OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJ2FsdCdcclxuICAgIH0sXHJcbiAgICAvKiBkZXByZWNhdGVkICovXHJcbiAgICByb3dDbGFzc0NhbGxiYWNrOiB7XHJcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEZ1bmN0aW9uXSxcclxuICAgICAgZGVmYXVsdDogJydcclxuICAgIH0sXHJcbiAgICByb3dDbGFzczoge1xyXG4gICAgICB0eXBlOiBbU3RyaW5nLCBGdW5jdGlvbl0sXHJcbiAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgZGV0YWlsUm93Q29tcG9uZW50OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJydcclxuICAgIH0sXHJcbiAgICBkZXRhaWxSb3dUcmFuc2l0aW9uOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJydcclxuICAgIH0sXHJcbiAgICB0cmFja0J5OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJ2lkJ1xyXG4gICAgfSxcclxuICAgIGNzczoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0YWJsZUNsYXNzOiAndWkgYmx1ZSBzZWxlY3RhYmxlIGNlbGxlZCBzdGFja2FibGUgYXR0YWNoZWQgdGFibGUnLFxyXG4gICAgICAgICAgbG9hZGluZ0NsYXNzOiAnbG9hZGluZycsXHJcbiAgICAgICAgICBhc2NlbmRpbmdJY29uOiAnYmx1ZSBjaGV2cm9uIHVwIGljb24nLFxyXG4gICAgICAgICAgZGVzY2VuZGluZ0ljb246ICdibHVlIGNoZXZyb24gZG93biBpY29uJyxcclxuICAgICAgICAgIGFzY2VuZGluZ0NsYXNzOiAnc29ydGVkLWFzYycsXHJcbiAgICAgICAgICBkZXNjZW5kaW5nQ2xhc3M6ICdzb3J0ZWQtZGVzYycsXHJcbiAgICAgICAgICBzb3J0YWJsZUljb246ICcnLFxyXG4gICAgICAgICAgZGV0YWlsUm93Q2xhc3M6ICd2dWV0YWJsZS1kZXRhaWwtcm93JyxcclxuICAgICAgICAgIGhhbmRsZUljb246ICdncmV5IHNpZGViYXIgaWNvbicsXHJcbiAgICAgICAgICB0YWJsZUJvZHlDbGFzczogJ3Z1ZXRhYmxlLXNlbWFudGljLW5vLXRvcCB2dWV0YWJsZS1maXhlZC1sYXlvdXQnLFxyXG4gICAgICAgICAgdGFibGVIZWFkZXJDbGFzczogJ3Z1ZXRhYmxlLWZpeGVkLWxheW91dCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtaW5Sb3dzOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdDogMFxyXG4gICAgfSxcclxuICAgIHNpbGVudDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG5vRGF0YVRlbXBsYXRlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdCgpIHtcclxuICAgICAgICByZXR1cm4gJ05vIERhdGEgQXZhaWxhYmxlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd1NvcnRJY29uczoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGV2ZW50UHJlZml4OiAndnVldGFibGU6JyxcclxuICAgICAgdGFibGVGaWVsZHM6IFtdLFxyXG4gICAgICB0YWJsZURhdGE6IG51bGwsXHJcbiAgICAgIHRhYmxlUGFnaW5hdGlvbjogbnVsbCxcclxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuaW5pdGlhbFBhZ2UsXHJcbiAgICAgIHNlbGVjdGVkVG86IFtdLFxyXG4gICAgICB2aXNpYmxlRGV0YWlsUm93czogW10sXHJcbiAgICAgIGxhc3RTY3JvbGxQb3NpdGlvbjogMCxcclxuICAgICAgc2Nyb2xsQmFyV2lkdGg6ICcxN3B4JywgLy9jaHJvbWUgZGVmYXVsdFxyXG4gICAgICBzY3JvbGxWaXNpYmxlOiBmYWxzZSxcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQgKCkge1xyXG4gICAgdGhpcy5ub3JtYWxpemVGaWVsZHMoKVxyXG4gICAgdGhpcy5ub3JtYWxpemVTb3J0T3JkZXIoKVxyXG4gICAgaWYgKHRoaXMuaXNGaXhlZEhlYWRlcikge1xyXG4gICAgICB0aGlzLnNjcm9sbEJhcldpZHRoID0gdGhpcy5nZXRTY3JvbGxCYXJXaWR0aCgpICsgJ3B4JztcclxuICAgIH1cclxuICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmZpcmVFdmVudCgnaW5pdGlhbGl6ZWQnLCB0aGlzLnRhYmxlRmllbGRzKVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAodGhpcy5sb2FkT25TdGFydCkge1xyXG4gICAgICB0aGlzLmxvYWREYXRhKClcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzRml4ZWRIZWFkZXIpIHtcclxuICAgICAgbGV0IGVsZW0gPSB0aGlzLiRlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2dWV0YWJsZS1ib2R5LXdyYXBwZXInKVswXTtcclxuICAgICAgaWYgKGVsZW0gIT0gbnVsbCkge1xyXG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBkZXN0cm95ZWQgKCkge1xyXG4gICAgbGV0IGVsZW0gPSB0aGlzLiRlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2dWV0YWJsZS1ib2R5LXdyYXBwZXInKVswXTtcclxuICAgIGlmIChlbGVtICE9IG51bGwpIHtcclxuICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgdmVyc2lvbjogKCkgPT4gVkVSU0lPTixcclxuICAgIHVzZURldGFpbFJvdyAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YSAmJiB0aGlzLnRhYmxlRGF0YVswXSAmJiB0aGlzLmRldGFpbFJvd0NvbXBvbmVudCAhPT0gJycgJiYgdHlwZW9mIHRoaXMudGFibGVEYXRhWzBdW3RoaXMudHJhY2tCeV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdGhpcy53YXJuKCdZb3UgbmVlZCB0byBkZWZpbmUgdW5pcXVlIHJvdyBpZGVudGlmaWVyIGluIG9yZGVyIGZvciBkZXRhaWwtcm93IGZlYXR1cmUgdG8gd29yay4gVXNlIGB0cmFjay1ieWAgcHJvcCB0byBkZWZpbmUgb25lIScpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmRldGFpbFJvd0NvbXBvbmVudCAhPT0gJydcclxuICAgIH0sXHJcbiAgICBjb3VudFZpc2libGVGaWVsZHMgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZUZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gZmllbGQudmlzaWJsZVxyXG4gICAgICB9KS5sZW5ndGhcclxuICAgIH0sXHJcbiAgICBjb3VudFRhYmxlRGF0YSAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVEYXRhLmxlbmd0aFxyXG4gICAgfSxcclxuICAgIGRpc3BsYXlFbXB0eURhdGFSb3cgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb3VudFRhYmxlRGF0YSA9PT0gMCAmJiB0aGlzLm5vRGF0YVRlbXBsYXRlLmxlbmd0aCA+IDBcclxuICAgIH0sXHJcbiAgICBsZXNzVGhhbk1pblJvd3MgKCkge1xyXG4gICAgICBpZiAodGhpcy50YWJsZURhdGEgPT09IG51bGwgfHwgdGhpcy50YWJsZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZURhdGEubGVuZ3RoIDwgdGhpcy5taW5Sb3dzXHJcbiAgICB9LFxyXG4gICAgYmxhbmtSb3dzICgpIHtcclxuICAgICAgaWYgKHRoaXMudGFibGVEYXRhID09PSBudWxsIHx8IHRoaXMudGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pblJvd3NcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50YWJsZURhdGEubGVuZ3RoID49IHRoaXMubWluUm93cykge1xyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLm1pblJvd3MgLSB0aGlzLnRhYmxlRGF0YS5sZW5ndGhcclxuICAgIH0sXHJcbiAgICBpc0FwaU1vZGUgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hcGlNb2RlXHJcbiAgICB9LFxyXG4gICAgaXNEYXRhTW9kZSAoKSB7XHJcbiAgICAgIHJldHVybiAhIHRoaXMuYXBpTW9kZVxyXG4gICAgfSxcclxuICAgIGlzRml4ZWRIZWFkZXIgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZUhlaWdodCAhPSBudWxsXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXRTY3JvbGxCYXJXaWR0aCAoKSB7XHJcbiAgICAgIGNvbnN0IG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgIG91dGVyLnN0eWxlLndpZHRoID0gJzEwMHB4JztcclxuXHJcbiAgICAgIGlubmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG5cclxuXHJcbiAgICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XHJcblxyXG5cclxuICAgICAgY29uc3Qgd2lkdGhXaXRob3V0U2Nyb2xsYmFyID0gb3V0ZXIub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xyXG5cclxuICAgICAgY29uc3Qgd2lkdGhXaXRoU2Nyb2xsYmFyID0gaW5uZXIub2Zmc2V0V2lkdGg7XHJcblxyXG5cclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdXRlcik7XHJcblxyXG5cclxuICAgICAgcmV0dXJuICh3aWR0aFdpdGhvdXRTY3JvbGxiYXIgLSB3aWR0aFdpdGhTY3JvbGxiYXIpO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZVNjcm9sbCAoZSkgeyAvL21ha2Ugc3VyZSB0aGF0IHRoZSBoZWFkZXIgYW5kIHRoZSBib2R5IGFyZSBhbGlnbmVkIHdoZW4gc2Nyb2xsaW5nIGhvcml6b250YWxseSBvbiBhIHRhYmxlIHRoYXQgaXMgd2lkZXIgdGhhbiB0aGUgdmlld3BvcnRcclxuICAgICAgbGV0IGhvcml6b250YWwgPSBlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdDtcclxuICAgICAgaWYgKGhvcml6b250YWwgIT0gdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24pIHsgLy9kb24ndCBtb2RpZnkgaGVhZGVyIHNjcm9sbCBpZiB3ZSBhcmUgc2Nyb2xsaW5nIHZlcnRpY2FsbHlcclxuICAgICAgICBsZXQgaGVhZGVyID0gdGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndnVldGFibGUtaGVhZC13cmFwcGVyJylbMF1cclxuICAgICAgICBpZiAoaGVhZGVyICE9IG51bGwpIHtcclxuICAgICAgICAgIGhlYWRlci5zY3JvbGxMZWZ0ID0gaG9yaXpvbnRhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSBob3Jpem9udGFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG5vcm1hbGl6ZUZpZWxkcyAoKSB7XHJcbiAgICAgIGlmICh0eXBlb2YodGhpcy5maWVsZHMpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRoaXMud2FybignWW91IG5lZWQgdG8gcHJvdmlkZSBcImZpZWxkc1wiIHByb3AuJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50YWJsZUZpZWxkcyA9IFtdXHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICBsZXQgb2JqXHJcbiAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goZnVuY3Rpb24oZmllbGQsIGkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIChmaWVsZCkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkLFxyXG4gICAgICAgICAgICB0aXRsZTogc2VsZi5zZXRUaXRsZShmaWVsZCksXHJcbiAgICAgICAgICAgIHRpdGxlQ2xhc3M6ICcnLFxyXG4gICAgICAgICAgICBkYXRhQ2xhc3M6ICcnLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogbnVsbCxcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lLFxyXG4gICAgICAgICAgICB3aWR0aDogZmllbGQud2lkdGgsXHJcbiAgICAgICAgICAgIHRpdGxlOiAoZmllbGQudGl0bGUgPT09IHVuZGVmaW5lZCkgPyBzZWxmLnNldFRpdGxlKGZpZWxkLm5hbWUpIDogZmllbGQudGl0bGUsXHJcbiAgICAgICAgICAgIHNvcnRGaWVsZDogZmllbGQuc29ydEZpZWxkLFxyXG4gICAgICAgICAgICB0aXRsZUNsYXNzOiAoZmllbGQudGl0bGVDbGFzcyA9PT0gdW5kZWZpbmVkKSA/ICcnIDogZmllbGQudGl0bGVDbGFzcyxcclxuICAgICAgICAgICAgZGF0YUNsYXNzOiAoZmllbGQuZGF0YUNsYXNzID09PSB1bmRlZmluZWQpID8gJycgOiBmaWVsZC5kYXRhQ2xhc3MsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoZmllbGQuY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkgPyAnJyA6IGZpZWxkLmNhbGxiYWNrLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiAoZmllbGQudmlzaWJsZSA9PT0gdW5kZWZpbmVkKSA/IHRydWUgOiBmaWVsZC52aXNpYmxlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLnRhYmxlRmllbGRzLnB1c2gob2JqKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHNldERhdGEgKGRhdGEpIHtcclxuICAgICAgaWYgKGRhdGEgPT09IG51bGwgfHwgdHlwZW9mKGRhdGEpID09PSAndW5kZWZpbmVkJykgcmV0dXJuXHJcblxyXG4gICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZGluZycpXHJcblxyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhID0gZGF0YVxyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkZWQnKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoZGF0YSwgdGhpcy5kYXRhUGF0aCwgbnVsbClcclxuICAgICAgdGhpcy50YWJsZVBhZ2luYXRpb24gPSB0aGlzLmdldE9iamVjdFZhbHVlKGRhdGEsIHRoaXMucGFnaW5hdGlvblBhdGgsIG51bGwpXHJcblxyXG4gICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmZpeEhlYWRlcigpXHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoJ3BhZ2luYXRpb24tZGF0YScsIHRoaXMudGFibGVQYWdpbmF0aW9uKVxyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkZWQnKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHNldFRpdGxlIChzdHIpIHtcclxuICAgICAgaWYgKHRoaXMuaXNTcGVjaWFsRmllbGQoc3RyKSkge1xyXG4gICAgICAgIHJldHVybiAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy50aXRsZUNhc2Uoc3RyKVxyXG4gICAgfSxcclxuICAgIGdldFRpdGxlIChmaWVsZCkge1xyXG4gICAgICBpZiAodHlwZW9mKGZpZWxkLnRpdGxlKSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZpZWxkLnRpdGxlKClcclxuXHJcbiAgICAgIHJldHVybiB0eXBlb2YoZmllbGQudGl0bGUpID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gZmllbGQubmFtZS5yZXBsYWNlKCcuJywgJyAnKVxyXG4gICAgICAgIDogZmllbGQudGl0bGVcclxuICAgIH0sXHJcbiAgICByZW5kZXJUaXRsZSAoZmllbGQpIHtcclxuICAgICAgbGV0IHRpdGxlID0gdGhpcy5nZXRUaXRsZShmaWVsZClcclxuXHJcbiAgICAgIGlmICh0aXRsZS5sZW5ndGggPiAwICYmIHRoaXMuaXNJbkN1cnJlbnRTb3J0R3JvdXAoZmllbGQpIHx8IHRoaXMuaGFzU29ydGFibGVJY29uKGZpZWxkKSkge1xyXG4gICAgICAgIGxldCBzdHlsZSA9IGBvcGFjaXR5OiR7dGhpcy5zb3J0SWNvbk9wYWNpdHkoZmllbGQpfTtwb3NpdGlvbjpyZWxhdGl2ZTtmbG9hdDpyaWdodGBcclxuICAgICAgICBsZXQgaWNvblRhZyA9IHRoaXMuc2hvd1NvcnRJY29ucyA/IHRoaXMucmVuZGVySWNvblRhZyhbJ3NvcnQtaWNvbicsIHRoaXMuc29ydEljb24oZmllbGQpXSwgYHN0eWxlPVwiJHtzdHlsZX1cImApIDogJydcclxuICAgICAgICByZXR1cm4gdGl0bGUgKyAnICcgKyBpY29uVGFnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aXRsZVxyXG4gICAgfSxcclxuICAgIHJlbmRlclNlcXVlbmNlIChpbmRleCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZVBhZ2luYXRpb25cclxuICAgICAgICA/IHRoaXMudGFibGVQYWdpbmF0aW9uLmZyb20gKyBpbmRleFxyXG4gICAgICAgIDogaW5kZXhcclxuICAgIH0sXHJcbiAgICByZW5kZXJOb3JtYWxGaWVsZCAoZmllbGQsIGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGFzQ2FsbGJhY2soZmllbGQpXHJcbiAgICAgICAgPyB0aGlzLmNhbGxDYWxsYmFjayhmaWVsZCwgaXRlbSlcclxuICAgICAgICA6IHRoaXMuZ2V0T2JqZWN0VmFsdWUoaXRlbSwgZmllbGQubmFtZSwgJycpXHJcbiAgICB9LFxyXG4gICAgaXNTcGVjaWFsRmllbGQgKGZpZWxkTmFtZSkge1xyXG4gICAgICByZXR1cm4gZmllbGROYW1lLnNsaWNlKDAsIDIpID09PSAnX18nXHJcbiAgICB9LFxyXG4gICAgdGl0bGVDYXNlIChzdHIpIHtcclxuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHcrL2csIGZ1bmN0aW9uKHR4dCkge1xyXG4gICAgICAgIHJldHVybiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBjYW1lbENhc2UgKHN0ciwgZGVsaW1pdGVyID0gJ18nKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICByZXR1cm4gc3RyLnNwbGl0KGRlbGltaXRlcikubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gc2VsZi50aXRsZUNhc2UoaXRlbSlcclxuICAgICAgfSkuam9pbignJylcclxuICAgIH0sXHJcbiAgICBub3RJbiAoc3RyLCBhcnIpIHtcclxuICAgICAgcmV0dXJuIGFyci5pbmRleE9mKHN0cikgPT09IC0xXHJcbiAgICB9LFxyXG4gICAgbG9hZERhdGEgKHN1Y2Nlc3MgPSB0aGlzLmxvYWRTdWNjZXNzLCBmYWlsZWQgPSB0aGlzLmxvYWRGYWlsZWQpIHtcclxuICAgICAgaWYgKHRoaXMuaXNEYXRhTW9kZSkge1xyXG4gICAgICAgIHRoaXMuY2FsbERhdGFNYW5hZ2VyKClcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWRpbmcnKVxyXG5cclxuICAgICAgdGhpcy5odHRwT3B0aW9uc1sncGFyYW1zJ10gPSB0aGlzLmdldEFwcGVuZFBhcmFtcyggdGhpcy5nZXRBbGxRdWVyeVBhcmFtcygpIClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmZldGNoKHRoaXMuYXBpVXJsLCB0aGlzLmh0dHBPcHRpb25zKS50aGVuKFxyXG4gICAgICAgICAgc3VjY2VzcyxcclxuICAgICAgICAgIGZhaWxlZFxyXG4gICAgICApLmNhdGNoKCgpID0+IGZhaWxlZCgpKVxyXG4gICAgfSxcclxuICAgIGZldGNoIChhcGlVcmwsIGh0dHBPcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBGZXRjaFxyXG4gICAgICAgICAgPyB0aGlzLmh0dHBGZXRjaChhcGlVcmwsIGh0dHBPcHRpb25zKVxyXG4gICAgICAgICAgOiBheGlvc1t0aGlzLmh0dHBNZXRob2RdKGFwaVVybCwgaHR0cE9wdGlvbnMpXHJcbiAgICB9LFxyXG4gICAgbG9hZFN1Y2Nlc3MgKHJlc3BvbnNlKSB7XHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkLXN1Y2Nlc3MnLCByZXNwb25zZSlcclxuXHJcbiAgICAgIGxldCBib2R5ID0gdGhpcy50cmFuc2Zvcm0ocmVzcG9uc2UuZGF0YSlcclxuXHJcbiAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5nZXRPYmplY3RWYWx1ZShib2R5LCB0aGlzLmRhdGFQYXRoLCBudWxsKVxyXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoYm9keSwgdGhpcy5wYWdpbmF0aW9uUGF0aCwgbnVsbClcclxuXHJcbiAgICAgIGlmICh0aGlzLnRhYmxlUGFnaW5hdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMud2FybigndnVldGFibGU6IHBhZ2luYXRpb24tcGF0aCBcIicgKyB0aGlzLnBhZ2luYXRpb25QYXRoICsgJ1wiIG5vdCBmb3VuZC4gJ1xyXG4gICAgICAgICAgKyAnSXQgbG9va3MgbGlrZSB0aGUgZGF0YSByZXR1cm5lZCBmcm9tIHRoZSBzZXZlciBkb2VzIG5vdCBoYXZlIHBhZ2luYXRpb24gaW5mb3JtYXRpb24gJ1xyXG4gICAgICAgICAgKyBcIm9yIHlvdSBtYXkgaGF2ZSBzZXQgaXQgaW5jb3JyZWN0bHkuXFxuXCJcclxuICAgICAgICAgICsgJ1lvdSBjYW4gZXhwbGljaXRseSBzdXBwcmVzcyB0aGlzIHdhcm5pbmcgYnkgc2V0dGluZyBwYWdpbmF0aW9uLXBhdGg9XCJcIi4nXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmZpeEhlYWRlcigpXHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoJ3BhZ2luYXRpb24tZGF0YScsIHRoaXMudGFibGVQYWdpbmF0aW9uKVxyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkZWQnKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGZpeEhlYWRlcigpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzRml4ZWRIZWFkZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBlbGVtID0gdGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndnVldGFibGUtYm9keS13cmFwcGVyJylbMF1cclxuICAgICAgaWYgKGVsZW0gIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChlbGVtLnNjcm9sbEhlaWdodCA+IGVsZW0uY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxvYWRGYWlsZWQgKHJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2xvYWQtZXJyb3InLCByZXNwb25zZSlcclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWQtZXJyb3InLCByZXNwb25zZSlcclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWRlZCcpXHJcbiAgICB9LFxyXG4gICAgdHJhbnNmb3JtIChkYXRhKSB7XHJcbiAgICAgIGxldCBmdW5jID0gJ3RyYW5zZm9ybSdcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmVudEZ1bmN0aW9uRXhpc3RzKGZ1bmMpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50W2Z1bmNdLmNhbGwodGhpcy4kcGFyZW50LCBkYXRhKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGF0YVxyXG4gICAgfSxcclxuICAgIHBhcmVudEZ1bmN0aW9uRXhpc3RzIChmdW5jKSB7XHJcbiAgICAgIHJldHVybiAoZnVuYyAhPT0gJycgJiYgdHlwZW9mIHRoaXMuJHBhcmVudFtmdW5jXSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgIH0sXHJcbiAgICBjYWxsUGFyZW50RnVuY3Rpb24gKGZ1bmMsIGFyZ3MsIGRlZmF1bHRWYWx1ZSA9IG51bGwpIHtcclxuICAgICAgaWYgKHRoaXMucGFyZW50RnVuY3Rpb25FeGlzdHMoZnVuYykpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50W2Z1bmNdLmNhbGwodGhpcy4kcGFyZW50LCBhcmdzKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgICB9LFxyXG4gICAgZmlyZUV2ZW50IChldmVudE5hbWUsIGFyZ3MpIHtcclxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgZXZlbnROYW1lLCBhcmdzKVxyXG4gICAgfSxcclxuICAgIHdhcm4gKG1zZykge1xyXG4gICAgICBpZiAoIXRoaXMuc2lsZW50KSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKG1zZylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldEFsbFF1ZXJ5UGFyYW1zICgpIHtcclxuICAgICAgbGV0IHBhcmFtcyA9IHt9XHJcblxyXG4gICAgICBpZiAodHlwZW9mKHRoaXMucXVlcnlQYXJhbXMpID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcGFyYW1zID0gdGhpcy5xdWVyeVBhcmFtcyh0aGlzLnNvcnRPcmRlciwgdGhpcy5jdXJyZW50UGFnZSwgdGhpcy5wZXJQYWdlKVxyXG4gICAgICAgIHJldHVybiB0eXBlb2YocGFyYW1zKSAhPT0gJ29iamVjdCcgPyB7fSA6IHBhcmFtc1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwYXJhbXNbdGhpcy5xdWVyeVBhcmFtcy5zb3J0XSA9IHRoaXMuZ2V0U29ydFBhcmFtKClcclxuICAgICAgcGFyYW1zW3RoaXMucXVlcnlQYXJhbXMucGFnZV0gPSB0aGlzLmN1cnJlbnRQYWdlXHJcbiAgICAgIHBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1zLnBlclBhZ2VdID0gdGhpcy5wZXJQYWdlXHJcblxyXG4gICAgICByZXR1cm4gcGFyYW1zXHJcbiAgICB9LFxyXG4gICAgZ2V0U29ydFBhcmFtICgpIHtcclxuICAgICAgaWYgKCF0aGlzLnNvcnRPcmRlciB8fCB0aGlzLnNvcnRPcmRlci5maWVsZCA9PSAnJykge1xyXG4gICAgICAgIHJldHVybiAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuJHBhcmVudFsnZ2V0U29ydFBhcmFtJ10gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50WydnZXRTb3J0UGFyYW0nXS5jYWxsKHRoaXMuJHBhcmVudCwgdGhpcy5zb3J0T3JkZXIpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRTb3J0UGFyYW0oKVxyXG4gICAgfSxcclxuICAgIGdldERlZmF1bHRTb3J0UGFyYW0gKCkge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc29ydE9yZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGZpZWxkTmFtZSA9ICh0eXBlb2YgdGhpcy5zb3J0T3JkZXJbaV0uc29ydEZpZWxkID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgID8gdGhpcy5zb3J0T3JkZXJbaV0uZmllbGRcclxuICAgICAgICAgIDogdGhpcy5zb3J0T3JkZXJbaV0uc29ydEZpZWxkO1xyXG5cclxuICAgICAgICByZXN1bHQgKz0gZmllbGROYW1lICsgJ3wnICsgdGhpcy5zb3J0T3JkZXJbaV0uZGlyZWN0aW9uICsgKChpKzEpIDwgdGhpcy5zb3J0T3JkZXIubGVuZ3RoID8gJywnIDogJycpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0QXBwZW5kUGFyYW1zIChwYXJhbXMpIHtcclxuICAgICAgZm9yIChsZXQgeCBpbiB0aGlzLmFwcGVuZFBhcmFtcykge1xyXG4gICAgICAgIHBhcmFtc1t4XSA9IHRoaXMuYXBwZW5kUGFyYW1zW3hdXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwYXJhbXNcclxuICAgIH0sXHJcbiAgICBleHRyYWN0TmFtZSAoc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJzonKVswXS50cmltKClcclxuICAgIH0sXHJcbiAgICBleHRyYWN0QXJncyAoc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJzonKVsxXVxyXG4gICAgfSxcclxuICAgIGlzU29ydGFibGUgKGZpZWxkKSB7XHJcbiAgICAgIHJldHVybiAhKHR5cGVvZiBmaWVsZC5zb3J0RmllbGQgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgfSxcclxuICAgIGlzSW5DdXJyZW50U29ydEdyb3VwIChmaWVsZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50U29ydE9yZGVyUG9zaXRpb24oZmllbGQpICE9PSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBoYXNTb3J0YWJsZUljb24gKGZpZWxkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzU29ydGFibGUoZmllbGQpICYmIHRoaXMuY3NzLnNvcnRhYmxlSWNvbiAhPSAnJ1xyXG4gICAgfSxcclxuICAgIGN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbiAoZmllbGQpIHtcclxuICAgICAgaWYgKCAhIHRoaXMuaXNTb3J0YWJsZShmaWVsZCkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvcnRPcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkSXNJblNvcnRPcmRlclBvc2l0aW9uKGZpZWxkLCBpKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZmllbGRJc0luU29ydE9yZGVyUG9zaXRpb24gKGZpZWxkLCBpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNvcnRPcmRlcltpXS5maWVsZCA9PT0gZmllbGQubmFtZSAmJiB0aGlzLnNvcnRPcmRlcltpXS5zb3J0RmllbGQgPT09IGZpZWxkLnNvcnRGaWVsZFxyXG4gICAgfSxcclxuICAgIG9yZGVyQnkgKGZpZWxkLCBldmVudCkge1xyXG4gICAgICBpZiAoICEgdGhpcy5pc1NvcnRhYmxlKGZpZWxkKSApIHJldHVyblxyXG5cclxuICAgICAgbGV0IGtleSA9IHRoaXMubXVsdGlTb3J0S2V5LnRvTG93ZXJDYXNlKCkgKyAnS2V5J1xyXG5cclxuICAgICAgaWYgKHRoaXMubXVsdGlTb3J0ICYmIGV2ZW50W2tleV0pIHsgLy9hZGRpbmcgY29sdW1uIHRvIG11bHRpc29ydFxyXG4gICAgICAgIHRoaXMubXVsdGlDb2x1bW5Tb3J0KGZpZWxkKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vbm8gbXVsdGlzb3J0LCBvciByZXNldHRpbmcgc29ydFxyXG4gICAgICAgIHRoaXMuc2luZ2xlQ29sdW1uU29ydChmaWVsZClcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDEgICAgLy8gcmVzZXQgcGFnZSBpbmRleFxyXG4gICAgICBpZiAodGhpcy5hcGlNb2RlIHx8IHRoaXMuZGF0YU1hbmFnZXIpIHtcclxuICAgICAgICB0aGlzLmxvYWREYXRhKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG11bHRpQ29sdW1uU29ydCAoZmllbGQpIHtcclxuICAgICAgbGV0IGkgPSB0aGlzLmN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbihmaWVsZCk7XHJcblxyXG4gICAgICBpZihpID09PSBmYWxzZSkgeyAvL3RoaXMgZmllbGQgaXMgbm90IGluIHRoZSBzb3J0IGFycmF5IHlldFxyXG4gICAgICAgIHRoaXMuc29ydE9yZGVyLnB1c2goe1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLm5hbWUsXHJcbiAgICAgICAgICBzb3J0RmllbGQ6IGZpZWxkLnNvcnRGaWVsZCxcclxuICAgICAgICAgIGRpcmVjdGlvbjogJ2FzYydcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHsgLy90aGlzIGZpZWxkIGlzIGluIHRoZSBzb3J0IGFycmF5LCBub3cgd2UgY2hhbmdlIGl0cyBzdGF0ZVxyXG4gICAgICAgIGlmKHRoaXMuc29ydE9yZGVyW2ldLmRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcclxuICAgICAgICAgIC8vIHN3aXRjaCBkaXJlY3Rpb25cclxuICAgICAgICAgIHRoaXMuc29ydE9yZGVyW2ldLmRpcmVjdGlvbiA9ICdkZXNjJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvL3JlbW92ZSBzb3J0IGNvbmRpdGlvblxyXG4gICAgICAgICAgdGhpcy5zb3J0T3JkZXIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNpbmdsZUNvbHVtblNvcnQgKGZpZWxkKSB7XHJcbiAgICAgIGlmICh0aGlzLnNvcnRPcmRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLmNsZWFyU29ydE9yZGVyKClcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zb3J0T3JkZXIuc3BsaWNlKDEpOyAvL3JlbW92ZXMgYWRkaXRpb25hbCBjb2x1bW5zXHJcblxyXG4gICAgICBpZiAodGhpcy5maWVsZElzSW5Tb3J0T3JkZXJQb3NpdGlvbihmaWVsZCwgMCkpIHtcclxuICAgICAgICAvLyBjaGFuZ2Ugc29ydCBkaXJlY3Rpb25cclxuICAgICAgICB0aGlzLnNvcnRPcmRlclswXS5kaXJlY3Rpb24gPSB0aGlzLnNvcnRPcmRlclswXS5kaXJlY3Rpb24gPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYydcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZXNldCBzb3J0IGRpcmVjdGlvblxyXG4gICAgICAgIHRoaXMuc29ydE9yZGVyWzBdLmRpcmVjdGlvbiA9ICdhc2MnXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zb3J0T3JkZXJbMF0uZmllbGQgPSBmaWVsZC5uYW1lXHJcbiAgICAgIHRoaXMuc29ydE9yZGVyWzBdLnNvcnRGaWVsZCA9IGZpZWxkLnNvcnRGaWVsZFxyXG4gICAgfSxcclxuICAgIGNsZWFyU29ydE9yZGVyICgpIHtcclxuICAgICAgdGhpcy5zb3J0T3JkZXIucHVzaCh7XHJcbiAgICAgICAgZmllbGQ6ICcnLFxyXG4gICAgICAgIHNvcnRGaWVsZDogJycsXHJcbiAgICAgICAgZGlyZWN0aW9uOiAnYXNjJ1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzb3J0Q2xhc3MgKGZpZWxkKSB7XHJcbiAgICAgIGxldCBjbHMgPSAnJ1xyXG4gICAgICBsZXQgaSA9IHRoaXMuY3VycmVudFNvcnRPcmRlclBvc2l0aW9uKGZpZWxkKVxyXG5cclxuICAgICAgaWYgKGkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgY2xzID0gKHRoaXMuc29ydE9yZGVyW2ldLmRpcmVjdGlvbiA9PSAnYXNjJykgPyB0aGlzLmNzcy5hc2NlbmRpbmdDbGFzcyA6IHRoaXMuY3NzLmRlc2NlbmRpbmdDbGFzc1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2xzXHJcbiAgICB9LFxyXG4gICAgc29ydEljb24gKGZpZWxkKSB7XHJcbiAgICAgIGxldCBjbHMgPSB0aGlzLmNzcy5zb3J0YWJsZUljb25cclxuICAgICAgbGV0IGkgPSB0aGlzLmN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbihmaWVsZClcclxuXHJcbiAgICAgIGlmIChpICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGNscyA9ICh0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gPT0gJ2FzYycpID8gdGhpcy5jc3MuYXNjZW5kaW5nSWNvbiA6IHRoaXMuY3NzLmRlc2NlbmRpbmdJY29uXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjbHM7XHJcbiAgICB9LFxyXG4gICAgc29ydEljb25PcGFjaXR5IChmaWVsZCkge1xyXG4gICAgICAvKlxyXG4gICAgICAgKiBmaWVsZHMgd2l0aCBzdHJvbmdlciBwcmVjZWRlbmNlIGhhdmUgZGFya2VyIGNvbG9yXHJcbiAgICAgICAqXHJcbiAgICAgICAqIGlmIHRoZXJlIGFyZSBmZXcgZmllbGRzLCB3ZSBnbyBkb3duIGJ5IDAuM1xyXG4gICAgICAgKiBleC4gMiBmaWVsZHMgYXJlIHNlbGVjdGVkOiAxLjAsIDAuN1xyXG4gICAgICAgKlxyXG4gICAgICAgKiBpZiB0aGVyZSBhcmUgbW9yZSB3ZSBnbyBkb3duIGV2ZW5seSBvbiB0aGUgZ2l2ZW4gc3BlY3RydW1cclxuICAgICAgICogZXguIDYgZmllbGRzIGFyZSBzZWxlY3RlZDogMS4wLCAwLjg2LCAwLjcyLCAwLjU4LCAwLjQ0LCAwLjNcclxuICAgICAgICovXHJcbiAgICAgIGxldCBtYXggPSAxLjAsXHJcbiAgICAgICAgICBtaW4gPSAwLjMsXHJcbiAgICAgICAgICBzdGVwID0gMC4zXHJcblxyXG4gICAgICBsZXQgY291bnQgPSB0aGlzLnNvcnRPcmRlci5sZW5ndGg7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50U29ydE9yZGVyUG9zaXRpb24oZmllbGQpXHJcblxyXG5cclxuICAgICAgaWYobWF4IC0gY291bnQgKiBzdGVwIDwgbWluKSB7XHJcbiAgICAgICAgc3RlcCA9IChtYXggLSBtaW4pIC8gKGNvdW50LTEpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBvcGFjaXR5ID0gbWF4IC0gY3VycmVudCAqIHN0ZXBcclxuXHJcbiAgICAgIHJldHVybiBvcGFjaXR5XHJcbiAgICB9LFxyXG4gICAgaGFzQ2FsbGJhY2sgKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0uY2FsbGJhY2sgPyB0cnVlIDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBjYWxsQ2FsbGJhY2sgKGZpZWxkLCBpdGVtKSB7XHJcbiAgICAgIGlmICggISB0aGlzLmhhc0NhbGxiYWNrKGZpZWxkKSkgcmV0dXJuXHJcblxyXG4gICAgICBpZih0eXBlb2YoZmllbGQuY2FsbGJhY2spID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgIHJldHVybiBmaWVsZC5jYWxsYmFjayh0aGlzLmdldE9iamVjdFZhbHVlKGl0ZW0sIGZpZWxkLm5hbWUpKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgYXJncyA9IGZpZWxkLmNhbGxiYWNrLnNwbGl0KCd8JylcclxuICAgICAgbGV0IGZ1bmMgPSBhcmdzLnNoaWZ0KClcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy4kcGFyZW50W2Z1bmNdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRPYmplY3RWYWx1ZShpdGVtLCBmaWVsZC5uYW1lKVxyXG5cclxuICAgICAgICByZXR1cm4gKGFyZ3MubGVuZ3RoID4gMClcclxuICAgICAgICAgID8gdGhpcy4kcGFyZW50W2Z1bmNdLmFwcGx5KHRoaXMuJHBhcmVudCwgW3ZhbHVlXS5jb25jYXQoYXJncykpXHJcbiAgICAgICAgICA6IHRoaXMuJHBhcmVudFtmdW5jXS5jYWxsKHRoaXMuJHBhcmVudCwgdmFsdWUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9LFxyXG4gICAgZ2V0T2JqZWN0VmFsdWUgKG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgIGRlZmF1bHRWYWx1ZSA9ICh0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAndW5kZWZpbmVkJykgPyBudWxsIDogZGVmYXVsdFZhbHVlXHJcblxyXG4gICAgICBsZXQgb2JqID0gb2JqZWN0XHJcbiAgICAgIGlmIChwYXRoLnRyaW0oKSAhPSAnJykge1xyXG4gICAgICAgIGxldCBrZXlzID0gcGF0aC5zcGxpdCgnLicpXHJcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgaWYgKG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqW2tleV0gIT09ICd1bmRlZmluZWQnICYmIG9ialtrZXldICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IG9ialtrZXldXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmogPSBkZWZhdWx0VmFsdWVcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gb2JqXHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQ2hlY2tib3ggKGRhdGFJdGVtLCBmaWVsZE5hbWUsIGV2ZW50KSB7XHJcbiAgICAgIGxldCBpc0NoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICBsZXQgaWRDb2x1bW4gPSB0aGlzLnRyYWNrQnlcclxuXHJcbiAgICAgIGlmIChkYXRhSXRlbVtpZENvbHVtbl0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMud2FybignX19jaGVja2JveCBmaWVsZDogVGhlIFwiJyt0aGlzLnRyYWNrQnkrJ1wiIGZpZWxkIGRvZXMgbm90IGV4aXN0ISBNYWtlIHN1cmUgdGhlIGZpZWxkIHlvdSBzcGVjaWZ5IGluIFwidHJhY2stYnlcIiBwcm9wIGRvZXMgZXhpc3QuJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGtleSA9IGRhdGFJdGVtW2lkQ29sdW1uXVxyXG4gICAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RJZChrZXkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51bnNlbGVjdElkKGtleSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRlbWl0KCd2dWV0YWJsZTpjaGVja2JveC10b2dnbGVkJywgaXNDaGVja2VkLCBkYXRhSXRlbSlcclxuICAgIH0sXHJcbiAgICBzZWxlY3RJZCAoa2V5KSB7XHJcbiAgICAgIGlmICggISB0aGlzLmlzU2VsZWN0ZWRSb3coa2V5KSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUby5wdXNoKGtleSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVuc2VsZWN0SWQgKGtleSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVG8gPSB0aGlzLnNlbGVjdGVkVG8uZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPT0ga2V5XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgaXNTZWxlY3RlZFJvdyAoa2V5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVG8uaW5kZXhPZihrZXkpID49IDBcclxuICAgIH0sXHJcbiAgICByb3dTZWxlY3RlZCAoZGF0YUl0ZW0sIGZpZWxkTmFtZSl7XHJcbiAgICAgIGxldCBpZENvbHVtbiA9IHRoaXMudHJhY2tCeVxyXG4gICAgICBsZXQga2V5ID0gZGF0YUl0ZW1baWRDb2x1bW5dXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkUm93KGtleSlcclxuICAgIH0sXHJcbiAgICBjaGVja0NoZWNrYm94ZXNTdGF0ZSAoZmllbGROYW1lKSB7XHJcbiAgICAgIGlmICghIHRoaXMudGFibGVEYXRhKSByZXR1cm5cclxuXHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICBsZXQgaWRDb2x1bW4gPSB0aGlzLnRyYWNrQnlcclxuICAgICAgbGV0IHNlbGVjdG9yID0gJ3RoLnZ1ZXRhYmxlLXRoLWNoZWNrYm94LScgKyBpZENvbHVtbiArICcgaW5wdXRbdHlwZT1jaGVja2JveF0nXHJcbiAgICAgIGxldCBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxyXG5cclxuICAgICAgLy9maXhlZDpkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsIHJldHVybiB0aGUgdHlwZW9mIG5vZGVMaXN0IG5vdCBhcnJheVxyXG4gICAgICBpZiAoZWxzLmZvckVhY2g9PT11bmRlZmluZWQpXHJcbiAgICAgICAgZWxzLmZvckVhY2g9ZnVuY3Rpb24oY2Ipe1xyXG4gICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGVscywgY2IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC8vIGNvdW50IGhvdyBtYW55IGNoZWNrYm94IHJvdyBpbiB0aGUgY3VycmVudCBwYWdlIGhhcyBiZWVuIGNoZWNrZWRcclxuICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy50YWJsZURhdGEuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gc2VsZi5zZWxlY3RlZFRvLmluZGV4T2YoaXRlbVtpZENvbHVtbl0pID49IDBcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIGNvdW50ID09IDAsIGNsZWFyIHRoZSBjaGVja2JveFxyXG4gICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICAvLyBjb3VudCA+IDAgYW5kIGNvdW50IDwgcGVyUGFnZSwgc2V0IGNoZWNrYm94IHN0YXRlIHRvICdpbmRldGVybWluYXRlJ1xyXG4gICAgICBlbHNlIGlmIChzZWxlY3RlZC5sZW5ndGggPCB0aGlzLnBlclBhZ2UpIHtcclxuICAgICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgLy8gY291bnQgPT0gcGVyUGFnZSwgc2V0IGNoZWNrYm94IHN0YXRlIHRvICdjaGVja2VkJ1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQWxsQ2hlY2tib3hlcyAoZmllbGROYW1lLCBldmVudCkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgbGV0IGlzQ2hlY2tlZCA9IGV2ZW50LnRhcmdldC5jaGVja2VkXHJcbiAgICAgIGxldCBpZENvbHVtbiA9IHRoaXMudHJhY2tCeVxyXG5cclxuICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YUl0ZW0pIHtcclxuICAgICAgICAgIHNlbGYuc2VsZWN0SWQoZGF0YUl0ZW1baWRDb2x1bW5dKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGEuZm9yRWFjaChmdW5jdGlvbihkYXRhSXRlbSkge1xyXG4gICAgICAgICAgc2VsZi51bnNlbGVjdElkKGRhdGFJdGVtW2lkQ29sdW1uXSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3Z1ZXRhYmxlOmNoZWNrYm94LXRvZ2dsZWQtYWxsJywgaXNDaGVja2VkKVxyXG4gICAgfSxcclxuICAgIGdvdG9QcmV2aW91c1BhZ2UgKCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+IDEpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlLS1cclxuICAgICAgICB0aGlzLmxvYWREYXRhKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdvdG9OZXh0UGFnZSAoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlIDwgdGhpcy50YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSsrXHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnb3RvUGFnZSAocGFnZSkge1xyXG4gICAgICBpZiAocGFnZSAhPSB0aGlzLmN1cnJlbnRQYWdlICYmIChwYWdlID4gMCAmJiBwYWdlIDw9IHRoaXMudGFibGVQYWdpbmF0aW9uLmxhc3RfcGFnZSkpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZVxyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaXNWaXNpYmxlRGV0YWlsUm93IChyb3dJZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52aXNpYmxlRGV0YWlsUm93cy5pbmRleE9mKCByb3dJZCApID49IDBcclxuICAgIH0sXHJcbiAgICBzaG93RGV0YWlsUm93IChyb3dJZCkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNWaXNpYmxlRGV0YWlsUm93KHJvd0lkKSkge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZURldGFpbFJvd3MucHVzaChyb3dJZClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGVEZXRhaWxSb3cgKHJvd0lkKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzVmlzaWJsZURldGFpbFJvdyhyb3dJZCkpIHtcclxuICAgICAgICB0aGlzLnZpc2libGVEZXRhaWxSb3dzLnNwbGljZShcclxuICAgICAgICAgIHRoaXMudmlzaWJsZURldGFpbFJvd3MuaW5kZXhPZihyb3dJZCksXHJcbiAgICAgICAgICAxXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlRGV0YWlsUm93IChyb3dJZCkge1xyXG4gICAgICBpZiAodGhpcy5pc1Zpc2libGVEZXRhaWxSb3cocm93SWQpKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlRGV0YWlsUm93KHJvd0lkKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbFJvdyhyb3dJZClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dGaWVsZCAoaW5kZXgpIHtcclxuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMudGFibGVGaWVsZHMubGVuZ3RoKSByZXR1cm5cclxuXHJcbiAgICAgIHRoaXMudGFibGVGaWVsZHNbaW5kZXhdLnZpc2libGUgPSB0cnVlXHJcbiAgICB9LFxyXG4gICAgaGlkZUZpZWxkIChpbmRleCkge1xyXG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy50YWJsZUZpZWxkcy5sZW5ndGgpIHJldHVyblxyXG5cclxuICAgICAgdGhpcy50YWJsZUZpZWxkc1tpbmRleF0udmlzaWJsZSA9IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlRmllbGQgKGluZGV4KSB7XHJcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLnRhYmxlRmllbGRzLmxlbmd0aCkgcmV0dXJuXHJcblxyXG4gICAgICB0aGlzLnRhYmxlRmllbGRzW2luZGV4XS52aXNpYmxlID0gISB0aGlzLnRhYmxlRmllbGRzW2luZGV4XS52aXNpYmxlXHJcbiAgICB9LFxyXG4gICAgcmVuZGVySWNvblRhZyAoY2xhc3Nlcywgb3B0aW9ucyA9ICcnKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YodGhpcy5jc3MucmVuZGVySWNvbikgPT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyBgPGkgY2xhc3M9XCIke2NsYXNzZXMuam9pbignICcpfVwiICR7b3B0aW9uc30+PC9pPmBcclxuICAgICAgICA6IHRoaXMuY3NzLnJlbmRlckljb24oY2xhc3Nlcywgb3B0aW9ucylcclxuICAgIH0sXHJcbiAgICBtYWtlUGFnaW5hdGlvbiAodG90YWwgPSBudWxsLCBwZXJQYWdlID0gbnVsbCwgY3VycmVudFBhZ2UgPSBudWxsKSB7XHJcbiAgICAgIGxldCBwYWdpbmF0aW9uID0ge31cclxuICAgICAgdG90YWwgPSB0b3RhbCA9PT0gbnVsbCA/IHRoaXMuZGF0YVRvdGFsIDogdG90YWxcclxuICAgICAgcGVyUGFnZSA9IHBlclBhZ2UgPT09IG51bGwgPyB0aGlzLnBlclBhZ2UgOiBwZXJQYWdlXHJcbiAgICAgIGN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2UgPT09IG51bGwgPyB0aGlzLmN1cnJlbnRQYWdlIDogY3VycmVudFBhZ2VcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgJ3RvdGFsJzogdG90YWwsXHJcbiAgICAgICAgJ3Blcl9wYWdlJzogcGVyUGFnZSxcclxuICAgICAgICAnY3VycmVudF9wYWdlJzogY3VycmVudFBhZ2UsXHJcbiAgICAgICAgJ2xhc3RfcGFnZSc6IE1hdGguY2VpbCh0b3RhbCAvIHBlclBhZ2UpIHx8IDAsXHJcbiAgICAgICAgJ25leHRfcGFnZV91cmwnOiAnJyxcclxuICAgICAgICAncHJldl9wYWdlX3VybCc6ICcnLFxyXG4gICAgICAgICdmcm9tJzogKGN1cnJlbnRQYWdlIC0xKSAqIHBlclBhZ2UgKzEsXHJcbiAgICAgICAgJ3RvJzogTWF0aC5taW4oY3VycmVudFBhZ2UgKiBwZXJQYWdlLCB0b3RhbClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5vcm1hbGl6ZVNvcnRPcmRlciAoKSB7XHJcbiAgICAgIHRoaXMuc29ydE9yZGVyLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uc29ydEZpZWxkID0gaXRlbS5zb3J0RmllbGQgfHwgaXRlbS5maWVsZFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGNhbGxEYXRhTWFuYWdlciAoKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGFNYW5hZ2VyID09PSBudWxsICYmIHRoaXMuZGF0YSA9PT0gbnVsbCkgcmV0dXJuXHJcblxyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmRhdGEpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0RGF0YSh0aGlzLmRhdGEpXHJcbiAgICAgIH0gXHJcbiAgICAgIFxyXG4gICAgICB0aGlzLm5vcm1hbGl6ZVNvcnRPcmRlcigpXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5zZXREYXRhKFxyXG4gICAgICAgIHRoaXMuZGF0YU1hbmFnZXJcclxuICAgICAgICAgID8gdGhpcy5kYXRhTWFuYWdlcih0aGlzLnNvcnRPcmRlciwgdGhpcy5tYWtlUGFnaW5hdGlvbigpKVxyXG4gICAgICAgICAgOiB0aGlzLmRhdGFcclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIG9uUm93Q2xhc3MgKGRhdGFJdGVtLCBpbmRleCkge1xyXG4gICAgICBpZiAodGhpcy5yb3dDbGFzc0NhbGxiYWNrICE9PSAnJykge1xyXG4gICAgICAgIHRoaXMud2FybignXCJyb3ctY2xhc3MtY2FsbGJhY2tcIiBwcm9wIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgXCJyb3ctY2xhc3NcIiBwcm9wIGluc3RlYWQuJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZih0aGlzLnJvd0NsYXNzKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvd0NsYXNzKGRhdGFJdGVtLCBpbmRleClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMucm93Q2xhc3NcclxuICAgIH0sXHJcbiAgICBvblJvd0NoYW5nZWQgKGRhdGFJdGVtKSB7XHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdyb3ctY2hhbmdlZCcsIGRhdGFJdGVtKVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSxcclxuICAgIG9uUm93Q2xpY2tlZCAoZGF0YUl0ZW0sIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdyb3ctY2xpY2tlZCcsIGRhdGFJdGVtLCBldmVudClcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0sXHJcbiAgICBvblJvd0RvdWJsZUNsaWNrZWQgKGRhdGFJdGVtLCBldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXggKyAncm93LWRibGNsaWNrZWQnLCBkYXRhSXRlbSwgZXZlbnQpXHJcbiAgICB9LFxyXG4gICAgb25EZXRhaWxSb3dDbGljayAoZGF0YUl0ZW0sIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdkZXRhaWwtcm93LWNsaWNrZWQnLCBkYXRhSXRlbSwgZXZlbnQpXHJcbiAgICB9LFxyXG4gICAgb25DZWxsQ2xpY2tlZCAoZGF0YUl0ZW0sIGZpZWxkLCBldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXggKyAnY2VsbC1jbGlja2VkJywgZGF0YUl0ZW0sIGZpZWxkLCBldmVudClcclxuICAgIH0sXHJcbiAgICBvbkNlbGxEb3VibGVDbGlja2VkIChkYXRhSXRlbSwgZmllbGQsIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdjZWxsLWRibGNsaWNrZWQnLCBkYXRhSXRlbSwgZmllbGQsIGV2ZW50KVxyXG4gICAgfSxcclxuICAgIG9uQ2VsbFJpZ2h0Q2xpY2tlZCAoZGF0YUl0ZW0sIGZpZWxkLCBldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXggKyAnY2VsbC1yaWdodGNsaWNrZWQnLCBkYXRhSXRlbSwgZmllbGQsIGV2ZW50KVxyXG4gICAgfSxcclxuICAgIC8qXHJcbiAgICAgKiBBUEkgZm9yIGV4dGVybmFsc1xyXG4gICAgICovXHJcbiAgICBjaGFuZ2VQYWdlIChwYWdlKSB7XHJcbiAgICAgIGlmIChwYWdlID09PSAncHJldicpIHtcclxuICAgICAgICB0aGlzLmdvdG9QcmV2aW91c1BhZ2UoKVxyXG4gICAgICB9IGVsc2UgaWYgKHBhZ2UgPT09ICduZXh0Jykge1xyXG4gICAgICAgIHRoaXMuZ290b05leHRQYWdlKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdvdG9QYWdlKHBhZ2UpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWxvYWQgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSgpXHJcbiAgICB9LFxyXG4gICAgcmVmcmVzaCAoKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxXHJcbiAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKClcclxuICAgIH0sXHJcbiAgICByZXNldERhdGEgKCkge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IG51bGxcclxuICAgICAgdGhpcy50YWJsZVBhZ2luYXRpb24gPSBudWxsXHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdkYXRhLXJlc2V0JylcclxuICAgIH1cclxuICB9LCAvLyBlbmQ6IG1ldGhvZHNcclxuICB3YXRjaDoge1xyXG4gICAgJ211bHRpU29ydCcgKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgIGlmIChuZXdWYWwgPT09IGZhbHNlICYmIHRoaXMuc29ydE9yZGVyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLnNvcnRPcmRlci5zcGxpY2UoMSk7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJ2FwaVVybCcgIChuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICBpZih0aGlzLnJlYWN0aXZlQXBpVXJsICYmIG5ld1ZhbCAhPT0gb2xkVmFsKVxyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpXHJcbiAgICB9LFxyXG4gICAgJ2RhdGEnIChuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICB0aGlzLnNldERhdGEobmV3VmFsKVxyXG4gICAgfSxcclxuICAgICd0YWJsZUhlaWdodCcgKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgIHRoaXMuZml4SGVhZGVyKClcclxuICAgIH1cclxuICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICBbdi1jbG9ha10ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnZ1ZXRhYmxlIHRoLnNvcnRhYmxlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMjE4NWQwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAudnVldGFibGUtYm9keS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3cteTphdXRvO1xyXG4gIH1cclxuICAudnVldGFibGUtaGVhZC13cmFwcGVyIHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLWFjdGlvbnMge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudnVldGFibGUtcGFnaW5hdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmYWZiICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1wYWdpbmF0aW9uLWluZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1lbXB0eS1yZXN1bHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudnVldGFibGUtY2xpcC10ZXh0IHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAudnVldGFibGUtc2VtYW50aWMtbm8tdG9wIHtcclxuICAgIGJvcmRlci10b3A6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDowICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1maXhlZC1sYXlvdXQge1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLWd1dHRlci1jb2wge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmUgICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pc0ZpeGVkSGVhZGVyXG4gICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtaGVhZC13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogW1widnVldGFibGVcIiwgX3ZtLmNzcy50YWJsZUNsYXNzLCBfdm0uY3NzLnRhYmxlSGVhZGVyQ2xhc3NdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZUZpZWxkcywgZnVuY3Rpb24oZmllbGQsIGZpZWxkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1jaGVja2JveC1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udHJhY2tCeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLmNoZWNrQ2hlY2tib3hlc1N0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZUFsbENoZWNrYm94ZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19jb21wb25lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1jb21wb25lbnQtXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50cmFja0J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc29ydENsYXNzKGZpZWxkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzb3J0YWJsZTogX3ZtLmlzU29ydGFibGUoZmllbGQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJUaXRsZShmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJCeShmaWVsZCwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX3Nsb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1zbG90LVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdEFyZ3MoZmllbGQubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNvcnRhYmxlOiBfdm0uaXNTb3J0YWJsZShmaWVsZCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlclRpdGxlKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlckJ5KGZpZWxkLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fc2VxdWVuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1zZXF1ZW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzIHx8IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJUaXRsZShmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5vdEluKF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fc2VxdWVuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2NoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19jb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX3Nsb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtXCIgKyBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzIHx8IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJUaXRsZShmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLVwiICsgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc29ydGFibGU6IF92bS5pc1NvcnRhYmxlKGZpZWxkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJfXCIgKyBmaWVsZC5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVyVGl0bGUoZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlckJ5KGZpZWxkLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uc2Nyb2xsVmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZ1ZXRhYmxlLWd1dHRlci1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IF92bS5zY3JvbGxCYXJXaWR0aCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtYm9keS13cmFwcGVyXCIsXG4gICAgICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IF92bS50YWJsZUhlaWdodCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFtcInZ1ZXRhYmxlXCIsIF92bS5jc3MudGFibGVDbGFzcywgX3ZtLmNzcy50YWJsZUJvZHlDbGFzc11cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJjb2xncm91cFwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRmllbGRzLCBmdW5jdGlvbihmaWVsZCwgZmllbGRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJjb2xcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1cIiArIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiX2NvbF9cIiArIGZpZWxkLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtYm9keVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVEYXRhLCBmdW5jdGlvbihpdGVtLCBpdGVtSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0ub25Sb3dDbGFzcyhpdGVtLCBpdGVtSW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0taW5kZXhcIjogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBfdm0ub25Sb3dDaGFuZ2VkKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25Sb3dDbGlja2VkKGl0ZW0sICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vblJvd0RvdWJsZUNsaWNrZWQoaXRlbSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVGaWVsZHMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZEluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX3NlcXVlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1zZXF1ZW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlclNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlckljb25UYWcoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhbmRsZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jc3MuaGFuZGxlSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLWNoZWNrYm94ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLnJvd1NlbGVjdGVkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZUNoZWNrYm94KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fY29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0QXJncyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWRhdGFcIjogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1pbmRleFwiOiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctZmllbGRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnNvcnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fc2xvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXNsb3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0QXJncyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0RhdGE6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0luZGV4OiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0ZpZWxkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnNvcnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBmaWVsZC5kYXRhQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVyTm9ybWFsRmllbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsQ2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsRG91YmxlQ2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dG1lbnU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsUmlnaHRDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZURldGFpbFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IF92bS5kZXRhaWxSb3dUcmFuc2l0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1Zpc2libGVEZXRhaWxSb3coaXRlbVtfdm0udHJhY2tCeV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW192bS5jc3MuZGV0YWlsUm93Q2xhc3NdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkRldGFpbFJvd0NsaWNrKGl0ZW0sICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzcGFuOiBfdm0uY291bnRWaXNpYmxlRmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoX3ZtLmRldGFpbFJvd0NvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctZGF0YVwiOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1pbmRleFwiOiBpdGVtSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheUVtcHR5RGF0YVJvd1xuICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZ1ZXRhYmxlLWVtcHR5LXJlc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogX3ZtLmNvdW50VmlzaWJsZUZpZWxkcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLm5vRGF0YVRlbXBsYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxlc3NUaGFuTWluUm93c1xuICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9sKF92bS5ibGFua1Jvd3MsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaSwgc3RhdGljQ2xhc3M6IFwiYmxhbmstcm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRmllbGRzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IGtleTogZmllbGRJbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICA6IF9jKFwidGFibGVcIiwgeyBjbGFzczogW1widnVldGFibGVcIiwgX3ZtLmNzcy50YWJsZUNsYXNzXSB9LCBbXG4gICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRmllbGRzLCBmdW5jdGlvbihmaWVsZCwgZmllbGRJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBmaWVsZC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLWNoZWNrYm94LVwiICsgX3ZtLnRyYWNrQnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5jaGVja0NoZWNrYm94ZXNTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVBbGxDaGVja2JveGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fY29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtY29tcG9uZW50LVwiICsgX3ZtLnRyYWNrQnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNvcnRhYmxlOiBfdm0uaXNTb3J0YWJsZShmaWVsZCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnJlbmRlclRpdGxlKGZpZWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyQnkoZmllbGQsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19zbG90XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtc2xvdC1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc29ydENsYXNzKGZpZWxkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzb3J0YWJsZTogX3ZtLmlzU29ydGFibGUoZmllbGQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5yZW5kZXJUaXRsZShmaWVsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlckJ5KGZpZWxkLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fc2VxdWVuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1zZXF1ZW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0ucmVuZGVyVGl0bGUoZmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5vdEluKF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fc2VxdWVuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2NoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19jb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX3Nsb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtXCIgKyBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0ucmVuZGVyVGl0bGUoZmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLVwiICsgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc29ydGFibGU6IF92bS5pc1NvcnRhYmxlKGZpZWxkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJfXCIgKyBmaWVsZC5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnJlbmRlclRpdGxlKGZpZWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJCeShmaWVsZCwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2dWV0YWJsZS1ib2R5XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRGF0YSwgZnVuY3Rpb24oaXRlbSwgaXRlbUluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLm9uUm93Q2xhc3MoaXRlbSwgaXRlbUluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0taW5kZXhcIjogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogX3ZtLm9uUm93Q2hhbmdlZChpdGVtKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vblJvd0RvdWJsZUNsaWNrZWQoaXRlbSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uUm93Q2xpY2tlZChpdGVtLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRmllbGRzLCBmdW5jdGlvbihmaWVsZCwgZmllbGRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19zZXF1ZW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXNlcXVlbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJTZXF1ZW5jZShpdGVtSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9faGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtaGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJJY29uVGFnKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFuZGxlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jc3MuaGFuZGxlSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1jaGVja2JveGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0ucm93U2VsZWN0ZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlQ2hlY2tib3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fY29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKF92bS5leHRyYWN0QXJncyhmaWVsZC5uYW1lKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctZGF0YVwiOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctaW5kZXhcIjogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctZmllbGRcIjogZmllbGQuc29ydEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PSBcIl9fc2xvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXNsb3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl90KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0QXJncyhmaWVsZC5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0RhdGE6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dJbmRleDogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93RmllbGQ6IGZpZWxkLnNvcnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmhhc0NhbGxiYWNrKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGZpZWxkLmRhdGFDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYWxsQ2FsbGJhY2soZmllbGQsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2VsbENsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsRG91YmxlQ2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dG1lbnU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxSaWdodENsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGZpZWxkLmRhdGFDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRPYmplY3RWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsQ2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxEb3VibGVDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0bWVudTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2VsbFJpZ2h0Q2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS51c2VEZXRhaWxSb3dcbiAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBfdm0uZGV0YWlsUm93VHJhbnNpdGlvbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNWaXNpYmxlRGV0YWlsUm93KGl0ZW1bX3ZtLnRyYWNrQnldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLmNzcy5kZXRhaWxSb3dDbGFzc10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uRGV0YWlsUm93Q2xpY2soaXRlbSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBfdm0uY291bnRWaXNpYmxlRmllbGRzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKF92bS5kZXRhaWxSb3dDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWRhdGFcIjogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWluZGV4XCI6IGl0ZW1JbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uZGlzcGxheUVtcHR5RGF0YVJvd1xuICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2dWV0YWJsZS1lbXB0eS1yZXN1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBfdm0uY291bnRWaXNpYmxlRmllbGRzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLm5vRGF0YVRlbXBsYXRlKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0ubGVzc1RoYW5NaW5Sb3dzXG4gICAgICAgICAgICAgID8gX3ZtLl9sKF92bS5ibGFua1Jvd3MsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogaSwgc3RhdGljQ2xhc3M6IFwiYmxhbmstcm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVGaWVsZHMsIGZ1bmN0aW9uKGZpZWxkLCBmaWVsZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsga2V5OiBmaWVsZEluZGV4IH0sIFtfdm0uX3YoXCLCoFwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIm1haW5cIilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiYXBleGNoYXJ0c1wiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIyMDBweFwiLFxuICAgICAgdHlwZTogXCJhcmVhXCIsXG4gICAgICBvcHRpb25zOiBfdm0uY2hhcnRPcHRpb25zLFxuICAgICAgc2VyaWVzOiBfdm0uc2VyaWVzXG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInZ1ZXRhYmxlXCIsIHtcbiAgICAgICAgcmVmOiBcInZ1ZXRhYmxlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJhcGktdXJsXCI6IFwiL3JldG91ci90YWJsZXMvZGFzaGJvYXJkXCIsXG4gICAgICAgICAgXCJwZXItcGFnZVwiOiAyMCxcbiAgICAgICAgICBmaWVsZHM6IF92bS5maWVsZHMsXG4gICAgICAgICAgY3NzOiBfdm0uY3NzXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IFwidnVldGFibGU6cGFnaW5hdGlvbi1kYXRhXCI6IF92bS5vblBhZ2luYXRpb25EYXRhIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidnVldGFibGUtcGFnaW5hdGlvblwiLCB7XG4gICAgICAgIHJlZjogXCJwYWdpbmF0aW9uXCIsXG4gICAgICAgIG9uOiB7IFwidnVldGFibGUtcGFnaW5hdGlvbjpjaGFuZ2UtcGFnZVwiOiBfdm0ub25DaGFuZ2VQYWdlIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2dWV0YWJsZVwiLCB7XG4gICAgICAgIHJlZjogXCJ2dWV0YWJsZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwiYXBpLXVybFwiOiBcIi9yZXRvdXIvdGFibGVzL2Rhc2hib2FyZFwiLFxuICAgICAgICAgIFwicGVyLXBhZ2VcIjogMjAsXG4gICAgICAgICAgZmllbGRzOiBfdm0uZmllbGRzLFxuICAgICAgICAgIGNzczogX3ZtLmNzc1xuICAgICAgICB9LFxuICAgICAgICBvbjogeyBcInZ1ZXRhYmxlOnBhZ2luYXRpb24tZGF0YVwiOiBfdm0ub25QYWdpbmF0aW9uRGF0YSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInZ1ZXRhYmxlLXBhZ2luYXRpb25cIiwge1xuICAgICAgICByZWY6IFwicGFnaW5hdGlvblwiLFxuICAgICAgICBvbjogeyBcInZ1ZXRhYmxlLXBhZ2luYXRpb246Y2hhbmdlLXBhZ2VcIjogX3ZtLm9uQ2hhbmdlUGFnZSB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgdmFsdWU6IF92bS50YWJsZVBhZ2luYXRpb24gJiYgX3ZtLnRhYmxlUGFnaW5hdGlvbi5sYXN0X3BhZ2UgPiAxLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidGFibGVQYWdpbmF0aW9uICYmIHRhYmxlUGFnaW5hdGlvbi5sYXN0X3BhZ2UgPiAxXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGNsYXNzOiBfdm0uY3NzLndyYXBwZXJDbGFzc1xuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIFwiYnRuLW5hdlwiLFxuICAgICAgICAgICAgX3ZtLmNzcy5saW5rQ2xhc3MsXG4gICAgICAgICAgICBfdm0uaXNPbkZpcnN0UGFnZSA/IF92bS5jc3MuZGlzYWJsZWRDbGFzcyA6IFwiXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5sb2FkUGFnZSgxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5jc3MuaWNvbnMuZmlyc3QgIT0gXCJcIlxuICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBjbGFzczogW192bS5jc3MuaWNvbnMuZmlyc3RdIH0pXG4gICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiwqtcIildKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICBcImJ0bi1uYXZcIixcbiAgICAgICAgICAgIF92bS5jc3MubGlua0NsYXNzLFxuICAgICAgICAgICAgX3ZtLmlzT25GaXJzdFBhZ2UgPyBfdm0uY3NzLmRpc2FibGVkQ2xhc3MgOiBcIlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0ubG9hZFBhZ2UoXCJwcmV2XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLmNzcy5pY29ucy5uZXh0ICE9IFwiXCJcbiAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgY2xhc3M6IFtfdm0uY3NzLmljb25zLnByZXZdIH0pXG4gICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiwqDigLlcIildKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5ub3RFbm91Z2hQYWdlc1xuICAgICAgICA/IFtcbiAgICAgICAgICAgIF92bS5fbChfdm0udG90YWxQYWdlLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5jc3MucGFnZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaXNDdXJyZW50UGFnZShuKSA/IF92bS5jc3MuYWN0aXZlQ2xhc3MgOiBcIlwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MobikgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZFBhZ2UobilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtcbiAgICAgICAgICAgIF92bS5fbChfdm0ud2luZG93U2l6ZSwgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBfdm0uY3NzLnBhZ2VDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmlzQ3VycmVudFBhZ2UoX3ZtLndpbmRvd1N0YXJ0ICsgbiAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgPyBfdm0uY3NzLmFjdGl2ZUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLndpbmRvd1N0YXJ0ICsgbiAtIDEpIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRQYWdlKF92bS53aW5kb3dTdGFydCArIG4gLSAxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICBcImJ0bi1uYXZcIixcbiAgICAgICAgICAgIF92bS5jc3MubGlua0NsYXNzLFxuICAgICAgICAgICAgX3ZtLmlzT25MYXN0UGFnZSA/IF92bS5jc3MuZGlzYWJsZWRDbGFzcyA6IFwiXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5sb2FkUGFnZShcIm5leHRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uY3NzLmljb25zLm5leHQgIT0gXCJcIlxuICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBjbGFzczogW192bS5jc3MuaWNvbnMubmV4dF0gfSlcbiAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLigLrCoFwiKV0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIFwiYnRuLW5hdlwiLFxuICAgICAgICAgICAgX3ZtLmNzcy5saW5rQ2xhc3MsXG4gICAgICAgICAgICBfdm0uaXNPbkxhc3RQYWdlID8gX3ZtLmNzcy5kaXNhYmxlZENsYXNzIDogXCJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmxvYWRQYWdlKF92bS50b3RhbFBhZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLmNzcy5pY29ucy5sYXN0ICE9IFwiXCJcbiAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgY2xhc3M6IFtfdm0uY3NzLmljb25zLmxhc3RdIH0pXG4gICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiwrtcIildKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Z1ZXRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNTk2NWUzYiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WdWV0YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Z1ZXRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9WdWV0YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNTk2NWUzYiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxNTk2NWUzYlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3ZhZ3JhbnQvd2ViZGV2L2NyYWZ0L2NyYWZ0LXJldG91ci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTU5NjVlM2InLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTU5NjVlM2InLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Z1ZXRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNTk2NWUzYiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNTk2NWUzYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVldGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WdWV0YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL2lnbm9yZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Z1ZXRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE1OTY1ZTNiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL2lnbm9yZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Z1ZXRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE1OTY1ZTNiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db25mZXR0aS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzcyZDcxMmEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29uZmV0dGkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db25mZXR0aS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3ZhZ3JhbnQvd2ViZGV2L2NyYWZ0L2NyYWZ0LXJldG91ci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzcyZDcxMmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzcyZDcxMmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbmZldHRpLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NzJkNzEyYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3NzJkNzEyYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9Db25mZXR0aS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25mZXR0aS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmZldHRpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGFzaGJvYXJkQ2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYwOWFkOTY2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Rhc2hib2FyZENoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGFzaGJvYXJkQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92YWdyYW50L3dlYmRldi9jcmFmdC9jcmFmdC1yZXRvdXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2YwOWFkOTY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2YwOWFkOTY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EYXNoYm9hcmRDaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjA5YWQ5NjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjA5YWQ5NjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkQ2hhcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGFzaGJvYXJkQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXNoYm9hcmRDaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Rhc2hib2FyZFRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05YTI5MDE4NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EYXNoYm9hcmRUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Rhc2hib2FyZFRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdmFncmFudC93ZWJkZXYvY3JhZnQvY3JhZnQtcmV0b3VyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5YTI5MDE4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5YTI5MDE4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRGFzaGJvYXJkVGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhMjkwMTg2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzlhMjkwMTg2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0Rhc2hib2FyZFRhYmxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Rhc2hib2FyZFRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGFzaGJvYXJkVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZWRpcmVjdHNUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmUxNTY5MWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVkaXJlY3RzVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZWRpcmVjdHNUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3ZhZ3JhbnQvd2ViZGV2L2NyYWZ0L2NyYWZ0LXJldG91ci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmUxNTY5MWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmUxNTY5MWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JlZGlyZWN0c1RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZTE1NjkxYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZTE1NjkxYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9SZWRpcmVjdHNUYWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWRpcmVjdHNUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZGlyZWN0c1RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVnVldGFibGVQYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjU4MjAzNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92YWdyYW50L3dlYmRldi9jcmFmdC9jcmFmdC1yZXRvdXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFiNTgyMDM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFiNTgyMDM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiNTgyMDM2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFiNTgyMDM2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVnVldGFibGVQYWdpbmF0aW9uTWl4aW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92YWdyYW50L3dlYmRldi9jcmFmdC9jcmFmdC1yZXRvdXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQwMTQ0MTRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQwMTQ0MTRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIFxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVQYWdpbmF0aW9uTWl4aW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVldGFibGVQYWdpbmF0aW9uTWl4aW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WdWV0YWJsZVBhZ2luYXRpb25NaXhpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9