import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import nav from 'src/store/modules/nav'
import base from 'src/store/modules/base'
import seo from 'src/store/modules/seo'
import alert from 'src/store/modules/alert'
import dialog from 'src/store/modules/dialog'
import breadcrumb from 'src/store/modules/breadcrumb'

export default new Vuex.Store ({
  modules: {
    nav: nav,
    base: base,
    seo: seo,
    alert: alert,
    dialog: dialog,
    breadcrumb: breadcrumb,
  }
})
