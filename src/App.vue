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
            <li><router-link :to="{name: 'multiple'}">multiples views</router-link></li>
            <li><router-link :to="{path: '/shop/cart'}">nested routes</router-link></li>
            <li><router-link :to="{name: 'filter'}">filter</router-link></li>
          </ul>
          <slot name="navbar-form"></slot>
          <slot name="navbar-right"></slot>
        </div>
      </div>
    </nav>

    <router-view></router-view>

    <!--
      multiples views
      多重顯示，在 router-view 設定 name 之後可以嵌入特定 Page
      沒有設定 name 的 view 使用 `default` 設定
    -->
    <div class="row">
      <router-view name="viewLeft" class="col-md-6 viewLeft"></router-view>
      <router-view name="viewRight" class="col-md-6 viewRight"></router-view>
    </div>
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

<style lang="scss">
  .nested-routes,
  .viewRight {
    border: solid 2px red;
  }
  .viewLeft {
    border: solid 2px blue;
  }
</style>
