<template>
  <div class="template">
    <navbar></navbar>
    <div class="pt-28">
      <router-view></router-view>
    </div>
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
    return {}
  },
  methods: {
    signin () {
      modal.showModal()
    },
    signup () {

    }
  },
}
</script>

<style lang="stylus" scoped>
.template {

}
</style>
