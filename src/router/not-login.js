

export default {
  path:'/not-login',
  name:'not-login',
  component: resolve => require(['@/components/layout/not-login.vue'], resolve),
  children:[
    {
      path: '/demo',
      name:'demo',
      component: () => import('@/view/demo/index.vue'),
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('@/view/login/index.vue')
    }
  ]
}
