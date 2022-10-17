<!--
 * @Author: lpj 1248708823@qq.com
 * @Date: 2022-10-14 11:27:26
 * @LastEditors: lpj 1248708823@qq.com
 * @LastEditTime: 2022-10-14 14:45:49
 * @FilePath: \college-teaching\src\view\project-trainning\home\excellent-project\components\common\dilaog.vue
 * @Description: 弹窗基础模板
-->
<template>

    <div class="v-transfer-dom">
       <transition name="fadem">
      <div class="ivu-modal-mask"  v-show="value"></div>
       </transition>
      <transition name="fade">
      <div class="ivu-modal-wrap top"  v-show="value">
        <div class="container ivu-modal">
          <!-- 头部地区 -->
          <div class="content">
            <slot name="content"></slot>
          </div>

          <div class="footer">
            <div class="cancel cp" @click="cancel" v-if="showCancel">{{ cancelText }}</div>
            <div class="confirm cp" @click="confirm">{{ confirmText }}</div>
          </div>
        </div>
      </div>
  </transition>

    </div>

</template>
<script>
export default {
  props: {
    value: {
      default: false
    },
    showCancel: {
      default: false
    },
    cancelText: {
      default: '取消'
    },
    confirmText: {
      default: '确定'
    }
  },
  data () {
    return {};
  },
  computed: {},
  methods: {
    change () {
      this.$emit('input', !this.value);
    },

    cancel () {
      this.$emit('input', false);
      this.$emit('cancel');
    },

    confirm () {
      this.$emit('input', false);
      this.$emit('confirm');
    }
  },
  components: {}
};
</script>
<style lang="stylus" scoped>
.container {
  width: 380px;
  height: 136px;
  background: #FFFFFF;
  padding-top: 24px;
  padding-left: 20px;
  padding-bottom: 24px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;

  .content {
    min-height: 60px;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cancel {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 18px;
      background: #E7E7E7;
      border-radius: 4px 4px 4px 4px;
      font-size: 14px;
      font-weight: 500;
      color: #333333;
      line-height: 20px;
      margin-right: 14px;
    }

    .confirm {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 18px;
      background: #FE8836;
      border-radius: 4px 4px 4px 4px;
      font-size: 14px;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 20px;
    }
  }
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.top {
  top: 200px;
}

.fade-enter-active, .fade-leave-active {
  transform: scale(1)
  opacity: 1;
  transition: all  0.3s;
}

.fade-enter, .fade-leave-to { /* .fade-leave-active below version 2.1.8 */
   opacity: 0;
   transform: scale(0.8)

}

.fadem-enter-active, .fadem-leave-active {
  opacity: 1;
  transition: all  0.1s;
}

.fadem-enter, .fadem-leave-to { /* .fade-leave-active below version 2.1.8 */
   opacity: 0;

}
</style>
