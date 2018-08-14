import 'babel-polyfill';

const main = async () => {
    console.log("Dashboard says hello");
    const dataTables = await import(/* webpackChunkName: "datatables" */ 'datatables');
    console.log("Dashboard DataTables hello!");
    const apexCharts = await import(/* webpackChunkName: "apexcharts" */ 'apexcharts');
    console.log("Dashboard ApexCharts hello!");

};

main();
