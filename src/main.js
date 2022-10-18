import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)


import "normalize.css"
import "swiper/css/swiper.min.css"
import '@/assets/styles/index.styl'

Vue.config.productionTip = false
Vue.config.silent = true;

if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
