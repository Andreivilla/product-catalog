import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
  listProduct: [
    {
      id: 0,
      name: 'Ipad',
      price: 10.0,
      image: 'https://static.photos/technology/320x240/0',

    },
    {
      id: 1,
      name: 'Magic Keyboard',
      price: 2.5,
      image: 'https://static.photos/technology/200x200/69'
    },
    {
      id: 2,
      name: 'Apple Studio',
      price: 18.75,
      image: 'https://static.photos/technology/200x200/14'
    },
    {
      id: 3,
      name: 'MacBook',
      price: 1.99,
      image: 'https://static.photos/technology/320x240/44'
    },
    {
      id: 4,
      name: 'Microfone',
      price: 1.99,
      image: 'https://static.photos/technology/320x240/68'
    },
        {
      id: 5,
      name: 'Beyerdynamic DT 770 Pro',
      price: 1.99,
      image: 'https://static.photos/technology/320x240/132'
    },
    {
      id: 6,
      name: 'Processador Ryzen',
      price: 1.99,
      image: 'https://static.photos/technology/320x240/130'
    }
  ],
  listFav: [],
  listCart: []
  }),
  getters: {
    isFav: (state) => {
      return (id) => state.listFav.some(product => product.id === id)
    }
  },
  actions: {
    addFav(id) {
      if(!this.listFav.includes(id)){
        this.listFav.push(this.listProduct.find(product => product.id === id));
      }
    },
    removeFav(id) {
      this.listFav = this.listFav.filter(item => item.id !== id);
    },
    addCart(id) {
      const select = this.listProduct.find((x) => x.id === id);
      const cartId = this.listCart.length + 1;
      
      const cartItem = {
        ...select,
        cartId,
      };

      this.listCart = [...this.listCart, cartItem];
    },
    removeCart(cartId){
      this.listCart = this.listCart.filter((x)=>x.cartId!==cartId);
    },
  },
})