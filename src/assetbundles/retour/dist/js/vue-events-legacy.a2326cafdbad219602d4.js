(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-events"],{

/***/ "./node_modules/vue-events/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/vue-events/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function plugin(Vue) {

  // Exit if the plugin has already been installed.
  if (plugin.installed) return;

  // Create a `vm` to serve as our global event bus.
  var events = new Vue({
    methods: {
      /**
       * Emit the given event.
       *
       * @param {string|object} event
       * @param {...*} args
       */
      emit: function emit(event) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        this.$emit.apply(this, [event].concat(args));
      },


      /**
       * Emit the given event.
       *
       * @param {string|object} event
       * @param {...*} args
       */
      fire: function fire(event) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        this.emit.apply(this, [event].concat(args));
      },


      /**
       * Listen for the given event.
       *
       * @param {string} event
       * @param {function} callback
       */
      on: function on(event, callback) {
        this.$on(event, callback);
      },


      /**
       * Listen for the given event.
       *
       * @param {string} event
       * @param {function} callback
       */
      listen: function listen(event, callback) {
        this.on(event, callback);
      },


      /**
       * Listen for the given event once.
       *
       * @param {string} event
       * @param {function} callback
       */
      once: function once(event, callback) {
        this.$once(event, callback);
      },


      /**
       * Remove one or more event listeners.
       *
       * @param {string} event
       * @param {function} callback
       */
      off: function off(event, callback) {
        this.$off(event, callback);
      },


      /**
       * Remove one or more event listeners.
       *
       * @param {string} event
       * @param {function} callback
       */
      remove: function remove(event, callback) {
        this.off(event, callback);
      }
    }
  });

  // Extend `Vue.prototype` to include our global event bus.
  Object.defineProperty(Vue.prototype, '$events', {
    get: function get() {
      return events;
    }
  });

  // Register a mixin that adds an `events` option to Vue 2.0 components.
  Vue.mixin({
    // Hook into the Vue 2.0 `beforeCreate` life-cycle event.
    beforeCreate: function beforeCreate() {
      // Exit if there's no `events` option.
      if (_typeof(this.$options.events) !== 'object') return;
      // Cache of events to bound functions for automatic unsubscriptions
      var eventMap = {};
      // Loop through each event.
      for (var key in this.$options.events) {
        // Assign event type and bound function to map
        eventMap[key] = this.$options.events[key].bind(this);
      }
      // Listen for the `hook:beforeMount` Vue 2.0 life-cycle event.
      this.$once('hook:beforeMount', function () {
        // Loop through each event.
        for (var key in eventMap) {
          // Register a listener for the event.
          events.$on(key, eventMap[key]);
        }
      });
      // Listen for the `hook:beforeDestroy` Vue 2.0 life-cycle event.
      this.$once('hook:beforeDestroy', function () {
        // Loop through each event.
        for (var key in eventMap) {
          // Register a listener for the event.
          events.$off(key, eventMap[key]);
        }
        // Release cache
        eventMap = null;
      });
    }
  });
}

// Check for `window.Vue`
if (typeof window !== 'undefined' && window.Vue) {
  // Install plugin automatically.
  window.Vue.use(plugin);
}

exports.default = plugin;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWV2ZW50cy9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQixpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0EsMEZBQTBGLGFBQWE7QUFDdkc7QUFDQTs7QUFFQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixjQUFjO0FBQy9CLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QiIsImZpbGUiOiJqcy92dWUtZXZlbnRzLWxlZ2FjeS5hMjMyNmNhZmRiYWQyMTk2MDJkNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBwbHVnaW4oVnVlKSB7XG5cbiAgLy8gRXhpdCBpZiB0aGUgcGx1Z2luIGhhcyBhbHJlYWR5IGJlZW4gaW5zdGFsbGVkLlxuICBpZiAocGx1Z2luLmluc3RhbGxlZCkgcmV0dXJuO1xuXG4gIC8vIENyZWF0ZSBhIGB2bWAgdG8gc2VydmUgYXMgb3VyIGdsb2JhbCBldmVudCBidXMuXG4gIHZhciBldmVudHMgPSBuZXcgVnVlKHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAvKipcbiAgICAgICAqIEVtaXQgdGhlIGdpdmVuIGV2ZW50LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gZXZlbnRcbiAgICAgICAqIEBwYXJhbSB7Li4uKn0gYXJnc1xuICAgICAgICovXG4gICAgICBlbWl0OiBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZW1pdC5hcHBseSh0aGlzLCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9LFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogRW1pdCB0aGUgZ2l2ZW4gZXZlbnQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBldmVudFxuICAgICAgICogQHBhcmFtIHsuLi4qfSBhcmdzXG4gICAgICAgKi9cbiAgICAgIGZpcmU6IGZ1bmN0aW9uIGZpcmUoZXZlbnQpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuICAgICAgfSxcblxuXG4gICAgICAvKipcbiAgICAgICAqIExpc3RlbiBmb3IgdGhlIGdpdmVuIGV2ZW50LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAqL1xuICAgICAgb246IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLiRvbihldmVudCwgY2FsbGJhY2spO1xuICAgICAgfSxcblxuXG4gICAgICAvKipcbiAgICAgICAqIExpc3RlbiBmb3IgdGhlIGdpdmVuIGV2ZW50LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAqL1xuICAgICAgbGlzdGVuOiBmdW5jdGlvbiBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgIH0sXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBMaXN0ZW4gZm9yIHRoZSBnaXZlbiBldmVudCBvbmNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAqL1xuICAgICAgb25jZTogZnVuY3Rpb24gb25jZShldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy4kb25jZShldmVudCwgY2FsbGJhY2spO1xuICAgICAgfSxcblxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBvbmUgb3IgbW9yZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICovXG4gICAgICBvZmY6IGZ1bmN0aW9uIG9mZihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy4kb2ZmKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICB9LFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIG9uZSBvciBtb3JlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgKi9cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9mZihldmVudCwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gRXh0ZW5kIGBWdWUucHJvdG90eXBlYCB0byBpbmNsdWRlIG91ciBnbG9iYWwgZXZlbnQgYnVzLlxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRldmVudHMnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZXZlbnRzO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gUmVnaXN0ZXIgYSBtaXhpbiB0aGF0IGFkZHMgYW4gYGV2ZW50c2Agb3B0aW9uIHRvIFZ1ZSAyLjAgY29tcG9uZW50cy5cbiAgVnVlLm1peGluKHtcbiAgICAvLyBIb29rIGludG8gdGhlIFZ1ZSAyLjAgYGJlZm9yZUNyZWF0ZWAgbGlmZS1jeWNsZSBldmVudC5cbiAgICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICAgIC8vIEV4aXQgaWYgdGhlcmUncyBubyBgZXZlbnRzYCBvcHRpb24uXG4gICAgICBpZiAoX3R5cGVvZih0aGlzLiRvcHRpb25zLmV2ZW50cykgIT09ICdvYmplY3QnKSByZXR1cm47XG4gICAgICAvLyBDYWNoZSBvZiBldmVudHMgdG8gYm91bmQgZnVuY3Rpb25zIGZvciBhdXRvbWF0aWMgdW5zdWJzY3JpcHRpb25zXG4gICAgICB2YXIgZXZlbnRNYXAgPSB7fTtcbiAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIGV2ZW50LlxuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuJG9wdGlvbnMuZXZlbnRzKSB7XG4gICAgICAgIC8vIEFzc2lnbiBldmVudCB0eXBlIGFuZCBib3VuZCBmdW5jdGlvbiB0byBtYXBcbiAgICAgICAgZXZlbnRNYXBba2V5XSA9IHRoaXMuJG9wdGlvbnMuZXZlbnRzW2tleV0uYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIC8vIExpc3RlbiBmb3IgdGhlIGBob29rOmJlZm9yZU1vdW50YCBWdWUgMi4wIGxpZmUtY3ljbGUgZXZlbnQuXG4gICAgICB0aGlzLiRvbmNlKCdob29rOmJlZm9yZU1vdW50JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBldmVudC5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGV2ZW50TWFwKSB7XG4gICAgICAgICAgLy8gUmVnaXN0ZXIgYSBsaXN0ZW5lciBmb3IgdGhlIGV2ZW50LlxuICAgICAgICAgIGV2ZW50cy4kb24oa2V5LCBldmVudE1hcFtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBgaG9vazpiZWZvcmVEZXN0cm95YCBWdWUgMi4wIGxpZmUtY3ljbGUgZXZlbnQuXG4gICAgICB0aGlzLiRvbmNlKCdob29rOmJlZm9yZURlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIGV2ZW50LlxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZXZlbnRNYXApIHtcbiAgICAgICAgICAvLyBSZWdpc3RlciBhIGxpc3RlbmVyIGZvciB0aGUgZXZlbnQuXG4gICAgICAgICAgZXZlbnRzLiRvZmYoa2V5LCBldmVudE1hcFtrZXldKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWxlYXNlIGNhY2hlXG4gICAgICAgIGV2ZW50TWFwID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIENoZWNrIGZvciBgd2luZG93LlZ1ZWBcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIC8vIEluc3RhbGwgcGx1Z2luIGF1dG9tYXRpY2FsbHkuXG4gIHdpbmRvdy5WdWUudXNlKHBsdWdpbik7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHBsdWdpbjsiXSwic291cmNlUm9vdCI6IiJ9