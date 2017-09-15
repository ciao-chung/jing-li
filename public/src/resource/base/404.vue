<template>
  <div class="container">
    <h2 class="text-danger">
      <i class="fa fa-warning"></i>
      找不到這個頁面！
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
