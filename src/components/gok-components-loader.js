import { upperFirst, camelCase } from 'lodash'

const requireComponent = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /index(.*?)\.(vue)$/
)

export default {
  install (Vue) {
    /// ////////////////////////////////////////////////////////////////////////////
    /// 全局通用组件注册
    /// 通用组件注册前缀名 gok****
    /// ////////////////////////////////////////////////////////////////////////////
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)
      const componentName = upperFirst(
        // 获取和目录深度无关的文件名
        camelCase(
          fileName?.split('/')?.[1]
        )
      )
      // 全局注册组件
      Vue.component(
        componentName,
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，
        // 否则回退到使用模块的根。
        componentConfig.default || componentConfig
      )
    })
  }
}
