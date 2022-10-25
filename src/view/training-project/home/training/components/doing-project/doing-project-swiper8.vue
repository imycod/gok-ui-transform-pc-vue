<template>
  <div class="swiper-wrapper">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            class="item"
            src="https://img0.baidu.com/it/u=800022513,1346680498&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
          />
        </div>
        <div class="swiper-slide">
          <img
            class="item"
            src="https://img2.baidu.com/it/u=201364829,838103304&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=402"
          />
        </div>
        <div class="swiper-slide">
          <img
            class="item"
            src="https://img2.baidu.com/it/u=896534341,895547115&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
          />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  props: ["dataItem"],
  mounted() {
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      effect: "creative",
      slidesPerView: 1,
      centerInsufficientSlides: true,
      initialSlide: 1,
      loopAdditionalSlides: 3,
      centeredSlides: true,
      creativeEffect: {
        prev: {
          shadow: false,
          translate: [70, 0, -200],
          origin: "right center",
        },
        next: {
          translate: [140, 0, -400],
          origin: "right center",
        },
      },
    });
  },
};
</script>

<style lang="stylus" scoped>
.swiper-wrapper {
  max-width: 700px;
  margin: 20px auto 0;
}

.swiper {
  padding-right: 15% !important;
}

.swiper-slide {
  text-align: center;
}

.swiper-slide img {
  max-width: 100%;
  border-radius: 20px;
}
</style>