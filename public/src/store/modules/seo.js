import base from 'src/libs/seo/base.js'
import meta from 'src/libs/seo/meta.js'
import structuredData from 'src/libs/seo/structureddata.js'
export default {
  state: {},
  mutations: {},
  actions: {
    'title.set': (context, data) => {
      base.setTitle(data.title)
    },
    'meta.init': (context, data) => {
      meta.metaInit(data.meta)
    },
    'meta.replace': (context, data) => {
      meta.metaReplace(data)
    },
    'meta.replace': (context, data) => {
      meta.metaReplace(data)
    },
    'structured.data.set': (context, config) => {
      structuredData.structuredDataInit(config)
    },
  },
  getters: {}
}