const TrainingProjectRoute = [
  {
    path: '/',
    meta: {
      title: '项目实训'
    },
    component: resolve => require(['@/view/training-project/layout/template.vue'], resolve),
    children: [{
      path: 'training-home',
      name: 'TrainingHome',
      redirect: '/training-home/training',
      meta: {
        title: '实训首页',
        ignoreCheck: ['token', 'tenant']
      },
      component: (resolve) => require(['@/view/training-project/home/index.vue'], resolve),
      children: [
        {
          path: 'training',
          name: 'Training',
          meta: {
            title: '项目实训',
            ignoreCheck: ['token', 'tenant']
          },
          component: (resolve) => require(['@/view/training-project/home/training/index.vue'], resolve)
        },
        // {
        //   path: 'excellent-project',
        //   name: 'ExcellentProject',
        //   meta: {
        //     title: '优选项目',
        //     ignoreCheck: ['token', 'tenant']
        //   },
        //   component: (resolve) => require(['@/view/training-project/home/excellent-project/index.vue'], resolve)
        // },
        {
          path: 'service-case',
          name: 'ServiceCase',
          meta: {
            title: '服务案例',
            ignoreCheck: ['token', 'tenant']
          },
          component: (resolve) => require(['@/view/training-project/home/service-case/index.vue'], resolve)
        }
      ]
    }, {
      // 做中间层一些公共的组件比如返回按钮，背景颜色等
      path: 'training',
      meta: {
        title: '实训管理',
        ignoreCheck: ['token', 'tenant']

      },
      component: resolve => require(['@/view/training-project/layout/index.vue'], resolve),
      children: [
      //   {
      //   path: 'project-detail',
      //   meta: {
      //     title: '项目详情',
      //     ignoreCheck: ['token', 'tenant']
      //   },
      //   component: (resolve) => require(['@/view/training-project/home/excellent-project/detail.vue'], resolve)
      // },
        {
          path: 'service-case-detail/:id',
          meta: {
            title: '服务案例详情',
            ignoreCheck: ['token', 'tenant']
          },
          component: (resolve) => require(['@/view/training-project/home/service-case/detail.vue'], resolve)
        },
        {
          path: 'my-project',
          meta: {
            title: '我的项目'
          },
          component: (resolve) => require(['@/view/training-project/my-project/index.vue'], resolve)
        }]
    }]
  }
]

export default TrainingProjectRoute
