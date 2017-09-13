<template v-if="render">
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
      render: false,
      chartLine: [],
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
      this.chartLine = new Chart(ctx, {
          type: 'line',
          data: {
              labels: [],
            datasets: [
            {
              label: [],
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 5,
              pointHitRadius: 10,
              data: [],
              spanGaps: false,
            }
          ]
          },
          options: {
            line: {
              labels: {
                fontSize: this.fontSize
              },  
            },
            title: {
              fontSize: 240
            },
            tooltips: {
              bodyFontSize: this.fontSize
            },
            stepSize: 1
          }
      })
    },

    injectData: function() {
      this.render = false
      if(this.config.length != 0) {
        this.chartLine.data.labels = this.config.labels
        this.chartLine.data.datasets[0].label = this.config.label
        this.chartLine.data.datasets[0].data = this.config.data
        this.chartLine.update()
      }
      this.render = true
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