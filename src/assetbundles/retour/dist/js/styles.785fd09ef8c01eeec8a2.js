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
                if (data[0] !== undefined) {
                    options.yaxis.max = Math.round(largestNumber([data[0]['data']])[0] + 1.5);
                    options.labels = data[0]['labels'];
                }
                this.chartOptions = options;
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
                    id: 'vuechart-dashboard',
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
/* harmony import */ var _DashboardFieldDefs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardFieldDefs.js */ "./src/assetbundles/retour/src/vue/DashboardFieldDefs.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'vuetable-pagination': () => __webpack_require__.e(/*! import() | vuetable-pagination */ "styles").then(__webpack_require__.bind(null, /*! ./VuetablePagination.vue */ "./src/assetbundles/retour/src/vue/VuetablePagination.vue")),
        'vuetable-pagination-info': () => __webpack_require__.e(/*! import() | vuetable-pagination-info */ "styles").then(__webpack_require__.bind(null, /*! ./VuetablePaginationInfo.vue */ "./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue")),
        'vuetable-filter-bar': () => __webpack_require__.e(/*! import() | vuetable-filter-bar */ "styles").then(__webpack_require__.bind(null, /*! ./VuetableFilterBar.vue */ "./src/assetbundles/retour/src/vue/VuetableFilterBar.vue"))
    },
    props: {},
    data: function data() {
        return {
            moreParams: {},
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
            fields: _DashboardFieldDefs_js__WEBPACK_IMPORTED_MODULE_0__["default"]
        };
    },
    mounted() {
        this.$events.$on('filter-set', eventData => this.onFilterSet(eventData));
        this.$events.$on('filter-reset', e => this.onFilterReset());
    },
    methods: {
        onFilterSet(filterText) {
            this.moreParams = {
                'filter': filterText
            };
            console.log('onFilterSet');
            this.$events.fire('refresh-table', this.$refs.vuetable);
        },
        onFilterReset() {
            this.moreParams = {};
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
        urlFormatter(value) {
            if (value === '') {
                return '';
            }
            return `
            <a class="go" href="${value}" title="${value}" target="_blank" rel="noopener">${value}</a>
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
/* harmony import */ var _RedirectsFieldDefs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedirectsFieldDefs.js */ "./src/assetbundles/retour/src/vue/RedirectsFieldDefs.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'vuetable-pagination': () => __webpack_require__.e(/*! import() | vuetable-pagination */ "styles").then(__webpack_require__.bind(null, /*! ./VuetablePagination.vue */ "./src/assetbundles/retour/src/vue/VuetablePagination.vue")),
        'vuetable-pagination-info': () => __webpack_require__.e(/*! import() | vuetable-pagination-info */ "styles").then(__webpack_require__.bind(null, /*! ./VuetablePaginationInfo.vue */ "./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue")),
        'vuetable-filter-bar': () => __webpack_require__.e(/*! import() | vuetable-filter-bar */ "styles").then(__webpack_require__.bind(null, /*! ./VuetableFilterBar.vue */ "./src/assetbundles/retour/src/vue/VuetableFilterBar.vue"))
    },
    props: {},
    data: function data() {
        return {
            moreParams: {},
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
            fields: _RedirectsFieldDefs_js__WEBPACK_IMPORTED_MODULE_0__["default"]
        };
    },
    mounted() {
        this.$events.$on('filter-set', eventData => this.onFilterSet(eventData));
        this.$events.$on('filter-reset', e => this.onFilterReset());
    },
    methods: {
        onFilterSet(filterText) {
            this.moreParams = {
                'filter': filterText
            };
            console.log('onFilterSet');
            this.$events.fire('refresh-table', this.$refs.vuetable);
        },
        onFilterReset() {
            this.moreParams = {};
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
        matchFormatter(value) {
            let $label = 'Pluing Match';
            switch (value) {
                case 'exactmatch':
                    $label = 'Exact Match';
                    break;
                case 'regexmatch':
                    $label = 'RegEx Match';
                    break;
            }

            return $label;
        },
        urlFormatter(value) {
            if (value === '') {
                return '';
            }
            return `
            <a class="go" href="${value}" title="${value}" target="_blank" rel="noopener">${value}</a>
            `;
        },
        editUrlFormatter(value) {
            if (value === '') {
                return '';
            }
            return `
            <a class="go" href="${value}" title="${value}">${value}</a>
            `;
        },
        deleteRedirectFormatter(value) {
            if (value == 1) {
                return `
            <a class="delete icon" href="retour/add" title="Delete"></a>
            `;
            }
            return '';
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetableFilterBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/VuetableFilterBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            filterText: ''
        };
    },
    methods: {
        doFilter() {
            this.$events.fire('filter-set', this.filterText);
        },
        resetFilter() {
            this.filterText = '';
            this.$events.fire('filter-reset');
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuetablePaginationInfoMixin_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuetablePaginationInfoMixin.vue */ "./src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue");
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_VuetablePaginationInfoMixin_vue__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
          infoClass: 'left floated left aligned six wide column'
        };
      }
    },
    infoTemplate: {
      type: String,
      default() {
        return "Displaying {from} to {to} of {total} items";
      }
    },
    noDataTemplate: {
      type: String,
      default() {
        return 'No relevant data';
      }
    }
  },
  data: function data() {
    return {
      tablePagination: null
    };
  },
  computed: {
    paginationInfo() {
      if (this.tablePagination == null || this.tablePagination.total == 0) {
        return this.noDataTemplate;
      }

      return this.infoTemplate.replace('{from}', this.tablePagination.from || 0).replace('{to}', this.tablePagination.to || 0).replace('{total}', this.tablePagination.total || 0);
    }
  },
  methods: {
    setPaginationData(tablePagination) {
      this.tablePagination = tablePagination;
    },
    resetData() {
      this.tablePagination = null;
    }
  }
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
          wrapperClass: 'vuetable pagination float-right py-4',
          activeClass: 'active large',
          disabledClass: 'disabled',
          pageClass: 'item p-3 bg-grey-lightest',
          linkClass: 'item p-3 bg-grey-lightest',
          paginationClass: 'ui bottom attached segment grid',
          paginationInfoClass: 'left floated left aligned six wide column',
          dropdownClass: 'ui search dropdown',
          icons: {
            first: '',
            prev: '',
            next: '',
            last: ''
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/WidgetChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/WidgetChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//


const chartDataBaseUrl = '/retour/charts/widget/';

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
        days: String
    },
    methods: {
        // Load in our chart data asynchronously
        getSeriesData: async function getSeriesData() {
            const axios = await __webpack_require__.e(/*! import() | axios */ "vendors~axios").then(__webpack_require__.t.bind(null, /*! axios */ "./node_modules/axios/index.js", 7));
            const chartsAPI = axios.create(configureApi(chartDataBaseUrl));
            await queryApi(chartsAPI, this.days, data => {
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
                    id: 'vuechart-widget',
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#008FFB', '#DCE6EC'],
                labels: ['404 hits', '404 hits handled'],
                title: {
                    text: this.title,
                    offsetX: 0,
                    style: {
                        fontSize: '24px',
                        cssClass: 'apexcharts-yaxis-title'
                    }
                },
                subtitle: {
                    text: this.subTitle + ` ${this.days} days.`,
                    offsetX: 0,
                    style: {
                        fontSize: '14px',
                        cssClass: 'apexcharts-yaxis-title'
                    }
                }
            },
            series: [50, 50]
        };
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
    { staticClass: "py-4" },
    [
      _c("vuetable-filter-bar"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vuetable-pagination" },
        [
          _c("vuetable-pagination-info", { ref: "paginationInfoTop" }),
          _vm._v(" "),
          _c("vuetable-pagination", {
            ref: "paginationTop",
            on: { "vuetable-pagination:change-page": _vm.onChangePage }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("vuetable", {
        ref: "vuetable",
        attrs: {
          "api-url": "/retour/tables/dashboard",
          "per-page": 20,
          fields: _vm.fields,
          css: _vm.css,
          "append-params": _vm.moreParams
        },
        on: { "vuetable:pagination-data": _vm.onPaginationData }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vuetable-pagination" },
        [
          _c("vuetable-pagination-info", { ref: "paginationInfo" }),
          _vm._v(" "),
          _c("vuetable-pagination", {
            ref: "pagination",
            on: { "vuetable-pagination:change-page": _vm.onChangePage }
          })
        ],
        1
      )
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
    { staticClass: "py-4" },
    [
      _c("vuetable-filter-bar"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vuetable-pagination" },
        [
          _c("vuetable-pagination-info", { ref: "paginationInfoTop" }),
          _vm._v(" "),
          _c("vuetable-pagination", {
            ref: "paginationTop",
            on: { "vuetable-pagination:change-page": _vm.onChangePage }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("vuetable", {
        ref: "vuetable",
        attrs: {
          "api-url": "/retour/tables/redirects",
          "per-page": 20,
          fields: _vm.fields,
          css: _vm.css,
          "append-params": _vm.moreParams
        },
        on: { "vuetable:pagination-data": _vm.onPaginationData }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vuetable-pagination" },
        [
          _c("vuetable-pagination-info", { ref: "paginationInfo" }),
          _vm._v(" "),
          _c("vuetable-pagination", {
            ref: "pagination",
            on: { "vuetable-pagination:change-page": _vm.onChangePage }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetableFilterBar.vue?vue&type=template&id=24ba5d80&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/VuetableFilterBar.vue?vue&type=template&id=24ba5d80& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "filter-bar ui basic segment grid" }, [
    _c("div", { staticClass: "ui form" }, [
      _c("div", { staticClass: "inline field" }, [
        _c("label", [_vm._v("Search for:")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.filterText,
              expression: "filterText"
            }
          ],
          staticClass: "three wide column",
          attrs: { type: "text", placeholder: "" },
          domProps: { value: _vm.filterText },
          on: {
            keyup: _vm.doFilter,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.filterText = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn delete icon", on: { click: _vm.resetFilter } },
          [_vm._v("Reset")]
        )
      ])
    ])
  ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue?vue&type=template&id=0c0f799a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue?vue&type=template&id=0c0f799a& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {
    class: ["vuetable-pagination-info", _vm.css.infoClass],
    domProps: { innerHTML: _vm._s(_vm.paginationInfo) }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/WidgetChart.vue?vue&type=template&id=7c44b532&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/assetbundles/retour/src/vue/WidgetChart.vue?vue&type=template&id=7c44b532& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      height: "210px",
      type: "donut",
      options: _vm.chartOptions,
      series: _vm.series
    }
  })
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

/***/ "./src/assetbundles/retour/src/vue/VuetableFilterBar.vue":
/*!***************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetableFilterBar.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuetableFilterBar_vue_vue_type_template_id_24ba5d80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuetableFilterBar.vue?vue&type=template&id=24ba5d80& */ "./src/assetbundles/retour/src/vue/VuetableFilterBar.vue?vue&type=template&id=24ba5d80&");
/* harmony import */ var _VuetableFilterBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VuetableFilterBar.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/VuetableFilterBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VuetableFilterBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VuetableFilterBar_vue_vue_type_template_id_24ba5d80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VuetableFilterBar_vue_vue_type_template_id_24ba5d80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/VuetableFilterBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetableFilterBar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetableFilterBar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetableFilterBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VuetableFilterBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetableFilterBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetableFilterBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetableFilterBar.vue?vue&type=template&id=24ba5d80&":
/*!**********************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetableFilterBar.vue?vue&type=template&id=24ba5d80& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetableFilterBar_vue_vue_type_template_id_24ba5d80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VuetableFilterBar.vue?vue&type=template&id=24ba5d80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetableFilterBar.vue?vue&type=template&id=24ba5d80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetableFilterBar_vue_vue_type_template_id_24ba5d80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetableFilterBar_vue_vue_type_template_id_24ba5d80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue":
/*!********************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuetablePaginationInfo_vue_vue_type_template_id_0c0f799a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuetablePaginationInfo.vue?vue&type=template&id=0c0f799a& */ "./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue?vue&type=template&id=0c0f799a&");
/* harmony import */ var _VuetablePaginationInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VuetablePaginationInfo.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VuetablePaginationInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VuetablePaginationInfo_vue_vue_type_template_id_0c0f799a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VuetablePaginationInfo_vue_vue_type_template_id_0c0f799a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePaginationInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VuetablePaginationInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePaginationInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue?vue&type=template&id=0c0f799a&":
/*!***************************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue?vue&type=template&id=0c0f799a& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePaginationInfo_vue_vue_type_template_id_0c0f799a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VuetablePaginationInfo.vue?vue&type=template&id=0c0f799a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePaginationInfo.vue?vue&type=template&id=0c0f799a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePaginationInfo_vue_vue_type_template_id_0c0f799a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePaginationInfo_vue_vue_type_template_id_0c0f799a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue":
/*!*************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuetablePaginationInfoMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuetablePaginationInfoMixin.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _VuetablePaginationInfoMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePaginationInfoMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VuetablePaginationInfoMixin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/VuetablePaginationInfoMixin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetablePaginationInfoMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/WidgetChart.vue":
/*!*********************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/WidgetChart.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WidgetChart_vue_vue_type_template_id_7c44b532___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WidgetChart.vue?vue&type=template&id=7c44b532& */ "./src/assetbundles/retour/src/vue/WidgetChart.vue?vue&type=template&id=7c44b532&");
/* harmony import */ var _WidgetChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WidgetChart.vue?vue&type=script&lang=js& */ "./src/assetbundles/retour/src/vue/WidgetChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WidgetChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WidgetChart_vue_vue_type_template_id_7c44b532___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WidgetChart_vue_vue_type_template_id_7c44b532___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/assetbundles/retour/src/vue/WidgetChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/WidgetChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/WidgetChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WidgetChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/WidgetChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/assetbundles/retour/src/vue/WidgetChart.vue?vue&type=template&id=7c44b532&":
/*!****************************************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/WidgetChart.vue?vue&type=template&id=7c44b532& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetChart_vue_vue_type_template_id_7c44b532___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WidgetChart.vue?vue&type=template&id=7c44b532& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/assetbundles/retour/src/vue/WidgetChart.vue?vue&type=template&id=7c44b532&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetChart_vue_vue_type_template_id_7c44b532___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetChart_vue_vue_type_template_id_7c44b532___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9Db25mZXR0aS52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkQ2hhcnQudnVlIiwid2VicGFjazovLy9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0Rhc2hib2FyZFRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9SZWRpcmVjdHNUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVGaWx0ZXJCYXIudnVlIiwid2VicGFjazovLy9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVQYWdpbmF0aW9uSW5mb01peGluLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9WdWV0YWJsZVBhZ2luYXRpb25NaXhpbi52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvV2lkZ2V0Q2hhcnQudnVlIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlPzJhOTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9Db25mZXR0aS52dWU/NjViYSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0Rhc2hib2FyZENoYXJ0LnZ1ZT84NWNjIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkVGFibGUudnVlP2Y1MWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9SZWRpcmVjdHNUYWJsZS52dWU/OGQzYiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlRmlsdGVyQmFyLnZ1ZT81MGMzIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVQYWdpbmF0aW9uLnZ1ZT9hYjRkIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWU/NWZiYSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1dpZGdldENoYXJ0LnZ1ZT8zMWIzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWU/NDVkMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWU/ZWUzNSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0NvbmZldHRpLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0NvbmZldHRpLnZ1ZT9jZjIzIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkQ2hhcnQudnVlIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkQ2hhcnQudnVlP2JiNTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9EYXNoYm9hcmRUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9EYXNoYm9hcmRUYWJsZS52dWU/MmY0NiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1JlZGlyZWN0c1RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1JlZGlyZWN0c1RhYmxlLnZ1ZT9iYmViIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVGaWx0ZXJCYXIudnVlIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVGaWx0ZXJCYXIudnVlPzM2NTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9WdWV0YWJsZVBhZ2luYXRpb24udnVlIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVQYWdpbmF0aW9uLnZ1ZT81YjI5Iiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9WdWV0YWJsZVBhZ2luYXRpb25JbmZvLnZ1ZT9kYzg0Iiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvVnVldGFibGVQYWdpbmF0aW9uSW5mb01peGluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm9NaXhpbi52dWU/ZjMyYSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZT80YzY1Iiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvV2lkZ2V0Q2hhcnQudnVlIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvV2lkZ2V0Q2hhcnQudnVlPzgzMmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUEsSUFGQTtBQUdBLEtBTkE7QUFPQTtBQVBBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxDQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFNQSxDQVBBO0FBUUE7QUFDQTtBQUNBLGlCQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FOQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLENBVkE7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFEQSxLQURBO0FBSUE7QUFDQSxxQkFEQTtBQUVBLHdCQUZBO0FBR0E7QUFIQSxLQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBVEE7QUFVQTtBQWZBLEtBVEE7QUEwQkE7QUFDQTtBQUNBLEtBNUJBO0FBNkJBO0FBQ0E7QUFDQTtBQUNB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3dSQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbks7QUFDbEM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFpQkE7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7Ozs7Ozt3Q0N0Q2tNLHFQQUFvQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXBMO0FBQ2xDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBaUJBO0FBQ0E7QUFDQSxnRjs7Ozs7Ozs7Ozs7Ozs7d0NDdEN3TSwyUEFBb0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ExTDtBQUNsQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQWlCQTtBQUNBO0FBQ0EsZ0Y7Ozs7Ozs7Ozs7Ozs7O3dDQ3RDd00sMlBBQW9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMUw7QUFDbEM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFpQkE7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7Ozs7Ozt3Q0N0Q3dNLDJQQUFvQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTFMO0FBQ2xDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBaUJBO0FBQ0E7QUFDQSxnRjs7Ozs7Ozs7Ozs7Ozs7d0NDdEMyTSw4UEFBb0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E3TDtBQUNsQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQWlCQTtBQUNBO0FBQ0EsZ0Y7Ozs7Ozs7Ozs7Ozs7O3dDQ3RDNE0sK1BBQW9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOUw7QUFDbEM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFpQkE7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7Ozs7Ozt3Q0N0Q2dOLG1RQUFvQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0NBcE87QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBWUE7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7Ozs7Ozt3Q0NqQ3FOLHdRQUFvQixDOzs7Ozs7Ozs7Ozs7Ozt3Q0NBek87QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBWUE7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7Ozs7Ozt3Q0NqQ2lOLG9RQUFvQixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW5NO0FBQ2xDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBaUJBO0FBQ0E7QUFDQSxnRjs7Ozs7Ozs7Ozs7Ozs7d0NDdENxTSx3UEFBb0IsQyIsImZpbGUiOiJqcy9zdHlsZXMuNzg1ZmQwOWVmOGMwMWVlZWM4YTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPG1haW4+XG4gICAgPC9tYWluPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbiAgICBpbXBvcnQgVnVlQ29uZmV0dGkgZnJvbSAndnVlLWNvbmZldHRpJ1xuXG4gICAgVnVlLnVzZShWdWVDb25mZXR0aSk7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy4kY29uZmV0dGkuc3RhcnQoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbmZldHRpLnN0b3AoKTtcbiAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8YXBleGNoYXJ0cyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIyMDBweFwiIHR5cGU9XCJhcmVhXCIgOm9wdGlvbnM9XCJjaGFydE9wdGlvbnNcIiA6c2VyaWVzPVwic2VyaWVzXCI+PC9hcGV4Y2hhcnRzPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuICAgIGNvbnN0IGNoYXJ0RGF0YUJhc2VVcmwgPSAnL3JldG91ci9jaGFydHMvZGFzaGJvYXJkLyc7XG5cbiAgICAvLyBHZXQgdGhlIGxhcmdlc3QgbnVtYmVyIGZyb20gdGhlIHBhc3NlZCBpbiBhcnJheXNcbiAgICBjb25zdCBsYXJnZXN0TnVtYmVyID0gKG1haW5BcnJheSkgPT4ge1xuICAgICAgICByZXR1cm4gbWFpbkFycmF5Lm1hcChmdW5jdGlvbihzdWJBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIHN1YkFycmF5KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIENvbmZpZ3VyZSB0aGUgYXBpIGVuZHBvaW50XG4gICAgY29uc3QgY29uZmlndXJlQXBpID0gKHVybCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFzZVVSTDogdXJsLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLy8gUXVlcnkgb3VyIEFQSSBlbmRwb2ludCB2aWEgYW4gWEhSIEdFVFxuICAgIGNvbnN0IHF1ZXJ5QXBpID0gKGFwaSwgdXJpLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICBhcGkuZ2V0KHVyaVxuICAgICAgICApLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgLy8gT3VyIGNvbXBvbmVudCBleHBvcnRzXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnYXBleGNoYXJ0cyc6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFwZXhjaGFydHNcIiAqLyAndnVlLWFwZXhjaGFydHMnKVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgICAgICAgIHN1YlRpdGxlOiBTdHJpbmcsXG4gICAgICAgICAgICByYW5nZTogU3RyaW5nLFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAvLyBMb2FkIGluIG91ciBjaGFydCBkYXRhIGFzeW5jaHJvbm91c2x5XG4gICAgICAgICAgICBnZXRTZXJpZXNEYXRhOiBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvcyA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImF4aW9zXCIgKi8gJ2F4aW9zJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhcnRzQVBJID0gYXhpb3MuY3JlYXRlKGNvbmZpZ3VyZUFwaShjaGFydERhdGFCYXNlVXJsKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgcXVlcnlBcGkoY2hhcnRzQVBJLCB0aGlzLnJhbmdlLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgY2hhcnRPcHRpb25zIG9iamVjdCwgYW5kIHJlcGxhY2UgdGhlIG5lZWRlZCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY2hhcnRPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy55YXhpcy5tYXggPSBNYXRoLnJvdW5kKGxhcmdlc3ROdW1iZXIoW2RhdGFbMF1bJ2RhdGEnXV0pWzBdICsgMS41KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMubGFiZWxzID0gZGF0YVswXVsnbGFiZWxzJ107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmllcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRTZXJpZXNEYXRhKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAndnVlY2hhcnQtZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFya2xpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzAwOEZGQicsICcjRENFNkVDJ10sXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6ICdzdHJhaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcm9zc2hhaXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogW10sXG4gICAgICAgICAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FwZXhjaGFydHMteWF4aXMtdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnN1YlRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FwZXhjaGFydHMteWF4aXMtdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlcmllczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogWzBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJweS00XCI+XG4gICAgICAgIDx2dWV0YWJsZS1maWx0ZXItYmFyPjwvdnVldGFibGUtZmlsdGVyLWJhcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZ1ZXRhYmxlLXBhZ2luYXRpb25cIj5cbiAgICAgICAgICAgIDx2dWV0YWJsZS1wYWdpbmF0aW9uLWluZm8gcmVmPVwicGFnaW5hdGlvbkluZm9Ub3BcIlxuICAgICAgICAgICAgPjwvdnVldGFibGUtcGFnaW5hdGlvbi1pbmZvPlxuICAgICAgICAgICAgPHZ1ZXRhYmxlLXBhZ2luYXRpb24gcmVmPVwicGFnaW5hdGlvblRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdnVldGFibGUtcGFnaW5hdGlvbjpjaGFuZ2UtcGFnZT1cIm9uQ2hhbmdlUGFnZVwiXG4gICAgICAgICAgICA+PC92dWV0YWJsZS1wYWdpbmF0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHZ1ZXRhYmxlIHJlZj1cInZ1ZXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgIGFwaS11cmw9XCIvcmV0b3VyL3RhYmxlcy9kYXNoYm9hcmRcIlxuICAgICAgICAgICAgICAgICAgOnBlci1wYWdlPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgOmZpZWxkcz1cImZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICA6Y3NzPVwiY3NzXCJcbiAgICAgICAgICAgICAgICAgIDphcHBlbmQtcGFyYW1zPVwibW9yZVBhcmFtc1wiXG4gICAgICAgICAgICAgICAgICBAdnVldGFibGU6cGFnaW5hdGlvbi1kYXRhPVwib25QYWdpbmF0aW9uRGF0YVwiXG4gICAgICAgID48L3Z1ZXRhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidnVldGFibGUtcGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPHZ1ZXRhYmxlLXBhZ2luYXRpb24taW5mbyByZWY9XCJwYWdpbmF0aW9uSW5mb1wiXG4gICAgICAgICAgICA+PC92dWV0YWJsZS1wYWdpbmF0aW9uLWluZm8+XG4gICAgICAgICAgICA8dnVldGFibGUtcGFnaW5hdGlvbiByZWY9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB2dWV0YWJsZS1wYWdpbmF0aW9uOmNoYW5nZS1wYWdlPVwib25DaGFuZ2VQYWdlXCJcbiAgICAgICAgICAgID48L3Z1ZXRhYmxlLXBhZ2luYXRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRmllbGREZWZzIGZyb20gJy4vRGFzaGJvYXJkRmllbGREZWZzLmpzJ1xuICAgIC8vIE91ciBjb21wb25lbnQgZXhwb3J0c1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3Z1ZXRhYmxlJzogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidnVldGFibGVcIiAqLyAndnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWUnKSxcbiAgICAgICAgICAgICd2dWV0YWJsZS1wYWdpbmF0aW9uJzogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidnVldGFibGUtcGFnaW5hdGlvblwiICovICcuL1Z1ZXRhYmxlUGFnaW5hdGlvbi52dWUnKSxcbiAgICAgICAgICAgICd2dWV0YWJsZS1wYWdpbmF0aW9uLWluZm8nOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ2dWV0YWJsZS1wYWdpbmF0aW9uLWluZm9cIiAqLyAnLi9WdWV0YWJsZVBhZ2luYXRpb25JbmZvLnZ1ZScpLFxuICAgICAgICAgICAgJ3Z1ZXRhYmxlLWZpbHRlci1iYXInOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ2dWV0YWJsZS1maWx0ZXItYmFyXCIgKi8gJy4vVnVldGFibGVGaWx0ZXJCYXIudnVlJyksXG4gICAgICAgIH0sXG4gICAgICAgIHByb3BzOiB7fSxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1vcmVQYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZUNsYXNzOiAnZGF0YSBmdWxsd2lkdGgnLFxuICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmdJY29uOiAnb3JkZXJlZCBhc2MnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjZW5kaW5nSWNvbjogJ29yZGVyZWQgZGVzYydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNvcnRPcmRlcjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2hpdENvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZDogJ2hpdENvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2Rlc2MnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGZpZWxkczogRmllbGREZWZzLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kZXZlbnRzLiRvbignZmlsdGVyLXNldCcsIGV2ZW50RGF0YSA9PiB0aGlzLm9uRmlsdGVyU2V0KGV2ZW50RGF0YSkpO1xuICAgICAgICAgICAgdGhpcy4kZXZlbnRzLiRvbignZmlsdGVyLXJlc2V0JywgZSA9PiB0aGlzLm9uRmlsdGVyUmVzZXQoKSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uRmlsdGVyU2V0IChmaWx0ZXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3JlUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAnZmlsdGVyJzogZmlsdGVyVGV4dFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uRmlsdGVyU2V0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZXZlbnRzLmZpcmUoJ3JlZnJlc2gtdGFibGUnLCB0aGlzLiRyZWZzLnZ1ZXRhYmxlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkZpbHRlclJlc2V0ICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vcmVQYXJhbXMgPSB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLiRldmVudHMuZmlyZSgncmVmcmVzaC10YWJsZScsIHRoaXMuJHJlZnMudnVldGFibGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUGFnaW5hdGlvbkRhdGEgKHBhZ2luYXRpb25EYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wYWdpbmF0aW9uVG9wLnNldFBhZ2luYXRpb25EYXRhKHBhZ2luYXRpb25EYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBhZ2luYXRpb25JbmZvVG9wLnNldFBhZ2luYXRpb25EYXRhKHBhZ2luYXRpb25EYXRhKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGFnaW5hdGlvbi5zZXRQYWdpbmF0aW9uRGF0YShwYWdpbmF0aW9uRGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wYWdpbmF0aW9uSW5mby5zZXRQYWdpbmF0aW9uRGF0YShwYWdpbmF0aW9uRGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DaGFuZ2VQYWdlIChwYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy52dWV0YWJsZS5jaGFuZ2VQYWdlKHBhZ2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybEZvcm1hdHRlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZ29cIiBocmVmPVwiJHt2YWx1ZX1cIiB0aXRsZT1cIiR7dmFsdWV9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj4ke3ZhbHVlfTwvYT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvb2xGb3JtYXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IGdyZWVuO1wiPiYjeDI3MTQ7PC9zcGFuPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkO1wiPiYjeDI3MTY7PC9zcGFuPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkVXJsRm9ybWF0dGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImFkZCBpY29uXCIgaHJlZj1cInJldG91ci9hZGRcIiB0aXRsZT1cIkFkZFwiPjwvYT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicHktNFwiPlxuICAgICAgICA8dnVldGFibGUtZmlsdGVyLWJhcj48L3Z1ZXRhYmxlLWZpbHRlci1iYXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2dWV0YWJsZS1wYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICA8dnVldGFibGUtcGFnaW5hdGlvbi1pbmZvIHJlZj1cInBhZ2luYXRpb25JbmZvVG9wXCJcbiAgICAgICAgICAgID48L3Z1ZXRhYmxlLXBhZ2luYXRpb24taW5mbz5cbiAgICAgICAgICAgIDx2dWV0YWJsZS1wYWdpbmF0aW9uIHJlZj1cInBhZ2luYXRpb25Ub3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHZ1ZXRhYmxlLXBhZ2luYXRpb246Y2hhbmdlLXBhZ2U9XCJvbkNoYW5nZVBhZ2VcIlxuICAgICAgICAgICAgPjwvdnVldGFibGUtcGFnaW5hdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx2dWV0YWJsZSByZWY9XCJ2dWV0YWJsZVwiXG4gICAgICAgICAgICAgICAgICBhcGktdXJsPVwiL3JldG91ci90YWJsZXMvcmVkaXJlY3RzXCJcbiAgICAgICAgICAgICAgICAgIDpwZXItcGFnZT1cIjIwXCJcbiAgICAgICAgICAgICAgICAgIDpmaWVsZHM9XCJmaWVsZHNcIlxuICAgICAgICAgICAgICAgICAgOmNzcz1cImNzc1wiXG4gICAgICAgICAgICAgICAgICA6YXBwZW5kLXBhcmFtcz1cIm1vcmVQYXJhbXNcIlxuICAgICAgICAgICAgICAgICAgQHZ1ZXRhYmxlOnBhZ2luYXRpb24tZGF0YT1cIm9uUGFnaW5hdGlvbkRhdGFcIlxuICAgICAgICA+PC92dWV0YWJsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZ1ZXRhYmxlLXBhZ2luYXRpb25cIj5cbiAgICAgICAgICAgIDx2dWV0YWJsZS1wYWdpbmF0aW9uLWluZm8gcmVmPVwicGFnaW5hdGlvbkluZm9cIlxuICAgICAgICAgICAgPjwvdnVldGFibGUtcGFnaW5hdGlvbi1pbmZvPlxuICAgICAgICAgICAgPHZ1ZXRhYmxlLXBhZ2luYXRpb24gcmVmPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdnVldGFibGUtcGFnaW5hdGlvbjpjaGFuZ2UtcGFnZT1cIm9uQ2hhbmdlUGFnZVwiXG4gICAgICAgICAgICA+PC92dWV0YWJsZS1wYWdpbmF0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEZpZWxkRGVmcyBmcm9tICcuL1JlZGlyZWN0c0ZpZWxkRGVmcy5qcydcbiAgICAvLyBPdXIgY29tcG9uZW50IGV4cG9ydHNcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICd2dWV0YWJsZSc6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInZ1ZXRhYmxlXCIgKi8gJ3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlJyksXG4gICAgICAgICAgICAndnVldGFibGUtcGFnaW5hdGlvbic6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInZ1ZXRhYmxlLXBhZ2luYXRpb25cIiAqLyAnLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlJyksXG4gICAgICAgICAgICAndnVldGFibGUtcGFnaW5hdGlvbi1pbmZvJzogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidnVldGFibGUtcGFnaW5hdGlvbi1pbmZvXCIgKi8gJy4vVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWUnKSxcbiAgICAgICAgICAgICd2dWV0YWJsZS1maWx0ZXItYmFyJzogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidnVldGFibGUtZmlsdGVyLWJhclwiICovICcuL1Z1ZXRhYmxlRmlsdGVyQmFyLnZ1ZScpLFxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge30sXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtb3JlUGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGVDbGFzczogJ2RhdGEgZnVsbHdpZHRoJyxcbiAgICAgICAgICAgICAgICAgICAgYXNjZW5kaW5nSWNvbjogJ29yZGVyZWQgYXNjJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY2VuZGluZ0ljb246ICdvcmRlcmVkIGRlc2MnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzb3J0T3JkZXI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdoaXRDb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ6ICdoaXRDb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdkZXNjJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBmaWVsZHM6IEZpZWxkRGVmcyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGV2ZW50cy4kb24oJ2ZpbHRlci1zZXQnLCBldmVudERhdGEgPT4gdGhpcy5vbkZpbHRlclNldChldmVudERhdGEpKTtcbiAgICAgICAgICAgIHRoaXMuJGV2ZW50cy4kb24oJ2ZpbHRlci1yZXNldCcsIGUgPT4gdGhpcy5vbkZpbHRlclJlc2V0KCkpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvbkZpbHRlclNldCAoZmlsdGVyVGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9yZVBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZpbHRlcic6IGZpbHRlclRleHRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkZpbHRlclNldCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGV2ZW50cy5maXJlKCdyZWZyZXNoLXRhYmxlJywgdGhpcy4kcmVmcy52dWV0YWJsZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25GaWx0ZXJSZXNldCAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3JlUGFyYW1zID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy4kZXZlbnRzLmZpcmUoJ3JlZnJlc2gtdGFibGUnLCB0aGlzLiRyZWZzLnZ1ZXRhYmxlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblBhZ2luYXRpb25EYXRhIChwYWdpbmF0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGFnaW5hdGlvblRvcC5zZXRQYWdpbmF0aW9uRGF0YShwYWdpbmF0aW9uRGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wYWdpbmF0aW9uSW5mb1RvcC5zZXRQYWdpbmF0aW9uRGF0YShwYWdpbmF0aW9uRGF0YSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnBhZ2luYXRpb24uc2V0UGFnaW5hdGlvbkRhdGEocGFnaW5hdGlvbkRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMucGFnaW5hdGlvbkluZm8uc2V0UGFnaW5hdGlvbkRhdGEocGFnaW5hdGlvbkRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2hhbmdlUGFnZSAocGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMudnVldGFibGUuY2hhbmdlUGFnZShwYWdlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXRjaEZvcm1hdHRlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCAkbGFiZWwgPSAnUGx1aW5nIE1hdGNoJztcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2V4YWN0bWF0Y2gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgJGxhYmVsID0gJ0V4YWN0IE1hdGNoJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWdleG1hdGNoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICRsYWJlbCA9ICdSZWdFeCBNYXRjaCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJGxhYmVsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybEZvcm1hdHRlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZ29cIiBocmVmPVwiJHt2YWx1ZX1cIiB0aXRsZT1cIiR7dmFsdWV9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj4ke3ZhbHVlfTwvYT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVkaXRVcmxGb3JtYXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImdvXCIgaHJlZj1cIiR7dmFsdWV9XCIgdGl0bGU9XCIke3ZhbHVlfVwiPiR7dmFsdWV9PC9hPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlUmVkaXJlY3RGb3JtYXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZGVsZXRlIGljb25cIiBocmVmPVwicmV0b3VyL2FkZFwiIHRpdGxlPVwiRGVsZXRlXCI+PC9hPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItYmFyIHVpIGJhc2ljIHNlZ21lbnQgZ3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidWkgZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubGluZSBmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5TZWFyY2ggZm9yOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImZpbHRlclRleHRcIiBjbGFzcz1cInRocmVlIHdpZGUgY29sdW1uXCIgQGtleXVwPVwiZG9GaWx0ZXJcIiBwbGFjZWhvbGRlcj1cIlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gZGVsZXRlIGljb25cIiBAY2xpY2s9XCJyZXNldEZpbHRlclwiPlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZpbHRlclRleHQ6ICcnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBkb0ZpbHRlciAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZXZlbnRzLmZpcmUoJ2ZpbHRlci1zZXQnLCB0aGlzLmZpbHRlclRleHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc2V0RmlsdGVyICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclRleHQgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLiRldmVudHMuZmlyZSgnZmlsdGVyLXJlc2V0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHYtc2hvdz1cInRhYmxlUGFnaW5hdGlvbiAmJiB0YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlID4gMVwiIDpjbGFzcz1cImNzcy53cmFwcGVyQ2xhc3NcIj5cclxuICAgIDxhIEBjbGljaz1cImxvYWRQYWdlKDEpXCJcclxuICAgICAgOmNsYXNzPVwiWydidG4tbmF2JywgY3NzLmxpbmtDbGFzcywgaXNPbkZpcnN0UGFnZSA/IGNzcy5kaXNhYmxlZENsYXNzIDogJyddXCI+XHJcbiAgICAgICAgPGkgdi1pZj1cImNzcy5pY29ucy5maXJzdCAhPSAnJ1wiIDpjbGFzcz1cIltjc3MuaWNvbnMuZmlyc3RdXCI+PC9pPlxyXG4gICAgICAgIDxzcGFuIHYtZWxzZT4mbGFxdW87PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPGEgQGNsaWNrPVwibG9hZFBhZ2UoJ3ByZXYnKVwiXHJcbiAgICAgIDpjbGFzcz1cIlsnYnRuLW5hdicsIGNzcy5saW5rQ2xhc3MsIGlzT25GaXJzdFBhZ2UgPyBjc3MuZGlzYWJsZWRDbGFzcyA6ICcnXVwiPlxyXG4gICAgICAgIDxpIHYtaWY9XCJjc3MuaWNvbnMubmV4dCAhPSAnJ1wiIDpjbGFzcz1cIltjc3MuaWNvbnMucHJldl1cIj48L2k+XHJcbiAgICAgICAgPHNwYW4gdi1lbHNlPiZuYnNwOyZsc2FxdW87PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHRlbXBsYXRlIHYtaWY9XCJub3RFbm91Z2hQYWdlc1wiPlxyXG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCJuIGluIHRvdGFsUGFnZVwiPlxyXG4gICAgICAgIDxhIEBjbGljaz1cImxvYWRQYWdlKG4pXCJcclxuICAgICAgICAgIDpjbGFzcz1cIltjc3MucGFnZUNsYXNzLCBpc0N1cnJlbnRQYWdlKG4pID8gY3NzLmFjdGl2ZUNsYXNzIDogJyddXCJcclxuICAgICAgICAgIHYtaHRtbD1cIm5cIj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgPHRlbXBsYXRlIHYtZm9yPVwibiBpbiB3aW5kb3dTaXplXCI+XHJcbiAgICAgICAgPGEgQGNsaWNrPVwibG9hZFBhZ2Uod2luZG93U3RhcnQrbi0xKVwiXHJcbiAgICAgICAgICA6Y2xhc3M9XCJbY3NzLnBhZ2VDbGFzcywgaXNDdXJyZW50UGFnZSh3aW5kb3dTdGFydCtuLTEpID8gY3NzLmFjdGl2ZUNsYXNzIDogJyddXCJcclxuICAgICAgICAgIHYtaHRtbD1cIndpbmRvd1N0YXJ0K24tMVwiPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8YSBAY2xpY2s9XCJsb2FkUGFnZSgnbmV4dCcpXCJcclxuICAgICAgOmNsYXNzPVwiWydidG4tbmF2JywgY3NzLmxpbmtDbGFzcywgaXNPbkxhc3RQYWdlID8gY3NzLmRpc2FibGVkQ2xhc3MgOiAnJ11cIj5cclxuICAgICAgPGkgdi1pZj1cImNzcy5pY29ucy5uZXh0ICE9ICcnXCIgOmNsYXNzPVwiW2Nzcy5pY29ucy5uZXh0XVwiPjwvaT5cclxuICAgICAgPHNwYW4gdi1lbHNlPiZyc2FxdW87Jm5ic3A7PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPGEgQGNsaWNrPVwibG9hZFBhZ2UodG90YWxQYWdlKVwiXHJcbiAgICAgIDpjbGFzcz1cIlsnYnRuLW5hdicsIGNzcy5saW5rQ2xhc3MsIGlzT25MYXN0UGFnZSA/IGNzcy5kaXNhYmxlZENsYXNzIDogJyddXCI+XHJcbiAgICAgIDxpIHYtaWY9XCJjc3MuaWNvbnMubGFzdCAhPSAnJ1wiIDpjbGFzcz1cIltjc3MuaWNvbnMubGFzdF1cIj48L2k+XHJcbiAgICAgIDxzcGFuIHYtZWxzZT4mcmFxdW87PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFBhZ2luYXRpb25NaXhpbiBmcm9tICcuL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtaXhpbnM6IFtQYWdpbmF0aW9uTWl4aW5dLFxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXBhZ2luYXRpb24taW5mbycsIGNzcy5pbmZvQ2xhc3NdXCJcclxuICAgIHYtaHRtbD1cInBhZ2luYXRpb25JbmZvXCI+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgUGFnaW5hdGlvbkluZm9NaXhpbiBmcm9tICcuL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm9NaXhpbi52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbWl4aW5zOiBbUGFnaW5hdGlvbkluZm9NaXhpbl0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgY3NzOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaW5mb0NsYXNzOiAnbGVmdCBmbG9hdGVkIGxlZnQgYWxpZ25lZCBzaXggd2lkZSBjb2x1bW4nXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5mb1RlbXBsYXRlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdCgpIHtcclxuICAgICAgICByZXR1cm4gXCJEaXNwbGF5aW5nIHtmcm9tfSB0byB7dG99IG9mIHt0b3RhbH0gaXRlbXNcIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbm9EYXRhVGVtcGxhdGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0KCkge1xyXG4gICAgICAgIHJldHVybiAnTm8gcmVsZXZhbnQgZGF0YSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGFibGVQYWdpbmF0aW9uOiBudWxsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgcGFnaW5hdGlvbkluZm8gKCkge1xyXG4gICAgICBpZiAodGhpcy50YWJsZVBhZ2luYXRpb24gPT0gbnVsbCB8fCB0aGlzLnRhYmxlUGFnaW5hdGlvbi50b3RhbCA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9EYXRhVGVtcGxhdGVcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW5mb1RlbXBsYXRlXHJcbiAgICAgICAgLnJlcGxhY2UoJ3tmcm9tfScsIHRoaXMudGFibGVQYWdpbmF0aW9uLmZyb20gfHwgMClcclxuICAgICAgICAucmVwbGFjZSgne3RvfScsIHRoaXMudGFibGVQYWdpbmF0aW9uLnRvIHx8IDApXHJcbiAgICAgICAgLnJlcGxhY2UoJ3t0b3RhbH0nLCB0aGlzLnRhYmxlUGFnaW5hdGlvbi50b3RhbCB8fCAwKVxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNldFBhZ2luYXRpb25EYXRhICh0YWJsZVBhZ2luYXRpb24pIHtcclxuICAgICAgdGhpcy50YWJsZVBhZ2luYXRpb24gPSB0YWJsZVBhZ2luYXRpb25cclxuICAgIH0sXHJcbiAgICByZXNldERhdGEgKCkge1xyXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IG51bGxcclxuICAgIH1cclxuICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGNzczoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICd2dWV0YWJsZSBwYWdpbmF0aW9uIGZsb2F0LXJpZ2h0IHB5LTQnLFxyXG4gICAgICAgICAgYWN0aXZlQ2xhc3M6ICdhY3RpdmUgbGFyZ2UnLFxyXG4gICAgICAgICAgZGlzYWJsZWRDbGFzczogJ2Rpc2FibGVkJyxcclxuICAgICAgICAgIHBhZ2VDbGFzczogJ2l0ZW0gcC0zIGJnLWdyZXktbGlnaHRlc3QnLFxyXG4gICAgICAgICAgbGlua0NsYXNzOiAnaXRlbSBwLTMgYmctZ3JleS1saWdodGVzdCcsXHJcbiAgICAgICAgICBwYWdpbmF0aW9uQ2xhc3M6ICd1aSBib3R0b20gYXR0YWNoZWQgc2VnbWVudCBncmlkJyxcclxuICAgICAgICAgIHBhZ2luYXRpb25JbmZvQ2xhc3M6ICdsZWZ0IGZsb2F0ZWQgbGVmdCBhbGlnbmVkIHNpeCB3aWRlIGNvbHVtbicsXHJcbiAgICAgICAgICBkcm9wZG93bkNsYXNzOiAndWkgc2VhcmNoIGRyb3Bkb3duJyxcclxuICAgICAgICAgIGljb25zOiB7XHJcbiAgICAgICAgICAgIGZpcnN0OiAnJyxcclxuICAgICAgICAgICAgcHJldjogJycsXHJcbiAgICAgICAgICAgIG5leHQ6ICcnLFxyXG4gICAgICAgICAgICBsYXN0OiAnJyxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkVhY2hTaWRlOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXZlbnRQcmVmaXg6ICd2dWV0YWJsZS1wYWdpbmF0aW9uOicsXHJcbiAgICAgIHRhYmxlUGFnaW5hdGlvbjogbnVsbFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHRvdGFsUGFnZSAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9PT0gbnVsbFxyXG4gICAgICAgID8gMFxyXG4gICAgICAgIDogdGhpcy50YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlXHJcbiAgICB9LFxyXG4gICAgaXNPbkZpcnN0UGFnZSAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9PT0gbnVsbFxyXG4gICAgICAgID8gZmFsc2VcclxuICAgICAgICA6IHRoaXMudGFibGVQYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSA9PT0gMVxyXG4gICAgfSxcclxuICAgIGlzT25MYXN0UGFnZSAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9PT0gbnVsbFxyXG4gICAgICAgID8gZmFsc2VcclxuICAgICAgICA6IHRoaXMudGFibGVQYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSA9PT0gdGhpcy50YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlXHJcbiAgICB9LFxyXG4gICAgbm90RW5vdWdoUGFnZXMgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50b3RhbFBhZ2UgPCAodGhpcy5vbkVhY2hTaWRlICogMikgKyA0XHJcbiAgICB9LFxyXG4gICAgd2luZG93U2l6ZSAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9uRWFjaFNpZGUgKiAyICsxO1xyXG4gICAgfSxcclxuICAgIHdpbmRvd1N0YXJ0ICgpIHtcclxuICAgICAgaWYgKCF0aGlzLnRhYmxlUGFnaW5hdGlvbiB8fCB0aGlzLnRhYmxlUGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgPD0gdGhpcy5vbkVhY2hTaWRlKSB7XHJcbiAgICAgICAgcmV0dXJuIDFcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlUGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgPj0gKHRoaXMudG90YWxQYWdlIC0gdGhpcy5vbkVhY2hTaWRlKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsUGFnZSAtIHRoaXMub25FYWNoU2lkZSoyXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlUGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgLSB0aGlzLm9uRWFjaFNpZGVcclxuICAgIH0sXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBsb2FkUGFnZSAocGFnZSkge1xyXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXgrJ2NoYW5nZS1wYWdlJywgcGFnZSlcclxuICAgIH0sXHJcbiAgICBpc0N1cnJlbnRQYWdlIChwYWdlKSB7XHJcbiAgICAgIHJldHVybiBwYWdlID09PSB0aGlzLnRhYmxlUGFnaW5hdGlvbi5jdXJyZW50X3BhZ2VcclxuICAgIH0sXHJcbiAgICBzZXRQYWdpbmF0aW9uRGF0YSAodGFibGVQYWdpbmF0aW9uKSB7XHJcbiAgICAgIHRoaXMudGFibGVQYWdpbmF0aW9uID0gdGFibGVQYWdpbmF0aW9uXHJcbiAgICB9LFxyXG4gICAgcmVzZXREYXRhICgpIHtcclxuICAgICAgdGhpcy50YWJsZVBhZ2luYXRpb24gPSBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XG4gICAgPGFwZXhjaGFydHMgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMjEwcHhcIiB0eXBlPVwiZG9udXRcIiA6b3B0aW9ucz1cImNoYXJ0T3B0aW9uc1wiIDpzZXJpZXM9XCJzZXJpZXNcIj48L2FwZXhjaGFydHM+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gICAgY29uc3QgY2hhcnREYXRhQmFzZVVybCA9ICcvcmV0b3VyL2NoYXJ0cy93aWRnZXQvJztcblxuICAgIC8vIENvbmZpZ3VyZSB0aGUgYXBpIGVuZHBvaW50XG4gICAgY29uc3QgY29uZmlndXJlQXBpID0gKHVybCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFzZVVSTDogdXJsLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLy8gUXVlcnkgb3VyIEFQSSBlbmRwb2ludCB2aWEgYW4gWEhSIEdFVFxuICAgIGNvbnN0IHF1ZXJ5QXBpID0gKGFwaSwgdXJpLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICBhcGkuZ2V0KHVyaVxuICAgICAgICApLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgLy8gT3VyIGNvbXBvbmVudCBleHBvcnRzXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnYXBleGNoYXJ0cyc6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFwZXhjaGFydHNcIiAqLyAndnVlLWFwZXhjaGFydHMnKVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgICAgICAgIHN1YlRpdGxlOiBTdHJpbmcsXG4gICAgICAgICAgICBkYXlzOiBTdHJpbmcsXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC8vIExvYWQgaW4gb3VyIGNoYXJ0IGRhdGEgYXN5bmNocm9ub3VzbHlcbiAgICAgICAgICAgIGdldFNlcmllc0RhdGE6IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYXhpb3NcIiAqLyAnYXhpb3MnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFydHNBUEkgPSBheGlvcy5jcmVhdGUoY29uZmlndXJlQXBpKGNoYXJ0RGF0YUJhc2VVcmwpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBxdWVyeUFwaShjaGFydHNBUEksIHRoaXMuZGF5cywgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpZXMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VyaWVzRGF0YSgpO1xuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogJ3Z1ZWNoYXJ0LXdpZGdldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzAwOEZGQicsICcjRENFNkVDJ10sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJzQwNCBoaXRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc0MDQgaGl0cyBoYW5kbGVkJ1xuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhcGV4Y2hhcnRzLXlheGlzLXRpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5zdWJUaXRsZSArIGAgJHt0aGlzLmRheXN9IGRheXMuYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhcGV4Y2hhcnRzLXlheGlzLXRpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXJpZXM6IFs1MCwgNTBdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxyXG48ZGl2IHYtaWY9XCJpc0ZpeGVkSGVhZGVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInZ1ZXRhYmxlLWhlYWQtd3JhcHBlclwiPlxyXG4gICAgPHRhYmxlIDpjbGFzcz1cIlsndnVldGFibGUnLCBjc3MudGFibGVDbGFzcywgY3NzLnRhYmxlSGVhZGVyQ2xhc3NdXCI+XHJcbiAgICA8dGhlYWQ+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXCI+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZWxkLnZpc2libGVcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICAgIDx0aCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fY2hlY2tib3gnXCJcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtY2hlY2tib3gtJyt0cmFja0J5LCBmaWVsZC50aXRsZUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIEBjaGFuZ2U9XCJ0b2dnbGVBbGxDaGVja2JveGVzKGZpZWxkLm5hbWUsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cImNoZWNrQ2hlY2tib3hlc1N0YXRlKGZpZWxkLm5hbWUpXCI+XHJcbiAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NvbXBvbmVudCdcIlxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1jb21wb25lbnQtJyt0cmFja0J5LCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVwiXHJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwib3JkZXJCeShmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19zbG90J1wiXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLXNsb3QtJytleHRyYWN0QXJncyhmaWVsZC5uYW1lKSwgZmllbGQudGl0bGVDbGFzcywgc29ydENsYXNzKGZpZWxkKSwgeydzb3J0YWJsZSc6IGlzU29ydGFibGUoZmllbGQpfV1cIlxyXG4gICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cIm9yZGVyQnkoZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgID48L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2VxdWVuY2UnXCJcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtc2VxdWVuY2UnLCBmaWVsZC50aXRsZUNsYXNzIHx8ICcnXVwiIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIHYtaWY9XCJub3RJbihleHRyYWN0TmFtZShmaWVsZC5uYW1lKSwgWydfX3NlcXVlbmNlJywgJ19fY2hlY2tib3gnLCAnX19jb21wb25lbnQnLCAnX19zbG90J10pXCJcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtJytmaWVsZC5uYW1lLCBmaWVsZC50aXRsZUNsYXNzIHx8ICcnXVwiIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgPHRoIEBjbGljaz1cIm9yZGVyQnkoZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmlkPVwiJ18nICsgZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzcywgc29ydENsYXNzKGZpZWxkKSwgeydzb3J0YWJsZSc6IGlzU29ydGFibGUoZmllbGQpfV1cIlxyXG4gICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8dGggdi1pZj1cInNjcm9sbFZpc2libGVcIiA6c3R5bGU9XCJ7d2lkdGg6IHNjcm9sbEJhcldpZHRofVwiIGNsYXNzPVwidnVldGFibGUtZ3V0dGVyLWNvbFwiPjwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG4gICAgPC90YWJsZT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidnVldGFibGUtYm9keS13cmFwcGVyXCIgOnN0eWxlPVwie2hlaWdodDogdGFibGVIZWlnaHR9XCI+XHJcbiAgICA8dGFibGUgOmNsYXNzPVwiWyd2dWV0YWJsZScsIGNzcy50YWJsZUNsYXNzLCBjc3MudGFibGVCb2R5Q2xhc3NdXCI+XHJcbiAgICAgIDxjb2xncm91cD5cclxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXCI+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZWxkLnZpc2libGVcIj5cclxuICAgICAgICAgICAgPGNvbFxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6aWQ9XCInX2NvbF8nICsgZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtJytmaWVsZC5uYW1lLCBmaWVsZC50aXRsZUNsYXNzXVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgIDx0Ym9keSB2LWNsb2FrIGNsYXNzPVwidnVldGFibGUtYm9keVwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLCBpdGVtSW5kZXgpIGluIHRhYmxlRGF0YVwiPlxyXG4gICAgICAgICAgPHRyIFxyXG4gICAgICAgICAgICA6a2V5PVwiaXRlbUluZGV4XCJcclxuICAgICAgICAgICAgOml0ZW0taW5kZXg9XCJpdGVtSW5kZXhcIiBcclxuICAgICAgICAgICAgOnJlbmRlcj1cIm9uUm93Q2hhbmdlZChpdGVtKVwiIFxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJvblJvd0NsYXNzKGl0ZW0sIGl0ZW1JbmRleClcIlxyXG4gICAgICAgICAgICBAY2xpY2s9XCJvblJvd0NsaWNrZWQoaXRlbSwgJGV2ZW50KVwiIFxyXG4gICAgICAgICAgICBAZGJsY2xpY2s9XCJvblJvd0RvdWJsZUNsaWNrZWQoaXRlbSwgJGV2ZW50KVwiIFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWVsZC52aXNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2VxdWVuY2UnXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtc2VxdWVuY2UnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJTZXF1ZW5jZShpdGVtSW5kZXgpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19faGFuZGxlJ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLWhhbmRsZScsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlckljb25UYWcoWydoYW5kbGUtaWNvbicsIGNzcy5oYW5kbGVJY29uXSlcIlxyXG4gICAgICAgICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jaGVja2JveCdcIiBcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1jaGVja2JveGVzJywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ0b2dnbGVDaGVja2JveChpdGVtLCBmaWVsZC5uYW1lLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVwicm93U2VsZWN0ZWQoaXRlbSwgZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT0gJ19fY29tcG9uZW50J1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLWNvbXBvbmVudCcsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJleHRyYWN0QXJncyhmaWVsZC5uYW1lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6cm93LWRhdGE9XCJpdGVtXCIgOnJvdy1pbmRleD1cIml0ZW1JbmRleFwiIDpyb3ctZmllbGQ9XCJmaWVsZC5zb3J0RmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2NvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT0gJ19fc2xvdCdcIiBcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1zbG90JywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cImV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDpyb3ctZGF0YT1cIml0ZW1cIiA6cm93LWluZGV4PVwiaXRlbUluZGV4XCIgOnJvdy1maWVsZD1cImZpZWxkLnNvcnRGaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvc2xvdD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgOmNsYXNzPVwiZmllbGQuZGF0YUNsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyTm9ybWFsRmllbGQoZmllbGQsIGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkNlbGxDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICBAZGJsY2xpY2s9XCJvbkNlbGxEb3VibGVDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICBAY29udGV4dG1lbnU9XCJvbkNlbGxSaWdodENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInVzZURldGFpbFJvd1wiPlxyXG4gICAgICAgICAgICA8dHJhbnNpdGlvbiA6bmFtZT1cImRldGFpbFJvd1RyYW5zaXRpb25cIiA6a2V5PVwiaXRlbUluZGV4XCI+XHJcbiAgICAgICAgICAgICAgPHRyIHYtaWY9XCJpc1Zpc2libGVEZXRhaWxSb3coaXRlbVt0cmFja0J5XSlcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiW2Nzcy5kZXRhaWxSb3dDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwib25EZXRhaWxSb3dDbGljayhpdGVtLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dGQgOmNvbHNwYW49XCJjb3VudFZpc2libGVGaWVsZHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJkZXRhaWxSb3dDb21wb25lbnRcIiA6cm93LWRhdGE9XCJpdGVtXCIgOnJvdy1pbmRleD1cIml0ZW1JbmRleFwiPjwvY29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJkaXNwbGF5RW1wdHlEYXRhUm93XCI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCA6Y29sc3Bhbj1cImNvdW50VmlzaWJsZUZpZWxkc1wiIGNsYXNzPVwidnVldGFibGUtZW1wdHktcmVzdWx0XCIgdi1odG1sPVwibm9EYXRhVGVtcGxhdGVcIj48L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibGVzc1RoYW5NaW5Sb3dzXCI+XHJcbiAgICAgICAgICA8dHIgdi1mb3I9XCJpIGluIGJsYW5rUm93c1wiIGNsYXNzPVwiYmxhbmstcm93XCIgOmtleT1cImlcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZmllbGQudmlzaWJsZVwiIDprZXk9XCJmaWVsZEluZGV4XCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48dGFibGUgdi1lbHNlIDpjbGFzcz1cIlsndnVldGFibGUnLCBjc3MudGFibGVDbGFzc11cIj4gPCEtLSBubyBmaXhlZCBoZWFkZXIgLSByZWd1bGFyIHRhYmxlIC0tPlxyXG4gIDx0aGVhZD5cclxuICAgIDx0cj5cclxuICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1wiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZmllbGQudmlzaWJsZVwiPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NoZWNrYm94J1wiXHJcbiAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLWNoZWNrYm94LScrdHJhY2tCeSwgZmllbGQudGl0bGVDbGFzc11cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIEBjaGFuZ2U9XCJ0b2dnbGVBbGxDaGVja2JveGVzKGZpZWxkLm5hbWUsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJjaGVja0NoZWNrYm94ZXNTdGF0ZShmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NvbXBvbmVudCdcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1jb21wb25lbnQtJyt0cmFja0J5LCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVwiXHJcbiAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgICBAY2xpY2s9XCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgIDx0aCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2xvdCdcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1zbG90LScrZXh0cmFjdEFyZ3MoZmllbGQubmFtZSksIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksIHsnc29ydGFibGUnOiBpc1NvcnRhYmxlKGZpZWxkKX1dXCJcclxuICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIlxyXG4gICAgICAgICAgICAgIEBjbGljaz1cIm9yZGVyQnkoZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgPHRoIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19zZXF1ZW5jZSdcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1zZXF1ZW5jZScsIGZpZWxkLnRpdGxlQ2xhc3MgfHwgJycsIHNvcnRDbGFzcyhmaWVsZCldXCIgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgIDx0aCB2LWlmPVwibm90SW4oZXh0cmFjdE5hbWUoZmllbGQubmFtZSksIFsnX19zZXF1ZW5jZScsICdfX2NoZWNrYm94JywgJ19fY29tcG9uZW50JywgJ19fc2xvdCddKVwiXHJcbiAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzcyB8fCAnJywgc29ydENsYXNzKGZpZWxkKV1cIiB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIlxyXG4gICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICA8dGggQGNsaWNrPVwib3JkZXJCeShmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgIDppZD1cIidfJyArIGZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzcywgc29ydENsYXNzKGZpZWxkKSwgIHsnc29ydGFibGUnOiBpc1NvcnRhYmxlKGZpZWxkKX1dXCJcclxuICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIlxyXG4gICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHkgdi1jbG9hayBjbGFzcz1cInZ1ZXRhYmxlLWJvZHlcIj5cclxuICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLCBpdGVtSW5kZXgpIGluIHRhYmxlRGF0YVwiPlxyXG4gICAgICA8dHIgQGRibGNsaWNrPVwib25Sb3dEb3VibGVDbGlja2VkKGl0ZW0sICRldmVudClcIiBcclxuICAgICAgICA6a2V5PVwiaXRlbUluZGV4XCJcclxuICAgICAgICA6aXRlbS1pbmRleD1cIml0ZW1JbmRleFwiIFxyXG4gICAgICAgIDpyZW5kZXI9XCJvblJvd0NoYW5nZWQoaXRlbSlcIiBcclxuICAgICAgICA6Y2xhc3M9XCJvblJvd0NsYXNzKGl0ZW0sIGl0ZW1JbmRleClcIlxyXG4gICAgICAgIEBjbGljaz1cIm9uUm93Q2xpY2tlZChpdGVtLCAkZXZlbnQpXCIgXHJcbiAgICAgID5cclxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXCI+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZWxkLnZpc2libGVcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2VxdWVuY2UnXCIgXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXNlcXVlbmNlJywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJTZXF1ZW5jZShpdGVtSW5kZXgpXCJcclxuICAgICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2hhbmRsZSdcIiBcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtaGFuZGxlJywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJJY29uVGFnKFsnaGFuZGxlLWljb24nLCBjc3MuaGFuZGxlSWNvbl0pXCJcclxuICAgICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NoZWNrYm94J1wiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1jaGVja2JveGVzJywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ0b2dnbGVDaGVja2JveChpdGVtLCBmaWVsZC5uYW1lLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJyb3dTZWxlY3RlZChpdGVtLCBmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT0gJ19fY29tcG9uZW50J1wiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1jb21wb25lbnQnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpXCJcclxuICAgICAgICAgICAgICAgICAgOnJvdy1kYXRhPVwiaXRlbVwiIDpyb3ctaW5kZXg9XCJpdGVtSW5kZXhcIiA6cm93LWZpZWxkPVwiZmllbGQuc29ydEZpZWxkXCJcclxuICAgICAgICAgICAgICAgID48L2NvbXBvbmVudD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09ICdfX3Nsb3QnXCIgXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXNsb3QnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cImV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpXCJcclxuICAgICAgICAgICAgICAgICAgOnJvdy1kYXRhPVwiaXRlbVwiIDpyb3ctaW5kZXg9XCJpdGVtSW5kZXhcIiA6cm93LWZpZWxkPVwiZmllbGQuc29ydEZpZWxkXCJcclxuICAgICAgICAgICAgICAgID48L3Nsb3Q+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImhhc0NhbGxiYWNrKGZpZWxkKVwiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiZmllbGQuZGF0YUNsYXNzXCJcclxuICAgICAgICAgICAgICAgIHYtaHRtbD1cImNhbGxDYWxsYmFjayhmaWVsZCwgaXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwib25DZWxsQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBAZGJsY2xpY2s9XCJvbkNlbGxEb3VibGVDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIEBjb250ZXh0bWVudT1cIm9uQ2VsbFJpZ2h0Q2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtZWxzZSBcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cImZpZWxkLmRhdGFDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJnZXRPYmplY3RWYWx1ZShpdGVtLCBmaWVsZC5uYW1lLCAnJylcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwib25DZWxsQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBAZGJsY2xpY2s9XCJvbkNlbGxEb3VibGVDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIEBjb250ZXh0bWVudT1cIm9uQ2VsbFJpZ2h0Q2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwidXNlRGV0YWlsUm93XCI+XHJcbiAgICAgICAgPHRyYW5zaXRpb24gOm5hbWU9XCJkZXRhaWxSb3dUcmFuc2l0aW9uXCIgOmtleT1cIml0ZW1JbmRleFwiPlxyXG4gICAgICAgICAgPHRyIHYtaWY9XCJpc1Zpc2libGVEZXRhaWxSb3coaXRlbVt0cmFja0J5XSlcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJbY3NzLmRldGFpbFJvd0NsYXNzXVwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cIm9uRGV0YWlsUm93Q2xpY2soaXRlbSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZCA6Y29sc3Bhbj1cImNvdW50VmlzaWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiZGV0YWlsUm93Q29tcG9uZW50XCIgOnJvdy1kYXRhPVwiaXRlbVwiIDpyb3ctaW5kZXg9XCJpdGVtSW5kZXhcIj48L2NvbXBvbmVudD5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZGlzcGxheUVtcHR5RGF0YVJvd1wiPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkIDpjb2xzcGFuPVwiY291bnRWaXNpYmxlRmllbGRzXCIgY2xhc3M9XCJ2dWV0YWJsZS1lbXB0eS1yZXN1bHRcIiB2LWh0bWw9XCJub0RhdGFUZW1wbGF0ZVwiPjwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtaWY9XCJsZXNzVGhhbk1pblJvd3NcIj5cclxuICAgICAgPHRyIHYtZm9yPVwiaSBpbiBibGFua1Jvd3NcIiBjbGFzcz1cImJsYW5rLXJvd1wiIDprZXk9XCJpXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgPHRkIHYtaWY9XCJmaWVsZC52aXNpYmxlXCIgOmtleT1cImZpZWxkSW5kZXhcIj4mbmJzcDs8L3RkPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBsb2FkT25TdGFydDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYXBpVXJsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgaHR0cE1ldGhvZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnZ2V0JyxcclxuICAgICAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIFsnZ2V0JywgJ3Bvc3QnXS5pbmRleE9mKHZhbHVlKSA+IC0xXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlYWN0aXZlQXBpVXJsOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYXBpTW9kZToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0eXBlOiBbQXJyYXksIE9iamVjdF0sXHJcbiAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgIH0sXHJcbiAgICBkYXRhVG90YWw6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAwXHJcbiAgICB9LFxyXG4gICAgZGF0YU1hbmFnZXI6IHtcclxuICAgICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgIH0sXHJcbiAgICBkYXRhUGF0aDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnZGF0YSdcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uUGF0aDoge1xyXG4gICAgICAgIHR5cGU6IFtTdHJpbmddLFxyXG4gICAgICAgIGRlZmF1bHQ6ICdsaW5rcy5wYWdpbmF0aW9uJ1xyXG4gICAgfSxcclxuICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgIHR5cGU6IFtPYmplY3QsIEZ1bmN0aW9uXSxcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHNvcnQ6ICdzb3J0JyxcclxuICAgICAgICAgIHBhZ2U6ICdwYWdlJyxcclxuICAgICAgICAgIHBlclBhZ2U6ICdwZXJfcGFnZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhcHBlbmRQYXJhbXM6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4ge31cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGh0dHBPcHRpb25zOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBodHRwRmV0Y2g6IHtcclxuICAgICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgIH0sXHJcbiAgICBwZXJQYWdlOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIGRlZmF1bHQ6IDEwXHJcbiAgICB9LFxyXG4gICAgaW5pdGlhbFBhZ2U6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAxXHJcbiAgICB9LFxyXG4gICAgc29ydE9yZGVyOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG11bHRpU29ydDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRhYmxlSGVpZ2h0OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgfSxcclxuICAgIC8qXHJcbiAgICAgKiBwaHlzaWNhbCBrZXkgdGhhdCB3aWxsIHRyaWdnZXIgbXVsdGktc29ydCBvcHRpb25cclxuICAgICAqIHBvc3NpYmxlIHZhbHVlczogJ2FsdCcsICdjdHJsJywgJ21ldGEnLCAnc2hpZnQnXHJcbiAgICAgKiAnY3RybCcgbWlnaHQgbm90IHdvcmsgYXMgZXhwZWN0ZWQgb24gTWFjXHJcbiAgICAgKi9cclxuICAgIG11bHRpU29ydEtleToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdhbHQnXHJcbiAgICB9LFxyXG4gICAgLyogZGVwcmVjYXRlZCAqL1xyXG4gICAgcm93Q2xhc3NDYWxsYmFjazoge1xyXG4gICAgICB0eXBlOiBbU3RyaW5nLCBGdW5jdGlvbl0sXHJcbiAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgcm93Q2xhc3M6IHtcclxuICAgICAgdHlwZTogW1N0cmluZywgRnVuY3Rpb25dLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfSxcclxuICAgIGRldGFpbFJvd0NvbXBvbmVudDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgZGV0YWlsUm93VHJhbnNpdGlvbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgdHJhY2tCeToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdpZCdcclxuICAgIH0sXHJcbiAgICBjc3M6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGFibGVDbGFzczogJ3VpIGJsdWUgc2VsZWN0YWJsZSBjZWxsZWQgc3RhY2thYmxlIGF0dGFjaGVkIHRhYmxlJyxcclxuICAgICAgICAgIGxvYWRpbmdDbGFzczogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgYXNjZW5kaW5nSWNvbjogJ2JsdWUgY2hldnJvbiB1cCBpY29uJyxcclxuICAgICAgICAgIGRlc2NlbmRpbmdJY29uOiAnYmx1ZSBjaGV2cm9uIGRvd24gaWNvbicsXHJcbiAgICAgICAgICBhc2NlbmRpbmdDbGFzczogJ3NvcnRlZC1hc2MnLFxyXG4gICAgICAgICAgZGVzY2VuZGluZ0NsYXNzOiAnc29ydGVkLWRlc2MnLFxyXG4gICAgICAgICAgc29ydGFibGVJY29uOiAnJyxcclxuICAgICAgICAgIGRldGFpbFJvd0NsYXNzOiAndnVldGFibGUtZGV0YWlsLXJvdycsXHJcbiAgICAgICAgICBoYW5kbGVJY29uOiAnZ3JleSBzaWRlYmFyIGljb24nLFxyXG4gICAgICAgICAgdGFibGVCb2R5Q2xhc3M6ICd2dWV0YWJsZS1zZW1hbnRpYy1uby10b3AgdnVldGFibGUtZml4ZWQtbGF5b3V0JyxcclxuICAgICAgICAgIHRhYmxlSGVhZGVyQ2xhc3M6ICd2dWV0YWJsZS1maXhlZC1sYXlvdXQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWluUm93czoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDBcclxuICAgIH0sXHJcbiAgICBzaWxlbnQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBub0RhdGFUZW1wbGF0ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdObyBEYXRhIEF2YWlsYWJsZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dTb3J0SWNvbnM6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBldmVudFByZWZpeDogJ3Z1ZXRhYmxlOicsXHJcbiAgICAgIHRhYmxlRmllbGRzOiBbXSxcclxuICAgICAgdGFibGVEYXRhOiBudWxsLFxyXG4gICAgICB0YWJsZVBhZ2luYXRpb246IG51bGwsXHJcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmluaXRpYWxQYWdlLFxyXG4gICAgICBzZWxlY3RlZFRvOiBbXSxcclxuICAgICAgdmlzaWJsZURldGFpbFJvd3M6IFtdLFxyXG4gICAgICBsYXN0U2Nyb2xsUG9zaXRpb246IDAsXHJcbiAgICAgIHNjcm9sbEJhcldpZHRoOiAnMTdweCcsIC8vY2hyb21lIGRlZmF1bHRcclxuICAgICAgc2Nyb2xsVmlzaWJsZTogZmFsc2UsXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkICgpIHtcclxuICAgIHRoaXMubm9ybWFsaXplRmllbGRzKClcclxuICAgIHRoaXMubm9ybWFsaXplU29ydE9yZGVyKClcclxuICAgIGlmICh0aGlzLmlzRml4ZWRIZWFkZXIpIHtcclxuICAgICAgdGhpcy5zY3JvbGxCYXJXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsQmFyV2lkdGgoKSArICdweCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2luaXRpYWxpemVkJywgdGhpcy50YWJsZUZpZWxkcylcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKHRoaXMubG9hZE9uU3RhcnQpIHtcclxuICAgICAgdGhpcy5sb2FkRGF0YSgpXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0ZpeGVkSGVhZGVyKSB7XHJcbiAgICAgIGxldCBlbGVtID0gdGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndnVldGFibGUtYm9keS13cmFwcGVyJylbMF07XHJcbiAgICAgIGlmIChlbGVtICE9IG51bGwpIHtcclxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVzdHJveWVkICgpIHtcclxuICAgIGxldCBlbGVtID0gdGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndnVldGFibGUtYm9keS13cmFwcGVyJylbMF07XHJcbiAgICBpZiAoZWxlbSAhPSBudWxsKSB7XHJcbiAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHZlcnNpb246ICgpID0+IFZFUlNJT04sXHJcbiAgICB1c2VEZXRhaWxSb3cgKCkge1xyXG4gICAgICBpZiAodGhpcy50YWJsZURhdGEgJiYgdGhpcy50YWJsZURhdGFbMF0gJiYgdGhpcy5kZXRhaWxSb3dDb21wb25lbnQgIT09ICcnICYmIHR5cGVvZiB0aGlzLnRhYmxlRGF0YVswXVt0aGlzLnRyYWNrQnldID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRoaXMud2FybignWW91IG5lZWQgdG8gZGVmaW5lIHVuaXF1ZSByb3cgaWRlbnRpZmllciBpbiBvcmRlciBmb3IgZGV0YWlsLXJvdyBmZWF0dXJlIHRvIHdvcmsuIFVzZSBgdHJhY2stYnlgIHByb3AgdG8gZGVmaW5lIG9uZSEnKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5kZXRhaWxSb3dDb21wb25lbnQgIT09ICcnXHJcbiAgICB9LFxyXG4gICAgY291bnRWaXNpYmxlRmllbGRzICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVGaWVsZHMuZmlsdGVyKGZ1bmN0aW9uKGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkLnZpc2libGVcclxuICAgICAgfSkubGVuZ3RoXHJcbiAgICB9LFxyXG4gICAgY291bnRUYWJsZURhdGEgKCkge1xyXG4gICAgICBpZiAodGhpcy50YWJsZURhdGEgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlRGF0YS5sZW5ndGhcclxuICAgIH0sXHJcbiAgICBkaXNwbGF5RW1wdHlEYXRhUm93ICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY291bnRUYWJsZURhdGEgPT09IDAgJiYgdGhpcy5ub0RhdGFUZW1wbGF0ZS5sZW5ndGggPiAwXHJcbiAgICB9LFxyXG4gICAgbGVzc1RoYW5NaW5Sb3dzICgpIHtcclxuICAgICAgaWYgKHRoaXMudGFibGVEYXRhID09PSBudWxsIHx8IHRoaXMudGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVEYXRhLmxlbmd0aCA8IHRoaXMubWluUm93c1xyXG4gICAgfSxcclxuICAgIGJsYW5rUm93cyAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YSA9PT0gbnVsbCB8fCB0aGlzLnRhYmxlRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5taW5Sb3dzXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudGFibGVEYXRhLmxlbmd0aCA+PSB0aGlzLm1pblJvd3MpIHtcclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5taW5Sb3dzIC0gdGhpcy50YWJsZURhdGEubGVuZ3RoXHJcbiAgICB9LFxyXG4gICAgaXNBcGlNb2RlICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXBpTW9kZVxyXG4gICAgfSxcclxuICAgIGlzRGF0YU1vZGUgKCkge1xyXG4gICAgICByZXR1cm4gISB0aGlzLmFwaU1vZGVcclxuICAgIH0sXHJcbiAgICBpc0ZpeGVkSGVhZGVyICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVIZWlnaHQgIT0gbnVsbFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZ2V0U2Nyb2xsQmFyV2lkdGggKCkge1xyXG4gICAgICBjb25zdCBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICBvdXRlci5zdHlsZS53aWR0aCA9ICcxMDBweCc7XHJcblxyXG4gICAgICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuXHJcblxyXG4gICAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IHdpZHRoV2l0aG91dFNjcm9sbGJhciA9IG91dGVyLm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcclxuXHJcbiAgICAgIGNvbnN0IHdpZHRoV2l0aFNjcm9sbGJhciA9IGlubmVyLm9mZnNldFdpZHRoO1xyXG5cclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXIpO1xyXG5cclxuXHJcbiAgICAgIHJldHVybiAod2lkdGhXaXRob3V0U2Nyb2xsYmFyIC0gd2lkdGhXaXRoU2Nyb2xsYmFyKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVTY3JvbGwgKGUpIHsgLy9tYWtlIHN1cmUgdGhhdCB0aGUgaGVhZGVyIGFuZCB0aGUgYm9keSBhcmUgYWxpZ25lZCB3aGVuIHNjcm9sbGluZyBob3Jpem9udGFsbHkgb24gYSB0YWJsZSB0aGF0IGlzIHdpZGVyIHRoYW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgIGxldCBob3Jpem9udGFsID0gZS5jdXJyZW50VGFyZ2V0LnNjcm9sbExlZnQ7XHJcbiAgICAgIGlmIChob3Jpem9udGFsICE9IHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uKSB7IC8vZG9uJ3QgbW9kaWZ5IGhlYWRlciBzY3JvbGwgaWYgd2UgYXJlIHNjcm9sbGluZyB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Z1ZXRhYmxlLWhlYWQtd3JhcHBlcicpWzBdXHJcbiAgICAgICAgaWYgKGhlYWRlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICBoZWFkZXIuc2Nyb2xsTGVmdCA9IGhvcml6b250YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gaG9yaXpvbnRhbDtcclxuICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBub3JtYWxpemVGaWVsZHMgKCkge1xyXG4gICAgICBpZiAodHlwZW9mKHRoaXMuZmllbGRzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aGlzLndhcm4oJ1lvdSBuZWVkIHRvIHByb3ZpZGUgXCJmaWVsZHNcIiBwcm9wLicpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGFibGVGaWVsZHMgPSBbXVxyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgbGV0IG9ialxyXG4gICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uKGZpZWxkLCBpKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZmllbGQpID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBmaWVsZCxcclxuICAgICAgICAgICAgdGl0bGU6IHNlbGYuc2V0VGl0bGUoZmllbGQpLFxyXG4gICAgICAgICAgICB0aXRsZUNsYXNzOiAnJyxcclxuICAgICAgICAgICAgZGF0YUNsYXNzOiAnJyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgbmFtZTogZmllbGQubmFtZSxcclxuICAgICAgICAgICAgd2lkdGg6IGZpZWxkLndpZHRoLFxyXG4gICAgICAgICAgICB0aXRsZTogKGZpZWxkLnRpdGxlID09PSB1bmRlZmluZWQpID8gc2VsZi5zZXRUaXRsZShmaWVsZC5uYW1lKSA6IGZpZWxkLnRpdGxlLFxyXG4gICAgICAgICAgICBzb3J0RmllbGQ6IGZpZWxkLnNvcnRGaWVsZCxcclxuICAgICAgICAgICAgdGl0bGVDbGFzczogKGZpZWxkLnRpdGxlQ2xhc3MgPT09IHVuZGVmaW5lZCkgPyAnJyA6IGZpZWxkLnRpdGxlQ2xhc3MsXHJcbiAgICAgICAgICAgIGRhdGFDbGFzczogKGZpZWxkLmRhdGFDbGFzcyA9PT0gdW5kZWZpbmVkKSA/ICcnIDogZmllbGQuZGF0YUNsYXNzLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKGZpZWxkLmNhbGxiYWNrID09PSB1bmRlZmluZWQpID8gJycgOiBmaWVsZC5jYWxsYmFjayxcclxuICAgICAgICAgICAgdmlzaWJsZTogKGZpZWxkLnZpc2libGUgPT09IHVuZGVmaW5lZCkgPyB0cnVlIDogZmllbGQudmlzaWJsZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi50YWJsZUZpZWxkcy5wdXNoKG9iailcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzZXREYXRhIChkYXRhKSB7XHJcbiAgICAgIGlmIChkYXRhID09PSBudWxsIHx8IHR5cGVvZihkYXRhKSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxyXG5cclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWRpbmcnKVxyXG5cclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YSA9IGRhdGFcclxuICAgICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZGVkJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLmdldE9iamVjdFZhbHVlKGRhdGEsIHRoaXMuZGF0YVBhdGgsIG51bGwpXHJcbiAgICAgIHRoaXMudGFibGVQYWdpbmF0aW9uID0gdGhpcy5nZXRPYmplY3RWYWx1ZShkYXRhLCB0aGlzLnBhZ2luYXRpb25QYXRoLCBudWxsKVxyXG5cclxuICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5maXhIZWFkZXIoKVxyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdwYWdpbmF0aW9uLWRhdGEnLCB0aGlzLnRhYmxlUGFnaW5hdGlvbilcclxuICAgICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZGVkJylcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzZXRUaXRsZSAoc3RyKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzU3BlY2lhbEZpZWxkKHN0cikpIHtcclxuICAgICAgICByZXR1cm4gJydcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMudGl0bGVDYXNlKHN0cilcclxuICAgIH0sXHJcbiAgICBnZXRUaXRsZSAoZmllbGQpIHtcclxuICAgICAgaWYgKHR5cGVvZihmaWVsZC50aXRsZSkgPT09ICdmdW5jdGlvbicpIHJldHVybiBmaWVsZC50aXRsZSgpXHJcblxyXG4gICAgICByZXR1cm4gdHlwZW9mKGZpZWxkLnRpdGxlKSA9PT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICA/IGZpZWxkLm5hbWUucmVwbGFjZSgnLicsICcgJylcclxuICAgICAgICA6IGZpZWxkLnRpdGxlXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyVGl0bGUgKGZpZWxkKSB7XHJcbiAgICAgIGxldCB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoZmllbGQpXHJcblxyXG4gICAgICBpZiAodGl0bGUubGVuZ3RoID4gMCAmJiB0aGlzLmlzSW5DdXJyZW50U29ydEdyb3VwKGZpZWxkKSB8fCB0aGlzLmhhc1NvcnRhYmxlSWNvbihmaWVsZCkpIHtcclxuICAgICAgICBsZXQgc3R5bGUgPSBgb3BhY2l0eToke3RoaXMuc29ydEljb25PcGFjaXR5KGZpZWxkKX07cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6cmlnaHRgXHJcbiAgICAgICAgbGV0IGljb25UYWcgPSB0aGlzLnNob3dTb3J0SWNvbnMgPyB0aGlzLnJlbmRlckljb25UYWcoWydzb3J0LWljb24nLCB0aGlzLnNvcnRJY29uKGZpZWxkKV0sIGBzdHlsZT1cIiR7c3R5bGV9XCJgKSA6ICcnXHJcbiAgICAgICAgcmV0dXJuIHRpdGxlICsgJyAnICsgaWNvblRhZ1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGl0bGVcclxuICAgIH0sXHJcbiAgICByZW5kZXJTZXF1ZW5jZSAoaW5kZXgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVQYWdpbmF0aW9uXHJcbiAgICAgICAgPyB0aGlzLnRhYmxlUGFnaW5hdGlvbi5mcm9tICsgaW5kZXhcclxuICAgICAgICA6IGluZGV4XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTm9ybWFsRmllbGQgKGZpZWxkLCBpdGVtKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhc0NhbGxiYWNrKGZpZWxkKVxyXG4gICAgICAgID8gdGhpcy5jYWxsQ2FsbGJhY2soZmllbGQsIGl0ZW0pXHJcbiAgICAgICAgOiB0aGlzLmdldE9iamVjdFZhbHVlKGl0ZW0sIGZpZWxkLm5hbWUsICcnKVxyXG4gICAgfSxcclxuICAgIGlzU3BlY2lhbEZpZWxkIChmaWVsZE5hbWUpIHtcclxuICAgICAgcmV0dXJuIGZpZWxkTmFtZS5zbGljZSgwLCAyKSA9PT0gJ19fJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlQ2FzZSAoc3RyKSB7XHJcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx3Ky9nLCBmdW5jdGlvbih0eHQpIHtcclxuICAgICAgICByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY2FtZWxDYXNlIChzdHIsIGRlbGltaXRlciA9ICdfJykge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgcmV0dXJuIHN0ci5zcGxpdChkZWxpbWl0ZXIpLm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYudGl0bGVDYXNlKGl0ZW0pXHJcbiAgICAgIH0pLmpvaW4oJycpXHJcbiAgICB9LFxyXG4gICAgbm90SW4gKHN0ciwgYXJyKSB7XHJcbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihzdHIpID09PSAtMVxyXG4gICAgfSxcclxuICAgIGxvYWREYXRhIChzdWNjZXNzID0gdGhpcy5sb2FkU3VjY2VzcywgZmFpbGVkID0gdGhpcy5sb2FkRmFpbGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzRGF0YU1vZGUpIHtcclxuICAgICAgICB0aGlzLmNhbGxEYXRhTWFuYWdlcigpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkaW5nJylcclxuXHJcbiAgICAgIHRoaXMuaHR0cE9wdGlvbnNbJ3BhcmFtcyddID0gdGhpcy5nZXRBcHBlbmRQYXJhbXMoIHRoaXMuZ2V0QWxsUXVlcnlQYXJhbXMoKSApXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5mZXRjaCh0aGlzLmFwaVVybCwgdGhpcy5odHRwT3B0aW9ucykudGhlbihcclxuICAgICAgICAgIHN1Y2Nlc3MsXHJcbiAgICAgICAgICBmYWlsZWRcclxuICAgICAgKS5jYXRjaCgoKSA9PiBmYWlsZWQoKSlcclxuICAgIH0sXHJcbiAgICBmZXRjaCAoYXBpVXJsLCBodHRwT3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwRmV0Y2hcclxuICAgICAgICAgID8gdGhpcy5odHRwRmV0Y2goYXBpVXJsLCBodHRwT3B0aW9ucylcclxuICAgICAgICAgIDogYXhpb3NbdGhpcy5odHRwTWV0aG9kXShhcGlVcmwsIGh0dHBPcHRpb25zKVxyXG4gICAgfSxcclxuICAgIGxvYWRTdWNjZXNzIChyZXNwb25zZSkge1xyXG4gICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZC1zdWNjZXNzJywgcmVzcG9uc2UpXHJcblxyXG4gICAgICBsZXQgYm9keSA9IHRoaXMudHJhbnNmb3JtKHJlc3BvbnNlLmRhdGEpXHJcblxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoYm9keSwgdGhpcy5kYXRhUGF0aCwgbnVsbClcclxuICAgICAgdGhpcy50YWJsZVBhZ2luYXRpb24gPSB0aGlzLmdldE9iamVjdFZhbHVlKGJvZHksIHRoaXMucGFnaW5hdGlvblBhdGgsIG51bGwpXHJcblxyXG4gICAgICBpZiAodGhpcy50YWJsZVBhZ2luYXRpb24gPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLndhcm4oJ3Z1ZXRhYmxlOiBwYWdpbmF0aW9uLXBhdGggXCInICsgdGhpcy5wYWdpbmF0aW9uUGF0aCArICdcIiBub3QgZm91bmQuICdcclxuICAgICAgICAgICsgJ0l0IGxvb2tzIGxpa2UgdGhlIGRhdGEgcmV0dXJuZWQgZnJvbSB0aGUgc2V2ZXIgZG9lcyBub3QgaGF2ZSBwYWdpbmF0aW9uIGluZm9ybWF0aW9uICdcclxuICAgICAgICAgICsgXCJvciB5b3UgbWF5IGhhdmUgc2V0IGl0IGluY29ycmVjdGx5LlxcblwiXHJcbiAgICAgICAgICArICdZb3UgY2FuIGV4cGxpY2l0bHkgc3VwcHJlc3MgdGhpcyB3YXJuaW5nIGJ5IHNldHRpbmcgcGFnaW5hdGlvbi1wYXRoPVwiXCIuJ1xyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5maXhIZWFkZXIoKVxyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdwYWdpbmF0aW9uLWRhdGEnLCB0aGlzLnRhYmxlUGFnaW5hdGlvbilcclxuICAgICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZGVkJylcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBmaXhIZWFkZXIoKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc0ZpeGVkSGVhZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZWxlbSA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Z1ZXRhYmxlLWJvZHktd3JhcHBlcicpWzBdXHJcbiAgICAgIGlmIChlbGVtICE9IG51bGwpIHtcclxuICAgICAgICBpZiAoZWxlbS5zY3JvbGxIZWlnaHQgPiBlbGVtLmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsb2FkRmFpbGVkIChyZXNwb25zZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdsb2FkLWVycm9yJywgcmVzcG9uc2UpXHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkLWVycm9yJywgcmVzcG9uc2UpXHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkZWQnKVxyXG4gICAgfSxcclxuICAgIHRyYW5zZm9ybSAoZGF0YSkge1xyXG4gICAgICBsZXQgZnVuYyA9ICd0cmFuc2Zvcm0nXHJcblxyXG4gICAgICBpZiAodGhpcy5wYXJlbnRGdW5jdGlvbkV4aXN0cyhmdW5jKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudFtmdW5jXS5jYWxsKHRoaXMuJHBhcmVudCwgZGF0YSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRhdGFcclxuICAgIH0sXHJcbiAgICBwYXJlbnRGdW5jdGlvbkV4aXN0cyAoZnVuYykge1xyXG4gICAgICByZXR1cm4gKGZ1bmMgIT09ICcnICYmIHR5cGVvZiB0aGlzLiRwYXJlbnRbZnVuY10gPT09ICdmdW5jdGlvbicpXHJcbiAgICB9LFxyXG4gICAgY2FsbFBhcmVudEZ1bmN0aW9uIChmdW5jLCBhcmdzLCBkZWZhdWx0VmFsdWUgPSBudWxsKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmVudEZ1bmN0aW9uRXhpc3RzKGZ1bmMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudFtmdW5jXS5jYWxsKHRoaXMuJHBhcmVudCwgYXJncylcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gICAgfSxcclxuICAgIGZpcmVFdmVudCAoZXZlbnROYW1lLCBhcmdzKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArIGV2ZW50TmFtZSwgYXJncylcclxuICAgIH0sXHJcbiAgICB3YXJuIChtc2cpIHtcclxuICAgICAgaWYgKCF0aGlzLnNpbGVudCkge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybihtc2cpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRBbGxRdWVyeVBhcmFtcyAoKSB7XHJcbiAgICAgIGxldCBwYXJhbXMgPSB7fVxyXG5cclxuICAgICAgaWYgKHR5cGVvZih0aGlzLnF1ZXJ5UGFyYW1zKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHBhcmFtcyA9IHRoaXMucXVlcnlQYXJhbXModGhpcy5zb3J0T3JkZXIsIHRoaXMuY3VycmVudFBhZ2UsIHRoaXMucGVyUGFnZSlcclxuICAgICAgICByZXR1cm4gdHlwZW9mKHBhcmFtcykgIT09ICdvYmplY3QnID8ge30gOiBwYXJhbXNcclxuICAgICAgfVxyXG5cclxuICAgICAgcGFyYW1zW3RoaXMucXVlcnlQYXJhbXMuc29ydF0gPSB0aGlzLmdldFNvcnRQYXJhbSgpXHJcbiAgICAgIHBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1zLnBhZ2VdID0gdGhpcy5jdXJyZW50UGFnZVxyXG4gICAgICBwYXJhbXNbdGhpcy5xdWVyeVBhcmFtcy5wZXJQYWdlXSA9IHRoaXMucGVyUGFnZVxyXG5cclxuICAgICAgcmV0dXJuIHBhcmFtc1xyXG4gICAgfSxcclxuICAgIGdldFNvcnRQYXJhbSAoKSB7XHJcbiAgICAgIGlmICghdGhpcy5zb3J0T3JkZXIgfHwgdGhpcy5zb3J0T3JkZXIuZmllbGQgPT0gJycpIHtcclxuICAgICAgICByZXR1cm4gJydcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLiRwYXJlbnRbJ2dldFNvcnRQYXJhbSddID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudFsnZ2V0U29ydFBhcmFtJ10uY2FsbCh0aGlzLiRwYXJlbnQsIHRoaXMuc29ydE9yZGVyKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0U29ydFBhcmFtKClcclxuICAgIH0sXHJcbiAgICBnZXREZWZhdWx0U29ydFBhcmFtICgpIHtcclxuICAgICAgbGV0IHJlc3VsdCA9ICcnO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvcnRPcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBmaWVsZE5hbWUgPSAodHlwZW9mIHRoaXMuc29ydE9yZGVyW2ldLnNvcnRGaWVsZCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICA/IHRoaXMuc29ydE9yZGVyW2ldLmZpZWxkXHJcbiAgICAgICAgICA6IHRoaXMuc29ydE9yZGVyW2ldLnNvcnRGaWVsZDtcclxuXHJcbiAgICAgICAgcmVzdWx0ICs9IGZpZWxkTmFtZSArICd8JyArIHRoaXMuc29ydE9yZGVyW2ldLmRpcmVjdGlvbiArICgoaSsxKSA8IHRoaXMuc29ydE9yZGVyLmxlbmd0aCA/ICcsJyA6ICcnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuICAgIGdldEFwcGVuZFBhcmFtcyAocGFyYW1zKSB7XHJcbiAgICAgIGZvciAobGV0IHggaW4gdGhpcy5hcHBlbmRQYXJhbXMpIHtcclxuICAgICAgICBwYXJhbXNbeF0gPSB0aGlzLmFwcGVuZFBhcmFtc1t4XVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcGFyYW1zXHJcbiAgICB9LFxyXG4gICAgZXh0cmFjdE5hbWUgKHN0cmluZykge1xyXG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCc6JylbMF0udHJpbSgpXHJcbiAgICB9LFxyXG4gICAgZXh0cmFjdEFyZ3MgKHN0cmluZykge1xyXG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCc6JylbMV1cclxuICAgIH0sXHJcbiAgICBpc1NvcnRhYmxlIChmaWVsZCkge1xyXG4gICAgICByZXR1cm4gISh0eXBlb2YgZmllbGQuc29ydEZpZWxkID09PSAndW5kZWZpbmVkJylcclxuICAgIH0sXHJcbiAgICBpc0luQ3VycmVudFNvcnRHcm91cCAoZmllbGQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNvcnRPcmRlclBvc2l0aW9uKGZpZWxkKSAhPT0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgaGFzU29ydGFibGVJY29uIChmaWVsZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc1NvcnRhYmxlKGZpZWxkKSAmJiB0aGlzLmNzcy5zb3J0YWJsZUljb24gIT0gJydcclxuICAgIH0sXHJcbiAgICBjdXJyZW50U29ydE9yZGVyUG9zaXRpb24gKGZpZWxkKSB7XHJcbiAgICAgIGlmICggISB0aGlzLmlzU29ydGFibGUoZmllbGQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zb3J0T3JkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5maWVsZElzSW5Tb3J0T3JkZXJQb3NpdGlvbihmaWVsZCwgaSkpIHtcclxuICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGZpZWxkSXNJblNvcnRPcmRlclBvc2l0aW9uIChmaWVsZCwgaSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zb3J0T3JkZXJbaV0uZmllbGQgPT09IGZpZWxkLm5hbWUgJiYgdGhpcy5zb3J0T3JkZXJbaV0uc29ydEZpZWxkID09PSBmaWVsZC5zb3J0RmllbGRcclxuICAgIH0sXHJcbiAgICBvcmRlckJ5IChmaWVsZCwgZXZlbnQpIHtcclxuICAgICAgaWYgKCAhIHRoaXMuaXNTb3J0YWJsZShmaWVsZCkgKSByZXR1cm5cclxuXHJcbiAgICAgIGxldCBrZXkgPSB0aGlzLm11bHRpU29ydEtleS50b0xvd2VyQ2FzZSgpICsgJ0tleSdcclxuXHJcbiAgICAgIGlmICh0aGlzLm11bHRpU29ydCAmJiBldmVudFtrZXldKSB7IC8vYWRkaW5nIGNvbHVtbiB0byBtdWx0aXNvcnRcclxuICAgICAgICB0aGlzLm11bHRpQ29sdW1uU29ydChmaWVsZClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL25vIG11bHRpc29ydCwgb3IgcmVzZXR0aW5nIHNvcnRcclxuICAgICAgICB0aGlzLnNpbmdsZUNvbHVtblNvcnQoZmllbGQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxICAgIC8vIHJlc2V0IHBhZ2UgaW5kZXhcclxuICAgICAgaWYgKHRoaXMuYXBpTW9kZSB8fCB0aGlzLmRhdGFNYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtdWx0aUNvbHVtblNvcnQgKGZpZWxkKSB7XHJcbiAgICAgIGxldCBpID0gdGhpcy5jdXJyZW50U29ydE9yZGVyUG9zaXRpb24oZmllbGQpO1xyXG5cclxuICAgICAgaWYoaSA9PT0gZmFsc2UpIHsgLy90aGlzIGZpZWxkIGlzIG5vdCBpbiB0aGUgc29ydCBhcnJheSB5ZXRcclxuICAgICAgICB0aGlzLnNvcnRPcmRlci5wdXNoKHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZC5uYW1lLFxyXG4gICAgICAgICAgc29ydEZpZWxkOiBmaWVsZC5zb3J0RmllbGQsXHJcbiAgICAgICAgICBkaXJlY3Rpb246ICdhc2MnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7IC8vdGhpcyBmaWVsZCBpcyBpbiB0aGUgc29ydCBhcnJheSwgbm93IHdlIGNoYW5nZSBpdHMgc3RhdGVcclxuICAgICAgICBpZih0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gPT09ICdhc2MnKSB7XHJcbiAgICAgICAgICAvLyBzd2l0Y2ggZGlyZWN0aW9uXHJcbiAgICAgICAgICB0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gPSAnZGVzYydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9yZW1vdmUgc29ydCBjb25kaXRpb25cclxuICAgICAgICAgIHRoaXMuc29ydE9yZGVyLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaW5nbGVDb2x1bW5Tb3J0IChmaWVsZCkge1xyXG4gICAgICBpZiAodGhpcy5zb3J0T3JkZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclNvcnRPcmRlcigpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc29ydE9yZGVyLnNwbGljZSgxKTsgLy9yZW1vdmVzIGFkZGl0aW9uYWwgY29sdW1uc1xyXG5cclxuICAgICAgaWYgKHRoaXMuZmllbGRJc0luU29ydE9yZGVyUG9zaXRpb24oZmllbGQsIDApKSB7XHJcbiAgICAgICAgLy8gY2hhbmdlIHNvcnQgZGlyZWN0aW9uXHJcbiAgICAgICAgdGhpcy5zb3J0T3JkZXJbMF0uZGlyZWN0aW9uID0gdGhpcy5zb3J0T3JkZXJbMF0uZGlyZWN0aW9uID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcmVzZXQgc29ydCBkaXJlY3Rpb25cclxuICAgICAgICB0aGlzLnNvcnRPcmRlclswXS5kaXJlY3Rpb24gPSAnYXNjJ1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc29ydE9yZGVyWzBdLmZpZWxkID0gZmllbGQubmFtZVxyXG4gICAgICB0aGlzLnNvcnRPcmRlclswXS5zb3J0RmllbGQgPSBmaWVsZC5zb3J0RmllbGRcclxuICAgIH0sXHJcbiAgICBjbGVhclNvcnRPcmRlciAoKSB7XHJcbiAgICAgIHRoaXMuc29ydE9yZGVyLnB1c2goe1xyXG4gICAgICAgIGZpZWxkOiAnJyxcclxuICAgICAgICBzb3J0RmllbGQ6ICcnLFxyXG4gICAgICAgIGRpcmVjdGlvbjogJ2FzYydcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc29ydENsYXNzIChmaWVsZCkge1xyXG4gICAgICBsZXQgY2xzID0gJydcclxuICAgICAgbGV0IGkgPSB0aGlzLmN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbihmaWVsZClcclxuXHJcbiAgICAgIGlmIChpICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGNscyA9ICh0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gPT0gJ2FzYycpID8gdGhpcy5jc3MuYXNjZW5kaW5nQ2xhc3MgOiB0aGlzLmNzcy5kZXNjZW5kaW5nQ2xhc3NcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNsc1xyXG4gICAgfSxcclxuICAgIHNvcnRJY29uIChmaWVsZCkge1xyXG4gICAgICBsZXQgY2xzID0gdGhpcy5jc3Muc29ydGFibGVJY29uXHJcbiAgICAgIGxldCBpID0gdGhpcy5jdXJyZW50U29ydE9yZGVyUG9zaXRpb24oZmllbGQpXHJcblxyXG4gICAgICBpZiAoaSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBjbHMgPSAodGhpcy5zb3J0T3JkZXJbaV0uZGlyZWN0aW9uID09ICdhc2MnKSA/IHRoaXMuY3NzLmFzY2VuZGluZ0ljb24gOiB0aGlzLmNzcy5kZXNjZW5kaW5nSWNvblxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2xzO1xyXG4gICAgfSxcclxuICAgIHNvcnRJY29uT3BhY2l0eSAoZmllbGQpIHtcclxuICAgICAgLypcclxuICAgICAgICogZmllbGRzIHdpdGggc3Ryb25nZXIgcHJlY2VkZW5jZSBoYXZlIGRhcmtlciBjb2xvclxyXG4gICAgICAgKlxyXG4gICAgICAgKiBpZiB0aGVyZSBhcmUgZmV3IGZpZWxkcywgd2UgZ28gZG93biBieSAwLjNcclxuICAgICAgICogZXguIDIgZmllbGRzIGFyZSBzZWxlY3RlZDogMS4wLCAwLjdcclxuICAgICAgICpcclxuICAgICAgICogaWYgdGhlcmUgYXJlIG1vcmUgd2UgZ28gZG93biBldmVubHkgb24gdGhlIGdpdmVuIHNwZWN0cnVtXHJcbiAgICAgICAqIGV4LiA2IGZpZWxkcyBhcmUgc2VsZWN0ZWQ6IDEuMCwgMC44NiwgMC43MiwgMC41OCwgMC40NCwgMC4zXHJcbiAgICAgICAqL1xyXG4gICAgICBsZXQgbWF4ID0gMS4wLFxyXG4gICAgICAgICAgbWluID0gMC4zLFxyXG4gICAgICAgICAgc3RlcCA9IDAuM1xyXG5cclxuICAgICAgbGV0IGNvdW50ID0gdGhpcy5zb3J0T3JkZXIubGVuZ3RoO1xyXG4gICAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudFNvcnRPcmRlclBvc2l0aW9uKGZpZWxkKVxyXG5cclxuXHJcbiAgICAgIGlmKG1heCAtIGNvdW50ICogc3RlcCA8IG1pbikge1xyXG4gICAgICAgIHN0ZXAgPSAobWF4IC0gbWluKSAvIChjb3VudC0xKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgb3BhY2l0eSA9IG1heCAtIGN1cnJlbnQgKiBzdGVwXHJcblxyXG4gICAgICByZXR1cm4gb3BhY2l0eVxyXG4gICAgfSxcclxuICAgIGhhc0NhbGxiYWNrIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLmNhbGxiYWNrID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY2FsbENhbGxiYWNrIChmaWVsZCwgaXRlbSkge1xyXG4gICAgICBpZiAoICEgdGhpcy5oYXNDYWxsYmFjayhmaWVsZCkpIHJldHVyblxyXG5cclxuICAgICAgaWYodHlwZW9mKGZpZWxkLmNhbGxiYWNrKSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICByZXR1cm4gZmllbGQuY2FsbGJhY2sodGhpcy5nZXRPYmplY3RWYWx1ZShpdGVtLCBmaWVsZC5uYW1lKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGFyZ3MgPSBmaWVsZC5jYWxsYmFjay5zcGxpdCgnfCcpXHJcbiAgICAgIGxldCBmdW5jID0gYXJncy5zaGlmdCgpXHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuJHBhcmVudFtmdW5jXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoaXRlbSwgZmllbGQubmFtZSlcclxuXHJcbiAgICAgICAgcmV0dXJuIChhcmdzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICA/IHRoaXMuJHBhcmVudFtmdW5jXS5hcHBseSh0aGlzLiRwYXJlbnQsIFt2YWx1ZV0uY29uY2F0KGFyZ3MpKVxyXG4gICAgICAgICAgOiB0aGlzLiRwYXJlbnRbZnVuY10uY2FsbCh0aGlzLiRwYXJlbnQsIHZhbHVlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfSxcclxuICAgIGdldE9iamVjdFZhbHVlIChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICBkZWZhdWx0VmFsdWUgPSAodHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpID8gbnVsbCA6IGRlZmF1bHRWYWx1ZVxyXG5cclxuICAgICAgbGV0IG9iaiA9IG9iamVjdFxyXG4gICAgICBpZiAocGF0aC50cmltKCkgIT0gJycpIHtcclxuICAgICAgICBsZXQga2V5cyA9IHBhdGguc3BsaXQoJy4nKVxyXG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgIGlmIChvYmogIT09IG51bGwgJiYgdHlwZW9mIG9ialtrZXldICE9PSAndW5kZWZpbmVkJyAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBvYmogPSBvYmpba2V5XVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqID0gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9ialxyXG4gICAgfSxcclxuICAgIHRvZ2dsZUNoZWNrYm94IChkYXRhSXRlbSwgZmllbGROYW1lLCBldmVudCkge1xyXG4gICAgICBsZXQgaXNDaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWRcclxuICAgICAgbGV0IGlkQ29sdW1uID0gdGhpcy50cmFja0J5XHJcblxyXG4gICAgICBpZiAoZGF0YUl0ZW1baWRDb2x1bW5dID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLndhcm4oJ19fY2hlY2tib3ggZmllbGQ6IFRoZSBcIicrdGhpcy50cmFja0J5KydcIiBmaWVsZCBkb2VzIG5vdCBleGlzdCEgTWFrZSBzdXJlIHRoZSBmaWVsZCB5b3Ugc3BlY2lmeSBpbiBcInRyYWNrLWJ5XCIgcHJvcCBkb2VzIGV4aXN0LicpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBrZXkgPSBkYXRhSXRlbVtpZENvbHVtbl1cclxuICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0SWQoa2V5KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudW5zZWxlY3RJZChrZXkpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kZW1pdCgndnVldGFibGU6Y2hlY2tib3gtdG9nZ2xlZCcsIGlzQ2hlY2tlZCwgZGF0YUl0ZW0pXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0SWQgKGtleSkge1xyXG4gICAgICBpZiAoICEgdGhpcy5pc1NlbGVjdGVkUm93KGtleSkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVG8ucHVzaChrZXkpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1bnNlbGVjdElkIChrZXkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRvID0gdGhpcy5zZWxlY3RlZFRvLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGtleVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGlzU2VsZWN0ZWRSb3cgKGtleSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFRvLmluZGV4T2Yoa2V5KSA+PSAwXHJcbiAgICB9LFxyXG4gICAgcm93U2VsZWN0ZWQgKGRhdGFJdGVtLCBmaWVsZE5hbWUpe1xyXG4gICAgICBsZXQgaWRDb2x1bW4gPSB0aGlzLnRyYWNrQnlcclxuICAgICAgbGV0IGtleSA9IGRhdGFJdGVtW2lkQ29sdW1uXVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZFJvdyhrZXkpXHJcbiAgICB9LFxyXG4gICAgY2hlY2tDaGVja2JveGVzU3RhdGUgKGZpZWxkTmFtZSkge1xyXG4gICAgICBpZiAoISB0aGlzLnRhYmxlRGF0YSkgcmV0dXJuXHJcblxyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgbGV0IGlkQ29sdW1uID0gdGhpcy50cmFja0J5XHJcbiAgICAgIGxldCBzZWxlY3RvciA9ICd0aC52dWV0YWJsZS10aC1jaGVja2JveC0nICsgaWRDb2x1bW4gKyAnIGlucHV0W3R5cGU9Y2hlY2tib3hdJ1xyXG4gICAgICBsZXQgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcclxuXHJcbiAgICAgIC8vZml4ZWQ6ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCByZXR1cm4gdGhlIHR5cGVvZiBub2RlTGlzdCBub3QgYXJyYXlcclxuICAgICAgaWYgKGVscy5mb3JFYWNoPT09dW5kZWZpbmVkKVxyXG4gICAgICAgIGVscy5mb3JFYWNoPWZ1bmN0aW9uKGNiKXtcclxuICAgICAgICAgIFtdLmZvckVhY2guY2FsbChlbHMsIGNiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAvLyBjb3VudCBob3cgbWFueSBjaGVja2JveCByb3cgaW4gdGhlIGN1cnJlbnQgcGFnZSBoYXMgYmVlbiBjaGVja2VkXHJcbiAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMudGFibGVEYXRhLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuc2VsZWN0ZWRUby5pbmRleE9mKGl0ZW1baWRDb2x1bW5dKSA+PSAwXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBjb3VudCA9PSAwLCBjbGVhciB0aGUgY2hlY2tib3hcclxuICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgIGVsLmluZGV0ZXJtaW5hdGUgPSBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgLy8gY291bnQgPiAwIGFuZCBjb3VudCA8IHBlclBhZ2UsIHNldCBjaGVja2JveCBzdGF0ZSB0byAnaW5kZXRlcm1pbmF0ZSdcclxuICAgICAgZWxzZSBpZiAoc2VsZWN0ZWQubGVuZ3RoIDwgdGhpcy5wZXJQYWdlKSB7XHJcbiAgICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgIGVsLmluZGV0ZXJtaW5hdGUgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIC8vIGNvdW50ID09IHBlclBhZ2UsIHNldCBjaGVja2JveCBzdGF0ZSB0byAnY2hlY2tlZCdcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgIGVsLmluZGV0ZXJtaW5hdGUgPSBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZUFsbENoZWNrYm94ZXMgKGZpZWxkTmFtZSwgZXZlbnQpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIGxldCBpc0NoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICBsZXQgaWRDb2x1bW4gPSB0aGlzLnRyYWNrQnlcclxuXHJcbiAgICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGRhdGFJdGVtKSB7XHJcbiAgICAgICAgICBzZWxmLnNlbGVjdElkKGRhdGFJdGVtW2lkQ29sdW1uXSlcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YUl0ZW0pIHtcclxuICAgICAgICAgIHNlbGYudW5zZWxlY3RJZChkYXRhSXRlbVtpZENvbHVtbl0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRlbWl0KCd2dWV0YWJsZTpjaGVja2JveC10b2dnbGVkLWFsbCcsIGlzQ2hlY2tlZClcclxuICAgIH0sXHJcbiAgICBnb3RvUHJldmlvdXNQYWdlICgpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZS0tXHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnb3RvTmV4dFBhZ2UgKCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA8IHRoaXMudGFibGVQYWdpbmF0aW9uLmxhc3RfcGFnZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UrK1xyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ290b1BhZ2UgKHBhZ2UpIHtcclxuICAgICAgaWYgKHBhZ2UgIT0gdGhpcy5jdXJyZW50UGFnZSAmJiAocGFnZSA+IDAgJiYgcGFnZSA8PSB0aGlzLnRhYmxlUGFnaW5hdGlvbi5sYXN0X3BhZ2UpKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2VcclxuICAgICAgICB0aGlzLmxvYWREYXRhKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGlzVmlzaWJsZURldGFpbFJvdyAocm93SWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmlzaWJsZURldGFpbFJvd3MuaW5kZXhPZiggcm93SWQgKSA+PSAwXHJcbiAgICB9LFxyXG4gICAgc2hvd0RldGFpbFJvdyAocm93SWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzVmlzaWJsZURldGFpbFJvdyhyb3dJZCkpIHtcclxuICAgICAgICB0aGlzLnZpc2libGVEZXRhaWxSb3dzLnB1c2gocm93SWQpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaWRlRGV0YWlsUm93IChyb3dJZCkge1xyXG4gICAgICBpZiAodGhpcy5pc1Zpc2libGVEZXRhaWxSb3cocm93SWQpKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlRGV0YWlsUm93cy5zcGxpY2UoXHJcbiAgICAgICAgICB0aGlzLnZpc2libGVEZXRhaWxSb3dzLmluZGV4T2Yocm93SWQpLFxyXG4gICAgICAgICAgMVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZURldGFpbFJvdyAocm93SWQpIHtcclxuICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlRGV0YWlsUm93KHJvd0lkKSkge1xyXG4gICAgICAgIHRoaXMuaGlkZURldGFpbFJvdyhyb3dJZClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxSb3cocm93SWQpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93RmllbGQgKGluZGV4KSB7XHJcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLnRhYmxlRmllbGRzLmxlbmd0aCkgcmV0dXJuXHJcblxyXG4gICAgICB0aGlzLnRhYmxlRmllbGRzW2luZGV4XS52aXNpYmxlID0gdHJ1ZVxyXG4gICAgfSxcclxuICAgIGhpZGVGaWVsZCAoaW5kZXgpIHtcclxuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMudGFibGVGaWVsZHMubGVuZ3RoKSByZXR1cm5cclxuXHJcbiAgICAgIHRoaXMudGFibGVGaWVsZHNbaW5kZXhdLnZpc2libGUgPSBmYWxzZVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZUZpZWxkIChpbmRleCkge1xyXG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy50YWJsZUZpZWxkcy5sZW5ndGgpIHJldHVyblxyXG5cclxuICAgICAgdGhpcy50YWJsZUZpZWxkc1tpbmRleF0udmlzaWJsZSA9ICEgdGhpcy50YWJsZUZpZWxkc1tpbmRleF0udmlzaWJsZVxyXG4gICAgfSxcclxuICAgIHJlbmRlckljb25UYWcgKGNsYXNzZXMsIG9wdGlvbnMgPSAnJykge1xyXG4gICAgICByZXR1cm4gdHlwZW9mKHRoaXMuY3NzLnJlbmRlckljb24pID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gYDxpIGNsYXNzPVwiJHtjbGFzc2VzLmpvaW4oJyAnKX1cIiAke29wdGlvbnN9PjwvaT5gXHJcbiAgICAgICAgOiB0aGlzLmNzcy5yZW5kZXJJY29uKGNsYXNzZXMsIG9wdGlvbnMpXHJcbiAgICB9LFxyXG4gICAgbWFrZVBhZ2luYXRpb24gKHRvdGFsID0gbnVsbCwgcGVyUGFnZSA9IG51bGwsIGN1cnJlbnRQYWdlID0gbnVsbCkge1xyXG4gICAgICBsZXQgcGFnaW5hdGlvbiA9IHt9XHJcbiAgICAgIHRvdGFsID0gdG90YWwgPT09IG51bGwgPyB0aGlzLmRhdGFUb3RhbCA6IHRvdGFsXHJcbiAgICAgIHBlclBhZ2UgPSBwZXJQYWdlID09PSBudWxsID8gdGhpcy5wZXJQYWdlIDogcGVyUGFnZVxyXG4gICAgICBjdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlID09PSBudWxsID8gdGhpcy5jdXJyZW50UGFnZSA6IGN1cnJlbnRQYWdlXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICd0b3RhbCc6IHRvdGFsLFxyXG4gICAgICAgICdwZXJfcGFnZSc6IHBlclBhZ2UsXHJcbiAgICAgICAgJ2N1cnJlbnRfcGFnZSc6IGN1cnJlbnRQYWdlLFxyXG4gICAgICAgICdsYXN0X3BhZ2UnOiBNYXRoLmNlaWwodG90YWwgLyBwZXJQYWdlKSB8fCAwLFxyXG4gICAgICAgICduZXh0X3BhZ2VfdXJsJzogJycsXHJcbiAgICAgICAgJ3ByZXZfcGFnZV91cmwnOiAnJyxcclxuICAgICAgICAnZnJvbSc6IChjdXJyZW50UGFnZSAtMSkgKiBwZXJQYWdlICsxLFxyXG4gICAgICAgICd0byc6IE1hdGgubWluKGN1cnJlbnRQYWdlICogcGVyUGFnZSwgdG90YWwpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBub3JtYWxpemVTb3J0T3JkZXIgKCkge1xyXG4gICAgICB0aGlzLnNvcnRPcmRlci5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICBpdGVtLnNvcnRGaWVsZCA9IGl0ZW0uc29ydEZpZWxkIHx8IGl0ZW0uZmllbGRcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBjYWxsRGF0YU1hbmFnZXIgKCkge1xyXG4gICAgICBpZiAodGhpcy5kYXRhTWFuYWdlciA9PT0gbnVsbCAmJiB0aGlzLmRhdGEgPT09IG51bGwpIHJldHVyblxyXG5cclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5kYXRhKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldERhdGEodGhpcy5kYXRhKVxyXG4gICAgICB9IFxyXG4gICAgICBcclxuICAgICAgdGhpcy5ub3JtYWxpemVTb3J0T3JkZXIoKVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuc2V0RGF0YShcclxuICAgICAgICB0aGlzLmRhdGFNYW5hZ2VyXHJcbiAgICAgICAgICA/IHRoaXMuZGF0YU1hbmFnZXIodGhpcy5zb3J0T3JkZXIsIHRoaXMubWFrZVBhZ2luYXRpb24oKSlcclxuICAgICAgICAgIDogdGhpcy5kYXRhXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICBvblJvd0NsYXNzIChkYXRhSXRlbSwgaW5kZXgpIHtcclxuICAgICAgaWYgKHRoaXMucm93Q2xhc3NDYWxsYmFjayAhPT0gJycpIHtcclxuICAgICAgICB0aGlzLndhcm4oJ1wicm93LWNsYXNzLWNhbGxiYWNrXCIgcHJvcCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFwicm93LWNsYXNzXCIgcHJvcCBpbnN0ZWFkLicpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YodGhpcy5yb3dDbGFzcykgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3dDbGFzcyhkYXRhSXRlbSwgaW5kZXgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnJvd0NsYXNzXHJcbiAgICB9LFxyXG4gICAgb25Sb3dDaGFuZ2VkIChkYXRhSXRlbSkge1xyXG4gICAgICB0aGlzLmZpcmVFdmVudCgncm93LWNoYW5nZWQnLCBkYXRhSXRlbSlcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0sXHJcbiAgICBvblJvd0NsaWNrZWQgKGRhdGFJdGVtLCBldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXggKyAncm93LWNsaWNrZWQnLCBkYXRhSXRlbSwgZXZlbnQpXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9LFxyXG4gICAgb25Sb3dEb3VibGVDbGlja2VkIChkYXRhSXRlbSwgZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ3Jvdy1kYmxjbGlja2VkJywgZGF0YUl0ZW0sIGV2ZW50KVxyXG4gICAgfSxcclxuICAgIG9uRGV0YWlsUm93Q2xpY2sgKGRhdGFJdGVtLCBldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXggKyAnZGV0YWlsLXJvdy1jbGlja2VkJywgZGF0YUl0ZW0sIGV2ZW50KVxyXG4gICAgfSxcclxuICAgIG9uQ2VsbENsaWNrZWQgKGRhdGFJdGVtLCBmaWVsZCwgZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ2NlbGwtY2xpY2tlZCcsIGRhdGFJdGVtLCBmaWVsZCwgZXZlbnQpXHJcbiAgICB9LFxyXG4gICAgb25DZWxsRG91YmxlQ2xpY2tlZCAoZGF0YUl0ZW0sIGZpZWxkLCBldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXggKyAnY2VsbC1kYmxjbGlja2VkJywgZGF0YUl0ZW0sIGZpZWxkLCBldmVudClcclxuICAgIH0sXHJcbiAgICBvbkNlbGxSaWdodENsaWNrZWQgKGRhdGFJdGVtLCBmaWVsZCwgZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ2NlbGwtcmlnaHRjbGlja2VkJywgZGF0YUl0ZW0sIGZpZWxkLCBldmVudClcclxuICAgIH0sXHJcbiAgICAvKlxyXG4gICAgICogQVBJIGZvciBleHRlcm5hbHNcclxuICAgICAqL1xyXG4gICAgY2hhbmdlUGFnZSAocGFnZSkge1xyXG4gICAgICBpZiAocGFnZSA9PT0gJ3ByZXYnKSB7XHJcbiAgICAgICAgdGhpcy5nb3RvUHJldmlvdXNQYWdlKClcclxuICAgICAgfSBlbHNlIGlmIChwYWdlID09PSAnbmV4dCcpIHtcclxuICAgICAgICB0aGlzLmdvdG9OZXh0UGFnZSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nb3RvUGFnZShwYWdlKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVsb2FkICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubG9hZERhdGEoKVxyXG4gICAgfSxcclxuICAgIHJlZnJlc2ggKCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMVxyXG4gICAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSgpXHJcbiAgICB9LFxyXG4gICAgcmVzZXREYXRhICgpIHtcclxuICAgICAgdGhpcy50YWJsZURhdGEgPSBudWxsXHJcbiAgICAgIHRoaXMudGFibGVQYWdpbmF0aW9uID0gbnVsbFxyXG4gICAgICB0aGlzLmZpcmVFdmVudCgnZGF0YS1yZXNldCcpXHJcbiAgICB9XHJcbiAgfSwgLy8gZW5kOiBtZXRob2RzXHJcbiAgd2F0Y2g6IHtcclxuICAgICdtdWx0aVNvcnQnIChuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICBpZiAobmV3VmFsID09PSBmYWxzZSAmJiB0aGlzLnNvcnRPcmRlci5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhpcy5zb3J0T3JkZXIuc3BsaWNlKDEpO1xyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICdhcGlVcmwnICAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgaWYodGhpcy5yZWFjdGl2ZUFwaVVybCAmJiBuZXdWYWwgIT09IG9sZFZhbClcclxuICAgICAgICB0aGlzLnJlZnJlc2goKVxyXG4gICAgfSxcclxuICAgICdkYXRhJyAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKG5ld1ZhbClcclxuICAgIH0sXHJcbiAgICAndGFibGVIZWlnaHQnIChuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICB0aGlzLmZpeEhlYWRlcigpXHJcbiAgICB9XHJcbiAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgW3YtY2xvYWtdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC52dWV0YWJsZSB0aC5zb3J0YWJsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzIxODVkMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLWJvZHktd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93LXk6YXV0bztcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLWhlYWQtd3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1hY3Rpb25zIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLXBhZ2luYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZmFmYiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudnVldGFibGUtcGFnaW5hdGlvbi1pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIH1cclxuICAudnVldGFibGUtZW1wdHktcmVzdWx0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLWNsaXAtdGV4dCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLXNlbWFudGljLW5vLXRvcCB7XHJcbiAgICBib3JkZXItdG9wOm5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudnVldGFibGUtZml4ZWQtbGF5b3V0IHtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1ndXR0ZXItY29sIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lICAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lICAhaW1wb3J0YW50O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uaXNGaXhlZEhlYWRlclxuICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZ1ZXRhYmxlLWhlYWQtd3JhcHBlclwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IFtcInZ1ZXRhYmxlXCIsIF92bS5jc3MudGFibGVDbGFzcywgX3ZtLmNzcy50YWJsZUhlYWRlckNsYXNzXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVGaWVsZHMsIGZ1bmN0aW9uKGZpZWxkLCBmaWVsZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX2NoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtY2hlY2tib3gtXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRyYWNrQnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5jaGVja0NoZWNrYm94ZXNTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVBbGxDaGVja2JveGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fY29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtY29tcG9uZW50LVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udHJhY2tCeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc29ydGFibGU6IF92bS5pc1NvcnRhYmxlKGZpZWxkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVyVGl0bGUoZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyQnkoZmllbGQsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19zbG90XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtc2xvdC1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc29ydENsYXNzKGZpZWxkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzb3J0YWJsZTogX3ZtLmlzU29ydGFibGUoZmllbGQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJUaXRsZShmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJCeShmaWVsZCwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX3NlcXVlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtc2VxdWVuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzcyB8fCBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVyVGl0bGUoZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ub3RJbihfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSksIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX3NlcXVlbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19zbG90XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLVwiICsgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzcyB8fCBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVyVGl0bGUoZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1cIiArIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc29ydENsYXNzKGZpZWxkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNvcnRhYmxlOiBfdm0uaXNTb3J0YWJsZShmaWVsZCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiX1wiICsgZmllbGQubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlclRpdGxlKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJCeShmaWVsZCwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNjcm9sbFZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2dWV0YWJsZS1ndXR0ZXItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBfdm0uc2Nyb2xsQmFyV2lkdGggfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZ1ZXRhYmxlLWJvZHktd3JhcHBlclwiLFxuICAgICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiBfdm0udGFibGVIZWlnaHQgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBbXCJ2dWV0YWJsZVwiLCBfdm0uY3NzLnRhYmxlQ2xhc3MsIF92bS5jc3MudGFibGVCb2R5Q2xhc3NdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiY29sZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZUZpZWxkcywgZnVuY3Rpb24oZmllbGQsIGZpZWxkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiY29sXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtXCIgKyBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIl9jb2xfXCIgKyBmaWVsZC5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInZ1ZXRhYmxlLWJvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRGF0YSwgZnVuY3Rpb24oaXRlbSwgaXRlbUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLm9uUm93Q2xhc3MoaXRlbSwgaXRlbUluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLWluZGV4XCI6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogX3ZtLm9uUm93Q2hhbmdlZChpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uUm93Q2xpY2tlZChpdGVtLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25Sb3dEb3VibGVDbGlja2VkKGl0ZW0sICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRmllbGRzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19zZXF1ZW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtc2VxdWVuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJTZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9faGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1oYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJJY29uVGFnKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYW5kbGUtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3NzLmhhbmRsZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1jaGVja2JveGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5yb3dTZWxlY3RlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVDaGVja2JveChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2NvbXBvbmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLWNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdEFyZ3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1kYXRhXCI6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctaW5kZXhcIjogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWZpZWxkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5zb3J0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX3Nsb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1zbG90XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdEFyZ3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dEYXRhOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dJbmRleDogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dGaWVsZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5zb3J0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogZmllbGQuZGF0YUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlck5vcm1hbEZpZWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2VsbENsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2VsbERvdWJsZUNsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRtZW51OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2VsbFJpZ2h0Q2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VEZXRhaWxSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBfdm0uZGV0YWlsUm93VHJhbnNpdGlvbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNWaXNpYmxlRGV0YWlsUm93KGl0ZW1bX3ZtLnRyYWNrQnldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtfdm0uY3NzLmRldGFpbFJvd0NsYXNzXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25EZXRhaWxSb3dDbGljayhpdGVtLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sc3BhbjogX3ZtLmNvdW50VmlzaWJsZUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKF92bS5kZXRhaWxSb3dDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWRhdGFcIjogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctaW5kZXhcIjogaXRlbUluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlFbXB0eURhdGFSb3dcbiAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2dWV0YWJsZS1lbXB0eS1yZXN1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHNwYW46IF92bS5jb3VudFZpc2libGVGaWVsZHMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5ub0RhdGFUZW1wbGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5sZXNzVGhhbk1pblJvd3NcbiAgICAgICAgICAgICAgICAgICAgICA/IF92bS5fbChfdm0uYmxhbmtSb3dzLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGksIHN0YXRpY0NsYXNzOiBcImJsYW5rLXJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZUZpZWxkcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZEluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgeyBrZXk6IGZpZWxkSW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgOiBfYyhcInRhYmxlXCIsIHsgY2xhc3M6IFtcInZ1ZXRhYmxlXCIsIF92bS5jc3MudGFibGVDbGFzc10gfSwgW1xuICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZUZpZWxkcywgZnVuY3Rpb24oZmllbGQsIGZpZWxkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgZmllbGQudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1jaGVja2JveC1cIiArIF92bS50cmFja0J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uY2hlY2tDaGVja2JveGVzU3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlQWxsQ2hlY2tib3hlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX2NvbXBvbmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLWNvbXBvbmVudC1cIiArIF92bS50cmFja0J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc29ydENsYXNzKGZpZWxkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzb3J0YWJsZTogX3ZtLmlzU29ydGFibGUoZmllbGQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5yZW5kZXJUaXRsZShmaWVsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlckJ5KGZpZWxkLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fc2xvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLXNsb3QtXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0QXJncyhmaWVsZC5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc29ydGFibGU6IF92bS5pc1NvcnRhYmxlKGZpZWxkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0ucmVuZGVyVGl0bGUoZmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJCeShmaWVsZCwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX3NlcXVlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtc2VxdWVuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzcyB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc29ydENsYXNzKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnJlbmRlclRpdGxlKGZpZWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ub3RJbihfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSksIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX3NlcXVlbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19zbG90XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLVwiICsgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzcyB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc29ydENsYXNzKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnJlbmRlclRpdGxlKGZpZWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1cIiArIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc29ydENsYXNzKGZpZWxkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNvcnRhYmxlOiBfdm0uaXNTb3J0YWJsZShmaWVsZCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiX1wiICsgZmllbGQubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5yZW5kZXJUaXRsZShmaWVsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyQnkoZmllbGQsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtYm9keVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZURhdGEsIGZ1bmN0aW9uKGl0ZW0sIGl0ZW1JbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5vblJvd0NsYXNzKGl0ZW0sIGl0ZW1JbmRleCksXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLWluZGV4XCI6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IF92bS5vblJvd0NoYW5nZWQoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25Sb3dEb3VibGVDbGlja2VkKGl0ZW0sICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vblJvd0NsaWNrZWQoaXRlbSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZUZpZWxkcywgZnVuY3Rpb24oZmllbGQsIGZpZWxkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fc2VxdWVuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1zZXF1ZW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVyU2VxdWVuY2UoaXRlbUluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX2hhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVySWNvblRhZyhbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhbmRsZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3NzLmhhbmRsZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX2NoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtY2hlY2tib3hlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLnJvd1NlbGVjdGVkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZUNoZWNrYm94KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2NvbXBvbmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLWNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhfdm0uZXh0cmFjdEFyZ3MoZmllbGQubmFtZSksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWRhdGFcIjogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWluZGV4XCI6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWZpZWxkXCI6IGZpZWxkLnNvcnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT0gXCJfX3Nsb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1zbG90XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdEFyZ3MoZmllbGQubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dEYXRhOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93SW5kZXg6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0ZpZWxkOiBmaWVsZC5zb3J0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5oYXNDYWxsYmFjayhmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBmaWVsZC5kYXRhQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2FsbENhbGxiYWNrKGZpZWxkLCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2VsbERvdWJsZUNsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRtZW51OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsUmlnaHRDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBmaWVsZC5kYXRhQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0T2JqZWN0VmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2VsbENsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsRG91YmxlQ2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dG1lbnU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxSaWdodENsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0udXNlRGV0YWlsUm93XG4gICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogX3ZtLmRldGFpbFJvd1RyYW5zaXRpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzVmlzaWJsZURldGFpbFJvdyhpdGVtW192bS50cmFja0J5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW192bS5jc3MuZGV0YWlsUm93Q2xhc3NdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkRldGFpbFJvd0NsaWNrKGl0ZW0sICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogX3ZtLmNvdW50VmlzaWJsZUZpZWxkcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhfdm0uZGV0YWlsUm93Q29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1kYXRhXCI6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1pbmRleFwiOiBpdGVtSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmRpc3BsYXlFbXB0eURhdGFSb3dcbiAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtZW1wdHktcmVzdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogX3ZtLmNvdW50VmlzaWJsZUZpZWxkcyB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5ub0RhdGFUZW1wbGF0ZSkgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmxlc3NUaGFuTWluUm93c1xuICAgICAgICAgICAgICA/IF92bS5fbChfdm0uYmxhbmtSb3dzLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGksIHN0YXRpY0NsYXNzOiBcImJsYW5rLXJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRmllbGRzLCBmdW5jdGlvbihmaWVsZCwgZmllbGRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IGtleTogZmllbGRJbmRleCB9LCBbX3ZtLl92KFwiwqBcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJtYWluXCIpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImFwZXhjaGFydHNcIiwge1xuICAgIGF0dHJzOiB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcbiAgICAgIHR5cGU6IFwiYXJlYVwiLFxuICAgICAgb3B0aW9uczogX3ZtLmNoYXJ0T3B0aW9ucyxcbiAgICAgIHNlcmllczogX3ZtLnNlcmllc1xuICAgIH1cbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJweS00XCIgfSxcbiAgICBbXG4gICAgICBfYyhcInZ1ZXRhYmxlLWZpbHRlci1iYXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtcGFnaW5hdGlvblwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZ1ZXRhYmxlLXBhZ2luYXRpb24taW5mb1wiLCB7IHJlZjogXCJwYWdpbmF0aW9uSW5mb1RvcFwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2dWV0YWJsZS1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgIHJlZjogXCJwYWdpbmF0aW9uVG9wXCIsXG4gICAgICAgICAgICBvbjogeyBcInZ1ZXRhYmxlLXBhZ2luYXRpb246Y2hhbmdlLXBhZ2VcIjogX3ZtLm9uQ2hhbmdlUGFnZSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInZ1ZXRhYmxlXCIsIHtcbiAgICAgICAgcmVmOiBcInZ1ZXRhYmxlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJhcGktdXJsXCI6IFwiL3JldG91ci90YWJsZXMvZGFzaGJvYXJkXCIsXG4gICAgICAgICAgXCJwZXItcGFnZVwiOiAyMCxcbiAgICAgICAgICBmaWVsZHM6IF92bS5maWVsZHMsXG4gICAgICAgICAgY3NzOiBfdm0uY3NzLFxuICAgICAgICAgIFwiYXBwZW5kLXBhcmFtc1wiOiBfdm0ubW9yZVBhcmFtc1xuICAgICAgICB9LFxuICAgICAgICBvbjogeyBcInZ1ZXRhYmxlOnBhZ2luYXRpb24tZGF0YVwiOiBfdm0ub25QYWdpbmF0aW9uRGF0YSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2dWV0YWJsZS1wYWdpbmF0aW9uXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidnVldGFibGUtcGFnaW5hdGlvbi1pbmZvXCIsIHsgcmVmOiBcInBhZ2luYXRpb25JbmZvXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInZ1ZXRhYmxlLXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgcmVmOiBcInBhZ2luYXRpb25cIixcbiAgICAgICAgICAgIG9uOiB7IFwidnVldGFibGUtcGFnaW5hdGlvbjpjaGFuZ2UtcGFnZVwiOiBfdm0ub25DaGFuZ2VQYWdlIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJweS00XCIgfSxcbiAgICBbXG4gICAgICBfYyhcInZ1ZXRhYmxlLWZpbHRlci1iYXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtcGFnaW5hdGlvblwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZ1ZXRhYmxlLXBhZ2luYXRpb24taW5mb1wiLCB7IHJlZjogXCJwYWdpbmF0aW9uSW5mb1RvcFwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ2dWV0YWJsZS1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgIHJlZjogXCJwYWdpbmF0aW9uVG9wXCIsXG4gICAgICAgICAgICBvbjogeyBcInZ1ZXRhYmxlLXBhZ2luYXRpb246Y2hhbmdlLXBhZ2VcIjogX3ZtLm9uQ2hhbmdlUGFnZSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInZ1ZXRhYmxlXCIsIHtcbiAgICAgICAgcmVmOiBcInZ1ZXRhYmxlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgXCJhcGktdXJsXCI6IFwiL3JldG91ci90YWJsZXMvcmVkaXJlY3RzXCIsXG4gICAgICAgICAgXCJwZXItcGFnZVwiOiAyMCxcbiAgICAgICAgICBmaWVsZHM6IF92bS5maWVsZHMsXG4gICAgICAgICAgY3NzOiBfdm0uY3NzLFxuICAgICAgICAgIFwiYXBwZW5kLXBhcmFtc1wiOiBfdm0ubW9yZVBhcmFtc1xuICAgICAgICB9LFxuICAgICAgICBvbjogeyBcInZ1ZXRhYmxlOnBhZ2luYXRpb24tZGF0YVwiOiBfdm0ub25QYWdpbmF0aW9uRGF0YSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ2dWV0YWJsZS1wYWdpbmF0aW9uXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidnVldGFibGUtcGFnaW5hdGlvbi1pbmZvXCIsIHsgcmVmOiBcInBhZ2luYXRpb25JbmZvXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInZ1ZXRhYmxlLXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgcmVmOiBcInBhZ2luYXRpb25cIixcbiAgICAgICAgICAgIG9uOiB7IFwidnVldGFibGUtcGFnaW5hdGlvbjpjaGFuZ2UtcGFnZVwiOiBfdm0ub25DaGFuZ2VQYWdlIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsdGVyLWJhciB1aSBiYXNpYyBzZWdtZW50IGdyaWRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ1aSBmb3JtXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmxpbmUgZmllbGRcIiB9LCBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlNlYXJjaCBmb3I6XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWx0ZXJUZXh0LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbHRlclRleHRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGhyZWUgd2lkZSBjb2x1bW5cIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXCIgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpbHRlclRleHQgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAga2V5dXA6IF92bS5kb0ZpbHRlcixcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLmZpbHRlclRleHQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBkZWxldGUgaWNvblwiLCBvbjogeyBjbGljazogX3ZtLnJlc2V0RmlsdGVyIH0gfSxcbiAgICAgICAgICBbX3ZtLl92KFwiUmVzZXRcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLnRhYmxlUGFnaW5hdGlvbiAmJiBfdm0udGFibGVQYWdpbmF0aW9uLmxhc3RfcGFnZSA+IDEsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJsZVBhZ2luYXRpb24gJiYgdGFibGVQYWdpbmF0aW9uLmxhc3RfcGFnZSA+IDFcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgY2xhc3M6IF92bS5jc3Mud3JhcHBlckNsYXNzXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgXCJidG4tbmF2XCIsXG4gICAgICAgICAgICBfdm0uY3NzLmxpbmtDbGFzcyxcbiAgICAgICAgICAgIF92bS5pc09uRmlyc3RQYWdlID8gX3ZtLmNzcy5kaXNhYmxlZENsYXNzIDogXCJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmxvYWRQYWdlKDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLmNzcy5pY29ucy5maXJzdCAhPSBcIlwiXG4gICAgICAgICAgICA/IF9jKFwiaVwiLCB7IGNsYXNzOiBbX3ZtLmNzcy5pY29ucy5maXJzdF0gfSlcbiAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLCq1wiKV0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIFwiYnRuLW5hdlwiLFxuICAgICAgICAgICAgX3ZtLmNzcy5saW5rQ2xhc3MsXG4gICAgICAgICAgICBfdm0uaXNPbkZpcnN0UGFnZSA/IF92bS5jc3MuZGlzYWJsZWRDbGFzcyA6IFwiXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5sb2FkUGFnZShcInByZXZcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uY3NzLmljb25zLm5leHQgIT0gXCJcIlxuICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBjbGFzczogW192bS5jc3MuaWNvbnMucHJldl0gfSlcbiAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLCoOKAuVwiKV0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLm5vdEVub3VnaFBhZ2VzXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX3ZtLl9sKF92bS50b3RhbFBhZ2UsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNzcy5wYWdlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0N1cnJlbnRQYWdlKG4pID8gX3ZtLmNzcy5hY3RpdmVDbGFzcyA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhuKSB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2FkUGFnZShuKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgX3ZtLl9sKF92bS53aW5kb3dTaXplLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5jc3MucGFnZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaXNDdXJyZW50UGFnZShfdm0ud2luZG93U3RhcnQgKyBuIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICA/IF92bS5jc3MuYWN0aXZlQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ud2luZG93U3RhcnQgKyBuIC0gMSkgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZFBhZ2UoX3ZtLndpbmRvd1N0YXJ0ICsgbiAtIDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIFwiYnRuLW5hdlwiLFxuICAgICAgICAgICAgX3ZtLmNzcy5saW5rQ2xhc3MsXG4gICAgICAgICAgICBfdm0uaXNPbkxhc3RQYWdlID8gX3ZtLmNzcy5kaXNhYmxlZENsYXNzIDogXCJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmxvYWRQYWdlKFwibmV4dFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5jc3MuaWNvbnMubmV4dCAhPSBcIlwiXG4gICAgICAgICAgICA/IF9jKFwiaVwiLCB7IGNsYXNzOiBbX3ZtLmNzcy5pY29ucy5uZXh0XSB9KVxuICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihcIuKAusKgXCIpXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgXCJidG4tbmF2XCIsXG4gICAgICAgICAgICBfdm0uY3NzLmxpbmtDbGFzcyxcbiAgICAgICAgICAgIF92bS5pc09uTGFzdFBhZ2UgPyBfdm0uY3NzLmRpc2FibGVkQ2xhc3MgOiBcIlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0ubG9hZFBhZ2UoX3ZtLnRvdGFsUGFnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uY3NzLmljb25zLmxhc3QgIT0gXCJcIlxuICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBjbGFzczogW192bS5jc3MuaWNvbnMubGFzdF0gfSlcbiAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLCu1wiKV0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBbXCJ2dWV0YWJsZS1wYWdpbmF0aW9uLWluZm9cIiwgX3ZtLmNzcy5pbmZvQ2xhc3NdLFxuICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5wYWdpbmF0aW9uSW5mbykgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJhcGV4Y2hhcnRzXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjIxMHB4XCIsXG4gICAgICB0eXBlOiBcImRvbnV0XCIsXG4gICAgICBvcHRpb25zOiBfdm0uY2hhcnRPcHRpb25zLFxuICAgICAgc2VyaWVzOiBfdm0uc2VyaWVzXG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVnVldGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1OTY1ZTNiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Z1ZXRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVnVldGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Z1ZXRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE1OTY1ZTNiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE1OTY1ZTNiXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdmFncmFudC93ZWJkZXYvY3JhZnQvY3JhZnQtcmV0b3VyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNTk2NWUzYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNTk2NWUzYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVnVldGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1OTY1ZTNiJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE1OTY1ZTNiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WdWV0YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Z1ZXRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vaWdub3JlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVldGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTU5NjVlM2Imc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vaWdub3JlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVldGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTU5NjVlM2Imc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvbmZldHRpLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NzJkNzEyYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db25mZXR0aS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbmZldHRpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdmFncmFudC93ZWJkZXYvY3JhZnQvY3JhZnQtcmV0b3VyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NzJkNzEyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NzJkNzEyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29uZmV0dGkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3MmQ3MTJhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc3MmQ3MTJhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL0NvbmZldHRpLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbmZldHRpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uZmV0dGkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EYXNoYm9hcmRDaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjA5YWQ5NjYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGFzaGJvYXJkQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EYXNoYm9hcmRDaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3ZhZ3JhbnQvd2ViZGV2L2NyYWZ0L2NyYWZ0LXJldG91ci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjA5YWQ5NjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjA5YWQ5NjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Rhc2hib2FyZENoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMDlhZDk2NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmMDlhZDk2NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9EYXNoYm9hcmRDaGFydC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXNoYm9hcmRDaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Rhc2hib2FyZENoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGFzaGJvYXJkVGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlhMjkwMTg2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Rhc2hib2FyZFRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGFzaGJvYXJkVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92YWdyYW50L3dlYmRldi9jcmFmdC9jcmFmdC1yZXRvdXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzlhMjkwMTg2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzlhMjkwMTg2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EYXNoYm9hcmRUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWEyOTAxODYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOWEyOTAxODYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkVGFibGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGFzaGJvYXJkVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXNoYm9hcmRUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlZGlyZWN0c1RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZTE1NjkxYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZWRpcmVjdHNUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JlZGlyZWN0c1RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdmFncmFudC93ZWJkZXYvY3JhZnQvY3JhZnQtcmV0b3VyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZTE1NjkxYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZTE1NjkxYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVkaXJlY3RzVGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlMTU2OTFhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJlMTU2OTFhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1JlZGlyZWN0c1RhYmxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZGlyZWN0c1RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVkaXJlY3RzVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9WdWV0YWJsZUZpbHRlckJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRiYTVkODAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVnVldGFibGVGaWx0ZXJCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9WdWV0YWJsZUZpbHRlckJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3ZhZ3JhbnQvd2ViZGV2L2NyYWZ0L2NyYWZ0LXJldG91ci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjRiYTVkODAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjRiYTVkODAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Z1ZXRhYmxlRmlsdGVyQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNGJhNWQ4MCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNGJhNWQ4MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9WdWV0YWJsZUZpbHRlckJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WdWV0YWJsZUZpbHRlckJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Z1ZXRhYmxlRmlsdGVyQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVnVldGFibGVQYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjU4MjAzNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92YWdyYW50L3dlYmRldi9jcmFmdC9jcmFmdC1yZXRvdXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFiNTgyMDM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFiNTgyMDM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiNTgyMDM2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFiNTgyMDM2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9WdWV0YWJsZVBhZ2luYXRpb25JbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYzBmNzk5YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WdWV0YWJsZVBhZ2luYXRpb25JbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3ZhZ3JhbnQvd2ViZGV2L2NyYWZ0L2NyYWZ0LXJldG91ci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGMwZjc5OWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGMwZjc5OWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjMGY3OTlhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBjMGY3OTlhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm9NaXhpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm9NaXhpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3ZhZ3JhbnQvd2ViZGV2L2NyYWZ0L2NyYWZ0LXJldG91ci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjM3NDYyODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjM3NDYyODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9WdWV0YWJsZVBhZ2luYXRpb25JbmZvTWl4aW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVldGFibGVQYWdpbmF0aW9uSW5mb01peGluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVldGFibGVQYWdpbmF0aW9uSW5mb01peGluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WdWV0YWJsZVBhZ2luYXRpb25NaXhpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdmFncmFudC93ZWJkZXYvY3JhZnQvY3JhZnQtcmV0b3VyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MDE0NDE0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MDE0NDE0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvYXNzZXRidW5kbGVzL3JldG91ci9zcmMvdnVlL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVldGFibGVQYWdpbmF0aW9uTWl4aW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9XaWRnZXRDaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2M0NGI1MzImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vV2lkZ2V0Q2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9XaWRnZXRDaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3ZhZ3JhbnQvd2ViZGV2L2NyYWZ0L2NyYWZ0LXJldG91ci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2M0NGI1MzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2M0NGI1MzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1dpZGdldENoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YzQ0YjUzMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YzQ0YjUzMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2Fzc2V0YnVuZGxlcy9yZXRvdXIvc3JjL3Z1ZS9XaWRnZXRDaGFydC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9XaWRnZXRDaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1dpZGdldENoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=