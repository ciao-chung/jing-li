module.exports = [
  {
    path: '/',
    name: 'root',
    header: 'root',
    component: require('resource/base/root.vue'),
  },
  {
    path: '/404',
    name: '404',
    header: 'router.base.404',
    component: require('resource/base/404.vue'),
  },
]
