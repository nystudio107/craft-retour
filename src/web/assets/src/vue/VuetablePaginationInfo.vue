<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    :class="['vuetable-pagination-info', css.infoClass]"
    v-html="paginationInfo"
  />
  <!--eslint-enable-->
</template>

<script>
import PaginationInfoMixin from '@/vue/VuetablePaginationInfoMixin.vue'

export default {
  mixins: [PaginationInfoMixin],
}
</script>
