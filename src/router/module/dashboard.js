export default [
  {
    path: '/dashboard',
    meta: {
      title: '面板'
    },
    redirect:'/tracking',
    component: resolve => require(['@/view/dashboard/layout/index.vue'], resolve),
    children: [
      {
        path: '/tracking',
        meta: {
          title: 'tracking'
        },
        component: resolve => require(['@/view/dashboard/tracking.vue'], resolve),
      },
    ]
  },
]
