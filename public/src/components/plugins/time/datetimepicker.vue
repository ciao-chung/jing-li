<template>
  <div class="input-group" data-role="datetime-picker-container">
    <input type="text" class="form-control" data-role="datetime-picker"
      :readonly="isReadonly()" :disabled="isReadonly()">
    <!-- <span class="input-group-addon">
      <i class="fa fa-calendar"></i>
    </span> -->
    <span class="input-group-btn">
      <button class="btn btn-warning" type="button" :disabled="isReadonly()" @click="reset()">
        <i class="fa fa-calendar"></i>
      </button>
    </span>
  </div>
</template>

<script>
import datetimepicker from 'eonasdan-bootstrap-datetimepicker'
export default {
    props: ['value', 'readonly', 'resetable'],
    mounted: function() {
      var self = this
      var defaultDatetime = this.value
      if(this.value == undefined) {
        defaultDatetime = this.$options.filters.moment(new Date(), 'YYYY-MM-DD HH:mm:ss')
      }
      var selector = $(this.$el).find('input[data-role="datetime-picker"]')
      selector.datetimepicker({
          format: 'YYYY-MM-DD HH:mm:ss',
          defaultDate: defaultDatetime,
      })

      selector.on('dp.change', () => {
        self.$emit('input', selector.data().date)
      })
    },
    methods: {
      isReadonly: function() {
        if(this.readonly == undefined) return false
        if(this.readonly) return true
      },
      reset: function() {
        this.$emit('input', this.$options.filters.moment(new Date(), 'YYYY-MM-DD HH:mm:ss'))
      },
    },
    watch: {
      value: function(value) {
        $(this.$el).find('input[data-role="datetime-picker"]').data('DateTimePicker').date(value)
      },
    },
}
</script>

<style src="eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css"></style>
<style lang="sass" type="text/sass" scoped>
.btn
  padding: 6px 12px
  border-radius: 4px
</style>