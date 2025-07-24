import state from "./state";


export default {
  namespaced: true, // 👈 ESSENCIAL
  state,
  getters: {
    // exemplo: total(state) { return ... }
  },
  mutations: {
    ADD_FAV(state, id){
      const select = state.listaProdutos.find((x) => x.id === id);
      state.listaFav = [...state.listaFav, select];
    },
    RMV_FAV(state, id){
      state.listaFav = state.listaFav.filter((x)=>x.id!==id);
    }
  },
  actions: {
    addFavProduct(context, id) {
      context.commit('ADD_FAV', id)
    },
    rmvFavProduct(context, id) {
      context.commit('RMV_FAV', id)
    }
  },
  modules: {
    // exemplo: auth, catalog, etc.
  }
}