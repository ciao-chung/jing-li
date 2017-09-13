<template>
  <div>
    <button class="btn btn-info" type="button" @click="oauthLogin('facebook')">
      <i class="fa fa-facebook"></i>
    </button>

    <button class="btn btn-info" type="button" @click="oauthLogin('google')">
      <i class="fa fa-google"></i>
    </button>
    <oauth ref="oauth" :config="oauthConfig" @onOauthLogin="onOauthLogin"></oauth>
  </div>
</template>

<script>
export default {
  methods: {
    oauthLogin: function(type) {
      this.$refs.oauth.oauthLogin(type)
    },
    onOauthLogin: function(auth) {
      console.log('auth', auth);
    },
  },
  computed: {
    api: function() {
      return this.$store.getters.api
    },
    oauthConfig: function() {
      return this.api.oauthConfig
    },
  },
  components: {
    'oauth': require('components/plugins/oauth/oauth.vue')
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
</style>