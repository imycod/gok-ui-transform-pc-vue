export default {
  path:'/',
  component: resolve => require(['@/components/layout/not-login.vue'], resolve),
  children:[
    {
      path:'/home',
      name: 'Home',
      meta: {
        title: '首页'
      },
      component: resolve => require(['@/view/home/index.vue'], resolve),
    },
    {
      path: '/training',
      redirect:'/training',
      name: 'TrainingHome',
      meta: {
        title: '实训首页',
        ignoreCheck: ['token', 'tenant']
      },
      component: (resolve) => require(['@/view/training-project/home/index.vue'], resolve),
      children: [
        {
          path: '/training',
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
          path: '/training/service-case',
          name: 'ServiceCase',
          meta: {
            title: '服务案例',
            ignoreCheck: ['token', 'tenant']
          },
          component: (resolve) => require(['@/view/training-project/home/service-case/index.vue'], resolve)
        },
        {
          path: '/training/service-case-detail/:id',
          name: 'ServiceCaseDetail',
          meta: {
            title: '服务案例详情',
            ignoreCheck: ['token', 'tenant']
          },
          component: (resolve) => require(['@/view/training-project/home/service-case/detail.vue'], resolve)
        },
        {
          path: '/training/my-project',
          name: 'MyProject',
          meta: {
            title: '我的项目',
            ignoreCheck: ['token', 'tenant']
          },
          component: (resolve) => require(['@/view/training-project/my-project/index.vue'], resolve)
        }
      ]
    },
    {
      path: '/contact',
      component: () => import('@/view/about/index.vue'),
    },
    {
      path: '/mobile',
      component: () => import('@/view/mobile/index.vue'),
    },
    {
      path: '/demo',
      component: () => import('@/view/demo/index.vue'),
    },
  ]
}

