<template>
  <div data-role="alert-background" v-if="alertConfig.status">
    <div data-role="alert">
      <div class="close-btn" @click="close()">&times;</div>
      
      <div class="title">
        {{siteInfo.site_name}}{{'notification'|trans}}
      </div>

      <div class="message" v-html="alertConfig.message"></div>
    </div>
  </div>
</template>

<script>
module.exports = {
  mounted: function() {
    var self = this
    $(window).on('keydown', function(e){
      var code = e.which;
      if(code == 27) self.close()
    })
  },
  methods: {
    close: function() {
      this.$store.dispatch('alert.close')
    },
  },
  computed: {
    alertConfig: function() {
      return this.$store.getters.alertConfig
    },
    config: function() {
      return this.$store.getters.config
    },
    siteInfo: function() {
      return this.$store.getters.siteInfo
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
@import 'src/assets/variable'
$alert-width: 500px
$alert-height: 200px
$alert-padding: 10px
$close-btn-size: 40px
div[data-role="alert-background"]
  z-index: $nav-zIndex + 1000
  top: 0
  position: fixed
  width: 100vw
  height: 100vh
  background-color: rgba(0, 0, 0, 0.5)
  &>div[data-role="alert"]
    background-color: white
    width: $alert-width
    max-width: 100vw
    position: fixed
    top: calc(50% - #{$alert-height/2})
    left: calc(50% - #{$alert-width/2})
    @media (max-width: $alert-width)
      left: 0
    &>.close-btn
      cursor: pointer
      width: $close-btn-size
      height: $close-btn-size
      line-height: $close-btn-size
      font-size: $close-btn-size
      color: white
      background-color: lighten($black, 15%)
      text-align: center
      vertical-align: middle
      position: absolute
      right: 0
      top: 0
      &:active
        background-color: lighten($black, 10%)
    &>.title
      height: $close-btn-size
      line-height: $close-btn-size
      padding-left: $alert-padding
      background-color: $black
      color: white
      margin: 0
    &>.message
      padding: $alert-padding
</style>