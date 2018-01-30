const types = {
  ADD_CART: 'store/ADD_CART',
  CANCEL_CART: 'store/CANCEL_CART'
}

const state = {
  products: [
    {
      title: 'The Perfect Sandwich, A Real NYC Classic',
      image: 'http://www.w3schools.com/w3images/sandwich.jpg',
      inventory: 5,
      price: 155
    },
    {
      title: 'Let Me Tell You About This Steak',
      image: 'http://www.w3schools.com/w3images/steak.jpg',
      inventory: 1,
      price: 1380
    },
    {
      title: 'Cherries, interrupted',
      image: 'http://www.w3schools.com/w3images/cherries.jpg',
      inventory: 2,
      price: 499
    },
    {
      title: 'Once Again, Robust Wine and Vegetable Pasta',
      image: 'http://www.w3schools.com/w3images/wine.jpg',
      inventory: 3,
      price: 790
    }
  ],
  shoppingCart: [],
}

const getters = {
  getProducts: state => state.products,
  getShoppingCartTotal: state => state.shoppingCart.length,
  getShoppingCart: state => state.shoppingCart,
  getCartPriceTotal: state => state.shoppingCart.reduce((a, b) => a + b.price, 0 ),
  getRecommendedProducts: state => {
    const inventoryList = state.products.filter(p => p.inventory > 0);
    const random = Math.round(Math.random() * (inventoryList.length - 1));
    return inventoryList[ random ];
  }
}

const actions = {
  addCart ({ commit }, id) {
    commit(types.ADD_CART, id);
  },
  cancelCart ({ commit }, id) {
    commit(types.CANCEL_CART, id);
  }
}

const mutations = {
  [types.ADD_CART] (state, id) {
    const product = state.products.find(item => item.title === id && item.inventory !== 0);
    product.inventory = product.inventory - 1;
    state.shoppingCart.push({
      title: product.title,
      price: product.price,
    });
  },
  [types.CANCEL_CART] (state, title) {
    const cartIndex = state.shoppingCart.findIndex(item => item.title === title);
    state.shoppingCart.splice(cartIndex, 1);
    const product = state.products.find(item => item.title === title);
    product.inventory += 1;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
