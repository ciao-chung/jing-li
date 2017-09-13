<template>
  <div v-if="render" data-role="calendar-wrap">
    <div class="tools">
      <div class="year-month">
        <h3>
          {{nowYearMonth}}
        </h3>
      </div>

      <div class="control">
        <button class="btn btn" @click="setMonth('prev')">
          <i class="fa fa-arrow-left"></i>
        </button>

        <button class="btn btn" @click="setMonth('current')">
          <i class="fa fa-clock-o"></i>
        </button>

        <button class="btn btn" @click="setMonth('next')">
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <table class="calendar table">
      <thead>
        <tr>
          <th v-for="day in dayList">
            {{ trans[lang].days[day] }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="week in Math.floor(dates.length/7)">
          <td
            v-for="dayOfWeek in 7"
            @click="triggerDateOnClick(getDate(dayOfWeek, week))"
            :class="tdClass(getDate(dayOfWeek, week))">
            <div class="date">
              {{ getDate(dayOfWeek, week) }}
            </div>

            <div class="title" v-if="showTitle(getDate(dayOfWeek, week))">
              {{ datesInfo[getDate(dayOfWeek, week)].title }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/**
 * Dependencies
 * - vue 2.x
 * - vue-moment
 * - jquery 3.x
 * - bootstrap 3.x
 *
 * Dev-Dependencies
 * - node-sass
 * - sass-loader
 */
import $ from 'jquery'
//export default {
module.exports = {
  props: {
    lang: {
      type: String,
      default: 'zh_tw',
    },
    data: {
      type: Object,
      default: null,
    },
  },
  data: function () {
    return {
      dates: [],
      datesInfo: {},
      active: null,
      firstDay: 1,
      render: false,
      routerKey: 'yearmonth',
      trans: require('./langs'),
    }
  },
  created: function () {
    this.init()
  },
  methods: {
    moment: function (time, format) {
      return this.$options.filters.moment(time, format)
    },
    paddingZero: function (year, month) {
      if(month < 10) return `${year}-0${month}`
      return `${year}-${month}`
    },
    init: function () {
      const self = this
      const year = this.nowYearMonth.split('-')[0]
      const month = this.nowYearMonth.split('-')[1]
      this.dates = []
      this.datesInfo = {}
      this.active = null
      this.render = false
      $(window).resize(function () {
        self.resizeDateColum()
      })

      // 該月總天數
      const lastDateOfMonth = (new Date(year, month, 0)).getDate()

      // 該月最後一天為星期幾
      const lastDateWeekDay = new Date(year, month - 1, lastDateOfMonth).getDay()

      // 該月第一天為星期幾
      const firstDateWeekDay = new Date(year, month - 1, 1).getDay()

      // 補第一個禮拜的空白
      for(let i=this.firstDay; i<firstDateWeekDay; i++) {
        this.dates.push(0)
      }

      // 建立該月日期
      for(let i=1; i<=lastDateOfMonth; i++) {
        this.datesInfo[i] = {
          date: i,
          active: false,
          title: null,
          detail: null,
          meta_data: {},
        }

        if(this.data != null) {
          if(this.data[i] != null && this.data[i] != undefined) {
            this.datesInfo[i].title = this.data[i].title
          }
        }

        this.dates.push(i)
      }

      // 補最後一個禮拜的空白
      for(let i=1; i<=7-lastDateWeekDay+(this.firstDay-1); i++) {
        if(this.firstDay-1 == lastDateWeekDay) break
        this.dates.push(0)
      }

      this.render = true
      this.$nextTick(function () {
        this.resizeDateColum()
      })

    },
    getDate: function(dayOfWeek, week) {
      const date = this.dates[ (week-1)*7 + dayOfWeek -1 ]
      if(date == 0) return null
      return date
    },
    setMonth: function (type) {
      let target = null
      switch (type) {
        case 'prev':
          target = this.prevYearMonth
          break
        case 'current':
          target = this.currentYearMonth
          break
        case 'next':
          target = this.nextYearMonth
          break
      }

      let query = this.$route.query
      if(query == undefined)query = {}
      query[this.routerKey] = target

      this.$router.push({
        query: {}
      })

      this.$router.push({
        query: query
      })
      this.$emit('monthOnChange', type, target)
    },
    triggerDateOnClick: function(date) {
      if(date == null) return
      this.active = date
      this.$emit('dateOnClick', date, this.datesInfo[date])
    },
    resizeDateColum: function () {
      $('div[data-role="calendar-wrap"]').find('td').each(function () {
        $(this).height($(this).width())
      })
    },
    tdClass: function (date) {
      let _class = {}
      if(date != null) _class.isUsed = true
      if(date != null && this.active == date) _class.active = true
      return _class
    },
    showTitle: function (date) {
      const data = this.datesInfo[date]
      if(data == null || data == undefined) return false
      if(data.title == null || data.title == undefined) return false
      return true
    },
  },
  computed: {
    currentYearMonth: function () {
      let now = new Date()
      return this.moment(now, 'YYYY-MM')
    },
    dayList: function() {
      let left = [0, 1, 2, 3, 4, 5, 6]
      let right = [0, 1, 2, 3, 4, 5, 6]
      
      left = left.splice(0, this.firstDay)
      right = right.splice(this.firstDay, 7-this.firstDay)
      return right.concat(left)
    },
    nowYearMonth: function () {
      let now = new Date()
      if(this.$route.query[this.routerKey] != undefined) now = new Date(this.$route.query[this.routerKey])
      return this.moment(now, 'YYYY-MM')
    },
    nextYearMonth: function () {
      let year = parseInt(this.nowYearMonth.split('-')[0])
      let month = parseInt(this.nowYearMonth.split('-')[1])
      if(month >= 12) {
        year += 1
        month = 1
      }

      else {
        month += 1
      }
      return this.paddingZero(year, month)
    },
    prevYearMonth: function () {
      let year = parseInt(this.nowYearMonth.split('-')[0])
      let month = parseInt(this.nowYearMonth.split('-')[1])
      if(month <= 1) {
        year -= 1
        month = 12
      }

      else {
        month -= 1
      }

      return this.paddingZero(year, month)
    },
  },
  watch: {
    $route: function () {
      this.init()
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
$theme-color: lighten(#5bc0de, 15%)
$td-border: 1px solid $theme-color
$td-active-color: darken($theme-color, 5%)
$td-text-color: darken(#ccc, 30%)
$text-color: lighten(#ccc, 15%)
div[data-role="calendar-wrap"]
  background-color: darken($theme-color, 25%)
  width: 100%
  .tools
    .year-month
      display: inline-block
      margin: 20px
      h3
        margin: 0
        color: white
    .control
      display: inline-block
      margin: 20px
      .btn
        color: darken($theme-color, 10%)
        background-color: white
  table.calendar
    th
      text-align: center
      background-color: darken($theme-color, 0%)
      border: 1px solid white
      color: white
      &:first-child
        border-left: $td-border
      &:last-child
        border-right: $td-border
    td
      width: 14%
      border: $td-border
      background-color: white
      color: $td-text-color
      cursor: pointer
      font-weight: bold
      .date
      .title
        color: darken($text-color, 80%)
      &:not(.isUsed)
        background-color: $text-color
      &.active
        background-color: $td-active-color
        color: white
</style>