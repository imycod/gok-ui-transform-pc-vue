<!-- 公共组件-雷达图 -->
<template>
  <div class="gok-radar">
    <div id="echarts-radar" :style="{width: radarData.radarWidth+'px',height:radarData.radarHeight + 'px'}"></div>
  </div>
</template>

<script>
export default {
  props: {
    radarData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {};
  },
  watch: {
    radarData: {
      handler (v) {
        if (v.indicator.length) this.init();
      },
      immediate: true,
      deep: true
    }
  },
  mounted () {
    // this.init();
  },
  methods: {
    init () {
      let gokRadar = this.$echarts.init(document.getElementById('echarts-radar'));
      let option = {
        legend: {
          data: this.radarData.legend,
          x: 'center',
          bottom: 20,
          itemGap: 20
        },
        tooltip: {},
        radar: {
          center: ['50%', '50%'],
          radius: 80,
          startAngle: 90,
          shape: 'circle',
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 0,
            }
          },
          name: {
            textStyle: {
              fontSize: 13,
              color: '#4e5969'
            }
          },
          indicator: this.initIndicatorData()
        },
        series: this.getSeries()
      }
      gokRadar.setOption(option);
    },
    // 初始拐点数据整理
    initIndicatorData () {
      let axisLabels = {
            show: true,
            fontSize: 12,
            color: this.radarData.axisLabelColor,
            showMaxLabel: true, //不显示最大值，即外圈不显示数字最大值
            showMinLabel: true, //显示最小数字，即中心点显示0
          },
          indicator = this.radarData.indicator;
      if (indicator[0]) indicator[0].axisLabel = axisLabels;
      return indicator;
    },
    // 获取series 系列数据
    getSeries () {
      const series = []
      for (let i in this.radarData.dataList) {
        series.push(...this.buildSeries(i))
      }
      return series;
    },
    // 数据结构处理
    buildSeries (dataIndex) {
      const data = this.radarData.dataList[dataIndex].data
      const helper = data.map((item, index) => {
        const arr = new Array(data.length)
        arr.splice(index, 1, item)
        return arr
      })
      return [data, ...helper].map((item, index) => {
        return {
          name: this.radarData.dataList[dataIndex].name,
          type: 'radar',
          symbol: index === 0 ? 'circle' : 'none',
          symbolSize: 6,
          itemStyle: {
            color: this.radarData.dataList[dataIndex].color,
          },
          lineStyle: {
            color: index === 0 ? this.radarData.dataList[dataIndex].color : 'transparent'
          },
          areaStyle: {
            color: index === 0 ? this.radarData.dataList[dataIndex].color : 'transparent',
            opacity: 0.5
          },
          tooltip: {
            show: index === 0 ? false : true,
            formatter: () => {
              let indicator = this.initIndicatorData();
              let res = indicator[index - 1].name + '：<br>'
              for (let x of this.radarData.dataList) {
                let str = '<i style="display: inline-block;width: 10px;height: 10px;background: ' +
                    x.color + ';margin-right: 5px;border-radius: 50%;}"></i>' +
                    x.name + '：' + x.data[index - 1] + '<br>'
                res += str;
              }
              return res
            }
          },
          z: index === 0 ? 1 : 2,
          data: [item]
        }
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
.gok-radar {
  display: flex;
  justify-content: center;
  align-items: center;

  #echarts-radar {
    // border: 1px solid #eaeaea;
    // box-shadow: 0 1px 6px rgba(33, 27, 27, 0.2);
  }
}
</style>
