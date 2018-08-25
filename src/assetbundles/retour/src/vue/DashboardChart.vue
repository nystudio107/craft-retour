<template>
    <div>
        <apexcharts width="100%" type="line" :options="chartOptions" :series="series"></apexcharts>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueApexCharts from 'vue-apexcharts'

    Vue.use(VueApexCharts);

    export default {
        components: {
            apexcharts: VueApexCharts,
        },
        data: function() {
            return {
                chartOptions: {
                    chart: {
                        id: 'vuechart-example'
                    },
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                    }
                },
                series: [{
                    name: 'series-1',
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }]
            }
        },
    }
</script>
