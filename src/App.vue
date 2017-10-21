<template>
  <div>
    <router-link :to="{path: '/hello'}">Hello</router-link>
    <router-link :to="{name: 'c2f'}">CtoF</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
  body {
    font-family: 'Avenir', "微軟正黑體", Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
  .container {
    width: 768px;
    margin: 0 auto;
  }
</style>
