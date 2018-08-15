<template>
    <main>
        <button @click="start">Start</button>
        <button @click="stop">Stop</button>
    </main>
</template>

<script>
    import Vue from 'vue'
    import VueConfetti from 'vue-confetti'

    Vue.use(VueConfetti)

    export default {
        methods: {
            start () {
                this.$confetti.start()
            },

            stop () {
                this.$confetti.stop()
            }
        }
    }
</script>