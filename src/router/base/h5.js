export default [
    {
        path: '/mobile',
        name: 'h5',
        meta: {
            ignoreCheck: ['token']
        },
        component: () => import('@/view/mobile/index.vue'),
    },
]
