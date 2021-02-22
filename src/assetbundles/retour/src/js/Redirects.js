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

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}
