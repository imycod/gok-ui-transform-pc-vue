<template>
  <div id="app">
    <mock v-if="false"></mock>
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

<style lang="stylus">
#app {
}
</style>
