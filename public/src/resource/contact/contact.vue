<template>
  <div class="container">
    <h1>聯絡我們</h1>

    <section class="intro bg-light-gray" v-for="location in locations">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="embed-responsive embed-responsive-4by3">
              <iframe :src="location.url"
                width="600"
                height="450"
                frameborder="0"
                style="border:0"
                allowfullscreen></iframe>
            </div>
          </div>

          <div class="col-md-7">
            <div class="intro-description">
              <h2>{{location.name}}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante ex, fermentum vel libero eget interdum semper libero. Curabitur egestas, arcu id tempor convallis.
              </p>

              <ul class="points">
                <li>
                  <span>
                    <i class="fa fa-map-marker"></i>
                  </span>
                  {{location.address}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  mounted: function() {
    this.$nextTick(() => {
      this.$root.$emit('page.done')
    })
  },
  data: function() {
    return {
      locations: [
        {
          name: '台北服務據點',
          tel: '02-2963-5558(分機: 16)',
          contact: '林小姐',
          url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.799769999152!2d121.4675503141124!3d25.006918845532393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAwJzI0LjkiTiAxMjHCsDI4JzExLjEiRQ!5e0!3m2!1szh-TW!2stw!4v1505533087448',
          address: '新北市板橋區國泰街25巷6號5F',
        },
        {
          name: '台中服務據點',
          tel: '04-2471-8665',
          phone: '0939-390-201',
          contact: '陳壕誠',
          url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.803988114328!2d120.65226895079755!3d24.143520884320566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dbcb5304001%3A0xa1d735935292f70e!2zNDA45Y-w5Lit5biC5Y2X5bGv5Y2A5aSn5aKp5LiD6KGXM-iZnw!5e0!3m2!1szh-TW!2stw!4v1506398769795',
          address: '台中市南屯區大墩七街3號',
        },
        {
          name: '高雄服務據點',
          tel: '07-5912-369',
          phone: '0966-628-167',
          contact: '王存心',
          url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4376.329167803047!2d120.28810016065641!3d22.726772831765015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0f0d2b11f195%3A0xbcd1e1d3a8e699dd!2zODEx6auY6ZuE5biC5qWg5qKT5Y2A5aSn5a245Y2B6KGXMjAz6Jmf!5e0!3m2!1szh-TW!2stw!4v1506398638079',
          address: '高雄市楠梓區大學26街203號',
        },
      ]
    }
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
div[data-role="location-wrap"]
  div[data-role="location"]
</script>
