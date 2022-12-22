<template>
  <div class="mode-payment">
    <p class="info-row limit-row">请在 <span class="limit-time">{{limitTimeStr}}</span> 内完成支付，逾期订单将取消</p>
    <p class="info-row">订单号：{{orderInfo.orderId}}</p>
    <p class="info-row">购买账号：{{userInfo}}</p>
    <p class="info-row" v-for="item in goodsInfo" :key="item.goodsId">商品名称：{{item.goodsName}}</p>
    <p class="title weight-title height-row">应付金额 <span class="price" v-cny="orderInfo.orderPrice">¥</span></p>
    <p class="title height-row">支付平台</p>
    <div class="channel-content">
      <div class="pay-channel-item" :class="selectedPayChannel === item.key ? 'active-item' : ''" v-for="(item, index) in channels" :key="index" @click="selectChannel(item)">
        <img :src="item.icon" :alt="item.name">
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="footer">
      <button @click="doPayment">立即支付</button>
    </div>
    <gok-dialog-text v-if="cancelPop"
      :title="'订单已取消'"
      :titleImg="`${$CONFIG.STATIC_RESOURCE_URL}edu/icon/dialog/icon-error.png`"
      @ok="cancelOk"
    />
  </div>
</template>

<script>
import Order from './order.js'
let orderObj = null;
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
      orderInfo: {},
      goodsInfo: {},
      channels: [],
      limitTimeStr: '',
      selectedPayChannel: 'ZFB',
      cancelPop: false
    }
  },
  computed: {
    userInfo () {
      return `${this.$one.uc.token.getUserBaseInfo().nm}（${this.$one.uc.token.getUserBaseInfo().phone}）`;
    }
  },
  async mounted() {
    orderObj = new Order(this.orderId);
    this.channels = Object.freeze(orderObj.payChannels);
    await orderObj.getOrderDetail();
    this.orderInfo = orderObj.orderInfo;
    this.goodsInfo = orderObj.goodsInfo;
    orderObj.payCountDown((timeText, finish) => {
      if (!finish) {
        this.limitTimeStr = timeText;
      } else {
        this.cancelPop = true;
      }
    })
    this.$once('hook:beforeDestroy', () => {
      orderObj.clearTimer();
    })
  },
  methods: {
    selectChannel (item) {
      this.selectedPayChannel = item.key;
    },
    doPayment () {
      this.$emit('next', { payChannel: this.selectedPayChannel });
    },
    async cancelOk () {
      await orderObj.cancelOrder();
      this.cancelPop = false;
    }
  }
}
</script>
<style lang="stylus" scoped>
$lightColor = #FF7D33;
$staticUrl = 'https://gok-static.goktech.cn/';
$orderWaitIcon = $staticUrl + 'edu/icon/icon-order-wait.png';
.info-row{
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 400;
  color: #4E5969;
}
.limit-row{
  display: flex;
  align-items: center;
  position: relative;
  height: 36px;
  padding-left: 40px;
  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 36px;
    height: 36px;
    background-image: url($orderWaitIcon);
    background-size: contain;
  }
}
.limit-time{
  color: $lightColor;
}
.channel-content{
  display: flex;
}
.pay-channel-item{
  display: flex;
  align-items: center;
  width: 124px;
  height: 54px;
  padding: 12px;
  margin-right: 30px;
  border-radius: 4px;
  border: 1px solid #E5E6EB;
  cursor: pointer;
  &:hover{
    border: 1px solid #FF7D33;
  }
  & > img{
    width: 30px;
    height: 30px;
  }
  & > span{
    padding-left: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #1D2129;  
  }
}
.active-item {
  border: 1px solid #FF7D33;
}
.title {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}
.weight-title{
  font-weight: 500;
}
.height-row{
  display: flex;
  align-items: center;
  height: 36px;
}
.price{
  padding-left: 18px;
  font-size: 30px;
  font-weight: 400;
  color: $lightColor;
  font-family: DINCond-Bold-Regular, DINCond-Bold;
}
.footer{
  padding-top: 16px;
  & > button{
    width: 112px;
    height: 42px;
    background: linear-gradient(180deg, #FFBA4E 0%, #FB771A 100%);
    border-radius: 4px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
    cursor: pointer;
    &:hover{
      opacity: 0.9;
    }
  }
}
</style>
