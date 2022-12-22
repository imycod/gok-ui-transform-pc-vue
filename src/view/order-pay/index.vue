<!--
 * @Author: shiyh shiyh@goktech.cn
 * @Date: 2022-06-08 14:26:15
 * @LastEditors: shiyh shiyh@goktech.cn
 * @LastEditTime: 2022-06-27 18:53:43
 * @FilePath: /college-teaching/src/view/growth-path-details/order-pay/index.vue
 * @Description: 订单详情
-->
<template>
  <div>
    <order-pay :orderId="orderId"></order-pay>
  </div>
</template>

<script>
import OrderPay from './components/index.vue'
import Order from './components/order.js'
let orderObj = null;
export default {
  components: { OrderPay },
  data () {
    return {
      orderId: this.$route.params.orderId
    }
  },
  computed: {

  },
  mounted () {
    orderObj = new Order(this.orderId);
    this.checkOrder();
    const _this = this;
    const tabSwitch = function () {
      if (!document.hidden) {
        _this.checkOrder();
      }
    }
    try {
      // 切换tab页时判断租户ID是否变化
      if (document.hidden !== undefined) {
        document.addEventListener('visibilitychange', tabSwitch);
      }
    } catch (err) {}
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('visibilitychange', tabSwitch);
    })
  },
  methods: {
    checkOrder () {
      orderObj.getOrderDetail().then(res => {
        if (res.payStatus === 2) {
          this.$Message.success('订单已完成');
          this.$router.go(-1);
        }
      }).catch(err => {
        this.$router.go(-1);
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
