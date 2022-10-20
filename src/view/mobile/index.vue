<template>
  <div class="mobile-container">
    <div class="test-viewport bd">测试转换</div>
  </div>
</template>

<script>
export default {
  name: "test-viewport",
  created() {
    this.setFontSize()
    window.onresize = () => this.setFontSize()
  },
  beforeDestroy() {
    document.querySelector('html').style.fontSize = 'inherit'
  },
  methods: {
    setMeta () {
      let head = document.getElementsByTagName('head');
      let meta = document.createElement('meta');
      console.dir(meta);
      meta.name = 'viewport'
      meta.content = 'width=device-width,initial-scale=1.0,minimum-scale=0.5,maximum-scale=2.0,user-scalable=no'
      head[0].appendChild(meta)
    },
    /**
     * @description: 设置基准字体值
     * @return {*}
     */
    setFontSize() {
      let designWidth = 750 //设计稿的宽度
      // let designHeight = 1080 //设计稿的高度
      // 如果可视实际比例小于设计稿比例
      // document.documentElement.clientWidth/document.documentElement.clientHeight < designWidth/designHeight ?
      const fontSize = (document.documentElement.clientWidth / designWidth) * 12
      // (document.documentElement.clientHeight / designHeight) * 12;
      document.querySelector('html').style.fontSize = (document.documentElement.clientWidth * 16) / 750 + 'px'
      console.log('我是设置的字体基准', fontSize)
    }
  },

}
</script>

<style lang="stylus" scoped>
.mobile-container {
  .test-viewport {
    font-size: 1rem;
    text-align: center;
    background: #13b5b1;
  }
}
</style>
