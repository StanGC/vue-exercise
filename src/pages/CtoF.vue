<template>
  <div class="container">
    <h1>Temperature Conversion</h1>

    <input id="toggleTemperature" type="checkbox" v-model="isCelsius">
    <label for="toggleTemperature">切換：{{ toggleTemperature }}</label>

    <h2 v-if="isCelsius">攝氏：{{ celsius }} °C</h2>
    <h2 v-if="!isCelsius">華氏：{{ fahrenheit }} °F</h2>

    <div class="celsius">
      <span v-show="!isCelsius">攝氏：</span>
      <span v-show="isCelsius">華氏：</span>
      <input type='number' v-model="userInput" /> °C
    </div>

    <button @click="temperatureConversio( userInput );">
      Temperature Conversio
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInput: 0,
      isCelsius: false,
    }
  },
  computed: {
    fahrenheit () {
      return this.userInput * 9/5 + 32;
    },
    celsius () {
      return (this.userInput - 32) * 5/9;
    },
    toggleTemperature () {
      return this.isCelsius ? "攝氏 轉換 華氏" : "華氏 轉換 攝氏";
    }
  },
  methods: {
    temperatureConversio ( val ) {
      if ( this.isCelsius ) {
        alert('攝氏: ' + this.celsius );
      }
      else {
        alert('華氏: ' + this.fahrenheit );
      }
    }
  }
}
</script>

<style>
  .celsius {
    font-size: 1.5em;
    margin-bottom: 1em;
  }
</style>
