import Vue from 'vue'
import mutations from './mutations'
import * as types from './mutations_type.js'

export const actionIncrease = ({ commit }, num) => {
  console.log('actionIncrease', num);
  commit(types.INCREASE, num);
}

export const actionDecrease = ({ commit }, num) => {
  console.log('actionDecrease', num);
  commit(types.DECREASE, num);
}

export const actionCountReset = ({ commit }) => {
  console.log('actionCountReset');
  commit(types.COUNT_RESET);
}

// todo
export const addTodo = ({ commit }, newTodo) => {
  commit(types.CREATE_TODO, newTodo);
}

export const toggleTodo = ({ commit }, obj) => {
  console.log('toggleTodo', obj);
  commit(types.TOGGLE_TODO, obj);
}

export const deleteTodo = ({ commit }, key) => {
  commit(types.DELETE_TODO, key);
}

export const updateTodo = ({ commit }, obj) => {
  console.log('updateTodo', obj);
  commit(types.UPDATE_TODO, obj);
}
