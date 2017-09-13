<template>
  <div>
    <h2 class="text-danger">
      <i class="fa fa-warning"></i>
      {{'404.message'|trans}}
    </h2>
  </div>
</template>

<script>
export default {
  created: function() {
    this.$root.$emit('page.fail')
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
// @import 'src/assets/variable'
</style>