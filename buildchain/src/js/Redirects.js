import Vue from 'vue';
import VueEvents from 'vue-events';
import RedirectsTable from '@/vue/RedirectsTable.vue';

Vue.use(VueEvents);
// Create our vue instance
new Vue({
  el: "#cp-nav-content",
  components: {
    'redirects-table': RedirectsTable,
  },
  mounted() {
    this.$events.$on('refresh-table', eventData => this.onTableRefresh(eventData));
  },
  methods: {
    onTableRefresh(vuetable) {
      Vue.nextTick(() => vuetable.refresh());
    }
  },
});

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR")
  });
}
