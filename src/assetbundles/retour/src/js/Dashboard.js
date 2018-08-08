console.log("hello, world");

async function initDataTables() {
    const dataTables = await import(/* webpackChunkName: "datatables" */ 'datatables');

    return dataTables;
}

async function initApexCharts() {
    const apexCharts = await import(/* webpackChunkName: "apexcharts" */ 'apexcharts');

    return apexCharts;
}

initDataTables().then(dataTables => {
    console.log("DataTables hello!");
});

initApexCharts().then(apexCharts => {
    console.log("ApexCharts hello!");
});
