<template>
  <div class="container-lg">
  <h2>Lista de favoritos</h2>
  <div class="lista d-flex flex-wrap gap-3" >
    <div v-for="product in listaFav" :key="product.id">
      <ProductCard 
        :product="product"
        @rmvFavSelect="rmvFavSelect($event)"
        @addFavSelect="addFavSelect($event)"
        @addCartSelect="addCartSelect($event)"
      />
    </div>
  </div>
  </div>
  {{ listaCart }}
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ProductCard from '@/components/ProductCard.vue';

const store = useStore();
const listaFav = computed(() => store.state.product.listaFav);

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

<style scoped>
</style>

<!--<template>
  <h1>Lista de favoritos {{totalFavoritos}}</h1>
  <div class="lista">
    <div v-for="item in listaFavoritos" :key="item.id">
      <div class="card">
        <div class="imagem-container">
          <img :src="item.avatar" alt="imagem avatar" />
        </div>
        <span>{{ item.first_name + " " + item.last_name }}</span>
        <a class="favorito" @click="removeFavorito(item.id)">
          <span>X</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from 'vuex';
export default {
  components: {},
  setup() {

    const store = useStore();

    const listaFavoritos = computed(() => store.state.usuario.listaFavoritos);
    const totalFavoritos = computed(() => store.getters['usuario/totalFavoritos']);

    onMounted(() => {
    });

    function removeFavorito(idUsuario) {
      store.dispatch('usuario/removeFavorito', idUsuario);
    }

    return {
      listaFavoritos,
      removeFavorito,
      totalFavoritos
    };
  },
};
</script>

<style scoped>
/*
.favorito span {
  font-size: 25px;
  color: #f04f47;
  text-align: center;
}

h1 {
  text-align: center;
}

.lista {
  display: grid;
  margin: 0 20px;
  grid-template-columns: repeat(4, minmax(200px, 400px));
  justify-content: center;
  align-items: center;
  gap: 20px;
}*/
</style>
-->