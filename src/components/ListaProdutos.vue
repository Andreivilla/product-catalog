<template>
  <h2>Lista de produtos</h2>
  <div class="lista">
    <div v-for="item in listaProdutos" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script setup>

</script>

<style>
</style>