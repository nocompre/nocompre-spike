<template>
  <v-layout column xs6 offset-xs>
    <panel title="Login">
      <br>
      <v-text-field
        label="Email"
        v-model="email"></v-text-field>
      <br>
      <v-text-field
        label="Password"
        type="password"
        v-model="password"></v-text-field>
        <br>
      <v-btn @click="login" class='grey' dark>Submit</v-btn>
      <br>
      <div class="error" v-html="error" />
      <div class="response" v-html="response" />
    </panel>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
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
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.token)
        this.response = 'Successfully logged in.'
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  },
  components: {
    Panel
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
