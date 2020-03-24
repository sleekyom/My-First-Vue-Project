<template>
  <div class="category-page">
    <h3>{{product.title}}</h3>
    <b-row>
      <b-col cols="5">
         <img v-if="selected.image" :src="selected.image" class="product-image" />
        <img v-else :src="product.image" class="product-image" />
      </b-col>
      <b-col cols="7">
        <p>
        {{product.description}}
        </p>
        <p>Select Option</p>
        <b-form-select v-model="selected" :options="options" size="sm" class></b-form-select>
        <p>
          Option selected: {{selected.title}}
        </p>

        <p>Price per Unit: ${{selected.price}}</p>
        <p>Total Cost of Items Selected: ${{totalPrice}}</p>
        <p>Qty: {{qty}}</p>

        <div class="mt-2 d-flex">
          <b-button variant="dark" class="mr-2" @click="decreaseCount()">-</b-button>
          <b-button variant="success" @click="increaseCount()">+</b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import {dataOptions} from "../utils/index"


export default {
  name: 'ProductPage',
  data: function() {
    return {
      product: {},
      options: [],
      selected: {title: "", price: "", image:""},
      qty: 0,
      totalPrice:0
    }
  },
  mounted() {
    axios
      .get("https://euas.person.ee/products/" + this.$route.params.productId)
      .then(response => {
        this.product = response.data;
        this.options = dataOptions(response.data.options);
      }).catch(errr => console.log(errr));
  },

methods: {
    increaseCount() {
      if (this.selected.qty === this.qty) {
        alert("No more Item in stock");
      } else {
        this.qty = this.qty + 1;
        this.totalPrice = this.selected.price * this.qty;
      }
    },
    decreaseCount() {
      if (this.qty === 0) {
        this.totalPrice = 0;
        return;
      }
      this.qty = this.qty - 1;
      this.totalPrice = this.selected.price * this.qty;
    },
  }
};
</script>

<style scoped>
.product-image {
  width: 300px;
}
</style>
