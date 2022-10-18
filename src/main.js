import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import "normalize.css"
import "swiper/css/swiper.min.css"
import '@/assets/styles/index.styl'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
