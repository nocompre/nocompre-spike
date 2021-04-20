<template>
  <nav>
    <v-toolbar class='grey' dark app>
      <v-toolbar-title class='text-uppercase home white--text' @click="navigateTo('/')">
        <span class="font-weight-light">no</span><span class='font-weight-bold'>compre</span>
      </v-toolbar-title>    <v-toolbar-items>
        <v-btn class='grey' text dark> Categories </v-btn>
        <v-btn class='grey' text dark> Automobiles </v-btn>
        <v-btn class='grey' text dark> Gadgets </v-btn>
        <v-btn class='grey' text dark> Appliances </v-btn>
        <v-btn class='grey' text dark> Science </v-btn>
        <v-btn class='grey' text dark> Personalities </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
          <v-btn @click="navigateTo('login')" class='grey' text dark v-if="!$store.state.isUserLoggedIn">LOG IN</v-btn>
          <v-btn @click="navigateTo('register')" class='grey' text dark v-if="!$store.state.isUserLoggedIn">SIGN UP</v-btn>
          <v-btn class='grey' text dark v-if="$store.state.isUserLoggedIn">WELCOME!</v-btn>
        <v-btn icon>
          <v-icon>S</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}

</style>
