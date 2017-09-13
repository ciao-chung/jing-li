<template>
  <nav id="mainNavigation" class="navbar navbar-dafault main-navigation" role="navigation">
    <div class="container">

      <div class="navbar-header">

        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <div class="navbar-brand">
          <span class="sr-only">Avada Pro Agency</span>
          <a href="/">
            <img src="/static/img/main_logo.png" class="img-responsive center-block" alt="logo">
          </a>
        </div>

      </div>
      <div class="collapse navbar-collapse" id="main-nav-collapse">
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
  data: function() {
    return {
      menus: [
        {
          label: '首頁',
          route: { name: 'root' },
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
            {
              label: '聯絡我們',
              route: { name: 'contact' },
            },
          ],
        },
        {
          label: '服務項目',
          sub: [
            {
              label: '週波室內水管清洗',
              route: { name: 'post', params: { code: 'tube_cleaning' } },
            },
            {
              label: '外觀清潔',
              route: { name: 'post', params: { code: 'normal_cleaning' } },
            },
          ],
        },
        {
          label: '被忽略的過敏源',
          external: 'http://www.goolge.com',
        }
      ],
    }
  }
}
</script>
