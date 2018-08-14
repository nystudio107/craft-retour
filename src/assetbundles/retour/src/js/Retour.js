import 'babel-polyfill';
// Import our CSS
import styles from '../css/app.pcss';

const main = async () => {
    console.log("hello, world");
    const dataTables = await import(/* webpackChunkName: "datatables" */ 'datatables');
    console.log("DataTables hello!");
    const apexCharts = await import(/* webpackChunkName: "apexcharts" */ 'apexcharts');
    console.log("ApexCharts hello!");
};

main();
