<template>
  <div class="main-page">
    <h2 class="title">Welcome</h2>
    <ProductPanel title="Recommended" section="recommended" />

    <ProductPanel title="BuyNow" section="buynow" />

    <ProductPanel title="TopSelling" section="topselling" />
    <router-view></router-view>
  </div>
</template>

<script>
import ProductPanel from "./ProductPanel";
export default {
  name: "MainPage",
  components: {
    ProductPanel
  }
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
