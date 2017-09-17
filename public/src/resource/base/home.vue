<template>
  <div>
    <header id="header" class="header-wrapper home-parallax home-fade">
      <div class="header-overlay"></div>
      <div class="header-wrapper-inner">
        <div class="container">

          <div class="welcome-speech">
            <h1>{{config.company.name}}</h1>
            <p>{{config.company.slogan}}</p>
          </div>

        </div>
      </div>
    </header>

    <div class="main-content">

      <section class="intro bg-light-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <img src="/static/img/intro.jpg" class="img-responsive center-block" alt="intro">
            </div>

            <div class="col-md-7">
              <div class="intro-description">
                <h2>常見問題</h2>

                <ul class="points">
                  <li v-for="qna in qua_list">
                    <span>
                      <i class="fa fa-thumb-tack"></i>
                    </span>
                    <router-link :to="{ name: 'post', params: { code: qna.code} }" target="_blank">
                      {{qna.label}}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white feature">
        <div class="container">
          <div class="row">

            <div class="col-md-4" v-for="feature in features">
              <div class="feature-content text-center">
                <div class="feature-icon-box">
                  <div class="feature-icon center-block">
                    <i class="fa" :class="'fa-'+feature.icon"></i>
                  </div>
                </div>
                <div class="feature-info">
                  <h3 class="feature-heading">
                    {{feature.title}}
                  </h3>
                  <p class="feature-description" v-html="feature.content"></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import baseConfig from 'src/mixins/base.js'
export default {
  mounted: function() {
    this.$nextTick(() => {
      this.$root.$emit('page.done')
    })
  },
  data: function() {
    return {
      features: [
        {
          icon: 'thumbs-up',
          title: '客戶肯定',
          content: '多年的耕耘讓<br>我們累積了無數客戶的肯定<br>其中包含了許多上市上櫃的大公司<br>',
        },
        {
          icon: 'map-marker',
          title: '全省服務',
          content: '我們的服務遍及全省<br>專業強大的團隊<br>無論在台灣任何地方皆能執行任務',
        },
        {
          icon: 'rocket',
          title: '持續精進',
          content: '公司雖然經營多年<br>技術仍然不斷的再精進<br>只為帶給客戶更專業的服務',
        },
      ],
      qua_list: [
        { label: '為何要清洗水管?', code: 'qna_'},
        { label: '新的房屋需要清洗水管嗎?', code: 'qna_'},
        { label: '水管大約多久需要清洗一次?', code: 'qna_'},
      ],
    }
  },
  computed: {
    config: function() {
      return this.$store.getters.config
    },
  },
}
</script>


<style lang="sass" type="text/sass" scoped>
// @import 'src/assets/variable'
header#header
  @media (max-width: 320px)
    background: url('/static/img/slider1-mb.jpg') center center no-repeat
</style>
