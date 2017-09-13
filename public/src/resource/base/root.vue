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

            <div class="col-md-3">
              <div class="feature-content text-center">
                <div class="feature-icon-box">
                  <div class="feature-icon center-block">
                    <i class="fa fa-laptop"></i>
                  </div>
                </div>
                <div class="feature-info">
                  <h3 class="feature-heading">Responsive &amp; Multi-purpose</h3>
                  <p class="feature-description">
                    Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="feature-content text-center">
                <div class="feature-icon-box">
                  <div class="feature-icon center-block">
                    <i class="fa fa-eye"></i>
                  </div>
                </div>
                <div class="feature-info">
                  <h3 class="feature-heading">Clean &amp; Clear</h3>
                  <p class="feature-description">
                    Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="feature-content text-center">
                <div class="feature-icon-box">
                  <div class="feature-icon center-block">
                    <i class="fa fa-thumbs-o-up"></i>
                  </div>
                </div>
                <div class="feature-info">
                  <h3 class="feature-heading">Best UX</h3>
                  <p class="feature-description">
                    Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="feature-content text-center">
                <div class="feature-icon-box">
                  <div class="feature-icon center-block">
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div class="feature-info">
                  <h3 class="feature-heading">Good Feedback</h3>
                  <p class="feature-description">
                    Class aptent taciti sociosqu ad litora torquent conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="bg-light-gray">
        <div class="container">

          <div class="headline text-center">
            <div class="row">
              <div class="col-md-6 col-md-offset-3">
                <h2 class="section-title">show off our portfolio</h2>
                <p class="section-sub-title">
                  absolutely stunning design &amp; functionality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="twit-feed">
        <div class="twit-feed-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                <div id="twit" class="owl-carousel owl theme">

                  <div class="item text-center">
                    <div class="twit-content">
                      <div class="twit-icon">
                        <i class="fa fa-twitter"></i>
                      </div>
                      <h3 class="text-capitalize">free stock photos: 74 best sites to find Awesome free images</h3>
                      <p>
                        @themewagon <br/>
                        2 days ago on Twitter.com
                      </p>
                    </div>
                  </div>

                  <div class="item text-center">
                    <div class="twit-content">
                      <div class="twit-icon">
                        <i class="fa fa-twitter"></i>
                      </div>
                      <h3 class="text-capitalize">free stock photos: 74 best sites to find Awesome free images</h3>
                      <p>
                        @themewagon <br/>
                        2 days ago on Twitter.com
                      </p>
                    </div>
                  </div>

                  <div class="item text-center">
                    <div class="twit-content">
                      <div class="twit-icon">
                        <i class="fa fa-twitter"></i>
                      </div>
                      <h3 class="text-capitalize">free stock photos: 74 best sites to find Awesome free images</h3>
                      <p>
                        @themewagon <br/>
                        2 days ago on Twitter.com
                      </p>
                    </div>
                  </div>

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
    return {}
  },
}
</script>


<style lang="sass" type="text/sass" scoped>
// @import 'src/assets/variable'
header#header
  @media (max-width: 320px)
    background: url(/static/img/slider1-mb.jpg) center center no-repeat
</style>
