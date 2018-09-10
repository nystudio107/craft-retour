// Widget main
const main = async () => {
    // Async load the vue module
    const Vue = await import(/* webpackChunkName: "vue" */ 'vue');
    // Create our vue instance
    const vm = new Vue.default({
        el: "#widget-content",
        components: {
            'widget-chart': () => import(/* webpackChunkName: "widget-chart" */ '../vue/WidgetChart.vue'),
        },
        data: {
        },
        methods: {
        },
        mounted() {
        },
    });
};
// Execute async function
main().then({});
