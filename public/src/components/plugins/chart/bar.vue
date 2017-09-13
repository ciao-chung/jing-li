<template>
  <canvas :class="uniqueClass"></canvas>
</template>

<script>
import Chart from 'chart.js'
import uuid from 'uuid/v4'
export default {
  props: ['config'],
  mounted: function() {
    this.renderChart()
    this.injectData()
  },
  data: function() {
    return {
      chartBar: [],
      fontSize: 16
    }
  },
  computed: {
    uniqueClass: function() {
      return uuid()
    },
  },
  methods: {
    renderChart: function() {
      var self = this
      var ctx = $(`.${this.uniqueClass}`)
      this.chartBar = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: [],
             datasets: [
              {
                  label: '',
                  backgroundColor: [],
                  borderColor: [],
                  borderWidth: 1,
                  data: [],
              }
          ]
          },
          options: {
            scales: {
                  xAxes: [{
                      stacked: true
                  }],
                  yAxes: [{
                      stacked: true
                  }]
              },
              tooltips: {
                bodyFontSize: this.fontSize
              }
          }
      })
    },
    injectData: function() {
      if(this.config.length != 0) {
        this.chartBar.data.labels = this.config.labels
        this.chartBar.data.datasets[0].label = this.config.label
        this.chartBar.data.datasets[0].data = this.config.data

        var backgroundColor = []
        var borderColor = []
        for(var index in this.config.color) {
          var color = this.config.color[index]
          this.chartBar.data.datasets[0].borderColor.push(`rgba(${color}, 1)`)
          this.chartBar.data.datasets[0].backgroundColor.push(`rgba(${color}, 0.2)`)
        }
        this.chartBar.update()
      }
    }
  },
  watch: {
    config: {
      deep: true,
      handler: function() {
        this.injectData()  
      }
    }
  }
}
</script>