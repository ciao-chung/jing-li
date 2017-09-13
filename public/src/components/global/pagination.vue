<template>
   <div v-show="pager.pages > 1" class="pagination-container">
     <nav>
      <ul class="pagination">
        <li class="page-item">
          <a @click="changePage(1)" class="page-link">
            <i class="fa fa-angle-double-left"></i>
          </a>
        </li>
        
        <!-- page header -->
        <li class="page-item" :class="{ active: useActive(1) }" v-if="renderPageHeader()">
          <a @click="changePage(1)" class="page-link">
            1
          </a>
        </li>
        <li class="page-item disabled" v-if="renderPageHeader() && pager.page-show-1 != 1">
          <a class="page-link">...</a>
        </li>
        
        <!-- page body -->
        <li class="page-item" v-for="page in pager.pages" :class="{ active: useActive(page) }" 
          v-if="renderPageBody(page)">
          <a @click="changePage(page)" class="page-link">
            {{ page }}
          </a>
        </li>

        <!-- page footer -->
        <li class="page-item disabled" v-if="renderPageFooter() && pager.page+show+1 != pager.pages">
          <a class="page-link">...</a>
        </li>
        <li class="page-item" :class="{ active: useActive(pager.pages) }" v-if="renderPageFooter()">
          <a @click="changePage(pager.pages)" class="page-link">
            {{ pager.pages }}
          </a>
        </li>

        <li class="page-item">
          <a @click="changePage(pager.pages)" class="page-link">
            <i class="fa fa-angle-double-right"></i>
          </a>
        </li>
      </ul>
    </nav>

    <input class="form-control  page-input" type="number"
      v-if="simplify" v-model="inputValue" @keyup="changePage()"/>
   </div>
</template>

<script>
export default {
  props: ['pager'],
  mounted: function() {
    this.initInput()
  },
  data: function() {
    return {
      show: 2,
      useSimplify: 5,
      inputValue: 0,
    }
  },
  computed: {
    simplify: function() {
      return this.pager.pages > this.useSimplify
    },
    range: function() {
      var range = {
        start: 1,
        end: this.pager.pages
      }
      if(!this.simplify) {
        return range
      }

      if(this.pager.page - this.show >= 1) {
        range.start = this.pager.page - this.show
      }

      if(this.pager.page + this.show <= this.pager.pages) {
        range.end = this.pager.page + this.show
      }
      return range
    },
    hasNext: function () {
      if(this.pager.next == null) return false
      return true
    },
    hasPrev: function () {
      if(this.pager.previous == null) return false
      return true
    },
  },
  methods: {
    changePage: function(page) {
      var query = this.$route.query
      if(query == undefined) query = {}

      if(page != undefined) {
        query.page = page
      }

      if(page == undefined) {
        query.page = this.inputValue
      }
    
      this.$router.push({
        query: {}
      })
      this.$router.replace({
        query: query
      })
    },
    initInput: function() {
      this.inputValue =  this.pager.page
    },
    
    useActive: function(page) {
      return this.pager.page == page
    },

    renderPageBody: function(page) {
      var start = this.range.start
      var end  = this.range.end
      if(start == undefined || end == undefined) {
        return false
      }

      if(start <= page && page <= end) {
        return true
      }

      else {
        return false
      }
    },

    renderPageHeader: function() {
      if(!this.simplify) return false
      if(this.pager.page - this.show > 1) return true
      return false
    },

    renderPageFooter: function() {
      if(!this.simplify) return false
      if(this.pager.page + this.show < this.pager.pages) return true
      return false
    },
  },
  watch: {
    $route: function() {
      this.initInput()
    }
  }
}
</script>

<style lang="sass" type="text/sass" scoped>
@import 'src/assets/variable'
$pagination-color: darken($light-gray, 10%)

.pagination-container
  display: inline-block
  nav
    display: inline-block
    &>.pagination
      margin: 0
      &>.page-item
        &:hover
          &>.page-link
            background-color: transparent
        &>.page-link
          cursor: pointer
          color: $pagination-color
          border: none
          font-size: 14px

        &.active
          &>.page-link
            background-color: transparent
            border-color: $theme-color
            color: darken($highlight-color, 10%)
            font-weight: bold

.page-input
  display: inline-block
  vertical-align: middle
  width: 80px
  margin-top: -6px
  height: 32px
</style>