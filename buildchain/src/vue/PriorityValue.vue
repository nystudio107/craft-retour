<template>
  <span>
    {{ priorityValue }}
  </span>
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
    priorityValue: function () {
      let value = this.rowData.priority;
      if (this.rowData.redirectMatchType !== 'regexmatch') {
        value = '-';
      }

      return value;
    },
  }
}
</script>
