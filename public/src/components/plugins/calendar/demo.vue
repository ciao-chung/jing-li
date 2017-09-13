<template>
  <div class="row">
    <calendar @dateOnClick="dateClick" @monthOnChange="monthChange" :data="data"></calendar>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      data: {
        1: { title: '300NTD' },
        6: { title: '370NTD' },
        9: { title: '1350NTD' },
        11: { title: '50NTD' },
      },
    }
  },
  methods: {
  	dateClick: function(date, data) {
  	  console.log('dateClick', date, data);
  	},
    monthChange: function (type, month) {
      console.log('monthChange', type, month)
    }
  },
  components: {
    'calendar': require('src/components/plugins/calendar/calendar.vue')
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
// @import 'src/assets/variable'
</style>