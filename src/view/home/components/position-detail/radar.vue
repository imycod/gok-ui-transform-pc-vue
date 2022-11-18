<!-- 雷达图层 -->
<template>
  <div class="resume-radar">
    <Modal v-model="modal" @on-cancel="cancel">
      <gok-radar :radarData="radarData"></gok-radar>
      <div slot="footer" class="tips">
        注：求职者能力值是该用户在河狸学途平台上积累学习行为/项目经验的结果数据，仅供招聘参考。
      </div>
    </Modal>
  </div>
</template>

<script>
import GokRadar from '@/components/charts/gok-radar.vue'

export default {
  components: {
    GokRadar,
  },
  props: {
    isModal: {
      type: Boolean,
      required: true
    },
    modalData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      modal: false,
      radarData: { //雷达图数据
        radarWidth: 480, // 容器宽度
        radarHeight: 330, // 容器高度
        legend: ['岗位', '求职者'], // 图例
        dataList: [ //区域数据
          {
            name: '岗位',
            data: [],
            color: '#5C92F7', // 图例及分割区域颜色
          },
          {
            name: '求职者',
            data: [],
            color: '#5ED9A9'
          }
        ],
        indicator: [],//拐点设置
        axisLabelColor: '#838D9E', // 圈值文字颜色
        echartsId: ''
      },
    };
  },
  watch: {
    isModal: {
      handler (v) {
        this.modal = v;
      },
      immediate: true,
      deep: true
    },
    modalData: {
      handler (v) {
        if (v) {
          let indicators = [],
              listScore = [], listStandard = [];
          v.map(item => {
            indicators.push({
              name: item.text,
              max: 100
            })
            listScore.push(item.score);
            listStandard.push(item.standard);
          })
          this.radarData.indicator = indicators;
          this.radarData.dataList[0].data = listStandard;
          this.radarData.dataList[1].data = listScore;
          this.radarData.echartsId = 'radarId' + Math.random()
        }
      },
      immediate: true,
      deep: true
    }
  },
  mounted () {
  },
  methods: {
    cancel () {
      this.$emit('closeModal')
    }
  }
}
</script>
<style lang='stylus' scoped>
.tips {
  font-size: 12px;
  color: #333;
  text-align: left;
}
</style>
