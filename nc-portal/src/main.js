// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.css'
import colors from 'vuetify/es5/util/colors'
import store from '@/store/store'

// Vue.use(Vuetify)

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base, // #E53935
    secondary: colors.indigo.base, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})
sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  vuetify: new Vuetify(),
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
