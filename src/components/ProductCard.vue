<template>
  <b-card
    :title="product.title"
    :img-src="product.image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{ product.description }}
    </b-card-text>

    <b-button
    :to="'/products/' + product.id"
     size="sm" variant="primary">More details</b-button>
     <span class="ml-2"><b-button size="sm"
     variant="success" @click="addToCart()">Add to Cart</b-button></span>
  </b-card>
  
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },

  methods: {
    addToCart() {
      if (!this.$root.$data.cart.items) 
        this.$root.$data.cart.items = [];
        this.$root.$data.cart.items.push({
          productId: this.product.id,
          qty: this.product.qty,
          optionCode: this.product.options[0].code,
          optionImage: this.product.options[0].image,
          price: this.product.options[0].price,
          total: this.product.options[0].price 
        })
        this.$root.$data.saveCart();
      
    }
  }
}
</script>

<style scoped>
b-card{
  width: 300px;
  
}
</style>
