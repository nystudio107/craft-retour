import Vue from 'vue';
import ImportDraggable from '@/vue/ImportDraggable.vue';

// Create our vue instance
new Vue({
    el: "#cp-nav-content",
    components: {
        'import-draggable': ImportDraggable,
    },
});
