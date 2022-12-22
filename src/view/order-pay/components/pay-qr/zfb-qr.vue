<!--
 * @Author: shiyh shiyh@goktech.cn
 * @Date: 2022-06-13 14:40:53
 * @LastEditors: shiyh shiyh@goktech.cn
 * @LastEditTime: 2022-06-15 14:13:49
 * @FilePath: /college-teaching/src/components/order-pay/pay-qr/zfb-qr.vue
 * @Description: 支付宝二维码
-->
<template>
  <iframe :srcdoc="$attrs.qrContent"
          frameborder='no'
          border='0'
          marginwidth='0'
          marginheight='0'
          scrolling='no'
          width='200'
          height='200'
          security='restricted'>
  </iframe>
</template>
