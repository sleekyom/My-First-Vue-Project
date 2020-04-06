import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
import axios from "axios";
import MainPage from "./components/MainPage.vue";
import CategoryPage from "./components/CategoryPage.vue";
import ProductPage from "./components/ProductPage.vue";
import ShoppingCartPage from "./components/ShoppingCartPage.vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);



const router = new VueRouter({
  routes: [
    { path: "/", component: MainPage },
    { path: "/categories/:categoryAlias", component: CategoryPage },
    { path: "/products/:productId", component: ProductPage },
    { path: "/cart", component: ShoppingCartPage },
  ],
  mode: "history",
});

axios.defaults.headers.common["Authorization"] = "Bearer amdas72@gmail.com";

axios.post("https://euas.person.ee/user/carts").then((response) => {
  new Vue({
    render: (h) => h(App),
    router: router,
    data: {
      cart: response.data,
      saveCart() {
        axios.put(
          "https://euas.person.ee/user/carts/" + this.cart.id,
          this.cart
        );
      },
    },
  }).$mount("#app");
});
