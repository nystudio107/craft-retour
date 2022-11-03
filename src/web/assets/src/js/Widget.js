import Vue from 'vue';
import WidgetChart from '@/vue/WidgetChart.vue';

// Create our vue instance
new Vue({
  el: "#widget-content",
  components: {
    'widget-chart': WidgetChart,
  },
});

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR")
  });
}
