<!--
 * @Author: shiyh shiyh@goktech.cn
 * @Date: 2022-06-13 14:40:20
 * @LastEditors: shiyh shiyh@goktech.cn
 * @LastEditTime: 2022-06-13 15:04:00
 * @FilePath: /college-teaching/src/components/order-pay/pay-qr/wechat-qr.vue
 * @Description: 微信二维码
-->
<template>
  <vue-qr :text="$attrs.qrContent" :size="250" :margin="0">
        </vue-qr>
</template>

<script>
import VueQr from 'vue-qr'
export default {
  components: { VueQr }
}
</script>
