<template>
  <h2>Lista de produtos</h2>
  <div class="lista">
    <div v-for="item in listaProdutos" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const listaProdutos = computed(() => store.state.product.listaProdutos);

</script>

<style>

</style>