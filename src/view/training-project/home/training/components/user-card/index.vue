<template>
  <div class="user-card">
    <login-card v-if="isLogined"></login-card>
    <un-login-card v-else></un-login-card>
  </div>
</template>

<script>
import LoginCard from "./login-card.vue";
import UnLoginCard from "./un-login-card.vue";
import {mapGetters} from "vuex";
// import mixins from "../../entrance-mixins.js";
export default {
  // mixins:[mixins],
  computed: {
    ...mapGetters(['isLogined'])
  },
  components: {
    LoginCard,
    UnLoginCard,
  }
}
</script>

<style lang="stylus" scoped>
.user-card {
  width: 100%;
}
</style>
