/**
 * @description: 关闭其他弹窗
 * @param state
 * @return {*}
 */
const closeAll = (state) => {
  Object.keys(state.dialog).forEach(key => {
    state.dialog[key] = false
  })
}

export default {
  namespaced: true, // 开启命名空间
  state: {
    dialog: {
      // 展示登录框
      showLogin: false,
    },
    // 是否登录
    isLogin: false,
  },
  mutations: {
    // 设置登陆框
    setShowLogin: (state, value) => {
      if (value) {
        closeAll(state)
      }
      state.dialog.showLogin = value;
    },
  },

}
