import Vue from 'vue';
import VueEvents from 'vue-events';
import Confetti from '../vue/Confetti.vue';
import DashboardChart from '../vue/DashboardChart.vue';
import DashboardTable from '../vue/DashboardTable.vue';

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
            console.log('onTableRefresh');
            Vue.nextTick( () => vuetable.refresh());
        }
    },
    mounted() {
        this.$events.$on('refresh-table', eventData => this.onTableRefresh(eventData));
    },
});
