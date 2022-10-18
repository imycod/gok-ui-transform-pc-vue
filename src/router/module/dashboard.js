export default [
  {
    path: '/dashboard',
    meta: {
      title: '面板'
    },
    redirect:'/dashboard/1',
    component: resolve => require(['@/components/layout/base.vue'], resolve),
    children: [
      {
        path: '/dashboard/1',
        meta: {
          title: '面板1'
        },
        component: resolve => require(['@/view/dashboard/dash1.vue'], resolve),
      },
    ]
  },
]
