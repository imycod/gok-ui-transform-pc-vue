<template>
  <div class="swiper">
    <swiper1></swiper1>
  </div>
</template>

<script>
import swiper1 from '@/components/swiper/swiper-v5';

export default {
  name: 'swiper',
  components: {
    swiper1,
  },
}
</script>

<style lang="stylus" scoped>
.swiper {
}
</style>
