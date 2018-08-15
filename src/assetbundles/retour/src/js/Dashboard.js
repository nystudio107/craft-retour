import Vue from 'vue';

const main = async () => {
    const apexCharts = await import(/* webpackChunkName: "apexcharts" */ 'apexcharts');
    console.log("Dashboard ApexCharts hello!");

};

main();

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
