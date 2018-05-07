import * as types from './mutations_types.js';
import Vue from 'vue';

export const state = {
  loading: false,
  token: '',
  lang: 'en',
}

export const actions = {
  toggleLoading ({ commit }, isLoading) {
    commit(types.LOADING, isLoading);
  },
  actionLogin ({ commit }, { email, password}) {
    console.log('1. actionLogin');
    commit(types.LOADING, true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@test.com' && password === '123456') {
          console.log('2. Promise resolve');
          commit(types.TOKEN, '3345678');
          commit(types.LOADING, false);
          resolve();
        }
        else {
          commit(types.LOADING, false);
          reject();
        }
      }, 1500);
    });
  },
  setLanguage ({ commit }, lang) {
    commit(types.LANGUAGE, lang);
  },
}

export const mutations = {
  [types.LOADING] (state, isLoading) {
    state.loading = isLoading;
  },
  [types.TOKEN] (state, token) {
    state.token = token;
  },
  [types.LANGUAGE] (state, setlang) {
    state.lang = setlang;
    Vue.config.lang = state.lang;
  },
}
