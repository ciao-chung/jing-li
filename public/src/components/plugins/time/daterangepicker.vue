<template>
  <div data-role="date-range-picker">
    <input :id="uid" class="form-control form-control-sm" type="text" name="daterange"
     :value="value" readonly="readonly" />
  </div>
</template>

<script>
import daterangepicker from 'daterangepicker'
import moment from 'moment'
import uuid from 'uuid/v4'
export default {
  props: ['value'],
  mounted: function() {
    var self = this
    
    $(`#${this.uid}`).daterangepicker({
      locale: { 
        format: 'YYYY-MM-DD',
        fromLabel: '開始', toLabel: '結束',
        applyLabel: '確認', cancelLabel: '取消',
        daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
        monthNames: [
          '一月', '二月', '三月', '四月', '五月', '六月', 
          '七月', '八月', '九月', '十月', '十一月', '十二月', 
        ],
      },
      format: 'YYYY-MM-DD',
    })

    $(`#${this.uid}`).on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'))
      self.$emit('input', $(this).val())
    })
  },
  computed: {
    uid: function() {
      return `${uuid()}-daterangepicker`
    },
  },
}
</script>

<style src="daterangepicker/daterangepicker-bs3.min.css"></style>
<style lang="sass" type="text/sass">
div[data-role="date-range-picker"]
  display: inline-block
  width: 280px
  &>input[name="daterange"]
    background-color: white
    width: 100%
.range_inputs
  .cancelBtn
    display: none
</style>