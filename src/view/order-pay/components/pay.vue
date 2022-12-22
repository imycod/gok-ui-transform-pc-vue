<template>
  <div class="pay-step">
    <p class="title"><span>应付金额</span><span v-cny="orderInfo.orderPrice"></span></p>
    <p class="des">请在 <span>{{limitTimeStr}}</span> 内完成支付，逾期订单将取消</p>
    <div class="qr-code-container">
      <div class="border-1"></div>
      <div class="border-2"></div>
      <div class="border-3"></div>
      <div class="border-4"></div>
      <div class="qr-code">
        <component :is="qrComponent" :qrContent="qrContent"/>
      </div>
    </div>
    <p class="pay-err"><span @click="lastStep">修改支付方式，返回上一步</span></p>
    <gok-dialog-text v-if="cancelPop"
      :title="'订单已取消'"
      :titleImg="`${$CONFIG.STATIC_RESOURCE_URL}edu/icon/dialog/icon-error.png`"
      @ok="cancelOk"
    />
  </div>
</template>

<script>
import ZfbQr from './pay-qr/zfb-qr.vue'
import WechatQr from './pay-qr/wechat-qr.vue'
import Order from './order.js'
let orderObj = null;
const QR_COMPONENT = {
  ZFB: { componentName: 'ZfbQr' },
  Wechat: { componentName: 'WechatQr' }
}
export default {
  components: { ZfbQr, WechatQr },
  props: {
    orderId: {
      type: String,
      required: true
    },
    channel: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      orderInfo: {},
      limitTimeStr: '',
      bizNo: '',
      uid: '',
      pollingOrder: false,
      qrContent: '',
      qrComponent: '',
      cancelPop: false
    }
  },
  async mounted() {
    orderObj = new Order(this.orderId);
    await orderObj.getOrderDetail();
    this.orderInfo = orderObj.orderInfo;
    this.doPay();
    orderObj.payCountDown((timeText, finish) => {
      if (!finish) {
        this.limitTimeStr = timeText;
        this.pollingOrder && this.getOrderStatus();
      } else {
        this.cancelPop = true;
      }
    })
    this.$once('hook:beforeDestroy', () => {
      orderObj.clearTimer();
    })
  },
  methods: {
    doPay () {
      switch (this.channel) {
        case 'ZFB':
          this.$one.uc.http.post(this.$API.TAC.payOrderByAli(this.orderId)).then(res => {
            const { data } = res;
            this.bizNo = data.bizNo;
            this.uid = data.uid;
            this.qrContent = data.form;
            this.pollingOrder = true;
            this.qrComponent = QR_COMPONENT.ZFB.componentName;
          }).catch(err => {
            this.pollingOrder = false;
          })
          break;
        case 'Wechat':
          this.$one.uc.http.post(this.$API.TAC.payOrderByWechat(this.orderId)).then(res => {
            const { data } = res;
            this.bizNo = data.bizNo;
            this.uid = data.uid;
            this.qrContent = data.codeUrl;
            this.pollingOrder = true;
            this.qrComponent = QR_COMPONENT.Wechat.componentName;
          }).catch(err => {
            this.pollingOrder = false;
          })
          break
      }
    },
    getOrderStatus () {
      const data = {
        bizNo: this.bizNo,
        uid: this.uid
      }
      this.$one.uc.http.post(this.$API.TAC.getOrderStatus, { data }).then(res => {
        const { data } = res;
        // 支付成功
        if (data.payStatus === 2) {
          orderObj.clearTimer();
          this.$emit('next');
        }
      }).catch(err => {
        this.pollingOrder = false;
      })
    },
    async cancelOk () {
      await orderObj.cancelOrder();
      this.cancelPop = false;
    },
    lastStep () {
      this.$emit('last');
    }
  }
}
</script>
<style lang="stylus" scoped>
.pay-step{
  min-width: 400px;
  text-align: center;
}
.title{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  & > span:first-child{
    font-size: 14px;
    font-weight: 500;
    color: #333333;
  }
  & > span:last-child{
    padding-left: 16px;
    font-size: 30px;
    font-family: DINCond-Bold-Regular, DINCond-Bold;
    font-weight: 400;
    color: #FF7D33;
  }
}
.des{
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #4E5969;
  & > span{
    color: #FF7D33;
  }
}
.qr-code-container{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-top: 15px;
  & > .qr-code{
    width: 130px;
    height: 130px;
    & > img{
      width: 100%;
      height: 100%;
    }
  }
}
.border-common{
  width: 40px;
  height: 40px;
  opacity: 1;
  border: 3px solid $base;
  position: absolute;
}
.border-1 {
  @extends .border-common;
  border-width: 3px 0 0 3px;
  border-radius: 10px 0 0 0;
  left: 0;
  top: 0;
}
.border-2 {
  @extends .border-common;
  border-width: 3px 3px 0 0;
  border-radius: 0 10px 0 0;
  right: 0;
  top: 0;
}
.border-3 {
  @extends .border-common;
  border-width: 0 0 3px 3px;
  border-radius: 0 0 0 10px;
  left: 0;
  bottom: 0;
}
.border-4 {
  @extends .border-common;
  border-width: 0 3px 3px 0;
  border-radius: 0 0 10px 0;
  right: 0;
  bottom: 0;
}
.pay-err{
  position: relative;
  margin-top: 30px;
  font-size: 14px;
  color: #8590A6;
  cursor: pointer;
  &:hover{
    & > span{
      border-bottom: solid 1px #8590A6;
    }
  }
}
</style>
