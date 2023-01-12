<template>
  <div :class="showTotal ? 'upper-part' : 'pack-up'">
    <div class="abstract" :title1="introduce" ref="deta">
            <span class="content-deta" ref="contentdeta">
                {{ introduce }}
            </span>
      <div class="unfold" @click="isShowTotal" v-if="btnshow">
        <p>{{ changeButton ? '展开' : '收起' }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    introduce: String
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
      if (this.$refs.contentdeta.offsetHeight < 155) {
        this.btnshow = false
      } else {
        this.btnshow = true
      }
      if (parseInt(abstractHeight) * 5 >= 155) {
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
  text-indent: 2em;

  .abstract {
    line-height: 31px;
    overflow: hidden;
    zoom: 1;

    .content-deta {
      font-size: 14px;
      font-weight: 400;
      color: #6A7487;
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
  text-indent: 2em;

  .abstract {
    // 最大高度设为5倍的行间距
    max-height: 155px;
    line-height: 31px;
    word-wrap: break-word;
    /*强制打散字符*/
    word-break: break-all;
    background: #ffffff;
    /*同背景色*/
    color: #ffffff;
    overflow: hidden;

    .content-deta {
      width: 100%;
      padding: 0 21px;
    }

    &:after,
      // 这是展开前实际显示的内容
    &:before {
      content: attr(title1);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      color: #6A7487;
    }

    // 把最后最后一行自身的上面5行遮住

    &:before {
      display: block;
      overflow: hidden;
      z-index: 1;
      max-height: 120px;
      background: #ffffff;
    }

    &:after {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      // height: 155px;
      /*截取行数*/
      -webkit-line-clamp: 5;
      text-overflow: ellipsis;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      /*行首缩进字符数，值为[(截取行数-1)*尾部留空字符数]*/
      text-indent: -12px;
      /*尾部留空字符数*/
      padding-right: 3em;

    }

    .unfold {
      z-index: 11;
      outline: 0;
      position: absolute;
      right: 0;
      bottom: 0;

      p {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        color: red;
        cursor: pointer;
      }
    }
  }
}

</style>
