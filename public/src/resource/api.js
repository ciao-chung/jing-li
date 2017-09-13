const api = {
  // 取得config
  config: function(config) {
    return $.request({
      url: `config/${config}`,
      type: 'GET',
    })
  },

  // 取得config property
  configProperty: function(config, name) {
    return $.request({
      url: `config/property/${config}/${name}`,
      type: 'GET',
    })
  },
  
  // 取得文案
  post: function(code) {
    return $.request({
      url: `post/${code}`,
      type: 'GET',
    })
  },

  // 作品search
  design: function (filter) {
    return $.request({
      url: `design`,
      type: 'GET',
      data: filter,
    })
  },

  // 作品read
  designRead: function (id) {
    return $.request({
      url: `design/${id}`,
      type: 'GET',
    })
  },

  // 商品search
  product: function(filter) {
    return $.request({
      url: `product`,
      type: 'GET',
      data: filter,
    })
  },

  // 商品read
  productRead: function(id) {
    return $.request({
      url: `product/${id}`,
      type: 'GET',
    })
  },

  // 文章search
  article: function (filter) {
    return $.request({
      url: `article`,
      type: 'GET',
      data: filter,
    })
  },

  // 文章read
  articleRead: function (id) {
    return $.request({
      url: `article/${id}`,
      type: 'GET',
    })
  },

  // 取得未上鎖文章內容
  articleContent: function (id) {
    return $.request({
      url: `article/content/${id}`,
      type: 'GET',
    })
  },

  //解鎖文章內容
  articleUnlock: function (id, password) {
    return $.request({
      url: `article/unlock/${id}`,
      data: {
        password: password,
      },
      type: 'GET',
    })
  },

  // 取得平面的tree
  flatTree: function(branch) {
    return $.request({
      url: `tree/flat/${branch}`,
      type: 'GET',
    })
  },

  // 取得root
  getRoot: function(branch) {
    return $.request({
      url: `tree/root/${branch}`,
      type: 'GET',
    })
  },

  // 取得子節點
  getChildren: function(id) {
    return $.request({
      url: `tree/children/${id}`,
      type: 'GET',
    })
  },

  // 聯絡我們
  contact: function(data) {
    return $.request({
      url: `contact`,
      type: 'POST',
      data: data,
    })
  },

  // banner
  banner: function(code) {
    return $.request({
      url: `banner/${code}`,
      type: 'GET',
    })
  },

  // 推播
  notification: function() {
    return $.request({
      url: `notification`,
      type: 'GET',
    })
  },
}
module.exports = api