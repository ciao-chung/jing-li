<template>
  <div class="jump-wrap">
    <button class="btn btn-main jump square" type="button" @click="jump">
      <i class="fa fa-arrow-up up-icon" v-if="mode == 'goTop'"></i>
      <i class="fa fa-arrow-down down-icon" v-if="mode == 'goBottom'"></i>
    </button>
  </div>
</template>

<script>
import jump from 'jump.js'
export default {
  mounted: function() {
    window.addEventListener('scroll', this.setJumpMode)
    this.navHeight = $('menu[data-role="nav"]').height()
    this.$root.$on('page.done', this.loadFinished)
    this.$root.$on('page.fail', this.loadFinished)
  },
  beforeDestroy: function() {
    this.$root.$off('page.done')
    this.$root.$off('page.fail')
  },
  data: function() {
    return {
      mode: 'goBottom',
      navHeight: 0,
      condition: 500,
      referenceElement: 'div#app',
    }
  },
  methods: {
    setJumpMode: function() {
      if($('.jump').offset().top > this.condition) {
        this.mode = 'goTop'
      }

      else {
        this.mode = 'goBottom'
      }
    },
    jump: function() {
      var offset
      if(this.mode == 'goTop') {
        offset = 0 - this.navHeight
      }

      if(this.mode == 'goBottom') {
        offset = $(this.referenceElement).height()
      }
      
      jump(this.referenceElement, {
        duration: 300,
        offset: offset,
        a11y: false
      })
    },
    loadFinished: function() {
      const _anchor = this.$route.hash
      if(_anchor == '') {
        jump(this.referenceElement, {
          duration: 500,
          offset: 0 - this.navHeight,
          a11y: false
        })
      }
      else {
        this.$nextTick(() => {
          if(!($(_anchor).offset() instanceof Object)) return
          jump(this.referenceElement, {
            duration: 1000,
            offset: $(_anchor).offset().top - this.navHeight,
            a11y: false
          })
        })
      }
    },
  },

  watch: {
  },
  computed: {
    isLoding: function() {
      return this.$store.getters.isLoding
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
@import 'src/assets/variable'
@import 'src/assets/mixin'
.jump-wrap
  z-index: $nav-zIndex - 200
  position: fixed
  top: 50%
  right: 0
  
  .jump
    .fa
      display: inline-block
      width: 23px
      text-align: center
    &:hover
      .up-icon
        @include transition(all, 0.5s, ease)
        transform: translate(0, -3px)

      .down-icon
        @include transition(all, 0.5s, ease)
        transform: translate(0, 3px)
</style>