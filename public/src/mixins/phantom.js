export default {
  created: function() {
    this.$root.$on('page.done', function() {
      if (typeof window.callPhantom === 'function') {
        setTimeout(function() {
          window.callPhantom('page.done')
        }, 300)
      }
    })
    this.$root.$on('page.fail', function() {
      if (typeof window.callPhantom === 'function') {
        setTimeout(function() {
          window.callPhantom('page.fail')
        }, 300)
      }
    })
  },
  beforeDestroy: function() {
    this.$root.$off('page.done')
    this.$root.$off('page.fail')
  },
}