// Redirects main
const main = async () => {
    // Async load the vue module
    const Vue = await import(/* webpackChunkName: "vue" */ 'vue');
    // Create our vue instance
    const vm = new Vue.default({
        el: "#cp-nav-content",
        components: {
            'redirects-table': () => import(/* webpackChunkName: "redirects-table" */ '../vue/RedirectsTable.vue')
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
