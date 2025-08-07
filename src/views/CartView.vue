<!--<template>
  <div class="container-lg">
    <div class="cart-content">
      <div class="products">
        <h2>Carrinho</h2>
        <div class="lista d-flex flex-wrap gap-3">
          <ul>
            <li v-for="product in listCart" :key="product.id">
              <ProductCardCart
                :product="product"
                @deleteItenCart="deleteItenCart($event)"
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="price-container">
        <div class="price">
          <h5>Preço total: {{ totalPrice() }}</h5>
          <button type="button" class="btn btn-success" @click="finalizarClick"> 
            Finalizar Compra
          </button>
        </div>
      </div>
    </div> 
  </div>
</template>

<script setup>
  import { useStore } from 'vuex';
  import { computed } from 'vue';
  import ProductCardCart from '@/components/ProductCardCart.vue';

  const store = useStore();

  const listCart = computed(() => store.state.product.listCart);

  function totalPrice() {
    let total = 0;
    for (const product of listCart.value) {
      //console.log(total, '+', product.price)
      
      total += Number(product.price);     
      
      //console.log('=', total)
    }
    return total.toFixed(2);
  }

  function deleteItenCart(idCart){
    console.log('cardview', store)
    store.dispatch("product/rmvCartProduct", idCart); // ✅ Namespace certo!

  }

  function finalizarClick(){
    alert('Compra finalizada');
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
.price-container{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
}
.price {
  margin: 28px;
}

@media (max-width: 600px) {
  .cart-content {
    flex-direction: column;
    justify-content: flex-start; /* opcional */
    gap: 20px; /* menor espaçamento vertical */
  }
}
</style>-->
<template>
  <div></div>
</template>