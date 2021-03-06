import Vuex from 'Vuex';

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    count: (state, getters) => {
      return state.count
    }
  },
  actions: {
    async increment (context) {
      context.commit('increment')
    }
  }
});
