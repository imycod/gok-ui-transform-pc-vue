<!--
 * @Author: shiyh shiyh@goktech.cn
 * @Date: 2022-06-10 09:44:20
 * @LastEditors: shiyh shiyh@goktech.cn
 * @LastEditTime: 2022-06-15 14:16:24
 * @FilePath: /college-teaching/src/components/order-pay/complete.vue
 * @Description: 支付完成
-->
<template>
  <div class="pay-complete">
    <img :src="`${$CONFIG.STATIC_RESOURCE_URL}edu/icon/icon-order-success.png`" alt="支付成功">
    <p class="title">订单号：{{orderId}}</p>
    <p class="des">开始你的成长路径，朝着目标前进</p>
    <p class="footer"><button @click="back">开始学习</button></p>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    orderId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  },
  mounted() {},
  methods: {
    back () {
      this.$router.replace({
        path: '/growth-path-details/brief',
        query: this.$route.query
      });
    }
  }
}
</script>
<style lang="stylus" scoped>
.pay-complete{
  text-align: center;
}
img{
  width: 40px;
  height: 40px;
}
.title{
  font-size: 14px;
  font-weight: 400;
  color: #4E5969;
  margin-top: 16px;
  margin-bottom: 24px;
}
.des{
  font-size: 14px;
  font-weight: 400;
  color: #6A7487;
}
.footer{
  margin-top: 8px;
  & > button{
    width: 88px;
    height: 28px;
    background: #FF7D33;
    border: none;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
    cursor: pointer;
  }  
}
</style>
