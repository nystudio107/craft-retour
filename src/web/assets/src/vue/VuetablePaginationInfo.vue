<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div
    :class="['vuetable-pagination-info', css.infoClass]"
    v-html="paginationInfo"
  />
</template>

<script>
import PaginationInfoMixin from '@/vue/VuetablePaginationInfoMixin.vue'

export default {
  mixins: [PaginationInfoMixin],
}
</script>
