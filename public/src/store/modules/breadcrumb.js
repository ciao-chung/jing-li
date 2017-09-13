export default {
  state: {
    breadcrumb: null,
  },
  mutations: {
    'breadcrumb.update': (state, data) => {
      state.breadcrumb = data
    },
  },
  actions: {
    'breadcrumb.update': (context, data) => {
      context.commit('breadcrumb.update', data)
    },
  },
  getters: {
    breadcrumb: (state) => {
      return state.breadcrumb
    },
  }
}