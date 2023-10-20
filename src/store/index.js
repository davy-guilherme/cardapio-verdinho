import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedProduct: {},
    showSelectedProduct: false,
  },
  getters: {
    getSelectedProduct(state) {
      return state.selectedProduct
    },
    getShowSelectedProduct(state) {
      return state.showSelectedProduct
    },
  },
  mutations: {
    SET_SELECTED_PRODUCT (state, selectedProduct) {
      state.selectedProduct = selectedProduct
    },
    SET_SHOW_SELECTED_PRODUCT (state, show) {
      state.showSelectedProduct = show
    },
  },
  actions: {
    showSelectedProduct( {commit}, selectedProduct ) {
      commit('SET_SELECTED_PRODUCT', selectedProduct)
      commit('SET_SHOW_SELECTED_PRODUCT', true)
    },
    closeSelectedProduct( {commit} ) {
      commit('SET_SHOW_SELECTED_PRODUCT', false)
    },
  },
  modules: {
  }
})
