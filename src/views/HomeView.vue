<template>
  <div class="container-lg">
  <h2>Lista de produtos</h2>
  <div class="lista d-flex flex-wrap gap-3" >
    <div v-for="product in listProduct" :key="product.id">
      <ProductCard 
        :product="product"
        @rmvFavSelect="rmvFavSelect($event)"
        @addFavSelect="addFavSelect($event)"
        @addCartSelect="addCartSelect($event)"
      />
    </div>
  </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';

const store = useStore();

const listProduct = computed(() => store.state.product.listProduct);

function rmvFavSelect(idProduct) {
  store.dispatch('product/rmvFavProduct', idProduct);  
}
function addFavSelect(idProduct) {
  store.dispatch('product/addFavProduct', idProduct)
}
function addCartSelect(idProduct) {
  store.dispatch('product/addCartProduct', idProduct)
}

</script>

<style>

</style>