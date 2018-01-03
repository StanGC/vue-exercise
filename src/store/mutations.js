import * as types from './mutations_type.js'
import Vue from 'vue'

export const state = {
  count: 0
}

export const mutations = {
  [types.INCREASE] (state, num) {
    state.count += num;
    console.log('INCREASE', num, 'state?', state.count);
  },
  [types.DECREASE] (state, num) {
    state.count -= num;
    console.log('DECREASE', num, 'state?', state.count);
  },
  [types.COUNT_RESET] (state) {
    state.count = 0;
    console.log('COUNT_RESET - state?', state.count);
  },
}
