<template>
  <div class="template">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
  name: 'template',
  components: {
    navbar,
  },
}
</script>

<style lang="stylus" scoped>
.template {

}
</style>
