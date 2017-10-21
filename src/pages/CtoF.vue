<template>
  <div class="container">
    <h2>華氏：{{ fahrenheit }} °F</h2>
    <div class="celsius">
      攝氏：<input type='number' v-model="celsius" /> °C
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      celsius: 0
    }
  },
  computed: {
    fahrenheit () {
      return this.celsius * 9/5 + 32;
    }
  }
}
</script>

<style>
  .celsius {
    font-size: 1.5em;
  }
</style>
