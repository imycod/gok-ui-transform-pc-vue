// 引入日志，输出所有状态改变
import createLogger from 'vuex/dist/logger'

import authentication from './module/authentication'
import createPersistedState from 'vuex-persistedstate'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import getters from './getters'

const debug = process.env.NODE_ENV !== 'production'
const PERSIST_PATHS = []
export default new Vuex.Store({
  modules: {
    authentication,
  },
  getters,
  plugins: debug ? [createLogger(), createPersistedState({
    paths: PERSIST_PATHS
  })] : [createPersistedState({
    paths: PERSIST_PATHS
  })]
})
