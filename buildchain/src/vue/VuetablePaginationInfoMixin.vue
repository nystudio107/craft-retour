<script>
export default {
  props: {
    css: {
      type: Object,
      default() {
        return {
          infoClass: 'left floated left py-5 text-gray-600'
        }
      }
    },
    infoTemplate: {
      type: String,
      default() {
        return Craft.t('retour', 'Displaying') + " {from} " + Craft.t('retour', 'to') + " {to} " + Craft.t('retour', 'of') + " {total} " + Craft.t('retour', 'items');
      }
    },
    noDataTemplate: {
      type: String,
      default() {
        return Craft.t('retour', 'No relevant data');
      }
    },
  },
  data: function () {
    return {
      tablePagination: null
    }
  },
  computed: {
    paginationInfo() {
      if (this.tablePagination == null || this.tablePagination.total == 0) {
        return this.noDataTemplate
      }

      return this.infoTemplate
        .replace('{from}', this.tablePagination.from || 0)
        .replace('{to}', this.tablePagination.to || 0)
        .replace('{total}', this.tablePagination.total || 0)
    },
  },
  methods: {
    setPaginationData(tablePagination) {
      this.tablePagination = tablePagination
    },
    resetData() {
      this.tablePagination = null
    }
  },
}
</script>
