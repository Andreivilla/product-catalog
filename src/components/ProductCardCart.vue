<template>
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="product.image" class="img-fluid rounded-start card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div>
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Preço : {{ product.price }}</p>
          </div>
          <!--<p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>-->
          <button type="button" class="btn btn-danger" @click="deleteIten">X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits([
  "deleteItenCart"
]);
const props = defineProps({
  product: Object,
})

function deleteIten(){
  console.log('cartviewcomponent')
  emit("deleteItenCart", props.product.cardId);
}

</script>

<style scoped>
.card-img{
  width: 200px;
  height: 100px;
  object-fit: cover;
}
.card-body{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

</style>