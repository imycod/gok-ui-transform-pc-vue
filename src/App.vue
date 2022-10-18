<template>
  <div id="app">
    <mock v-if="false"></mock>
    <swiper v-if="false"></swiper>
    <!-- 全局授权弹窗 -->
    <authentication></authentication>
    <router-view></router-view>
  </div>
</template>

<script>
import mock from '@/view/mock.vue'
import swiper from '@/view/swiper.vue'
import authentication from "@/view/authentication/index.vue"

export default {
  name: 'App',
  components: {
    mock,
    swiper,
    authentication,
  }
}
</script>

<style lang="stylus">
#app {
}
</style>
