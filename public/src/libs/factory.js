import queryString from 'qs'
import lang from 'src/libs/trans.js'
import config from 'src/../static/config/config.js'

class Factory {
  urlToFilter(query) {
    let _filter = {}
    _filter.page = query.page
    _filter.search = queryString.parse(query.search, { encode: false })
    _filter.sort = queryString.parse(query.sort, { encode: false })
    if(query.per_page != undefined) _filter.per_page = query.per_page
    return _filter
  }

  jsonToUrl(data) {
    let url = queryString.stringify(data)
    return url
  }

  notify(config) {
    var self = this
    if(Notification.permission !== 'denied') {
      Notification.requestPermission(function() {
        self.startNotify(config)
      })
    }

    else {
      self.startNotify(config)
    }
  }

  startNotify(config) {
    let _icon = '/static/favicon.png'
    if(config.icon != undefined && config.icon != null && config.icon != '') {
      _icon = config.icon
    }
    let notification = new Notification(config.title, {
      body: config.message,
      icon: _icon,
      image: config.image,
    })

    if(config.onclick != undefined) {
      notification.onclick = config.onclick
    }

    if(config.onclose != undefined) {
      notification.onclose = config.onclose
    }

    if(config.onshow != undefined) {
      notification.onshow = config.onshow
    }
  }

  isUrl(string) {
    const _patten = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return new RegExp(_patten).test(string)
  }
}

export default new Factory()
