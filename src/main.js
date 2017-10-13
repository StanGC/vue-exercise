import Vue from 'vue'
import VueRouter from 'vue-router'

// init
Vue.use(VueRouter)

// page
import Hello from './pages/Hello.vue';
import CtoF from './pages/CtoF.vue';
import App from './App.vue';

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

    { path: '/*', redirect: '/hello' }
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h( App )
});
