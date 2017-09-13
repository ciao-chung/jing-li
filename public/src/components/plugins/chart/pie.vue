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
      chartPie: [],
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
      this.chartPie = new Chart(ctx, {
          type: 'pie',
          data: {
              labels: [],
            datasets: [{
                  data: [],
                  backgroundColor: [],
                  hoverBackgroundColor: []
              }]
          },
          options: {
            legend: {
              labels: {
                fontSize: this.fontSize
              },  
            },
            title: {
              fontSize: 240
            },
              tooltips: {
                bodyFontSize: this.fontSize
              }
          }
      })
    },

    injectData: function() {
      if(this.config.length != 0) {
        this.chartPie.data.labels = this.config.labels
        this.chartPie.data.datasets[0].label = this.config.label
        this.chartPie.data.datasets[0].data = this.config.data
        this.chartPie.data.datasets[0].backgroundColor = this.config.color
        this.chartPie.data.datasets[0].hoverBackgroundColor = this.config.color
        this.chartPie.update()
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