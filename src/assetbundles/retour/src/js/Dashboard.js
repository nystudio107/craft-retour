console.log("Dashboard says hello");

async function initDataTables() {
    const dataTables = await import(/* webpackChunkName: "datatables" */ 'datatables');

    return dataTables;
}

async function initApexCharts() {
    const apexCharts = await import(/* webpackChunkName: "apexcharts" */ 'apexcharts');

    return apexCharts;
}

initDataTables().then(dataTables => {
    console.log("Dashboard DataTables hello!");
});

initApexCharts().then(apexCharts => {
    console.log("Dashboard ApexCharts hello!");
});
