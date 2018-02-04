// root types
import * as rootypes from '../mutations_types.js';

const types = {
  OPEN_1999: 'open/OPEN_1999',
}

const state = {
  opendata: [],
}

const getters = {
  getOpen1999: state => state.opendata,
}

const actions = {
  open1999 ({ commit }) {
    commit(rootypes.LOADING, true);

    // use fetch call open 1999 API
    fetch('http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery')
      .then(function(response) {
        if(response.ok) {
          return response.json();
        }
        else {
          console.error(response);
          commit(rootypes.LOADING, false);
        }
      })
      .then(function(data) {
        commit(types.OPEN_1999, data);
        commit(rootypes.LOADING, false);
      })
      .catch(function(error) {
        console.error(error);
        commit(rootypes.LOADING, false);
      });
  },
}

const mutations = {
  [types.OPEN_1999] (state, data) {
    state.opendata = data;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
