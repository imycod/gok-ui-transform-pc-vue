<template>
  <div class="swiper">
    <swiper1 v-if="false"></swiper1>
    <swiper2 v-if="false && swiper2List"  :list="swiper2List"></swiper2>
    <swiper3 v-if="swiper2List"  :list="swiper2List"></swiper3>
  </div>
</template>

<script>
import swiper1 from '@/components/swiper/swiper-v5';
import swiper2 from '@/components/swiper/swiper-v5-2';
import swiper3 from '@/components/swiper/swiper-v5-3';
import request from '@/utils/request';

export default {
  name: 'swiper',
  components: {
    swiper1,
    swiper2,
    swiper3,
  },
  data () {
    return {
      swiper2List: [],
    }
  },
  created () {
    this.getSwiper2Data()
  },
  methods: {
    async getSwiper2Data () {
      const { data } = await request("/gok-ui/swiper2");
      this.swiper2List=data
    }
  },
}
</script>

<style lang="stylus" scoped>
.swiper {
  width: 1064px;
}
</style>
