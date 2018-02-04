import Vue from 'vue';
import Vuex from 'vuex';
// root
import * as getters from './getters.js';
import {state, actions, mutations} from './root.js';
// modules
import count from './modules/count';
import todo from './modules/todo';
import shop from './modules/shop';
import opendata from './modules/opendata.js';

Vue.use( Vuex );

export default new Vuex.Store({
  // root
  getters,
  state,
  actions,
  mutations,

  modules: {
    shop,
    count,
    todo,
    opendata,
  },
  strict: true
});
