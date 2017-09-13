<template>
   <div v-show="pager.pages > 1" class="pagination-container">
     <nav>
      <ul class="pagination">
        <li class="page-item">
          <a @click="changePage(1)" class="page-link">
            <i class="fa fa-fast-backward"></i>
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
            <i class="fa fa-fast-forward"></i>
          </a>
        </li>
      </ul>
    </nav>

    <input class="form-control  page-input" type="number"
      v-if="simplify" v-model="inputValue" @change="changePage()"/>
   </div>
</template>

<script>
export default {
  props: ['pager', 'value'],
  mounted: function() {
    this.initInput()
  },
  data: function() {
    return {
      show: 2,
      useSimplify: 5,
      inputValue: 0
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
    }
  },
  methods: {
    changePage: function(page) {
      if(page == undefined) page = this.inputValue
      this.$emit('input', page)
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
$pagination-color: darken($theme-color, 15%)

.pagination-container
  display: inline-block
  nav
    vertical-align: middle
    display: inline-block
    &>.pagination
      &>.page-item
        &>.page-link
          cursor: pointer
          color: $pagination-color

        &.active
          &>.page-link
            background-color: $pagination-color
            border-color: $pagination-color
            color: white

.page-input
  display: inline-block
  vertical-align: middle
  width: 80px
  margin-top: -6px
</style>