<template>
  <div class="template">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '@/components/layout/navbar.vue'

export default {
  name: 'template',
  components: {
    navbar,
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
