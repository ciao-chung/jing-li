<template>
  <div id="app">
    <global-menu></global-menu>

    <transition name="router">
      <router-view class="page-body"></router-view>
    </transition>

    <global-footer></global-footer>
    <global-copyright></global-copyright>
  </div>
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import 'owl.carousel/dist/owl.carousel.min.js'
import 'assets/jquery.hoverdir.js'
export default {
  name: 'app',
  components: {
    'global-menu': require('components/global/menu.vue'),
    'global-footer': require('components/global/footer.vue'),
    'global-copyright': require('components/global/copyright.vue'),
  },
}
</script>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style src="font-awesome/css/font-awesome.min.css"></style>
<style src="owl.carousel/dist/assets/owl.theme.green.min.css"></style>
<style src="owl.carousel/dist/assets/owl.carousel.min.css"></style>
<style src="assets/style.css"></style>
<style lang="sass" type="text/sass">
@import 'src/assets/base'

@mixin set-center
#app
  &>.page-header
    @include set-center
  &>.container
    &>.page-body
      @include set-center

body
  min-height: 100vh

.loading
  &-enter-active, &-leave-active
    transition: all 0.5s ease
  &-enter, &-leave-active
    opacity: 0

.router
  &-enter-active, &-leave-active
    transition: all 0.5s ease
  &-enter, &-leave-active
    opacity: 0
.page
  &-header
    margin-top: 20px
  &-body
    min-height: 100vh
</style>
