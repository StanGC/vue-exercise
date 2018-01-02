import * as types from './mutations_type.js'
import Vue from 'vue'

export const state = {
  count: 0
}

export const mutations = {
  [types.INCREASE] (state) {
    state.count += 1;
  },
  [types.DECREASE] (state) {
    state.count -= 1;
  },
}
