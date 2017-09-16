<template>
  <div class="container" data-role="post">
    <h1>{{post.title}}</h1>

    <div v-html="post.content"></div>
  </div>
</template>

<script>
import postData from 'static/data/post.js'
export default {
  created: function () {
    this.init()
  },
  methods: {
    init: function () {
      if(!this.post) {
        this.$router.push({ name: '404' })
        return
      }

      this.initSEO()

      this.$nextTick(() => {
        this.$root.$emit('page.done')
      })
    },
    initSEO: function() {
      this.$store.dispatch('title.set', {
        title: this.post.title,
      })

      this.$store.dispatch('meta.replace', [
        {
          selector: 'property="og:url"',
          content: document.URL,
        },
        {
          selector: 'property="og:title"',
          content: this.post.title,
        },
        {
          selector: 'property="og:image"',
          content: this.post.photo,
        },
        {
          selector: 'property="og:description"',
          content: this.post.description,
        },
        {
          selector: 'name="keywords"',
          content: this.post.title,
        },
        {
          selector: 'name="description"',
          content: this.post.description,
        },
      ])

      let _strcturedData = $.extend({}, this.post)
      _strcturedData.author = this.config.company.name
      _strcturedData.default_image = this.post.photo
      _strcturedData.logo = `${window.location.origin}/static/img/logo.png`,
      _strcturedData.config_type = ['Article', 'BlogPosting', 'NewsArticle']
      this.$store.dispatch('structured.data.set', {
        type: 'article',
        data: _strcturedData,
      })
    }
  },
  watch: {
    $route: function () {
      this.init()
    },
  },
  computed: {
    code: function () {
      return this.$route.params.code
    },
    post: function () {
      return postData[this.code]
    },
    config: function() {
      return this.$store.getters.config
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
div[data-role="post"]
  border: 1px red solid
  padding-top: 30px
</script>
