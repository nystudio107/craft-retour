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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldGJ1bmRsZXMvcmV0b3VyL3NyYy92dWUvRGFzaGJvYXJkRmllbGREZWZzLmpzIl0sIm5hbWVzIjpbIm5hbWUiLCJzb3J0RmllbGQiLCJ0aXRsZSIsInRpdGxlQ2xhc3MiLCJkYXRhQ2xhc3MiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQ0EsK0RBQWUsQ0FDWDtBQUNJQSxVQUFNLGdCQURWO0FBRUlDLGVBQVcsZ0JBRmY7QUFHSUMsV0FBTyx3QkFIWDtBQUlJQyxnQkFBWSxRQUpoQjtBQUtJQyxlQUFXLFFBTGY7QUFNSUMsY0FBVTs7QUFOZCxDQURXLEVBVVg7QUFDSUwsVUFBTSxhQURWO0FBRUlDLGVBQVcsYUFGZjtBQUdJQyxXQUFPLG1CQUhYO0FBSUlDLGdCQUFZLFFBSmhCO0FBS0lDLGVBQVcsUUFMZjtBQU1JQyxjQUFVO0FBTmQsQ0FWVyxFQWtCWDtBQUNJTCxVQUFNLFVBRFY7QUFFSUMsZUFBVyxVQUZmO0FBR0lDLFdBQU8sTUFIWDtBQUlJQyxnQkFBWSxZQUpoQjtBQUtJQyxlQUFXO0FBTGYsQ0FsQlcsRUF5Qlg7QUFDSUosVUFBTSxhQURWO0FBRUlDLGVBQVcsYUFGZjtBQUdJQyxXQUFPLFVBSFg7QUFJSUMsZ0JBQVksUUFKaEI7QUFLSUMsZUFBVztBQUxmLENBekJXLEVBZ0NYO0FBQ0lKLFVBQU0saUJBRFY7QUFFSUMsZUFBVyxhQUZmO0FBR0lDLFdBQU8sU0FIWDtBQUlJQyxnQkFBWSxhQUpoQjtBQUtJQyxlQUFXLGFBTGY7QUFNSUMsY0FBVTtBQU5kLENBaENXLEVBd0NYO0FBQ0lMLFVBQU0sU0FEVjtBQUVJQyxlQUFXLFNBRmY7QUFHSUMsV0FBTyxFQUhYO0FBSUlDLGdCQUFZLGFBSmhCO0FBS0lDLGVBQVcsYUFMZjtBQU1JQyxjQUFVO0FBTmQsQ0F4Q1csQ0FBZixFIiwiZmlsZSI6ImpzL2Rhc2hib2FyZC10YWJsZS1sZWdhY3kuYjU2NzQ4N2MyZGI1Mzg0NGQyYjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gRmllbGQgZGVmaW5pdGlvbnMgZm9yIERhc2hib2FyZFRhYmxlLnZ1ZVxuZXhwb3J0IGRlZmF1bHQgW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ3JlZGlyZWN0U3JjVXJsJyxcbiAgICAgICAgc29ydEZpZWxkOiAncmVkaXJlY3RTcmNVcmwnLFxuICAgICAgICB0aXRsZTogJzQwNCBGaWxlIE5vdCBGb3VuZCBVUkwnLFxuICAgICAgICB0aXRsZUNsYXNzOiAnY2VudGVyJyxcbiAgICAgICAgZGF0YUNsYXNzOiAnY2VudGVyJyxcbiAgICAgICAgY2FsbGJhY2s6ICd1cmxGb3JtYXR0ZXInXG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ3JlZmVycmVyVXJsJyxcbiAgICAgICAgc29ydEZpZWxkOiAncmVmZXJyZXJVcmwnLFxuICAgICAgICB0aXRsZTogJ0xhc3QgUmVmZXJyZXIgVVJMJyxcbiAgICAgICAgdGl0bGVDbGFzczogJ2NlbnRlcicsXG4gICAgICAgIGRhdGFDbGFzczogJ2NlbnRlcicsXG4gICAgICAgIGNhbGxiYWNrOiAndXJsRm9ybWF0dGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnaGl0Q291bnQnLFxuICAgICAgICBzb3J0RmllbGQ6ICdoaXRDb3VudCcsXG4gICAgICAgIHRpdGxlOiAnSGl0cycsXG4gICAgICAgIHRpdGxlQ2xhc3M6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgZGF0YUNsYXNzOiAndGV4dC1yaWdodCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdoaXRMYXN0VGltZScsXG4gICAgICAgIHNvcnRGaWVsZDogJ2hpdExhc3RUaW1lJyxcbiAgICAgICAgdGl0bGU6ICdMYXN0IEhpdCcsXG4gICAgICAgIHRpdGxlQ2xhc3M6ICdjZW50ZXInLFxuICAgICAgICBkYXRhQ2xhc3M6ICdjZW50ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnaGFuZGxlZEJ5UmV0b3VyJyxcbiAgICAgICAgc29ydEZpZWxkOiAnaGl0TGFzdFRpbWUnLFxuICAgICAgICB0aXRsZTogJ0hhbmRsZWQnLFxuICAgICAgICB0aXRsZUNsYXNzOiAndGV4dC1jZW50ZXInLFxuICAgICAgICBkYXRhQ2xhc3M6ICd0ZXh0LWNlbnRlcicsXG4gICAgICAgIGNhbGxiYWNrOiAnYm9vbEZvcm1hdHRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2FkZExpbmsnLFxuICAgICAgICBzb3J0RmllbGQ6ICdhZGRMaW5rJyxcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB0aXRsZUNsYXNzOiAndGV4dC1jZW50ZXInLFxuICAgICAgICBkYXRhQ2xhc3M6ICd0ZXh0LWNlbnRlcicsXG4gICAgICAgIGNhbGxiYWNrOiAnYWRkVXJsRm9ybWF0dGVyJ1xuICAgIH1cbl07XG4iXSwic291cmNlUm9vdCI6IiJ9