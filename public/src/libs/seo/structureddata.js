class StructuredData {
  /**
   * 初始化structured data
   * @param config {object} structured data設定物件
   * @param config.type {null|string} structured data類型
   * @param config.data {object} structured data資料物件
   */
  structuredDataInit(config) {
    if(!(this[`_${config.type}`] instanceof Function)) return
    this[`_${config.type}`](config.data)
  }

  /**
   * 初始化structured data
   * @private
   */
  _init(data) {
    $('script[type="application/ld+json"]').each(function() {
      $(this).remove()
    })

    let _website = {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      'url': data.url,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': data.target,
        'query-input': data.query
      }
    }
    this._appendTag(_website)

    let _organization = {
      '@context': 'http://schema.org/',
      '@type': 'Organization',
      'name': data.site_name,
      'url': data.url,
      'logo': data.logo,
    }
    this._appendTag(_organization)
  }

  /**
   * 文章structured data設定
   * @param data {object} 文章資料物件
   * @param data.title {string} 文章標題
   * @param data.created_at {datetime} 文章建立時間
   * @param data.updated_at {datetime} 文章更新時間
   * @param data.og_image {string} 文章代表圖片
   * @param data.author {string} 網站名稱
   * @param data.default_image {string} 預設圖片, 當文章沒有圖片時使用
   * @param data.logo {string} 網站logo
   * @param data.config_type {array} 要設定的type, 如果沒這個參數就只設定成Article
   * @private
   */
  _article(data) {
    let _data = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      'mainEntityOfPage': document.URL,
      'thumbnailUrl': null,
      'headline': data.title,
      'image': {
        '@type': 'ImageObject',
        'url': data.default_image,
        'height': 964,
        'width': 723
      },
      'publisher': {
        '@type': 'Organization',
        'name': data.author,
        'logo': {
          '@type': 'ImageObject',
          'url': data.logo,
          'width': 225,
          'height': 60
        }
      },
      'datePublished': new Date(data.created_at).toISOString(),
      'dateModified': new Date(data.updated_at).toISOString(),
      'author': {
        '@type': 'Person',
        'name': data.author
      },
      'description': data.og_description
    }
    if(typeof(data.og_image) == 'string') {
      if(data.og_image.trim() != '') {
        _data.image.url = data.og_image
        _data.thumbnailUrl = data.og_image
      }
    }

    if(data.config_type == undefined) {
      this._appendTag(_data)
    }

    if(data.config_type != undefined) {
      for(const type of data.config_type) {
        _data['@type'] = type
        this._appendTag(_data)
      }
    }
  }

  /**
   * 設定structured data script tag
   * 如果存在就改寫, 不存在就新增structured data script tag
   * @param data {object} 設定好的structured data物件
   * @private
   */
  _appendTag(data) {
    let _structuredDataTag = document.createElement('script')
    $(_structuredDataTag).attr('type', 'application/ld+json')
    $(_structuredDataTag).text(JSON.stringify(data))
    $('head').append($(_structuredDataTag))
    return
  }
}
export default new StructuredData()
