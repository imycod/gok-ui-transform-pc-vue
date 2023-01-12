<!-- 文本超出省略 查看更多显示全部内容-->
<template>
  <div>
    <div class="text-des" :style="{'line-height': lineHeight+'px','-webkit-line-clamp': lineClamp}"
         ref="textDes" v-if="!showMore">
      {{ introduce }}
    </div>
    <div class="text-des-overflow-hide" ref="textDes2" :style="{'line-height': lineHeight+'px'}">{{ introduce }}</div>
    <div class="switch-btn cp" v-if="hasMore" @click="switchFn(1)">
      {{ btnText }}
      <Icon type="ios-arrow-forward" size="14"/>
    </div>
    <div class="text-des_more" :style="{'line-height': lineHeight+'px'}" v-if="showMore">{{ introduce }}</div>
    <div class="switch-btn cp" v-if="!hasMore && showMore" @click="switchFn(0)">收起</div>
  </div>
</template>
<script>
export default {
  props: {
    introduce: { // 文本内容
      type: String,
      required: true
    },
    lineHeight: { // 行距
      type: Number,
      default: 22
    },
    lineClamp: { // 截取行数
      type: Number,
      default: 3
    },
    btnText: {
      type: String,
      default: '查看全部'
    },
  },
  data () {
    return {
      hasMore: false,
      showMore: false
    }
  },
  mounted () {
    // const w=this.$refs.textDes.offsetWidth
    // this.$refs.textDes2.style.width=w+'px'
  },
  watch: {
    des: {
      handler (v) {
        this.$nextTick(() => {
          this.calculateText(this.lineClamp, this.lineHeight)
        })
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // 计算文本高度
    calculateText (line_clamp, line_height) {
      const h = this.$refs.textDes.offsetHeight
      const h2 = this.$refs.textDes2.offsetHeight
      this.hasMore = (this.$refs.textDes.offsetHeight >= line_clamp * line_height) && h2 > h;
    },
    // 按钮切换
    switchFn (type) {
      if (type) {
        this.showMore = true
        this.hasMore = false
      } else {
        this.showMore = false
        this.hasMore = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.text-des {
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: wrap;
  color: #6A7487;
}

.text-des-overflow-hide {
  position: fixed;
  z-index: -2222;
  visibility: hidden;
  white-space: wrap;
}

.text-des_more {
  color: #6A7487;
  font-size: 14px;
}

.switch-btn {
  font-size: 12px;
  text-align: right;
  color: #FE8836;
  margin-top: 4px;
}
</style>
