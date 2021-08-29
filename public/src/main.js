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
  mode: 'hash'
})

import store from 'src/store/store'
const app = new Vue({
  el: '#app',
  store: store,
  router,
  mixins: [phantom],
  template: '<App/>',
  components: { App },
  created: function () {
    if(!this.$route.name) {
      this.$router.push({ name: '404' })
      return
    }
    this.initSEO()
  },
  methods: {
    initSEO: function () {
      this.$store.dispatch('title.set', {
        title: this.config.company.name,
      })

      this.$store.dispatch('structured.data.set', {
        type: 'init',
        data: {
          site_name: this.config.company.name,
          logo: `${window.location.origin}/static/img/logo.png`,
          url: window.location.origin,
          target: null,
          query: null,
        },
      })
    },
  },
  computed: {
    config: function () {
      return this.$store.getters.config
    },
  },
  watch: {
    $route: function () {
      this.initSEO()
    },
  },
  render: h => h(App),
})
