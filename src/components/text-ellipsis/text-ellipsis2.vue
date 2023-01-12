<template>
  <div
      class="bd"
      :class="showTotal ? 'upper-part' : 'pack-up'"
      :style="{'max-height':showTotal ? 'none': this.lineHeight*lineClamp +20+'px'}"
  >
    <div
        class="abstract"
        :content="introduce"
        ref="deta"
        :style="{'max-height':showTotal ? 'none': this.lineHeight*lineClamp+'px'}"
    >
      <div
          class="content-deta"
          :style="{'line-height': lineHeight+'px','-webkit-line-clamp': lineClamp}"
          ref="contentdeta">
        {{ introduce }}
      </div>
    </div>
    <div class="unfold" @click="isShowTotal" v-if="btnshow">
      <p>{{ changeButton ? '展开' : '收起' }}</p>
    </div>
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
  },
  data () {
    return {
      // 是否展示所有文本内容
      showTotal: false,
      // 显示展开还是收起
      changeButton: true,
      btnshow: false // 是否显示展开 收起
    };
  },
  watch: {
    introduce: {
      handler (v) {
        this.$nextTick(() => {
          this.calculateText()
        })
      },
      immediate: true
    }
  },
  methods: {
    isShowTotal () {
      console.log('是否展开' + this.showTotal);
      this.showTotal = !this.showTotal;
      this.changeButton = !this.changeButton;
    },
    calculateText () {
      let abstractHeight = window.getComputedStyle(this.$refs.deta).height.replace('px', '');
      if (this.$refs.contentdeta.offsetHeight < this.lineClamp * this.lineHeight) {
        this.btnshow = false
      } else {
        this.btnshow = true
      }
      if (parseInt(abstractHeight) >= this.lineClamp * this.lineHeight) {
        this.changeButton = true;
        this.showTotal = false;
      } else {
        this.changeButton = false;
        this.showTotal = true;
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
// 展开
.upper-part {
  margin-top: 15px;

  .abstract {

    .content-deta {
      font-size: 14px;
      font-weight: 400;
      color: #6A7487;
      overflow: hidden;

    }
  }

  .unfold {
    float: right;

    p {
      margin-top: 0px;
      margin-bottom: 0px;
      font-size: 14px;
      font-weight: 500;
      color: red;
      cursor: pointer;
    }
  }
}

// 收起
.pack-up {
  position: relative;
  margin-top: 15px;

  .abstract {
    word-wrap: break-word;
    /*强制打散字符*/
    word-break: break-all;
    background: #ffffff;
    /*同背景色*/
    color: #ffffff;
    overflow: hidden;

    .content-deta {
      width: 100%;
    }

    &:after,
      // 这是展开前实际显示的内容
    &:before {
      content: attr(content);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      color: #6A7487;
    }

    &:before {
      display: block;
      overflow: hidden;
      z-index: 1;
      max-height: 20px;
      background: #ffffff;
    }

    &:after {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      /*截取行数*/
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

  }

  .unfold {
    float: right;

    p {
      margin: 0;
      font-size: 14px;
      font-weight: 500;
      color: red;
      cursor: pointer;
    }
  }
}

</style>
