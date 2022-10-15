import Vue from 'vue'
import App from './App.vue'

import "swiper/css/swiper.min.css"

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

new Vue({
  render: h => h(App),
}).$mount('#app')
