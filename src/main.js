import './assets/css/bootstrap/stylesheets/_bootstrap.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import shop from './pages/shop.vue';
import cart from './pages/cart.vue';
import open1999 from './pages/open1999.vue';

// directive
import './directive/custom-directive.js';

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
      meta: { requiresAuth: false },
      children: [ // 將會把對應到 path 的 component 放到 shop 的 <router-view />
        {
          path: 'cart', // url= shop/cart
          component: cart,
          meta: { requiresAuth: false },
        },
        {
          path: 'todo', // url= shop/todo
          component: todo,
          meta: { requiresAuth: false },
        },
        {
          path: 'hello', // url= shop/hello
          component: Hello,
          meta: { requiresAuth: false },
        },
      ],
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
    {
      path: '/multiple',
      name: 'multiple',
      // 多重顯示設定為：component`s`
      components: {
        viewLeft: shop,
        viewRight: cart,
      },
      meta: { requiresAuth: false },
    },

    { path: '/*', redirect: '/multiple' }
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
