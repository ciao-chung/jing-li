let alertDelay
const DEFAULT_DELAY = 3000
module.exports = {
  state: {
    message: '',
    status: false
  },

  mutations: {
    'alert': (state, data) => {
      state.message = data.message
      state.status = true
      let _delay = DEFAULT_DELAY
      if(data.delay != undefined) _delay = data.delay
      alertDelay = setTimeout(() => {
        state.status = false
      }, _delay)
    },
    'alert.close': (state) => {
      state.status = false
      clearTimeout(alertDelay)
    },
  },

  actions: {
    'alert': (context, data) => {
      context.commit('alert', data)
    },
    'alert.close': (context, data) => {
      context.commit('alert.close')
    },
  },

  getters: {
    alertConfig: (state) => {
      return state
    }
  }
}