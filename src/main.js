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
      component: Hello,
      meta: { requiresAuth: true },
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF,
      meta: { requiresAuth: true },
    },
    {
      path: '/learnComponent',
      name: 'learnComponent',
      component: learnComponent,
      meta: { requiresAuth: true },
    },
    {
      path: '/count',
      name: 'count',
      component: count,
      meta: { requiresAuth: true },
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo,
      meta: { requiresAuth: true },
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      meta: { requiresAuth: true },
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta: { requiresAuth: false },
    },
    {
      path: '/open1999',
      name: 'open1999',
      component: open1999,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { requiresAuth: false },
    },

    { path: '/*', redirect: '/login' }
  ]
});

router.beforeEach((to, from, next) => {
  console.log('to=', to.fullPath, '| from=', from.fullPath);
  if (to.matched.some(record => {
    console.log(record.name, record.meta.requiresAuth);
    return record.meta.requiresAuth;
  })) {
    console.log('token?', store.state.token);
    if (store.state.token === '') {
      next({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h( App )
});
