import Vue from 'vue'
import App from './App.vue'

import router from './router'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.component('app-test', Test)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
