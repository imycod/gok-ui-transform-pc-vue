<!--
 * @Author: lpj 1248708823@qq.com
 * @Date: 2022-10-14 17:26:39
 * @LastEditors: lpj 1248708823@qq.com
 * @LastEditTime: 2022-10-17 09:36:37
 * @FilePath: \college-teaching\src\view\project-trainning\home\excellent-project\components\common\cancel-tip.vue
 * @Description: 取消弹窗提示
-->
<template>
    <CancelDialog v-model="value" :showCancel="true" @cancel="cancel" @confirm="confirm" id="tip" confirmText="仍要退出">
      <template slot="content">
        <div class="dialog">
          <img src="~@/assets/images/error.png" alt="" class="icon" />
          <span>退出将不保存已填写信息</span>
        </div>
      </template>
    </CancelDialog>
</template>
<script>
import CancelDialog from './dialog.vue'
export default {
  props: {
    value: {
      default: false
    }
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    cancel () {
      this.$emit('input', false)
      this.$emit('cancel')
    },

    confirm () {
      this.$emit('input', false)
      this.$emit('confirm')
    }
  },
  components: {
    CancelDialog
  }
}
</script>
<style lang='stylus' scoped>
.dialog {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0,0,0,0.9);
  line-height: 24px;
  .icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
}

</style>
