<template>
  <div class="header mb-3">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/"><i class="fas fa-american-sign-language-interpreting"></i></b-navbar-brand>

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
</style>
