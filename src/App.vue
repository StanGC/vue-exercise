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

<style></style>
