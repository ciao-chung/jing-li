<template>
  <footer>
    <div class="container">
      <div class="row">

        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-widget">
          <h4>相關新聞報導</h4>
          <ul class="row footer-links">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <li v-for="link in link_group1">
                <a :href="link.link" target="_blank">
                  {{link.label}}
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-widget">
          <h4>QR Code</h4>

          <div class="row footer-news">
            <div class="col-md-4 col-sm-4 col-xs-6">
              <img src="/static/img/site-url-qrcode.png" class="img-responsive center-block" alt="recent news 1">
            </div>
            <div class="col-md-8 col-sm-4 col-xs-6">
              <!-- <div class="row">
                <p class="text-capitalize">
                  <a>
                    前往網站
                  </a>
                </p>
              </div> -->
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-widget">
          <h4>聯絡資訊</h4>

          <div class="footer-address">
            <p>
              <a href="tel:02-2963-5558">02-2963-5558</a>
              <br><br>
              <a href="mailto:jing.li@msa.hinet.net">jing.li@msa.hinet.net</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: function() {
    return {
      link_group1: [
        {
          label: '你喝的水乾淨嗎？直擊水管汙垢如墨汁',
          link: 'http://www.setn.com/News.aspx?NewsID=220340',
        },
        {
          label: '水管比想像中髒！　清洗後流出臭黑水',
          link: 'https://news.tvbs.com.tw/life/735606',
        },
        {
          label: '水管藏鐵銹看不到　專家出手汙垢秒現形',
          link: 'http://www.setn.com/News.aspx?NewsID=178067',
        },
        {
          label: '水管洗出咖啡水 病菌全喝下肚',
          link: 'https://goo.gl/Tfmw1p',
        },
        {
          label: '水管長久未清 流出的水比馬桶髒！',
          link: 'http://news.ltn.com.tw/news/life/breakingnews/1219135',
        },
      ]
    }
  },
}
</script>
