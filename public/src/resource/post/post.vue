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

      this.$store.dispatch('title.set', {
        title: this.post.title,
      })

      this.$nextTick(() => {
        this.$root.$emit('page.done')
      })
    },
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
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
div[data-role="post"]
  border: 1px red solid
  padding-top: 30px
</script>
