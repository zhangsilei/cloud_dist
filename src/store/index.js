import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedCategory: null,
    allCategories: [],
  },
  getters: {},
  mutations: {
    SET_SELECTED_CATEGORY(state, val) {
      state.selectedCategory = val;
    },
    SET_ALL_CATEGORIES(state, val) {
      state.allCategories = val;
    },
  },
  actions: {},
  modules: {},
});
