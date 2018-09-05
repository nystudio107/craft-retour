<template>
    <apexcharts width="100%" height="200px" type="area" :options="chartOptions" :series="series"></apexcharts>
</template>

<script>

    const chartDataBaseUrl = '/retour/charts/dashboard/';

    // Get the largest number from the passed in arrays
    const largestNumber = (mainArray) => {
        return mainArray.map(function(subArray) {
            return Math.max.apply(null, subArray);
        });
    };

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
            console.log(result.data);
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
            range: String,
        },
        methods: {
            // Load in our chart data asynchronously
            getSeriesData: async function() {
                const axios = await import(/* webpackChunkName: "axios" */ 'axios');
                const chartsAPI = axios.create(configureApi(chartDataBaseUrl));
                await queryApi(chartsAPI, this.range, (data) => {
                    // Clone the chartOptions object, and replace the needed values
                    const options = Object.assign({}, this.chartOptions);
                    if (data[0] !== undefined) {
                        options.yaxis.max = Math.round(largestNumber([data[0]['data']])[0] + 1.5);
                        options.labels = data[0]['labels'];
                    }
                    this.chartOptions = options;
                    //this.chartOptions.yaxis.max = largestNumber([data[0]['data']])[0] * 3;
                    this.series = data;
                })
            }
        },
        created: function() {
            this.getSeriesData();
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
                    labels: [],
                    yaxis: {
                        min: 0,
                        max: 0,
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
                series: [
                    {
                        name: 'placeholder',
                        data: [0]
                    }
                ],
            }
        },
    }
</script>
