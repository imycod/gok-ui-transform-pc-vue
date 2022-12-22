<!--
 * @Author: shiyh shiyh@goktech.cn
 * @Date: 2022-06-10 09:53:29
 * @LastEditors: shiyh shiyh@goktech.cn
 * @LastEditTime: 2022-06-13 00:14:56
 * @FilePath: /college-teaching/src/components/order-pay/pay-step/last.vue
 * @Description: 步骤的最后一步
-->
<template>
  <div class="step-item last-step" :class="$attrs.className">
    <p>{{$attrs.info.title}}</p>
    <p>{{$attrs.info.des}}</p>
  </div>
</template>

<style lang="stylus" scoped>
@import './step.stylus'
</style>
