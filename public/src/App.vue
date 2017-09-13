<template>
  <div id="app">
  </div>
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

export default {
  name: 'app',
  components: {},
  computed: {
    isLoading: function() {
      return this.$store.getters.isLoading
    },
    formOnSave: function() {
      return this.$store.getters.formOnSave
    },
  },
}
</script>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style src="font-awesome/css/font-awesome.min.css"></style>

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
