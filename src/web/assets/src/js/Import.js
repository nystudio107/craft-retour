import Vue from 'vue';
import ImportDraggable from '@/vue/ImportDraggable.vue';

// Create our vue instance
new Vue({
  el: "#cp-nav-content",
  components: {
    'import-draggable': ImportDraggable,
  },
});

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR")
  });
}
