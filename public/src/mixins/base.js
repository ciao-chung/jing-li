export default {
  computed: {
    api: function() {
      return this.$store.getters.api
    },
    isLogin: function() {
      return this.$store.getters.isLogin
    },
    config: function() {
      return this.$store.getters.config
    },
    siteInfo: function() {
      return this.$store.getters.siteInfo
    },
    token: function() {
      return this.$store.getters.token
    },
    user: function() {
      return this.$store.getters.user
    },
    isLoading: function() {
      return this.$store.getters.isLoading
    },
    factory: function() {
      return this.$store.getters.factory
    },
  },
  methods: {
    trans: function(string) {
      return this.$options.filters.trans(string)
    },
  },
}