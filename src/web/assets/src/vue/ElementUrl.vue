<template>
  <div>
    <a
      :href="rowData.elementCpUrl"
      class="go"
      :title="linkTitle"
    ><span style="white-space: nowrap;"><span/><span style="white-space: normal;">{{
        rowData.elementTitle
      }}</span></span></a>
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
    linkTitle: function () {
      let title = '';

      title += this.rowData.redirectDestUrl;

      return title;
    },
  }
}
</script>
