import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/Favoritos",
    name: "Favoritos",
    component: () =>
      import("../views/FavoritosView.vue"),
  },
  {
    path: "/Carrinho",
    name: "Carrinho",
    component: () =>
      import("../views/CartView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory('/product-catalog/'),
  routes,
});

export default router;
