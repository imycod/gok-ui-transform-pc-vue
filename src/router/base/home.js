export default [
  {
    path:'/home',
    name: 'home',
    // meta: {
    //   title: '首页',
    //   ignoreCheck:['token'],
    // },
    component: resolve => require(['@/view/home/index.vue'], resolve),
  },
]
