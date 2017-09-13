import Vue from 'vue'
let createPopover = (el, binding, mode) => {
  let customConfig
  if(mode == 'inserted') {
    customConfig = binding.value
  }
  if(mode == 'update') {
    customConfig = binding.oldValue
  }
  let defaultConfig = {
    html: true,
    content: '',
    placement: 'right',
    trigger: 'hover',
  }

  let _config = $.extend({}, defaultConfig)
  if(customConfig.options != undefined) {
    for(const key in customConfig.options) {
      if(customConfig.options[key] != null && customConfig.options[key] != undefined) {
        _config[key] = customConfig.options[key]
      }
    }
  }

  if(_config.content == '' || _config.content == null || _config.content == undefined) {
    $(el).popover('destroy')
    return
  }

  setTimeout(() => {
    if(customConfig.sticky == true) {
      _config.trigger = 'manual'
      $(el).popover(_config)
      $(el).popover('show')
    }
    else {
      $(el).popover(_config)
    }
  }, 500)
}

let init = () => {
  Vue.directive('popover', {
    inserted: (el, binding) => {
      createPopover(el, binding, 'inserted')
    },
    update: (el, binding) => {
      createPopover(el, binding, 'update')
    },

    unbind: (el, binding) => {
      $(el).popover('destroy')
    },
  })
}

export default init()