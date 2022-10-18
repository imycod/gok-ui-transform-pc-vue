import Vue from 'vue'
import App from './App.vue'
import { bus } from './event-bus.js'
import router from './router/index.js'
import store from './store'
import VueCompositionAPI from '@vue/composition-api'
import importDirective from '@/directives/index.js';
import * as filters from '@/utils/filters.js'; // 全局过滤器

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueCompositionAPI)

importDirective(Vue); // 注册指令

import 'normalize.css'
import 'swiper/css/swiper.min.css'
import '@/assets/styles/index.styl'

Vue.prototype.$bus = bus

const isDebugMode = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = false
Vue.config.silent = true;
// 用此功能，需要在public/index.html 把哪些vue.mini替换成未压缩版
Vue.config.devtools = isDebugMode

if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
