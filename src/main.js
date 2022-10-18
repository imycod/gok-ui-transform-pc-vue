import Vue from 'vue'
import App from './App.vue'
import { bus } from './event-bus.js'
import router from './router/index.js'
import store from './store'
import importDirective from '@/directives/index.js';

import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)


importDirective(Vue); // 注册指令


import 'normalize.css'
import 'swiper/css/swiper.min.css'
import '@/assets/styles/index.styl'

Vue.prototype.$bus = bus

Vue.config.productionTip = false
Vue.config.silent = true;

if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
