import ImportDraggable from '@/vue/ImportDraggable.vue';

// Create our vue instance
const vm = new Vue({
    el: "#cp-nav-content",
    components: {
        'import-draggable': ImportDraggable,
    },
    data: {
    },
    methods: {
    },
    mounted() {
    },
});

// Accept HMR as per: https://webpack.js.org/api/hot-module-replacement#accept
if (module.hot) {
    module.hot.accept();
}
