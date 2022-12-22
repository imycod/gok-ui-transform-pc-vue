<!--
 * @Author: shiyh shiyh@goktech.cn
 * @Date: 2022-06-10 09:53:24
 * @LastEditors: shiyh shiyh@goktech.cn
 * @LastEditTime: 2022-06-13 14:32:45
 * @FilePath: /college-teaching/src/components/order-pay/pay-step/first.vue
 * @Description: 步骤的第一步
-->
<template>
  <div class="step-item first-step" :class="$attrs.className">
    <p>{{$attrs.info.title}}</p>
    <p>{{$attrs.info.des}}</p>
  </div>
</template>

<style lang="stylus" scoped>
@import './step.stylus'
</style>
