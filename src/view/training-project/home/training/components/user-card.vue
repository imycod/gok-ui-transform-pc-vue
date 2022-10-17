<template>
  <div class="user-card">
    <login-card v-if="isLogined"></login-card>
    <un-login-card v-else></un-login-card>
  </div>
</template>

<script>
import LoginCard from "./login-card.vue";
import UnLoginCard from "./un-login-card.vue";
import mixins from "../../entrance-mixins.js";
export default {
  name:'user-card',
  mixins:[mixins],
  components: {
    LoginCard,
    UnLoginCard,
  }
}
</script>

<style lang="stylus" scoped>
.user-card {

}
</style>
