
// Dashboard main
const main = async () => {
    // Async load the vue module
    const Vue = await import(/* webpackChunkName: "vue" */ 'vue');
    // Use vue-events
    const VueEvents = await import(/* webpackChunkName: "vue-events" */ 'vue-events');
    Vue.default.use(VueEvents.default);
    // Create our vue instance
    const vm = new Vue.default({
        el: "#cp-nav-content",
        components: {
            'confetti': () => import(/* webpackChunkName: "confetti" */ '../vue/Confetti.vue'),
            'dashboard-chart': () => import(/* webpackChunkName: "dashboard-chart" */ '../vue/DashboardChart.vue'),
            'dashboard-table': () => import(/* webpackChunkName: "dashboard-table" */ '../vue/DashboardTable.vue')
        },
        data: {
        },
        methods: {
            onTableRefresh (vuetable) {
                console.log('onTableRefresh');
                Vue.default.nextTick( () => vuetable.refresh());
            }
        },
        mounted() {
            this.$events.$on('refresh-table', eventData => this.onTableRefresh(eventData));
        },
    });
};
// Execute async function
main().then({});
