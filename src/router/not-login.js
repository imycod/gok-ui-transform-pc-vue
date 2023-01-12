export default {
  path:'/not-login',
  name:'not-login',
  component: resolve => require(['@/components/layout/not-login.vue'], resolve),
  redirect:'/login',
  children:[
    {
      path: '/not-login/demo',
      name:'demo',
      component: () => import('@/view/demo/index.vue'),
    },
    // 对比vue2和vue3
    {
      path: '/not-login/demo1',
      name:'demo1',
      component: () => import('@/view/demo1/index.vue'),
    },
    {
        path:'/not-login/login',
      name:'login',
      component:()=>import('@/view/login/index.vue')
    }
  ]
}
