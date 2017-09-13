<template>
  <div class="page-header" v-if="header[$route.name] != ''">
    {{ header[$route.name]|trans }}
  </div>
</template>

<script>
import headerData from 'resource/router'
export default {
  computed: {
    header: (self = this) => {
      return self.$store.getters.header
    }
  }
}
</script>

<style lang="sass" type="text/sass" scoped>
@import 'src/assets/variable'
.page-header
  margin-top: $nav-height
</style>