<template>
  <div>
    <Drawer :closable="false" :mask-closable="false" v-model="drawerFlag" @on-close="close">
      <div class="drawer-container" :style="drawerStyle" v-if="drawerFlag">
        <slot></slot>
      </div>
    </Drawer>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      required: false,
      default: 520
    },
    limits: {
      type: Array,
      required: true
    }
  },
  computed: {
    drawerStyle () {
      return {
        width: `${parseInt(this.width)}px`
      }
    }
  },
  data () {
    return {
      drawerFlag: false
    }
  },
  watch: {
    /**
     * 监听路由，开启侧边遮罩（消息/用户中心）
     */
    '$route': {
      handler (to, from) {
        const maskName = to.query.mask_path;
        if (maskName) {
          this.drawerFlag = this.limits.includes(maskName);
          this.drawerFlag && this.$emit('show', maskName);
        } else {
          this.drawerFlag = false;
          this.$emit('close', maskName);
        }
      },
      immediate: true
    }
  },
  methods: {
    /**
     * 抽屉遮罩的关闭事件
     */
    close () {
      this.drawerFlag = false;
      setTimeout(() => {
        this.$router.go(-1);
      }, 300)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import './index.styl'
</style>
