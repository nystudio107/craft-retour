<template>
    <div class="flex overflow-hidden w-full flex-no-wrap items-start" style="max-width: 600px;">
        <div class="flex-grow">
            <div>
                <h2>CSV File Fields</h2>
                <draggable :list="dataArray" :options="options" @start="drag=true" @end="drag=false" class="retour-import-dragArea">
                    <div v-for="(element, index) in dataArray" :key="element.id" class="retour-import-list-group-item clearafter" :class="{'retour-empty-item': element.name === '' }">
                        <a class="move icon mr-2"></a> {{ element.name }}
                        <div class="float-right" v-if="element.name !== ''">
                            <a @click="remove(index)" class="delete icon"></a>
                        </div>
                    </div>
                    <div v-for="index in extraData" class="retour-import-field-group-item clearafter retour-empty-item">
                        &nbsp;
                    </div>
                </draggable>
                <input v-for="(element, index) in dataArray" :value="element.name" :name="'columns['+index+']'" type="hidden">
            </div>
        </div>
        <div class="flex-shrink">
            <div>
                <h2>&nbsp;</h2>
                <div>
                    <div v-for="(element, index) in fieldsArray" class="retour-import-arrow-item clearafter">
                        &rarr;
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-grow">
            <div>
                <h2>Retour Redirect Fields</h2>
                <div>
                    <div v-for="(element, index) in fieldsArray" class="retour-import-field-group-item clearafter">
                        {{ element }}
                    </div>
                    <div v-for="index in extraFields" class="retour-import-field-group-item clearafter retour-empty-item">
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
        props: {
            data: Array,
        },
        methods: {
            remove: function(index) {
                this.dataArray[index].name = '';
                //this.dataArray.splice(index, 1);
            },
        },
        created: function() {
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
        data: function() {
            return {
                dataArray: this.data,
                options: {
                    group: 'fields'
                },
                fieldsArray: [
                    'Legacy URL Pattern',
                    'Redirect To',
                    'Match Type',
                    'HTTP Status',
                    'Site ID',
                ]
            }
        },
    }
</script>
