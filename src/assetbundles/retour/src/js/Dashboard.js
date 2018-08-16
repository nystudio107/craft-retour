// Load in Apex charts
const loadCharts = async () => {
    const apexCharts = await import(/* webpackChunkName: "apexcharts" */ 'apexcharts');
    console.log("Dashboard ApexCharts hello!");
};

// Dashboard main
const main = async () => {
    // Async load the vue module
    const Vue = await import(/* webpackChunkName: "vue" */ 'vue');
    console.log("Dashboard hello, world");
    // Create our vue instance
    const vm = new Vue.default({
        el: "#cp-nav-content",
        delimiters: ["${", "}"],
        components: {
            'confetti': () => import(/* webpackChunkName: "confetti" */ '../vue/Confetti.vue')
        },
        data: {
        },
        methods: {
        },
        mounted() {
            loadCharts().then({
            });
        }
    });
};
// Execute async function
main().then({});
