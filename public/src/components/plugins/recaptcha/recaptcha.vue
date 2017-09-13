<template>
  <recaptcha
    v-if="sitekey != null && sitekey != undefined"
    ref="recaptcha"
    :sitekey="sitekey" @verify="emitVerify"></recaptcha>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
export default {
  props: ['sitekey'],
  beforeCreate: function () {
    if($('#recaptcha-api').length > 0) return
    $('body').append("<script id='recaptcha-api' src=\"https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit\" async defer><\/script>")
  },
  methods: {
    emitVerify: function (response) {
      this.$emit('verify', response)
    },
    reset: function() {
      this.$refs.recaptcha.reset()
    },
  },
  components: {
    'recaptcha': VueRecaptcha,
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
</style>