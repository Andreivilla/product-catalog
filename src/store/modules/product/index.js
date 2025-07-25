import state from "./state";


export default {
  namespaced: true, // 👈 ESSENCIAL
  state,
  getters: {
    isFav: (state) => (id) => {
      return state.listaFav.some(x => x.id === id);
    },
    isCart: (state) => (id) => {
      return state.listaCart.some(x => x.id === id)
    }
  },
  mutations: {
    ADD_FAV(state, id){
      const select = state.listaProdutos.find((x) => x.id === id);
      state.listaFav = [...state.listaFav, select];
    },
    RMV_FAV(state, id){
      state.listaFav = state.listaFav.filter((x)=>x.id!==id);
    },
    ADD_CART(state, id){
      const select = state.listaProdutos.find((x) => x.id === id);
      const cardId = state.listaCart.length + 1;

      const cartItem = {
        ...select,
        cardId,
      };

      state.listaCart = [...state.listaCart, cartItem];
    },
    RMV_CART(state, cardId){
      console.log('rmv', cardId)
      state.listaCart = state.listaCart.filter((x)=>x.cardId!==cardId);
    }
  },
  actions: {
    addFavProduct(context, id) {
      context.commit('ADD_FAV', id)
    },
    rmvFavProduct(context, id) {
      context.commit('RMV_FAV', id)
    },

    addCartProduct(context, id) {
      context.commit('ADD_CART', id)
    },
    rmvCartProduct(context, id) {
      context.commit('RMV_CART', id)
    }
  },
  modules: {
    // exemplo: auth, catalog, etc.
  }
}