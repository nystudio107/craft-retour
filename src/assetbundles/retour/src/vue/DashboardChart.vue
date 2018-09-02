<template>
    <apexcharts width="100%" height="200px" type="area" :options="chartOptions" :series="series"></apexcharts>
</template>

<script>
    import Vue from 'vue'
    import VueApexCharts from 'vue-apexcharts'

    Vue.use(VueApexCharts);

    export default {
        components: {
            apexcharts: VueApexCharts,
        },
        props: {
            title: String,
            subTitle: String,
        },
        data: function() {
            return {
                chartOptions: {
                    chart: {
                        id: 'vuechart-example',
                        toolbar: {
                            show: false,
                        },
                        sparkline: {
                            enabled: true
                        },

                    },
                    colors: ['#008FFB', '#DCE6EC'],
                    stroke: {
                        curve: 'straight',
                        width: 3,
                    },
                    fill: {
                        opacity: 0.2,
                        gradient: {
                            enabled: true
                        }
                    },
                    xaxis: {
                        crosshairs: {
                            width: 1
                        },
                    },
                    yaxis: {
                        min: 0
                    },
                    title: {
                        text: this.title,
                        offsetX: 0,
                        style: {
                            fontSize: '24px',
                            cssClass: 'apexcharts-yaxis-title'
                        }
                    },
                    subtitle: {
                        text: this.subTitle,
                        offsetX: 0,
                        style: {
                            fontSize: '14px',
                            cssClass: 'apexcharts-yaxis-title'
                        }
                    }
                },
                series: [{
                    name: 'series-1',
                    data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
                },
                    {
                        name: 'series-2',
                        data: [47, 45, 54, 38, 56, 53, 61, 27, 54, 43, 19, 46, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 9]
                    }]
            }
        },
    }
</script>
