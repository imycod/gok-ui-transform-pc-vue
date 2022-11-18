<template>
  <div>
    <button
        @click="switchover('#000')"
        type="button"
        class="btn btn-styles focus:ring-2  focus:ring-green-200">
      一件切换主题色
    </button>
  </div>
</template>

<script>
import Stack1 from '@/components/effect/card/stack1.vue'
import TButton from '@/components/effect/color/tailwind-button.vue'
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'demo',
  components: {
    Stack1,
    TButton,
  },
  setup () {
    function switchover (value) {
      // document.documentElement
      const themeColor = document.body.style.getPropertyValue('--main-theme-color')
      if (themeColor === '#000') {
        value = '#fff'
        document.body.style.setProperty('--main-theme-color', value)
      } else {
        document.body.style.setProperty('--main-theme-color', value)
      }
    }

    return {
      switchover
    }
  }
});
</script>

<style lang="stylus" scoped>
@css {
  .btn{
    @apply
      bg-gray-200
      text-black
      font-medium
      rounded-lg
      text-sm
      px-5
      py-2.5
      text-center
      mr-2
      mb-2
  }
  .btn-styles {
    @apply
      bg-gradient-to-bl
      from-green-400
      to-blue-600
      text-white
  }
}
</style>
