<template>
  <div class="fixed center w-full h-full">
    <transition-fade>
      <div v-if="isModalVisible">
        <div
            @click="onToggle"
            class="absolute bg-black opacity-70 inset-0 z-0"
        ></div>
        <div
            class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
          <transition-fade>
            <login></login>
          </transition-fade>
        </div>
      </div>
    </transition-fade>
  </div>
</template>

<script>
import Login from "./login.vue"
import TransitionFade from "@/components/transition/fade.vue"

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
      if (!this.isOpen) {
        this.$store.commit('authentication/setShowLogin', false)
      }
    }
  },
  components: {
    Login,
    TransitionFade,
  },
}
</script>

<style lang="stylus" scoped>
.fixed {
  z-index: 999;
}
</style>
