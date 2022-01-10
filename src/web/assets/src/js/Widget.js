import Vue from 'vue';
import WidgetChart from '@/vue/WidgetChart.vue';

// Create our vue instance
new Vue({
    el: "#widget-content",
    components: {
        'widget-chart': WidgetChart,
    },
});
