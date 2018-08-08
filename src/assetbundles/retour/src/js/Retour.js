// Import our CSS
import styles from '../css/app.pcss';

console.log("hello, world");

async function initDatatables() {
    const datatables = await import(/* webpackChunkName: "datatables" */ 'datatables');

    return datatables;
}

initDatatables().then(dataTable => {
    console.log("Hello again!");
});
