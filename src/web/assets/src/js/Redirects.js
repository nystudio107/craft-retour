import VueEvents from 'vue-events';
import RedirectsTable from '@/vue/RedirectsTable.vue';

Vue.use(VueEvents);
// Create our vue instance
const vm = new Vue({
    el: "#cp-nav-content",
    components: {
        'redirects-table': RedirectsTable,
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
