import apiConfig from '../../../static/config/api.json'
import tokenLib from 'src/libs/token.js'
var token = tokenLib(apiConfig.url)

export default {
  
  state: {
    token: token,
    isLogin: token.isValidToken(),
  },

  mutations: {
    'token.setToken': function(state, token) {
      var promise = new Promise(function(resolve, reject) {
        state.token.setToken(token)
        resolve()
      })

      // 更新isLogin
      promise.then(function() {
        state.isLogin = state.token.isValidToken()
      })
    },

    'token.clearToken': function(state) {
      var promise = new Promise(function(resolve, reject) {
        state.token.clearToken()
        resolve()
      })
      
      // 更新isLogin
      promise.then(function() {
        state.isLogin = state.token.isValidToken()
      })
    },
  },

  actions: {
    'token.setToken': function(context, token) {
      context.commit('token.setToken', token)
    },

    'token.clearToken': function(context) {
      context.commit('token.clearToken')
    },
  },

  getters: {
    token: function(state) {
      return state.token
    },
    isLogin: function(state) {
      return state.isLogin
    }
  }
}