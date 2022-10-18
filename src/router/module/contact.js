export default [
  {
    path: '/contact',
    redirect: '/contact',
    component: () => import('@/components/layout/not-login.vue'),
    children: [
      {
        path: '/contact',
        component: () => import('@/view/about/index.vue'),
      }
    ]
  }
]
