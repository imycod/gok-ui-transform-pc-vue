<template>
  <div class="step-item first-step" :class="$attrs.className">
    <p>{{$attrs.info.title}}</p>
    <p>{{$attrs.info.des}}</p>
  </div>
</template>

<style lang="stylus" scoped>
@import './step.stylus'
</style>
