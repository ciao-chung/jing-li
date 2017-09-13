import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMoment from 'vue-moment'
import translate from 'src/libs/trans.js'
import popover from 'src/libs/popover.js'
import phantom from 'src/mixins/phantom.js'
import jump from 'jump.js'

Vue.use(VueRouter)
Vue.use(VueMoment)
Vue.use(translate)

window.self.$ = window.self.jQuery = $

// router設定, 使用mode: history時, 配合.htaccess
import routerRules from 'resource/router.js'
const router = new VueRouter({
  routes: routerRules,
  mode: 'history'
})

import store from 'src/store/store'
const app = new Vue({
  el: '#app',
  store: store,
  router,
  mixins: [phantom],
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
