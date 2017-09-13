import config from 'src/../static/config/config.json'
import lang from 'src/libs/trans.js'
import factory from 'src/libs/factory.js'
export default {
  state: {
    config: config,
    header: {},
    lang: lang,
    isLoading: false,
    api: null,
    factory: factory,
    siteInfo: null,
  },
  mutations: {
    'header.init': (state, header) => {
      state.header = header
    },

    'header.update': (state, data) => {
      state.header[data.name] = data.header
    },

    'loading.switch': (state, status) => {
      state.isLoading = status
    },

    'init.siteInfo': (state, data) => {
      state.siteInfo = data
    },
  },
  actions: {
    'header.init': (context, header) => {
      context.commit('header.init', header)
    },

    'header.update': (context, data) => {
      context.commit('header.update', data)
    },

    'loading.switch': (context, status) => {
      context.commit('loading.switch', status)
    },

    'init.siteInfo': (context, data) => {
      context.commit('init.siteInfo', data)
    },
  },
  getters: {
    api: (state) => {
      return state.api
    },
    config: (state) => {
      return state.config
    },

    header: (state) => {
      return state.header
    },

    isLoading: (state) => {
      return state.isLoading
    },

    lang: (state) => {
      return state.lang
    },

    factory: (state) => {
      return state.factory
    },

    siteInfo: (state) => {
      return state.siteInfo
    },
  }
}
