<template>
  <div class="main-page">
    <ProductPanel title="Recommended" section="recommended"/>

    <ProductPanel title="BuyNow" section="buynow"/>

    <ProductPanel title="TopSelling" section="topselling"/>
    <router-view></router-view>
  </div>
</template>

<script>
import ProductPanel from "./ProductPanel"
export default {
  name: 'MainPage',
  components: {
    ProductPanel
  }
}
</script>

<style scoped>
</style>
