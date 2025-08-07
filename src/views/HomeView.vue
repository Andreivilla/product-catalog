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
import { useProductStore } from '@/stores/product';
import ProductCard from '@/components/ProductCard.vue';

const productStore = useProductStore()

const listProduct = productStore.listProduct;

function rmvFavSelect(idProduct) {
  productStore.removeFav(idProduct);
}

function addFavSelect(idProduct) {
  productStore.addFav(idProduct);
}

function addCartSelect(idProduct) {
  productStore.addCart(idProduct);
}


</script>

<style scoped>

</style>