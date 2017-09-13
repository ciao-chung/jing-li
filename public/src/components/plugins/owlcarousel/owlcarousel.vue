<template>
  <div class="owl-carousel-warp">
    <div class="owl-carousel owl-theme">
      <div class="item" v-for="photo in photos">
        <img :src="photo.origin">
        <div class="overlay" v-if="data != null">
          <h1>{{data.title}}</h1>
          <h4>{{data.description}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'owl.carousel/dist/owl.carousel.min.js'
export default {
  props: ['photos', 'config', 'data'],
  data: function() {
    return {
      defaultConfig: {
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        dotsEach: true,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
      }
    }
  },
  created: function() {},
  mounted: function() {
    let _config = this.config
    if(this.config == undefined) _config = this.defaultConfig
    this.$nextTick(() => {
      $('.owl-carousel').owlCarousel(_config);
      this.$emit('renderFinish')
    })
  },
}
</script>

<style src="owl.carousel/dist/assets/owl.carousel.min.css"></style>
<style src="owl.carousel/dist/assets/owl.theme.default.min.css"></style>
<style src="owl.carousel/docs/assets/css/docs.theme.min.css"></style>
<style lang="sass" type="text/sass" scoped>
@import 'src/assets/variable'
.owl-carousel-warp
  .item
    position: relative
    .overlay
      z-index: $nav-zIndex - 250
      position: absolute
      text-align: center
      color: white
      bottom: 10%
      width: 100%
      &>*
        color: white
</style>