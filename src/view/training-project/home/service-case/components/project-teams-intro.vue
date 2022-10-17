<template>
  <div class="project-teams-intro p-t-24 p-l-24 relative">
    <div class="absolute absolute__badge"></div>
    <div class="titles">
      <div class="title">项目团队介绍</div>
      <div class="sub-title">introduction of the project team</div>
    </div>
    <div class="swiper-container absolute" ref="container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="index">
          <div class="swiper-slide__hover w-full h-full">
            <img class="image m-t-24" :src="item.imgUrl" alt="">
            <h2 class="name m-t-14">{{ item.name }}</h2>
            <p class="units">{{ item.units }}</p>
            <h3 class="position m-t-8">{{ item.position }}</h3>
            <div class="brief m-t-16">{{ item.brief }}</div>
          </div>
        </div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next rot">
        <img class="btn" src="@/assets/images/training/icon/carousel-right.png" alt="">
      </div>
      <div class="swiper-button-prev rat">
        <img class="btn" src="@/assets/images/training/icon/carousel-left.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'project-teams-intro',
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
      this.swiper = new Swiper('.project-teams-intro .swiper-container', {
        touchMoveStopPropagation: true,
        effect: 'slide',
        speed: 900,
        slidesPerView: 'auto',
        observer: true,
        observerParents: true,
        spaceBetween: 32,
        simulateTouch: true,
        slidesOffsetBefore: 42,
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
            _t.acNum = this.realIndex;
          },
        },
      })
    },
  }
}
</script>

<style lang="stylus" scoped>
.project-teams-intro {
  background: #FFFFFF;
  height: 554px;

  .absolute__badge {
    background: linear-gradient(134deg, #ff7d33 0%, rgba(255, 125, 51, 0) 100%);
    border-radius: 2px 2px 2px 2px;
    width: 80px;
    height: 44px;
    top: 24px;
    left: 24px;
  }

  .titles {
    margin-left: 7px;
    margin-top: 9px;

    .title {
      font-size: 28px;
      font-weight: bold;
      color: #000000;
    }

    .sub-title {
      font-size: 12px;
      font-weight: 500;
      color: #FE8836;
    }
  }

  .swiper-container {
    --swiper-navigation-size: 0;
    top: 109px;
    left: 0px;
    width: 100%;
    height: 410px;

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
      position: relative;
      width: 250px;
      height: 100%;

      common-line-style(){

      }

      .swiper-slide__hover {
        background: #F7F9FC;
        border: 1px solid #F0F2F7;
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 0px 16px;
        padding-bottom: 21px;
        //box-sizing:border-box;

        &:hover {
          cursor: pointer;
          box-shadow: 2em 2em 3em -2em rgba(0, 0, 0, .2);
          transition-duration: 0.3s;
          transform: scale(1);

          &:after {
            content:'';
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            height: 4px;
            background: #FE8836;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s;
          }
          &:after {
            transform-origin: bottom left;
            transform: scaleX(1);
          }
        }

        .name {
          font-size: 22px;
          font-weight: 500;
          color: #000000;
        }

        .units {
          margin-top: 13px;
          font-size: 16px;
          font-weight: 500;
          color: #268AFF;
        }

        .brief {
          font-size: 14px;
          font-weight: 500;
          color: #6A7487;
          g-text-overflow(5);
          line-height: 28px;
        }

        .position {
          font-size: 18px;
          font-weight: 400;
          color: #000000;
        }

        .image {
          width: 83px;
          height: 80px;
          border-radius: 50%;
        }

        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 3px;
          bottom: 0;
          left: 0;
          background-color: @red;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s;
        }
      }
    }

  }

}
</style>
