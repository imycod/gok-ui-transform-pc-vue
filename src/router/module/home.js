export default [
  {
    path:'/',
    redirect:'/home',
    component: resolve => require(['@/components/layout/not-login.vue'], resolve),
    children:[
      {
        path:'/home',
        meta: {
          title: '首页'
        },
        component: resolve => require(['@/view/home/index.vue'], resolve),
      }
    ]
  },
]
