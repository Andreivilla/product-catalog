<template>
  <!--<nav class="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/favoritos">Favoritos</router-link></li>
    </ul>
    <div class="favorito">
      <img src="@/assets/heart.svg" alt="favoritos" />
      <span v-if="totalFavoritos > 0">{{totalFavoritos}}</span>
    </div>
  </nav>-->


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" href="#">Home</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/favoritos" class="nav-link active" aria-current="page" href="#">Favoritos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/favoritos" class="nav-link active" aria-current="page" href="#">Carrinho</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>


</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore();

    const totalFavoritos = computed(() => store.getters['usuario/totalFavoritos']);

    return {
      totalFavoritos
    }

  },
};
</script>

<style scoped>
/*
.nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background: #2c3e50;
}

.nav ul {
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav a {
  font-weight: bold;
  color: #ffff;
  text-decoration: none;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.favorito {
  position: relative;
}

.favorito img {
  width: 30px;
}
.favorito span {
  width: 15px;
  height: 15px;
  position: absolute;
  background: #f04f47;
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  top: 10px;
  right: 4px;
}*/
</style>
