module.exports = [
  {
    path: '/',
    name: 'root',
    header: 'root',
    component: require('resource/base/root.vue'),
  },
  {
    path: '/post/:code',
    name: 'post',
    header: 'post',
    component: require('resource/post/post.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    header: 'contact',
    component: require('resource/contact/contact.vue'),
  },
  {
    path: '/404',
    name: '404',
    header: 'router.base.404',
    component: require('resource/base/404.vue'),
  },
]
