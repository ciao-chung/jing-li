<template>
  <div data-role="breadcrumb" class="breadcrumb">
    <li v-for="rule in breadcrumb" :class="{ active: rule.leaf == undefined }">
      <router-link :to="rule" v-if="rule.leaf == undefined">{{rule.label| trans}}</router-link>
      
      <span v-if="rule.leaf != undefined">{{rule.leaf| trans}}</span>
    </li>
  </div>
</template>

<script>
import baseConfig from 'src/mixins/base.js'
export default {
  mixins: [baseConfig],
  computed: {
    breadcrumb: function() {
      return this.$store.getters.breadcrumb
    },
  },
  watch: {
    breadcrumb: {
      deep: true,
      handler: function() {
        var self = this
        let _currentPage = null
        if(this.breadcrumb[this.breadcrumb.length - 1] != undefined) {
          _currentPage = this.breadcrumb[this.breadcrumb.length - 1].leaf
        }
        if(_currentPage == null) return

        $(document).trigger('pageChange', {
          pageName: self.trans(_currentPage),
          routeName: self.$route.name,
        })
      },
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
@import 'src/assets/variable'
div[data-role="breadcrumb"]
  padding: 0
  margin-top: $nav-height + 20px
  background-color: transparent
  &>li

    &.active
    &>a
      font-size: 14px
      color: darken($highlight-color, 10%)
      text-decoration: none
    &>span
      font-size: 14px
      color: $text
</style>