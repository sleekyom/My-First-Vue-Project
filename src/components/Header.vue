<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/" class="logo"><i class="fas fa-md fa-american-sign-language-interpreting"></i> Shopgrad</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/cart">
            <i class="fas fa-shopping-cart"> Cart</i>
          </b-nav-item>
          <b-nav-item to="/orderlisting">My order</b-nav-item>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <!-- <b-dropdown-item href="#">Sign Out</b-dropdown-item> -->
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Anton&display=swap');
.logo{
  font-family: 'Anton', sans-serif;
}
</style>
