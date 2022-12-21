export default [
  {
    path: '/training',
    redirect:'/training',
    name: 'training',
    meta: {
      title: '实训首页',
      ignoreCheck: ['token']
    },
    component: (resolve) => require(['@/view/training-project/home/index.vue'], resolve),
    children: [
      {
        path: '/training',
        name: 'training',
        meta: {
          title: '项目实训',
          ignoreCheck: ['token']
        },
        component: (resolve) => require(['@/view/training-project/home/training/index.vue'], resolve)
      },
      // {
      //   path: 'excellent-project',
      //   name: 'ExcellentProject',
      //   meta: {
      //     title: '优选项目',
      //     ignoreCheck: ['token']
      //   },
      //   component: (resolve) => require(['@/view/training-project/home/excellent-project/index.vue'], resolve)
      // },
      {
        path: '/training/service-case',
        name: 'ServiceCase',
        meta: {
          title: '服务案例',
          ignoreCheck: ['token']
        },
        component: (resolve) => require(['@/view/training-project/home/service-case/index.vue'], resolve)
      },
      {
        path: '/training/service-case-detail/:id',
        name: 'ServiceCaseDetail',
        meta: {
          title: '服务案例详情',
          ignoreCheck: ['token']
        },
        component: (resolve) => require(['@/view/training-project/home/service-case/detail.vue'], resolve)
      },
      {
        path: '/training/my-project',
        name: 'MyProject',
        meta: {
          title: '我的项目',
          ignoreCheck: ['token']
        },
        component: (resolve) => require(['@/view/training-project/my-project/index.vue'], resolve)
      }
    ]
  },
]
