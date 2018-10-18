<template>
    <div>
        <a :href="rowData.redirectSrcUrl" class="go" :title="linkTitle">{{ rowData.redirectSrcUrl }}</a>
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
        computed: {
            linkTitle: function() {
                let title = '';

                title += ('User Agent: ' + this.rowData.userAgent + "\n\n");
                title += ('Message: ' + this.rowData.exceptionMessage + "\n\n");
                title += ('File Path: ' + this.rowData.exceptionFilePath + "\n\n");
                title += ('Line No.: ' + this.rowData.exceptionFileLine);

                return title;
            }
        }
    }
</script>
