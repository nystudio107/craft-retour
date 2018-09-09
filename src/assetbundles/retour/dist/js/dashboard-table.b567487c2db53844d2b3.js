(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-table"],{

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/assetbundles/retour/src/vue/DashboardFieldDefs.js":
/*!***************************************************************!*\
  !*** ./src/assetbundles/retour/src/vue/DashboardFieldDefs.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Field definitions for DashboardTable.vue
/* harmony default export */ __webpack_exports__["default"] = ([{
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
}]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkRmllbGREZWZzLmpzIl0sIm5hbWVzIjpbIm5hbWUiLCJzb3J0RmllbGQiLCJ0aXRsZSIsInRpdGxlQ2xhc3MiLCJkYXRhQ2xhc3MiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQ0EsK0RBQWUsQ0FDWDtBQUNJQSxVQUFNLGdCQURWO0FBRUlDLGVBQVcsZ0JBRmY7QUFHSUMsV0FBTyx3QkFIWDtBQUlJQyxnQkFBWSxRQUpoQjtBQUtJQyxlQUFXLFFBTGY7QUFNSUMsY0FBVTs7QUFOZCxDQURXLEVBVVg7QUFDSUwsVUFBTSxhQURWO0FBRUlDLGVBQVcsYUFGZjtBQUdJQyxXQUFPLG1CQUhYO0FBSUlDLGdCQUFZLFFBSmhCO0FBS0lDLGVBQVcsUUFMZjtBQU1JQyxjQUFVO0FBTmQsQ0FWVyxFQWtCWDtBQUNJTCxVQUFNLFVBRFY7QUFFSUMsZUFBVyxVQUZmO0FBR0lDLFdBQU8sTUFIWDtBQUlJQyxnQkFBWSxZQUpoQjtBQUtJQyxlQUFXO0FBTGYsQ0FsQlcsRUF5Qlg7QUFDSUosVUFBTSxhQURWO0FBRUlDLGVBQVcsYUFGZjtBQUdJQyxXQUFPLFVBSFg7QUFJSUMsZ0JBQVksUUFKaEI7QUFLSUMsZUFBVztBQUxmLENBekJXLEVBZ0NYO0FBQ0lKLFVBQU0saUJBRFY7QUFFSUMsZUFBVyxhQUZmO0FBR0lDLFdBQU8sU0FIWDtBQUlJQyxnQkFBWSxhQUpoQjtBQUtJQyxlQUFXLGFBTGY7QUFNSUMsY0FBVTtBQU5kLENBaENXLEVBd0NYO0FBQ0lMLFVBQU0sU0FEVjtBQUVJQyxlQUFXLFNBRmY7QUFHSUMsV0FBTyxFQUhYO0FBSUlDLGdCQUFZLGFBSmhCO0FBS0lDLGVBQVcsYUFMZjtBQU1JQyxjQUFVO0FBTmQsQ0F4Q1csQ0FBZixFIiwiZmlsZSI6ImpzL2Rhc2hib2FyZC10YWJsZS5iNTY3NDg3YzJkYjUzODQ0ZDJiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBGaWVsZCBkZWZpbml0aW9ucyBmb3IgRGFzaGJvYXJkVGFibGUudnVlXG5leHBvcnQgZGVmYXVsdCBbXG4gICAge1xuICAgICAgICBuYW1lOiAncmVkaXJlY3RTcmNVcmwnLFxuICAgICAgICBzb3J0RmllbGQ6ICdyZWRpcmVjdFNyY1VybCcsXG4gICAgICAgIHRpdGxlOiAnNDA0IEZpbGUgTm90IEZvdW5kIFVSTCcsXG4gICAgICAgIHRpdGxlQ2xhc3M6ICdjZW50ZXInLFxuICAgICAgICBkYXRhQ2xhc3M6ICdjZW50ZXInLFxuICAgICAgICBjYWxsYmFjazogJ3VybEZvcm1hdHRlcidcblxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAncmVmZXJyZXJVcmwnLFxuICAgICAgICBzb3J0RmllbGQ6ICdyZWZlcnJlclVybCcsXG4gICAgICAgIHRpdGxlOiAnTGFzdCBSZWZlcnJlciBVUkwnLFxuICAgICAgICB0aXRsZUNsYXNzOiAnY2VudGVyJyxcbiAgICAgICAgZGF0YUNsYXNzOiAnY2VudGVyJyxcbiAgICAgICAgY2FsbGJhY2s6ICd1cmxGb3JtYXR0ZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdoaXRDb3VudCcsXG4gICAgICAgIHNvcnRGaWVsZDogJ2hpdENvdW50JyxcbiAgICAgICAgdGl0bGU6ICdIaXRzJyxcbiAgICAgICAgdGl0bGVDbGFzczogJ3RleHQtcmlnaHQnLFxuICAgICAgICBkYXRhQ2xhc3M6ICd0ZXh0LXJpZ2h0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2hpdExhc3RUaW1lJyxcbiAgICAgICAgc29ydEZpZWxkOiAnaGl0TGFzdFRpbWUnLFxuICAgICAgICB0aXRsZTogJ0xhc3QgSGl0JyxcbiAgICAgICAgdGl0bGVDbGFzczogJ2NlbnRlcicsXG4gICAgICAgIGRhdGFDbGFzczogJ2NlbnRlcicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdoYW5kbGVkQnlSZXRvdXInLFxuICAgICAgICBzb3J0RmllbGQ6ICdoaXRMYXN0VGltZScsXG4gICAgICAgIHRpdGxlOiAnSGFuZGxlZCcsXG4gICAgICAgIHRpdGxlQ2xhc3M6ICd0ZXh0LWNlbnRlcicsXG4gICAgICAgIGRhdGFDbGFzczogJ3RleHQtY2VudGVyJyxcbiAgICAgICAgY2FsbGJhY2s6ICdib29sRm9ybWF0dGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnYWRkTGluaycsXG4gICAgICAgIHNvcnRGaWVsZDogJ2FkZExpbmsnLFxuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHRpdGxlQ2xhc3M6ICd0ZXh0LWNlbnRlcicsXG4gICAgICAgIGRhdGFDbGFzczogJ3RleHQtY2VudGVyJyxcbiAgICAgICAgY2FsbGJhY2s6ICdhZGRVcmxGb3JtYXR0ZXInXG4gICAgfVxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=