<template>
  <div class="container-lg">
  <h2>Lista de favoritos</h2>
  <div class="lista d-flex flex-wrap gap-3" >
    <div v-for="product in listFav" :key="product.id">
      <ProductCard 
        :product="product"
        @rmvFavSelect="rmvFavSelect($event)"
        @addCartSelect="addCartSelect($event)"
      />
    </div>
  </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductStore } from '@/stores/product';
import ProductCard from '@/components/ProductCard.vue';

const productStore = useProductStore()
const listFav = computed(() => productStore.listFav);

function rmvFavSelect(idProduct) {
  productStore.removeFav(idProduct)
}
function addCartSelect(idProduct) {
  productStore.addCart(idProduct);
}

</script>

<style scoped>
</style>