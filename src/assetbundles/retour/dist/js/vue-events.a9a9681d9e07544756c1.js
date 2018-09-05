/*!
 * @project        nystudio107
 * @name           vue-events.a9a9681d9e07544756c1.js
 * @author         andrew@nystudio107.com
 * @build          Wed, Sep 5, 2018 4:59 AM ET
 * @release        b9e18ba92fb58c39d98f859700a4c6bb3d7af1a1 [develop]
 * @copyright      Copyright (c) 2018 nystudio107
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{14:function(o,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};function i(o){if(!i.installed){var n=new o({methods:{emit:function(o){for(var n=arguments.length,t=Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];this.$emit.apply(this,[o].concat(t))},fire:function(o){for(var n=arguments.length,t=Array(n>1?n-1:0),e=1;e<n;e++)t[e-1]=arguments[e];this.emit.apply(this,[o].concat(t))},on:function(o,n){this.$on(o,n)},listen:function(o,n){this.on(o,n)},once:function(o,n){this.$once(o,n)},off:function(o,n){this.$off(o,n)},remove:function(o,n){this.off(o,n)}}});Object.defineProperty(o.prototype,"$events",{get:function(){return n}}),o.mixin({beforeCreate:function(){if("object"===e(this.$options.events)){var o={};for(var t in this.$options.events)o[t]=this.$options.events[t].bind(this);this.$once("hook:beforeMount",function(){for(var t in o)n.$on(t,o[t])}),this.$once("hook:beforeDestroy",function(){for(var t in o)n.$off(t,o[t]);o=null})}}})}}"undefined"!=typeof window&&window.Vue&&window.Vue.use(i),n.default=i}}]);
//# sourceMappingURL=vue-events.a9a9681d9e07544756c1.js.map