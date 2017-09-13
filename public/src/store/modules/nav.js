export default {
  state: {
    navShow: false,
    menu: null,
  },
  mutations: {
    'nav.switch': (state) => {
      state.navShow = !state.navShow
    },

    'nav.hide': (state) => {
      state.navShow = false
    },

    'menu.init': (state, data) => {
      state.menu = data
    },
  },
  actions: {
    'nav.switch': (context) => {
      context.commit('nav.switch')
    },

    'nav.hide': (context) => {
      context.commit('nav.hide')
    },

    'menu.init': (context, data) => {
      context.commit('menu.init', data)
    },
  },
  getters: {
    navShow: (state) => {
      return state.navShow
    },
    menu: (state) => {
      return state.menu
    },
  }
}