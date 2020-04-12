<template>
  <div id="footer">
    <div class="icon-container">
      <i class="fab fa-facebook-f fa-lg"></i>
      <i class="fab fa-instagram fa-lg"></i>
      <i class="fab fa-twitter fa-lg"></i>
      <p>&copy; Copyright 2020 Shopgrad Studio</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {}
};
</script>

<style scoped>
#footer {
  background-color: #343a40;
}

.icon-container {
  text-align: center;
  padding: 50px;
}

i {
  margin-right: 30px;
  color: #999c9f;
  cursor: pointer;
}

p{
  color: #999c9f;
  padding-top: 10px;
}
</style>