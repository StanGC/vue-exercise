<template>
  <div>
    <div v-if="loading" class="loader loader-curtain is-active"></div>
    <nav class="navbar navbar-default ">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" :to="{path: '/'}">index page</router-link>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link :to="{path: '/hello'}">Hello</router-link></li>
            <li><router-link :to="{name: 'c2f'}">CtoF</router-link></li>
            <li><router-link :to="{name: 'learnComponent'}">Component</router-link></li>
            <li><router-link :to="{name: 'count'}">Count</router-link></li>
            <li><router-link :to="{name: 'todo'}">Todo</router-link></li>
            <li><router-link :to="{name: 'shop'}">Shop</router-link></li>
            <li><router-link :to="{name: 'cart'}">Cart</router-link></li>
            <li><router-link :to="{name: 'open1999'}">open1999</router-link></li>
            <li><router-link :to="{name: 'login'}">login</router-link></li>
          </ul>
          <slot name="navbar-form"></slot>
          <slot name="navbar-right"></slot>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: mapGetters({
      loading: 'getLoading'
    }),
  }
</script>

<style lang="scss" src="./assets/css/bootstrap/stylesheets/_bootstrap.scss"></style>
