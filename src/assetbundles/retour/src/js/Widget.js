import WidgetChart from '../vue/WidgetChart.vue';

// Create our vue instance
const vm = new Vue({
    el: "#widget-content",
    components: {
        'widget-chart': WidgetChart,
    },
    data: {
    },
    methods: {
    },
    mounted() {
    },
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}
