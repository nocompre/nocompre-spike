<template>
  <v-layout column xs6 offset-xs>
    <panel title='Register'>
      <br>
      <form name="sign-up-form" autocomplete="off">
      <v-text-field
        name="Email"
        label="Email"
        v-model="Email"
        placeholder="Email"></v-text-field>
      <br>
      <v-text-field
        name="password"
        label="Password"
        type="password"
        autocomplete="new-password"
        v-model="password"></v-text-field>
      </form>
      <br>
      <v-btn @click="register" class='grey' dark>Submit</v-btn>
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
