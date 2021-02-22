import VueEvents from 'vue-events';
import Confetti from '@/vue/Confetti.vue';
import DashboardChart from '@/vue/DashboardChart.vue';
import DashboardTable from '@/vue/DashboardTable.vue';

Vue.use(VueEvents);
// Create our vue instance
const vm = new Vue({
    el: "#cp-nav-content",
    components: {
        'confetti': Confetti,
        'dashboard-chart': DashboardChart,
        'dashboard-table': DashboardTable,
    },
    data: {
    },
    methods: {
        onTableRefresh (vuetable) {
            Vue.nextTick( () => vuetable.refresh());
        }
    },
    mounted() {
        this.$events.$on('refresh-table', eventData => this.onTableRefresh(eventData));
    },
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}
