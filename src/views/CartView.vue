<template>
  <div class="container-lg">
    <div class="cart-content">
      <div class="products">
        <h2>Carrinho</h2>
        <div class="lista d-flex flex-wrap gap-3">
          <ul>
            <li v-for="product in listaCart" :key="product.id">
              <ProductCardCart
                :product="product"
                @deleteItenCart="deleteItenCart($event)"
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="price">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, cupiditate! Aspernatur necessitatibus autem aliquid maiores rem omnis, nemo quas dolore pariatur odit ipsum ad optio ab suscipit quasi sed ipsam?</p>
      </div>
    </div> 
  </div>
  {{ listaCart }}
</template>

<script setup>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  import ProductCardCart from '@/components/ProductCardCart.vue';

  const store = useStore();

  const listaCart = computed(() => store.state.product.listaCart);

  function deleteItenCart(idCart){
    console.log('cardview', store)
    store.dispatch("product/rmvCartProduct", idCart); // ✅ Namespace certo!

  }
</script>

<style scoped>
.products{
  width: 100%;
}
ul {
  list-style: none; /* remove os bullets */
  padding: 0;        /* remove o espaçamento interno */
  margin: 0;         /* opcional, dependendo do seu layout */
  width: 100%;
}
.cart-content{
  display: flex;
  justify-content: space-between;
  gap: 48px;
}

</style>