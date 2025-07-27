<template>
  <NavBar />
  <router-view />
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";

</script>

<style>
.container-lg{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lista {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
