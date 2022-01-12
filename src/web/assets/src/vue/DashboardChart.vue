<template>
  <apexcharts
    width="100%"
    height="200px"
    type="area"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
    import Axios from 'axios';
    import ApexCharts from 'vue-apexcharts';

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
    const queryApi = (api, uri, params, callback) => {
        api.get(uri, {params: params})
            .then((result) => {
                if (callback) {
                    callback(result.data);
                }
            })
            .catch((error) => {
                console.error(error);
            })
    };

    // Our component exports
    export default {
        components: {
            'apexcharts': ApexCharts,
        },
        props: {
            title: {
              type: String,
              default: '',
            },
            subTitle: {
              type: String,
              default: '',
            },
            range: {
              type: String,
              default: '',
            },
            siteId: {
                type: Number,
                default: 0,
            },
            refreshIntervalSecs: {
                type: Number,
                default: 3,
            },
            apiUrl: {
                type: String,
                default: '',
            },
        },
        data: function() {
            return {
                chartOptions: {
                    chart: {
                        id: 'vuechart-dashboard',
                        type: 'area',
                        height: 160,
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
                        type: 'category',
                        labels: {
                            show: false,
                            minHeight: '20px',
                        },
                        crosshairs: {
                            width: 1
                        },
                    },
                    yaxis: {
                        min: 0,
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
                        name: 'empty',
                        data: [0]
                    }
                ],
            }
        },
        created () {
            this.getSeriesData();
        },
        mounted() {
            // Live refresh the data -- disabled, causes more problems then helps
            if (this.refreshIntervalSecs) {
                setInterval(() => {
                    this.getSeriesData();
                }, this.refreshIntervalSecs * 1000);
            }
        },
        methods: {
            // Load in our chart data asynchronously
            getSeriesData: async function() {
                const chartsAPI = Axios.create(configureApi(this.apiUrl));
                await queryApi(chartsAPI, '', {range: this.range, siteId: this.siteId}, (data) => {
                    if (data[0] !== undefined) {
                        const largest = Math.round(largestNumber([data[0]['data']])[0] + 1.5);
                        this.chartOptions = {
                            ...this.chartOptions, ...{
                                yaxis: {
                                    min: 0,
                                    max: largest,
                                    labels: {
                                        show: false,
                                        minHeight: '20px',
                                    },
                                },
                                xaxis: {
                                    categories: data[0]['labels'],
                                    type: 'category',
                                    labels: {
                                        show: false,
                                        minHeight: '20px',
                                    },
                                    crosshairs: {
                                        width: 1
                                    },
                                },
                                labels: data[0]['labels']
                            }
                        };

                        this.series = data;
                    }
                });
            }
        },
    }
</script>
