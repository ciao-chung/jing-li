export default {
  state: {
    config: {},
    component: null,
    status: false,
    _seq: ''
  },
  mutations: {
    'dialog': (state, data) => {
      state.config = data.config
      state.component = data.component
      state.status = true
      state._seq = new Date().getTime()
    },
    'dialog.clear': (state) => {
      state.config = {}
      state.component = null
      state.status = false
    },
  },
  actions: {
    'dialog': (context, data) => {
      context.commit('dialog', data)
    },
    'dialog.clear': (context) => {
      context.commit('dialog.clear')
    },
  },
  getters: {
    dialog: (state) => {
      return state
    },
    dialogConfig: (state) => {
      return state.config
    },
  }
}