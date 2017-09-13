<template>
  <div v-if="apikey != null && apikey != undefined" :id="uid" data-role="gmap"></div>
</template>

<script>
import uuidV4 from 'uuid/v4'
export default {
  props: {
    apikey: {
      type: String,
      default: '',
    },
    config: {
      type: Object,
      default: {},
    },
    locations: {
      type: Array,
      default: null,
    },
  },
  data: function () {
    return {
      map: null,
      markers: null,
      infowindow: null,
      image: null,
      useClusterer: false,
    }
  },
  created: function () {
    window['initMap'] = () => {
      this.setMap()
      this.setMarker()
      this.setClusterer()
    }
  },
  mounted: function () {
    this.loadApi()
  },
  methods: {
    setDefault: function () {
      if(this.config.zoom == undefined) this.config.zoom = 15
      if(this.config.image != undefined) {
        this.image = this.config.image
        if(this.image.width == undefined) this.image.width = 20
        if(this.image.height == undefined) this.image.height = 20
      }
    },
    loadApi: function () {
      if(this.apikey == null || this.apikey == undefined) return

      if($('#gmap-api').length > 0) {
        initMap()
      }

      if($('#gmap-api').length <= 0) {
        $('body').append(`<script id='gmap-api' src=\"https://maps.googleapis.com/maps/api/js?key=${this.apikey}&callback=initMap\" async defer><\/script>`)
      }

      if(!this.useClusterer && this.config.cluster != undefined) {
        this.useClusterer = true
        require('js-marker-clusterer')
      }
    },
    setMap: function () {
      this.map = null
      this.markers = null
      this.infowindow = null
      this.image = null
      this.useClusterer = false

      this.setDefault()
      this.map = new google.maps.Map(document.getElementById(`${this.uid}`), {
        center: {
          lat: this.config.lat,
          lng: this.config.lng
        },
        zoom: this.config.zoom
      })

      if(this.config.styles != undefined) this.map.setOptions({ styles: this.config.styles })
    },
    setMarker: function () {
      const self = this
      if(this.locations == null && this.locations == undefined) return
      this.markers = this.locations.map((location, i) => {
        return new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng},
          map: self.map,
          icon: self.setImage(self.image),
        })
      })

      if(this.config.openWindow) {
        this.infowindow = new google.maps.InfoWindow()
        this.markers.map((marker, index) => {
          google.maps.event.addListener(marker, 'click', (function(marker) {
            return function() {
              const location = self.locations[index]
              if(location.title == undefined) return

              let content = location.title
              if(location.content != undefined) content = location.content

              self.infowindow.setContent(content)
              self.infowindow.open(self.map, marker)
            }
          })(marker))
        })
      }
    },
    setImage: function (config) {
      if(config == null || config == undefined) return config
      let newFormat = config
      newFormat.size = new google.maps.Size(config.width, config.height)
      return newFormat
    },
    setClusterer: function () {
      if(this.config.cluster == undefined || this.config.cluster == null) return

      var markerCluster = new MarkerClusterer(this.map, this.markers, {
        imagePath: this.config.cluster.image
      })
    },
  },
  computed: {
    uid: function () {
      return uuidV4()
    },
  },

  watch: {
    locations: {
      deep: true,
      handler: function () {
        initMap()
      },
    },
    config: {
      deep: true,
      handler: function () {
        initMap()
      },
    },
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
div[data-role="gmap"]
  height: 100%
  width: 100%
</style>