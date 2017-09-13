class OpenGraph {
  _createDefaultMeta(data) {
    let _metaObject = {}

    // base
    _metaObject['name="keywords"'] = {
      attrs: [ { name: 'name', value: 'keywords' } ],
      content: data.keywords,
    }
    _metaObject['name="description"'] = {
      attrs: [ { name: 'name', value: 'description' } ],
      content: data.description,
    }

    // open graph
    _metaObject['property="og:title"'] = {
      attrs: [ { name: 'property', value: 'og:title' } ],
      content: data.site_name,
    }
    _metaObject['property="og:site_name"'] = {
      attrs: [ { name: 'property', value: 'og:site_name' } ],
      content: data.site_name,
    }
    _metaObject['property="og:url"'] = {
      attrs: [ { name: 'property', value: 'og:url' } ],
      content: data.hostname,
    }
    _metaObject['property="og:image"'] = {
      attrs: [ { name: 'property', value: 'og:image' } ],
      content: data.photo,
    }
    _metaObject['property="og:description"'] = {
      attrs: [ { name: 'property', value: 'og:description' } ],
      content: data.photo,
    }
    return _metaObject
  }

  /**
   * 初始化meta tag
   * @param meta {array}
   */
  metaInit(data) {
    let defaultMeta = this._createDefaultMeta(data)
    for(const key in defaultMeta) {
      let _meta = document.createElement('meta')
      for(const attr of defaultMeta[key].attrs) {
        $(_meta).attr(attr.name, attr.value)
      }

      if(typeof(defaultMeta[key].content) == 'string') {
        if(defaultMeta[key].content.trim() != '') {
          $(_meta).attr('content', defaultMeta[key].content)
        }
      }

      // meta tag已存在就取代, 尚存在就新增
      if($('head').find(`meta[${key}]`).length == 0) {
        $('head').append($(_meta))
      }

      else {
        $('head').find(`meta[${key}]`).replaceWith(_meta)
      }
    }
  }

  // 取代meta tag
  metaReplace(meta) {
    for(const item of meta) {
      if(typeof(item.content) == 'string') {
        if(item.content.trim() == '') break
        $('head').find(`meta[${item.selector}]`).attr('content', item.content)
      }
    }
  }
}
export default new OpenGraph()