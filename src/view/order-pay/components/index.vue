<!--
 * @Author: shiyh shiyh@goktech.cn
 * @Date: 2022-06-10 09:42:37
 * @LastEditors: shiyh shiyh@goktech.cn
 * @LastEditTime: 2022-06-16 17:14:19
 * @FilePath: /college-teaching/src/components/order-pay/index.vue
 * @Description: 订单支付
-->
<template>
  <div class="pay-container">
    <pay-step :steps="steps" :current="currentStep"></pay-step>
    <div class="pay-main">
      <mode-of-payment v-if="currentComponentName === 'ModeOfPayment'" :orderId="orderId" @next="next"/>
      <do-pay v-if="currentComponentName === 'DoPay'" :orderId="orderId" :channel="payChannel" @next="next" @last="lastStep"/>
      <pay-complete v-if="currentComponentName === 'PayComplete'" :orderId="orderId" />
    </div>
  </div>
</template>

<script>
import PayStep from './pay-step/index.vue'
import ModeOfPayment from './mode-of-payment.vue'
import DoPay from './pay.vue'
import PayComplete from './complete.vue'
const PAY_STEP = {
  0: {
    component: 'ModeOfPayment'
  },
  1: {
    component: 'DoPay'
  },
  2: {
    component: 'PayComplete'
  }
}
export default {
  components: { PayStep, ModeOfPayment, DoPay, PayComplete },
  props: {
    orderId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      steps: [
        { title: '选择支付方式', des: '确认支付方式' },
        { title: '支付', des: '扫描二维码支付' },
        { title: '支付完成', des: '开始学习' }
      ],
      currentStep: 0,
      currentComponentName: '',
      payChannel: ''
    }
  },
  mounted() {
    this.currentComponentName = PAY_STEP[this.currentStep].component;
  },
  methods: {
    next (params = null) {
      params?.payChannel && (this.payChannel = params.payChannel);
      this.currentStep++;
      this.currentComponentName = PAY_STEP[this.currentStep].component;
    },
    lastStep () {
      this.currentStep--;
      this.currentComponentName = PAY_STEP[this.currentStep].component;
    }
  }
}
</script>
<style lang="stylus" scoped>
.pay-container{
  padding-top: 26px;
  text-align: center;
  .pay-main{
    display: inline-block;
    padding-top: 28px;
    margin: 0 auto;
    text-align: left;
  }
}
</style>
