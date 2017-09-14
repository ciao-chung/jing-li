<template>
  <div>
    <header id="header" class="header-wrapper home-parallax home-fade">
      <div class="header-overlay"></div>
      <div class="header-wrapper-inner">
        <div class="container">

          <div class="welcome-speech">
            <h1>淨麗清潔有限公司</h1>
            <p>不斷創新, 是永續的經營</p>
          </div>

        </div>
      </div>
    </header>

    <div class="main-content">

      <section class="intro bg-light-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <img src="static/img/intro.jpg" class="img-responsive center-block" alt="intro">
            </div>

            <div class="col-md-7">
              <div class="intro-description">
                <h2>avada the best agency for ever</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante ex, fermentum vel libero eget interdum semper libero. Curabitur egestas, arcu id tempor convallis.
                </p>

                <ul class="points">
                  <li>
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                    Vestibulum pulvinar commodo malesuada.
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                    Pellentesque id massa et ligula convallis porta.
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                    Vivamus sed nunc sed ligula rhoncus sit amet eu elit.
                  </li>
                  <li>
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                    Curabitur in ipsum vel ipsum vehicula congue.
                  </li>
                </ul>

                <a href="#" class="btn btn-slategray">
                  purchase
                </a>
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
          content: '多年的耕耘讓<br>我們累積了無數客戶的肯定<br>包含了許多上市上櫃的大公司<br>',
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
    }
  },
}
</script>


<style lang="sass" type="text/sass" scoped>
// @import 'src/assets/variable'
header#header
  @media (max-width: 320px)
    background: url(/static/img/slider1-mb.jpg) center center no-repeat
</style>
