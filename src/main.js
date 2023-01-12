import Vue from 'vue'
import Router from "vue-router"
import App from './App.vue'
import  bus  from '@/plugins/bus.js'
import router from './router/index.js'
import store from './store'
import VueCompositionAPI from '@vue/composition-api'

import 'view-design/dist/styles/iview.css'

import importDirective from '@/directives/index.js';
import importViewDesign from "@/plugins/view-design.js"

import * as filters from '@/utils/filters/index.js'; // 全局过滤器
import echarts from "@/plugins/echarts.js" // 按需加载echarts
// import * as echarts from "echarts" // 加载全部
import dayjs from "dayjs"

Object.keys(filters).forEach(key => {
  const module=filters[key]
  Object.keys(module).forEach(k => {
    Vue.filter(k, module[k])
  })
})

Vue.use(VueCompositionAPI)

importDirective(Vue); // 注册指令
importViewDesign(Vue)

import 'normalize.css'
import 'swiper/css/swiper.min.css'
// import "swiper/swiper-bundle.min.css"
// import "swiper/swiper-bundle.min.js"
import '@/assets/styles/index.styl'

Vue.prototype.$bus = bus
Vue.prototype.$echarts = echarts
Vue.prototype.$dayjs = dayjs;
window.$dayjs = dayjs;

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
