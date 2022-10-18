<template>
  <div class="fixed center w-full h-full">
    <transition name="fade">
      <div v-if="isModalVisible">
        <div
            @click="onToggle"
            class="absolute bg-black opacity-70 inset-0 z-0"
        ></div>
        <div
            class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
          <div class="bd">
            <login></login>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import login from "./login.vue"
export default {
  name: 'index',
  data() {
    return {
      isOpen: true
    };
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    }
  },

  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
      if (!this.isOpen){
        this.$store.commit('authentication/setShowLogin',false)
      }
    }
  },
  components: {
    login,
  },
}
</script>

<style lang="stylus" scoped>
.fixed{
  z-index: 999;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
