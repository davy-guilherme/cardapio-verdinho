import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedProduct: {},
    showSelectedProduct: false,
    keyWord: '',
  },
  getters: {
    getSelectedProduct(state) {
      return state.selectedProduct
    },
    getShowSelectedProduct(state) {
      return state.showSelectedProduct
    },
    getKeyWord(state) {
      return state.keyWord
    },
  },
  mutations: {
    SET_SELECTED_PRODUCT (state, selectedProduct) {
      state.selectedProduct = selectedProduct
    },
    SET_SHOW_SELECTED_PRODUCT (state, show) {
      state.showSelectedProduct = show
    },
    SET_KEY_WORD (state, keyWord) {
      state.keyWord = keyWord
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
    setKeyWord( {commit}, keyWord ) {
      if (keyWord != null && keyWord != '')
      commit('SET_KEY_WORD', keyWord)
    },
  },
  modules: {
  }
})
