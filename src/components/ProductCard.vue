<template>
  <div class="card" style="width: 18rem;">
    <img :src="product.image" class="card-img-top" :alt="product.image">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
      <div class=" buttons">
        <a href="#" class="btn btn-primary">Go somewhere</a>
        <button class="btn btn-secondary" @click="favClick">
          <svg v-if="!favIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
          </svg>
          <svg v-if="favIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue"

const favIcon = ref(false)

const emit = defineEmits(["addFavSelect", "rmvFavSelect"]) // 👈 nome padrão: emit

const props = defineProps({
  product: Object
})

function favClick() {
  favIcon.value = !favIcon.value;

  if (favIcon.value) {
    emit("addFavSelect", props.product.id); 
    //console.log('emite sele')
  } else {
    emit("rmvFavSelect", props.product.id);
    //console.log('emite rmv ')
  }
}
</script>

<style scoped>
.card-img-top {
  height: 180px; /* ou o tamanho que funcionar melhor pro seu layout */
  object-fit: cover;
  width: 100%;
}
.buttons {
  display: flex;
  justify-content: space-between;
}

</style>