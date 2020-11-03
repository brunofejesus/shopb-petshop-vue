import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import filters from './filters/filters'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  filters,
  render: h => h(App)
}).$mount('#app')
