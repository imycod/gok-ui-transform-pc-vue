<template>
  <div class="project-teams-intro p-t-24 p-l-24 relative">
    <div class="absolute absolute__badge"></div>
    <div class="titles">
      <div class="title">项目团队介绍</div>
      <div class="sub-title">introduction of the project team</div>
    </div>
    <div class="swiper-container absolute" ref="container">
      <div class="swiper-wrapper" data-current="0">
        <div class="swiper-slide" v-for="(item,index) in list" :key="index"
             @mouseenter="(e)=>setCurrentItem(e,index,'enter')">
          <img class="image m-t-24" :src="item.imgUrl" alt="">
          <div class="name m-t-14">{{ item.name }}</div>
          <p class="units">{{ item.units }}</p>
          <div class="position m-t-8">{{ item.position }}</div>
          <div class="brief m-t-16">{{ item.brief }}</div>
        </div>
        <div class="line line__first" :style="lineStyle"></div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next rot">
        <img class="btn" src="@/assets/images/carousel-right.png" alt="">
      </div>
      <div class="swiper-button-prev rat">
        <img class="btn" src="@/assets/images/carousel-left.png" alt="">
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
      lineStyle: {},
      isFirst: true,
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
    setCurrentItem (event, num, type) {
      const {
        offsetParent,
        offsetLeft,
        clientWidth
      } = event.target
      console.log(event.target)

      if (this.isFirst && type == 'enter') {
        this.lineStyle = {
          width: '250px',
          left: offsetLeft + 'px',
        }
        this.isFirst = false
        return
      }
      // 父级宽度
      const parentWidth = offsetParent.clientWidth
      const offsetRight = parentWidth - offsetLeft - clientWidth
      this.lineStyle = {
        left: offsetLeft + 'px',
        right: offsetRight + 'px',
      }
      console.log(this.lineStyle)

      var currentElement = document.getElementsByClassName('swiper-wrapper')[0];
      var oldNum = parseInt(currentElement.getAttribute('data-current'));
      currentElement.setAttribute('data-current', num);

      if (oldNum > num) {
        document.getElementsByClassName('line')[0].className = 'line animation';
      } else {
        document.getElementsByClassName('line')[0].className = 'line reverseAnimation';
      }

    }
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

    .swiper-wrapper {

      .animation {
        transition: left 200ms cubic-bezier(0.4, 0.0, 0.2, 1), right 200ms cubic-bezier(0.4, 0.0, 0.2, 1) 70ms;
      }

      .reverseAnimation {
        transition: right 200ms cubic-bezier(0.4, 0.0, 0.2, 1), left 200ms cubic-bezier(0.4, 0.0, 0.2, 1) 70ms;
      }

      .line {
        position: absolute;
        bottom: 0;
        height: 3px;
        background: #ff0072;
      }

      .line__first {
        width: 0px;
        transition: all 0.3s;
      }

      .swiper-slide {
        position: relative;
        width: 250px;
        height: 100%;
        background: #F7F9FC;
        border: 1px solid #F0F2F7;
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 0px 16px;
        padding-bottom: 21px;
        box-sizing: border-box;

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

      }

    }

  }

}
</style>
