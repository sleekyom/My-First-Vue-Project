<template>
  <div class="orderDetails">
    <h2>My Order Details</h2>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "orderDetails",
  data: function() {
    return {
      order: {}
    };
  },
  mounted() {
    axios
      .get("https://euas.person.ee/user/orders/" + this.$route.params.orderId)
      .then(response => {
        this.order = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>
</style>