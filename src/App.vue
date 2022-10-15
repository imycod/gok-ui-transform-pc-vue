<template>
  <div id="app">
<!--    <mock></mock>-->
    <swiper></swiper>
  </div>
</template>

<script>
import mock from '@/views/mock.vue'
import swiper from '@/views/swiper.vue'

export default {
  name: 'App',
  components: {
    mock,
    swiper,
  }
}
</script>

<style>
#app {

}
</style>
