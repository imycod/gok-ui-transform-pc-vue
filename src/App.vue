<template>
  <div id="app">
    <mock v-if="false"></mock>
    <swiper v-if="false"></swiper>
    <router-view></router-view>
  </div>
</template>

<script>
import mock from '@/view/mock.vue'
import swiper from '@/view/swiper.vue'

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
