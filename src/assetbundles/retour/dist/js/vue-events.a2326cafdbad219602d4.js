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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWV2ZW50cy9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQixpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0EsMEZBQTBGLGFBQWE7QUFDdkc7QUFDQTs7QUFFQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixjQUFjO0FBQy9CLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QiIsImZpbGUiOiJqcy92dWUtZXZlbnRzLmEyMzI2Y2FmZGJhZDIxOTYwMmQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIHBsdWdpbihWdWUpIHtcblxuICAvLyBFeGl0IGlmIHRoZSBwbHVnaW4gaGFzIGFscmVhZHkgYmVlbiBpbnN0YWxsZWQuXG4gIGlmIChwbHVnaW4uaW5zdGFsbGVkKSByZXR1cm47XG5cbiAgLy8gQ3JlYXRlIGEgYHZtYCB0byBzZXJ2ZSBhcyBvdXIgZ2xvYmFsIGV2ZW50IGJ1cy5cbiAgdmFyIGV2ZW50cyA9IG5ldyBWdWUoe1xuICAgIG1ldGhvZHM6IHtcbiAgICAgIC8qKlxuICAgICAgICogRW1pdCB0aGUgZ2l2ZW4gZXZlbnQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBldmVudFxuICAgICAgICogQHBhcmFtIHsuLi4qfSBhcmdzXG4gICAgICAgKi9cbiAgICAgIGVtaXQ6IGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRlbWl0LmFwcGx5KHRoaXMsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH0sXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBFbWl0IHRoZSBnaXZlbiBldmVudC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IGV2ZW50XG4gICAgICAgKiBAcGFyYW0gey4uLip9IGFyZ3NcbiAgICAgICAqL1xuICAgICAgZmlyZTogZnVuY3Rpb24gZmlyZShldmVudCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9LFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogTGlzdGVuIGZvciB0aGUgZ2l2ZW4gZXZlbnQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICovXG4gICAgICBvbjogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuJG9uKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICB9LFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogTGlzdGVuIGZvciB0aGUgZ2l2ZW4gZXZlbnQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICovXG4gICAgICBsaXN0ZW46IGZ1bmN0aW9uIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbihldmVudCwgY2FsbGJhY2spO1xuICAgICAgfSxcblxuXG4gICAgICAvKipcbiAgICAgICAqIExpc3RlbiBmb3IgdGhlIGdpdmVuIGV2ZW50IG9uY2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICovXG4gICAgICBvbmNlOiBmdW5jdGlvbiBvbmNlKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLiRvbmNlKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICB9LFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIG9uZSBvciBtb3JlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgKi9cbiAgICAgIG9mZjogZnVuY3Rpb24gb2ZmKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLiRvZmYoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgIH0sXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgb25lIG9yIG1vcmUgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAqL1xuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMub2ZmKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBFeHRlbmQgYFZ1ZS5wcm90b3R5cGVgIHRvIGluY2x1ZGUgb3VyIGdsb2JhbCBldmVudCBidXMuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGV2ZW50cycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBldmVudHM7XG4gICAgfVxuICB9KTtcblxuICAvLyBSZWdpc3RlciBhIG1peGluIHRoYXQgYWRkcyBhbiBgZXZlbnRzYCBvcHRpb24gdG8gVnVlIDIuMCBjb21wb25lbnRzLlxuICBWdWUubWl4aW4oe1xuICAgIC8vIEhvb2sgaW50byB0aGUgVnVlIDIuMCBgYmVmb3JlQ3JlYXRlYCBsaWZlLWN5Y2xlIGV2ZW50LlxuICAgIGJlZm9yZUNyZWF0ZTogZnVuY3Rpb24gYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgLy8gRXhpdCBpZiB0aGVyZSdzIG5vIGBldmVudHNgIG9wdGlvbi5cbiAgICAgIGlmIChfdHlwZW9mKHRoaXMuJG9wdGlvbnMuZXZlbnRzKSAhPT0gJ29iamVjdCcpIHJldHVybjtcbiAgICAgIC8vIENhY2hlIG9mIGV2ZW50cyB0byBib3VuZCBmdW5jdGlvbnMgZm9yIGF1dG9tYXRpYyB1bnN1YnNjcmlwdGlvbnNcbiAgICAgIHZhciBldmVudE1hcCA9IHt9O1xuICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggZXZlbnQuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy4kb3B0aW9ucy5ldmVudHMpIHtcbiAgICAgICAgLy8gQXNzaWduIGV2ZW50IHR5cGUgYW5kIGJvdW5kIGZ1bmN0aW9uIHRvIG1hcFxuICAgICAgICBldmVudE1hcFtrZXldID0gdGhpcy4kb3B0aW9ucy5ldmVudHNba2V5XS5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgICAgLy8gTGlzdGVuIGZvciB0aGUgYGhvb2s6YmVmb3JlTW91bnRgIFZ1ZSAyLjAgbGlmZS1jeWNsZSBldmVudC5cbiAgICAgIHRoaXMuJG9uY2UoJ2hvb2s6YmVmb3JlTW91bnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIGV2ZW50LlxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZXZlbnRNYXApIHtcbiAgICAgICAgICAvLyBSZWdpc3RlciBhIGxpc3RlbmVyIGZvciB0aGUgZXZlbnQuXG4gICAgICAgICAgZXZlbnRzLiRvbihrZXksIGV2ZW50TWFwW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIExpc3RlbiBmb3IgdGhlIGBob29rOmJlZm9yZURlc3Ryb3lgIFZ1ZSAyLjAgbGlmZS1jeWNsZSBldmVudC5cbiAgICAgIHRoaXMuJG9uY2UoJ2hvb2s6YmVmb3JlRGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggZXZlbnQuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBldmVudE1hcCkge1xuICAgICAgICAgIC8vIFJlZ2lzdGVyIGEgbGlzdGVuZXIgZm9yIHRoZSBldmVudC5cbiAgICAgICAgICBldmVudHMuJG9mZihrZXksIGV2ZW50TWFwW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbGVhc2UgY2FjaGVcbiAgICAgICAgZXZlbnRNYXAgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gQ2hlY2sgZm9yIGB3aW5kb3cuVnVlYFxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgLy8gSW5zdGFsbCBwbHVnaW4gYXV0b21hdGljYWxseS5cbiAgd2luZG93LlZ1ZS51c2UocGx1Z2luKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gcGx1Z2luOyJdLCJzb3VyY2VSb290IjoiIn0=