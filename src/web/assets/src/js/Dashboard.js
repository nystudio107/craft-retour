import Vue from 'vue';
import VueEvents from 'vue-events';
import ConfettiParty from '@/vue/ConfettiParty.vue';
import DashboardChart from '@/vue/DashboardChart.vue';
import DashboardTable from '@/vue/DashboardTable.vue';

Vue.use(VueEvents);
// Create our vue instance
new Vue({
    el: "#cp-nav-content",
    components: {
        ConfettiParty,
        DashboardChart,
        DashboardTable,
    },
    data: {
    },
    mounted() {
        this.$events.$on('refresh-table', eventData => this.onTableRefresh(eventData));
    },
    methods: {
        onTableRefresh (vuetable) {
            Vue.nextTick( () => vuetable.refresh());
        }
    },
});
