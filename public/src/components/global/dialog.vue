<template>
  <div class="modal fade" id="dialog-modal">
    <div class="modal-dialog modal-sm">
      <component :is="dialog.component" v-if="dialog.component != null"></component>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function() {
    $(window).on('keydown', function(e){
      var code = e.which;
      if(code == 27) $('#dialog-modal').modal('hide')
    })
  },
  computed: {
    dialog: function() {
      return this.$store.getters.dialog
    },
  },
  watch: {
    dialog: {
      deep: true,
      handler: function() {
        if(this.dialog.status) $('#dialog-modal').modal('show')
        if(!this.dialog.status) $('#dialog-modal').modal('hide')
      }
    }
  }
}
</script>

<style lang="sass" type="text/sass" scoped>
#dialog-modal
  .modal-body
    .message
      margin: 10px 0 10px 0
</style>