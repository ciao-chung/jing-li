<template>
  <nav id="mainNavigation" class="navbar navbar-dafault main-navigation" role="navigation">
    <div class="container">

      <div class="navbar-header">

        <button @click="toggleMenu" type="button" class="navbar-toggle collapsed">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <div class="navbar-brand">
          <span class="sr-only">Avada Pro Agency</span>
          <router-link :to="{ name: 'home' }">
            <img src="/static/img/main_logo.png" class="img-responsive center-block" alt="logo" id="logo">
          </router-link>
        </div>

      </div>
      <div class="collapse navbar-collapse" :open="open">
        <ul class="nav navbar-nav navbar-right text-uppercase">
          <template v-for="menu in menus">
            <!-- 一般route -->
            <li>
              <router-link v-if="menu.route != undefined" :to="menu.route">
                <span>{{menu.label}}</span>
              </router-link>
            </li>

            <!-- 巢狀route -->
            <li class="dropdown" v-if="menu.sub instanceof Array">
              <a href="" class="dropdown-toggle" data-toggle="dropdown">
                <span>{{menu.label}}</span>
              </a>
              <ul class="dropdown-menu">
                <li v-for="sub_menu in menu.sub">
                  <router-link :to="sub_menu.route">{{sub_menu.label}}</router-link>
                </li>
              </ul>
            </li>

            <!-- 外部連結 -->
            <li v-if="menu.external != undefined">
              <a :href="menu.external" target="_blank">
                <span>{{menu.label}}</span>
              </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  watch: {
    $route: function() {
      this.open = false
    },
  },
  methods: {
    toggleMenu: function() {
      this.open = !this.open
    },
  },
  data: function() {
    return {
      open: false,
      menus: [
        {
          label: '首頁',
          route: { name: 'home' },
        },
        {
          label: '關於淨麗',
          sub: [
            {
              label: '領先技術',
              route: { name: 'post', params: { code: 'skill' } },
            },
            {
              label: '我們的客戶',
              route: { name: 'post', params: { code: 'customer' } },
            },
          ],
        },
        // {
        //   label: '服務項目',
        //   sub: [
        //     {
        //       label: '週波室內水管清洗',
        //       route: { name: 'post', params: { code: 'tube_cleaning' } },
        //     },
        //     {
        //       label: '外觀清潔',
        //       route: { name: 'post', params: { code: 'normal_cleaning' } },
        //     },
        //   ],
        // },
        {
          label: '聯絡我們',
          route: { name: 'contact' },
        },
      ],
    }
  }
}
</script>

<style lang="sass" type="text/sass" scoped>
@import 'src/assets/variable'
@import 'src/assets/mixin'
$transition-during: 0.7s
nav#mainNavigation
  border-bottom: 1px $light-gray solid
  #logo
    width: 42px
    height: 42px
  div.container
    div.navbar-collapse
      display: block
      max-height: 0
      overflow: hidden
      @include transition(all, $transition-during, ease)
      &[open]
        max-height: 100vh
        @include transition(all, $transition-during, ease)
</style>
