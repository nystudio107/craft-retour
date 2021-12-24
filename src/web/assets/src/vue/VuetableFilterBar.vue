<template>
  <div class="filter-bar">
    <div class="ui form">
      <div class="inline field">
        <label class="text-gray-600">Search for:</label>
        <input type="text" v-model="filterText" class="text nicetext mx-2" @keyup="doFilter" placeholder="">
        <button class="btn delete icon" @click="resetFilter">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialFilterText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      filterText: this.initialFilterText,
    }
  },
  methods: {
    doFilter() {
      this.$events.fire('filter-set', this.filterText);
    },
    resetFilter() {
      this.filterText = '';
      this.$events.fire('filter-reset');
    }
  }
}
</script>
