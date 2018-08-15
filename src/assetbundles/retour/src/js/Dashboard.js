const main = async () => {
    const apexCharts = await import(/* webpackChunkName: "apexcharts" */ 'apexcharts');
    console.log("Dashboard ApexCharts hello!");

    const Vue = await import(/* webpackChunkName: "vue" */ 'vue');
    console.log("Dashboard Vue hello!");

    const vm = new Vue({
        el: "#dash",
        components: {
            'confetti': () => import(/* webpackChunkName: "confetti" */ '../vue/Confetti.vue')
        },
        delimiters: ["${", "}"],
        data: {
            message: "hello from vue!",
        },
        methods: {
        },
    });
};

main();

