<template>
    <apexcharts width="100%" height="210px" type="donut" :options="chartOptions" :series="series"></apexcharts>
</template>

<script>

    const chartDataBaseUrl = '/retour/charts/widget/';

    // Configure the api endpoint
    const configureApi = (url) => {
        return {
            baseURL: url,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        };
    };
    // Query our API endpoint via an XHR GET
    const queryApi = (api, uri, callback) => {
        api.get(uri
        ).then((result) => {
            if (callback) {
                callback(result.data);
            }
        }).catch((error) => {
            console.log(error);
        })
    };

    // Our component exports
    export default {
        components: {
            'apexcharts': () => import(/* webpackChunkName: "apexcharts" */ 'vue-apexcharts')
        },
        props: {
            title: String,
            subTitle: String,
            days: String,
        },
        methods: {
            // Load in our chart data asynchronously
            getSeriesData: async function() {
                const axios = await import(/* webpackChunkName: "axios" */ 'axios');
                const chartsAPI = axios.create(configureApi(chartDataBaseUrl));
                await queryApi(chartsAPI, this.days, (data) => {
                    this.series = data;
                });
            }
        },
        created: function() {
            this.getSeriesData();
        },
        data: function() {
            return {
                chartOptions: {
                    chart: {
                        id: 'vuechart-widget',
                        toolbar: {
                            show: false,
                        },
                    },
                    colors: ['#008FFB', '#DCE6EC'],
                    labels: [
                        '404 hits',
                        '404 hits handled'
                    ],
                    title: {
                        text: this.title,
                        offsetX: 0,
                        style: {
                            fontSize: '24px',
                            cssClass: 'apexcharts-yaxis-title'
                        }
                    },
                    subtitle: {
                        text: this.subTitle + ` ${this.days} days.`,
                        offsetX: 0,
                        style: {
                            fontSize: '14px',
                            cssClass: 'apexcharts-yaxis-title'
                        }
                    }
                },
                series: [50, 50],
            }
        },
    }
</script>
