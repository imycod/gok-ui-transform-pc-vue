/**
 * key: value => value为key首字母加下划线后base64加密，省略补位的【=】
 * eg: DRAWER_USER_CENTER: 【D_U_C】base64加密 => 'RF9VX0M'
 * */
const MASK_MAP = {
  DRAWER_EXAM_TEST_ADD: 'TF911', // 考试测试创建题目抽屉遮罩层
  DRAWER_USER_CENTER: 'RF9VX0M', // 个人中心侧边栏抽屉遮罩层
  DRAWER_MESSAGE_LIST: 'RF9NX0w', // 消息列表侧边栏抽屉遮罩层
  DRAWER_ORDER: 'RF9P', // 我的订单
  DRAWER_MATERIAL_CLOUD: 'RF9NX0M' // 资料库-云盘侧边栏抽屉遮罩层
}

const MASK_MAP_KEY = {
  RF9VX0M: { name: 'DRAWER_USER_CENTER', value: 'DrawerUserCenter' },
  RF9NX0w: { name: 'DRAWER_MESSAGE_LIST', value: 'DrawerMessageList' },
  RF9P: { name: 'DRAWER_ORDER', value: 'DrawerOrder' }
}

export default {
  // 根据名称获取组件名称
  getValueByName: (name) => MASK_MAP_KEY[MASK_MAP[name]]?.value,
  // 获取组件对应的关键字
  getKey: (name) => MASK_MAP[name],
  // 根据关键字获取组件名称
  getValueByKey: (key) => MASK_MAP_KEY[key]?.value
}
