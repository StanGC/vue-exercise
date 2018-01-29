<template>
<div id="shop">
  <!-- Top menu -->
  <div class="w3-white w3-xlarge w3-padding-xlarge" style="max-width:1200px;margin:auto">
    <div class="w3-right">
      <a href="#">
        <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"> {{ cartTotal }}</span>
      </a>
    </div>
    <div class="w3-center">Shop</div>
  </div>
  <!-- !PAGE CONTENT! -->
  <div class="w3-main w3-content w3-padding" style="max-width:1200px;margin-top:100px">
    <div class="w3-row-padding w3-padding-16 w3-center" id="food">
      <div
        v-for="(item, index) in foodList"
        class="w3-quarter"
        :class="{ 'w3-grayscale-max': !item.inventory }">
        <img :src="item.image" style="width: 100%;">
        <h3>{{ item.title }}</h3>
        <h4>${{ item.price }}</h4>
        <button
          class="w3-btn w3-round-large w3-large w3-padding-large"
          :class="{
            'w3-red':  item.inventory == 1,
            'w3-green': item.inventory >= 2,
            'w3-dark-grey': !item.inventory
          }"
          :disabled="!item.inventory"
          @click="addCart( item.title )">
          <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
          <span v-if="item.inventory >= 2">每日限量 {{ item.inventory }} 客</span>
          <span v-if="item.inventory == 1">最後 {{ item.inventory }} 客</span>
          <span v-if="!item.inventory">Sold out</span>
        </button>
      </div><!-- end preduct -->
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters({
    foodList: 'getProducts',
    cartTotal: 'getShoppingCartTotal'
  }),
  methods: mapActions([
    'addCart'
  ]),
}
</script>
<style>
  /* load w3school - food blog template */
  @import url("../../static/css/w3.css");
  /* custom style */
  #shop h3 {
    font-weight: lighter;
  }
  #shop h4 {
    font-size: 28px;
  }
</style>
