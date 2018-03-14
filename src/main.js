import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import shop from './pages/shop.vue';
import cart from './pages/cart.vue';
import open1999 from './pages/open1999.vue';

// init
Vue.use(VueRouter)

// root page
import App from './App.vue';

// page
import Hello from './pages/Hello.vue';
import CtoF from './pages/CtoF.vue';
import learnComponent from './pages/learnComponent.vue';
import count from './pages/count.vue';
import todo from './pages/todo.vue';
import login from './pages/login.vue';

const router = new VueRouter({

  mode: 'history',
  base: __dirname,

  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF
    },
    {
      path: '/learnComponent',
      name: 'learnComponent',
      component: learnComponent
    },
    {
      path: '/count',
      name: 'count',
      component: count
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/open1999',
      name: 'open1999',
      component: open1999
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },

    { path: '/*', redirect: '/login' }
  ]
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h( App )
});
