import Vue from 'vue'
import transData from 'resource/trans.js'
import config from '../../static/config/config.js'

class Lang {
  constructor() {
    this.lang = localStorage.getItem('lang')
    if(this.lang == null) {
      this._setDefaultLang()
    }

    Vue.filter('trans', (string) => {
      if(string == null && string == undefined) return string
      if(transData[this.lang] == undefined) {
        this._setDefaultLang()
      }

      if(transData[this.lang][string] != undefined) {
        return transData[this.lang][string]
      }
      else {
        return string
      }
    })
  }

  _setDefaultLang() {
    localStorage.setItem('lang', config.defaultLang)
    this.lang = config.defaultLang
  }

  getLang() {
    return this.lang
  }
}

export default function() {
  return new Lang()
}
