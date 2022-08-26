<template>
  <div
    class="flex overflow-hidden w-full flex-no-wrap items-start"
    style="max-width: 80%;"
  >
    <div class="flex-grow">
      <div>
        <h2>CSV File Fields</h2>
        <draggable
          :list="dataArray"
          :options="options"
          class="retour-import-drag-area"
          @start="drag=true"
          @end="drag=false"
        >
          <div
            v-for="(element, index) in dataArray"
            :key="element.id"
            class="retour-import-list-group-item whitespace-no-wrap clearafter"
            :class="{'retour-empty-item': element.name === '' }"
          >
            <a class="move icon mr-2"/>
            <span
              class="truncate inline-block leading-tight align-bottom"
              style="width: 80%;"
            >{{ element.name }}</span>
            <div
              v-if="element.name !== ''"
              class="float-right"
            >
              <a
                class="delete icon"
                @click="remove(index)"
              />
            </div>
          </div>
          <div
            v-for="index in extraData"
            :key="index"
            class="retour-import-field-group-item clearafter retour-empty-item"
          >
            &nbsp;
          </div>
        </draggable>
        <input
          v-for="(element, index) in dataArray"
          :key="index"
          :value="element.name"
          :name="'columns['+index+']'"
          type="hidden"
        >
      </div>
    </div>
    <div class="flex-shrink">
      <div>
        <h2>&nbsp;</h2>
        <div>
          <div
            v-for="(element, index) in fieldsArray"
            :key="index"
            class="retour-import-arrow-item clearafter"
          >
            &rarr;
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <div>
        <h2>Retour Redirect Fields</h2>
        <div>
          <div
            v-for="(element, index) in fieldsArray"
            :key="index"
            class="retour-import-field-group-item clearafter"
          >
            {{ element }}
          </div>
          <div
            v-for="index in extraFields"
            :key="index"
            class="retour-import-field-group-item clearafter retour-empty-item"
          >
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';

// Our component exports
export default {
  components: {
    'draggable': Draggable,
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
  },
  data: function () {
    return {
      dataArray: this.data.map((e) => {
        e.name = this.truncate(e.name, 50, true);
        return e
      }),
      options: {
        group: 'fields'
      },
      fieldsArray: [
        Craft.t('Legacy URL Pattern'),
        Craft.t('Redirect To'),
        Craft.t('Match Type'),
        Craft.t('HTTP Status'),
        Craft.t('Site ID'),
        Craft.t('Legacy URL Match Type'),
        Craft.t('Hits'),
      ]
    }
  },
  computed: {
    extraFields: function () {
      const diff = this.dataArray.length - this.fieldsArray.length;
      return diff >= 0 ? diff : 0;
    },
    extraData: function () {
      const diff = this.fieldsArray.length - this.dataArray.length;
      return diff >= 0 ? diff : 0;
    }
  },
  created: function () {
    // Pad the array with extra slots
    let id = this.dataArray.length;
    while (this.extraData) {
      this.dataArray.push({
        id: id,
        name: ''
      });
      id++;
    }
  },
  methods: {
    remove: function (index) {
      this.dataArray[index].name = '';
      //this.dataArray.splice(index, 1);
    },
    truncate: function (str, n, useWordBoundary) {
      if (str.length <= n) {
        return str;
      }
      const subString = str.substr(0, n - 1);
      return (useWordBoundary
        ? subString.substr(0, subString.lastIndexOf(" "))
        : subString) + "&hellip;";
    }
  },
}
</script>
