<template>
  <div class="banner">
    <div  v-if="loaded">
      <img :src="defaultBanner" v-if="carouselList.length == 0" alt="">
      <Carousel v-else v-model="portalCarouselValue" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow">
        <CarouselItem v-for="item in carouselList" :key="item.coverUrl" >
          <img :src="item.coverUrl" :alt="item.title" class="demo-carousel cp" @click="clickImg(item)">
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>

<script>
import defaultBanner from '@/assets/images/defalut-banner.png' // 默认头像
import request, { TARINING_API } from '@/utils/request.js';
// import { toBannerDetail } from '@/utils/business/banner.js'
export default {
  name:'banner',
  data () {
    return {
      // 默认图片
      defaultBanner,
      portalCarouselValue: 0,
      setting: {
        autoplay: true,
        autoplaySpeed: 15000,
        dots: 'inside',
        radiusDot: true,
        arrow: 'never',
        trigger: 'hover',
        height: 230
      },
      loaded: false,
      carouselList: []
    }
  },
  async mounted () {
    await this.getBannerList()
    this.loaded = true
  },
  methods: {
    async getBannerList () {
      // todo 把 params和data删掉
      const { data } = await request(TARINING_API.getProjectBanner, { params:{count:3} })
      this.carouselList = [].concat(data.data)
    },
    /**
     * @description: 点击图片
     * @return {*}
     */
    clickImg (item) {
      // toBannerDetail(item, this)
    }
  }

}
</script>

<style lang="stylus" scoped>
.banner {
  width: 602px;
  height: 230px;
}

.demo-carousel {
  height: 230px;
  width: 602px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  border-radius: 4px;
}
</style>
