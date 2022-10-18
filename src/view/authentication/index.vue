<template>
  <div class="authentication">
    <login-card v-if="dialog.showLogin"></login-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoginCard from '@/components/authentication/login-card/index.vue'

export default {
  name: 'index',
  computed: {
    ...mapGetters(['dialog']),
  },
  components: {
    LoginCard,
  },
}
</script>

<style lang="stylus" scoped>
.authentication {

}
</style>
