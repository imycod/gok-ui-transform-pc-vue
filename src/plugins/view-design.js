import {
  Table,
  Modal,
  Button,
  Drawer,
} from 'view-design'

const importViewDesign = Vue => {
  /**
   *  全局消息
   */



  /**
   *  全局组件
   */
  Vue.component('Table', Table)
  Vue.component('Modal', Modal)
  Vue.component('Button', Button)
  Vue.component('Drawer', Drawer)
}

export default importViewDesign
