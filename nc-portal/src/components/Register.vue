<template>
  <v-layout column>
    <v-flex xs6 offset-xs>
      <div class="white elevation-2">
        <v-toolbar text dense class="grey" dark>
          <v-toolbar-title>Registration</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <br>
          <form name="sign-up-form" autocomplete="off">
          <v-text-field
            name="Email"
            label="Email"
            v-model="Email"
            placeholder="Email"></v-text-field>
          <br>
          <br>
          <v-text-field
            name="password"
            label="Password"
            type="password"
            autocomplete="new-password"
            v-model="password"></v-text-field>
          </form>
          <br>
          <br>
          <v-btn @click="register" class='grey' dark>Submit</v-btn>
          <br>
          <br>
          <div class="error" v-html="error" />
          <div class="response" v-html="response" />
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null,
      response: null
    }
  },
  methods: {
    async register () {
      this.error = null
      this.response = null
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.token)
        this.response = 'Successfully created.'
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: rgb(255, 255, 255);
}
.response {
  color: green;
}
</style>
