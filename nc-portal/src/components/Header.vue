<template>
  <v-toolbar class='grey' light max-height=65>
    <img src="../assets/Nocompre-Ltr-Logo-small1.png" class='home'>
    <v-toolbar-items>
      <v-btn class='grey' text dark> Categories </v-btn>
      <v-btn class='grey' text dark> Automobiles </v-btn>
      <v-btn class='grey' text dark> Gadgets </v-btn>
      <v-btn class='grey' text dark> Appliances </v-btn>
      <v-btn class='grey' text dark> Science </v-btn>
      <v-btn class='grey' text dark> Personalities </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn @click="navigateTo('login')" class='grey' text dark>LOG IN</v-btn>
        <v-btn @click="navigateTo('register')" class='grey' text dark>SIGN IN</v-btn>
      <v-btn icon>
        <v-icon>S</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
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
