<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <table class="table">
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Amount</th>
        <th>Actions</th>
      </tr>
      <tr v-for="item in this.$root.$data.cart.items" :key="item.productId">
        <td>{{item.productId}}</td>
        <td>{{item.price}}</td>
        <td>{{item.qty}}</td>
        <td>{{item.total}}</td>
        <td>Actions here</td>
      </tr>
    </table>
  </div>
</template>

<script>

import axios from "axios"
export default {
  name: "ShoppingCartPage",
  data() {
    return {
    };
  },
  mounted() {
    axios
      .get("https://euas.person.ee/cart/" + this.$route.params.productId)
      .then(response => {
        this.product = response.data;
      })
      .catch(errr => console.log(errr));
  }
};
</script>

<style scoped>
</style>
