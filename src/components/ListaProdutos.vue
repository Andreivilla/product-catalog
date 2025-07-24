<template>
  <div class="container-lg">
  <h2>Lista de produtos</h2>
  <div class="lista d-flex flex-wrap gap-3" >
    <div v-for="product in listaProdutos" :key="product.id">
      <product 
        :product="product"
        @rmvFavSelect="rmvFavSelect($event)"
        @addFavSelect="addFavSelect($event)"
      />
    </div>
  </div>
  </div>
  {{ listaFav }}
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import product from '@/components/ProductCard.vue';


const store = useStore();

const listaProdutos = computed(() => store.state.product.listaProdutos);
const listaFav = computed(() => store.state.product.listaFav);

function rmvFavSelect(idProduct) {
  store.dispatch('product/rmvFavProduct', idProduct);  
}
function addFavSelect(idProduct) {
  store.dispatch('product/addFavProduct', idProduct)
}

</script>

<style>

</style>