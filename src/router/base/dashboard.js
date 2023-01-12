export default [
  {
    path: '/dashboard',
    name: 'dashboard', // 重定向就不用在白名单里配这个了
    meta: {
      title: '面板',
    },
    redirect: '/tracking',
    component: resolve => require(['@/view/dashboard/layout/index.vue'], resolve),
    children: [
      {
        path: '/tracking',
        name:'tracking',
        meta: {
          ignoreCheck: ['token']
        },
        component: resolve => require(['@/view/dashboard/tracking.vue'], resolve),
      },
    ]
  },
]
