import Vue from 'vue';
import VueEvents from 'vue-events';
import ShortlinksTable from '@/vue/ShortlinksTable.vue';

Vue.use(VueEvents);
// Create our vue instance
new Vue({
  el: "#cp-nav-content",
  components: {
    'shortlinks-table': ShortlinksTable,
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
