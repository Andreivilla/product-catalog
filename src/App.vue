<template>
  <!-- Sem duplicar div #app -->
  <div class="d-flex flex-column min-vh-100">
    <NavBar />
    <main class="flex-fill">
      <router-view />
    </main>
    <FooterBase />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import FooterBase from "./components/FooterBase.vue";

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
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
