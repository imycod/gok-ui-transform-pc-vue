<template>
  <div class="template">
    <navbar></navbar>
<!--    <sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />-->
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '@/components/layout/navbar.vue'
import sidebar from '@/components/layout/sidebar.vue'

export default {
  name: 'template',
  components: {
    navbar,
    sidebar,
  },
  data () {
    return {
      sidebarOpen: false
    }
  },
}
</script>

<style lang="stylus" scoped>
.template {

}
</style>
