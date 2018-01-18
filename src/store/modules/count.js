const types = {
  INCREASE: 'count/INCREASE',
  DECREASE: 'count/DECREASE',
  COUNT_RESET: 'count/COUNT_RESET'
}

const state = {
  count: 0
}

const getters = {
  getCount: state => state.count
}

const actions = {
  actionIncrease ({ commit }, num) {
    commit(types.INCREASE, num);
  },
  actionDecrease ({ commit }, num) {
    commit(types.DECREASE, num);
  },
  actionCountReset ({ commit }) {
    commit(types.COUNT_RESET);
  }
}

// mutations
const mutations = {
  [types.INCREASE] (state, num) {
    state.count += num;
    console.log('newINCREASE', num, 'state?', state.count);
  },
  [types.DECREASE] (state, num) {
    state.count -= num;
    console.log('newDECREASE', num, 'state?', state.count);
  },
  [types.COUNT_RESET] (state) {
    state.count = 0;
    console.log('newCOUNT_RESET - state?', state.count);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
