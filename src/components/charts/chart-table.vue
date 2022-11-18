<!--
  1. src/view/home/components/growth-path.vue
-->
<template>
  <div>
    <div :id="'echart-growth' + index" class="echart-growth"></div>
  </div>
</template>

<script>
export default {
  components: {  },

  props: {
    index: {
      type: Number,
      required: true,
    },

    info: {
      type: Object,
      required: true,
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.init()
    });
  },

  methods: {
    truncate(str, num) {
      if (num >= str.length) {
        return str;
      }
      else {
        if (num <= 3) {
          str = str.slice(0, num) + "...";
        }
        else {
          str = str.slice(0, num - 3) + "...";
        }
        return str;
      }
    },

    init() {
      const indicator = this.info.firstKnowledgeScoreResList.map(item => ({
        name: this.truncate(item.knowledgeName, 7),
        max: item.levelScore
      }))
      const valueStu = this.info.firstKnowledgeScoreResList.map(item => {
        if (item.calculateScore > 100) {
          return 100
        } else if (item.calculateScore == 0) {
          return 2
        } else {
          return item.calculateScore
        }
      })
      const valueJob = this.info.firstKnowledgeScoreResList.map(item => {
        if (item.qualified == 0) {
          return 2
        } else {
          return item.qualified
        }
      })
      let myChart = this.$echarts.init(document.getElementById('echart-growth' + this.index))
      myChart.setOption({
        radar: {
          indicator
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: valueStu,
                name: 'Allocated Budget',
                areaStyle: {
                  color: '#EEE7E7'
                },
                itemStyle: {
                  color: '#FF7D33',
                  opacity: 0
                }
              },
              {
                value: valueJob,
                name: 'Actual Spending',
                areaStyle: {
                  color: '#E4EEF8'
                },
                itemStyle: {
                  color: '#2D8CF0',
                  opacity: 0
                }
              }
            ]
          }
        ]
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
.echart-growth {
  width: 350px;
  height: 300px;
}
</style>
