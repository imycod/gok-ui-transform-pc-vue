import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

new Vue({
  render: h => h(App),
}).$mount('#app')
