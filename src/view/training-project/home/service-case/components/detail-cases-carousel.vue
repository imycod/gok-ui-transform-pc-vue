<template>
  <div class="carousel-gallery">
    <div class="swiper-container" ref="container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="index" @click="carouselHandle(item,index)">
          <img class="image" :src="item.bannerUrl" alt="">
        </div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next rot" v-if="list.length>=4">
        <img class="btn" src="@/assets/images/training/icon/carousel-right.png" alt="">
      </div>
      <div class="swiper-button-prev rat" v-if="list.length>=4">
        <img class="btn" src="@/assets/images/training/icon/carousel-left.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'detail-cases-carousel',
  components: {},
  props: {
    list: {
      type: Array,
      default: [],
      required: true,
    }
  },
  data () {
    return {
      swiper: null,
      acNum: 0,
    }
  },
  mounted () {
    this.initSwiper()
  },
  methods: {
    initSwiper () {
      const _t = this;
      this.swiper = new Swiper(this.$refs.container, {
        touchMoveStopPropagation:true,
        effect: 'slide',
        speed: 900,
        slidesPerView: 3.5,
        spaceBetween: 20,
        simulateTouch: true,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChange: function () {
            _t.acNum = this.realIndex; //切换结束时，告诉我现在是第几个slide
          },
        },
      })
    },
    carouselHandle (item, index) {
      this.$emit('carouselHandle', item, index)
    },
  },
}
</script>

<style lang="stylus" scoped>

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

/*Carousel Gallery*/

.carousel-gallery {
  margin: 20px 0px 0px 0px;
  width 1060px;
  overflow hidden;

  .swiper-container {
    --swiper-navigation-size: 0;

    .btn {
      width: 40px;
      height: 60px;
    }

    /deep/ .swiper-button-next {
      right: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /deep/ .swiper-button-prev {
      left: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /deep/ .swiper-button-disabled {
      //opacity: 0;
      pointer-events: auto;
    }

    .swiper-slide {
      width 280px
      height: 120px;

      .image {
        width: 100%;
        height: 100%;
      }
    }
  }
}

/*# Carousel Gallery*/
</style>
