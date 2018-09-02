// Dashboard main
const main = async () => {
    // Async load the vue module
    const Vue = await import(/* webpackChunkName: "vue" */ 'vue');
    // Create our vue instance
    const vm = new Vue.default({
        el: "#cp-nav-content",
        delimiters: ["${", "}"],
        components: {
            'confetti': () => import(/* webpackChunkName: "confetti" */ '../vue/Confetti.vue'),
            'dashboard-chart': () => import(/* webpackChunkName: "dashboard-chart" */ '../vue/DashboardChart.vue'),
            'dashboard-table': () => import(/* webpackChunkName: "dashboard-table" */ '../vue/DashboardTable.vue')
        },
        data: {
        },
        methods: {
        },
        mounted() {
        }
    });
};
// Execute async function
main().then({});
