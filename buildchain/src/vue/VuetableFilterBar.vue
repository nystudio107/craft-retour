<template>
  <div class="filter-bar">
    <div class="ui form">
      <div class="inline field">
        <label class="text-gray-600">{{ searchFor }}</label>
        <input
          v-model="filterText"
          type="text"
          class="text nicetext mx-2"
          placeholder=""
          @keyup="doFilter"
        >
        <button
          class="btn delete icon retour-reset"
          @click="resetFilter"
        >
          {{ stringReset }}
        </button>
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
      stringSearchFor: Craft.t('retour', 'Search for:'),
      stringReset: Craft.t('retour', 'Reset'),
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
