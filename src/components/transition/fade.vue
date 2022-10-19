<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props:['speed'],
  name: "fade"
}
</script>

<style lang="stylus" scoped>
//.fade-enter,
//.fade-leave-to {
//  opacity: 0;
//}
//
//.fade-enter-active,
//.fade-leave-active {
//  transition: opacity 500ms ease-out;
//}
</style>
