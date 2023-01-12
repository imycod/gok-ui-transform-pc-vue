export default [
  {
    name: '首页',
    path: '/home'
  },
  {
    name: '项目实训',
    path: '/training'
  },
  // {
  //   name: '面板',
  //   path: '/dashboard'
  // },
  {
    name: '联系我们',
    path: '/contact'
  },
  {
    name: '移动端',
    path: '/mobile',
  },
  {
    name: 'DEMO',
    path: '/not-login/demo',
    children: [
      {
        name: 'draggable',
        path: '/draggable'
      }
    ]
  },
]
