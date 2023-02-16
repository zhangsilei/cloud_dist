import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedCategory: null,
  },
  getters: {},
  mutations: {
    SET_SELECTED_CATEGORY(state, val) {
      state.selectedCategory = val;
    },
  },
  actions: {},
  modules: {},
});
