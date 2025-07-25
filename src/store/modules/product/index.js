import state from "./state";


export default {
  namespaced: true, // 👈 ESSENCIAL
  state,
  getters: {
    isFav: (state) => (id) => {
      return state.listaFav.some(x => x.id === id);
    },
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