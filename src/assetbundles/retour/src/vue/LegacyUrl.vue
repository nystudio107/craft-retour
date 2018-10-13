<template>
    <div>
        <a :href="rowData.editLink" class="go" :title="rowData.redirectSrcUrl">{{ rowData.redirectSrcUrl }}</a>
    </div>
</template>

<script>
    export default {
        props: {
            rowData: {
                type: Object,
                required: true
            },
            rowIndex: {
                type: Number
            }
        },
    }
</script>
