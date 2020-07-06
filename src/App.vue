<template>
  <div id="app">
    <h1>Vue 3 v-model behaviour</h1>
    <a href="https://github.com/flatdragon/vue-next-v-model-incorrect/blob/master/src/App.vue">See GitHub repo for source code</a>
    <h2>Using REF</h2>
    <div>Input value: {{ value }}</div>
    <input type="text" v-model="value">
    <h2>Using REACTIVE</h2>
    <div>Input value: {{ state.value }}</div>
    <input type="text" v-model="state.value">
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    name: 'App',
    setup () {
      const value = ref(undefined)
      const state = reactive({})

      return {
        value,
        state,
      }
    },
  }
</script>
