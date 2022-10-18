<template>
  <div class="banner">
    <img :src="defaultBanner" v-if="carouselList.length == 0" alt="">
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in carouselList" :key="item.coverUrl">
          <img :src="item.coverUrl" :alt="item.title" class="demo-carousel cp" @click="clickImg(item)">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import defaultBanner from '@/assets/images/defalut-banner.png' // 默认头像
import request, { TARINING_API } from '@/utils/request.js';
// import { toBannerDetail } from '@/utils/business/banner.js'
import Swiper from 'swiper'

export default {
  name: 'banner',
  data () {
    return {
      // 默认图片
      defaultBanner,
      swiper: null,
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
      carouselList: []
    }
  },
  async mounted () {
    await this.getBannerList()
    this.initSwiper()
  },
  methods: {
    async getBannerList () {
      const { data } = await request(TARINING_API.getProjectBanner, { params: { count: 3 } })
      this.carouselList = [].concat(data)
    },
    initSwiper () {
      this.swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
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

.swiper-container {
  height: 230px;
  width: 602px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.demo-carousel {
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  font-size: 20px;
  border-radius: 4px;
}
</style>
