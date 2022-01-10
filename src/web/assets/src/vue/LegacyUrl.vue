<template>
  <div>
    <a
      :href="rowData.editLink"
      class="go"
      :title="linkTitle"
    ><span style="white-space:nowrap"><span
      class="status"
      :class="redirectEnabled"
    /><span style="white-space:normal;">{{ rowData.redirectSrcUrl }}</span></span></a>
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
                type: Number,
                default: 0
            }
        },
        computed: {
            linkTitle: function() {
                let title = '';

                title += this.rowData.redirectSrcUrl;

                return title;
            },
            redirectEnabled: function() {
                let enabled = '';

                if (+this.rowData.enabled) {
                    return 'live';
                }

                return enabled;
            }
        }
    }
</script>
