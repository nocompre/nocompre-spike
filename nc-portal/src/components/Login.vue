<template>
  <v-layout column>
    <v-flex xs6 offset-xs>
      <div class="white elevation-2">
        <v-toolbar text dense class="grey" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <br>
          <v-text-field
            name="email"
            label="Email"
            v-model="email"
            placeholder="email"></v-text-field>
          <br>
          <br>
          <v-text-field
            name="password"
            label="Password"
            v-model="password"></v-text-field>
          <br>
          <br>
          <v-btn @click="login" class='grey' dark>Submit</v-btn>
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
    async login () {
      this.error = null
      this.response = null
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.response = 'Successfully logged in.'
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
