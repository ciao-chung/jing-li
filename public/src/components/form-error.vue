<template>
  <div data-role="form-error-wrap">
    <div data-role="form-error"
       v-if="error[column] != null && error[column] != undefined"
       v-popover="popover">
    </div>
  </div>
</template>

<script>
export default {
  props: ['error', 'column', 'prefix', 'placement'],
  data: function() {
    return {}
  },
  computed: {
    message: function() {
      if(this.prefix != undefined) return `${this.prefix}${this.error[this.column]}`
      return this.error[this.column]
    },
    markup: function() {
      let _markup = `
        <div class="text-danger" data-role="form-error-message">
        ${this.$options.filters.trans(this.message)}
        </div>
      `
      return _markup
    },
    popover: function() {
      let _config = {
        sticky: true,
        options: {
          placement: 'top',
          content: this.markup,
        }
      }
      if(this.placement != undefined) _config.placement = this.placement
      return _config
    },
  },
}
</script>

<style lang="sass" type="text/sass">
// @import 'src/assets/variable'
div[data-role="form-error-wrap"]
  position: relative
  div[data-role="form-error"]
    position: absolute
    width: 150px
    right: 0
    top: 0
div[data-role="form-error-message"]
  font-size: 14px
</style>