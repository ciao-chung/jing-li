<template>
</template>

<script>
import hello from 'hellojs'
export default {
  /**
   * config {callback} - 取得oauth設定的callback
   * example: [ { type: 'facebook', client_id: '123' }, { type: 'google', client_id: '456' } ]
   */
  props: ['config'],
  data: function() {
    return {
      oauthClientIds: {},
    }
  },
  mounted: function () {
    this.loadOauth()
  },
  methods: {
    loadOauth: function () {
      const self = this
      this.config()
      .then((result) => {

        if(typeof(result) == 'object') {
          for(let type in result) {
            self.oauthClientIds[type] = result[type]
          }
        }

        if(typeof(result) == 'array') {
          for(let oauth of result) {
            self.oauthClientIds[oauth.type] = oauth.client_id
          }
        }

        hello.init(self.oauthClientIds, {
          scope: 'email'
        })

        hello.off('auth.login')
        hello.on('auth.login', (auth) => {
          self.$emit('onOauthLogin', auth)
        })
      })
    },
    oauthLogin: function (type) {
      hello(type).login()
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
</style>