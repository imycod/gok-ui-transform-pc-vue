<template>
  <div id="app">
<!--    <swiper v-if="false"></swiper>-->
    <!-- 全局授权弹窗 -->
    <authentication></authentication>
    <router-view></router-view>
  </div>
</template>

<script>
// import swiper from '@/view/swiper.vue'
import authentication from "@/view/authentication/index.vue"

export default {
  name: 'App',
  components: {
    // swiper,
    authentication,
  }
}
</script>

<style lang="stylus">
:root{
  --main-theme-color:#fff;
  --main-btn-color:#ccc;
}
body{
  background:var(--main-theme-color) !important;
}
#app {

}
</style>
