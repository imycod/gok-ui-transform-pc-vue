<template>
  <div>
    <div class="cards-box">
      <div
        class="card"
        :data-slide="index"
        v-for="(item, index) in processProject"
        :key="index"
        :style="dynamicStyle(index, processProject.length)"
        @click="handleClick(index)"
      >
        <div class="content-placeholder">
          <div class="row">
            <div class="img" :data-letter="index"></div>
            <div class="img-text"></div>
          </div>
          <div class="text text--l"></div>
          <div class="text text--m"></div>
          <div class="text text--s"></div>
          <div class="btn"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["processProject"],
  mounted() {},
  methods: {
    dynamicStyle(index, len) {
      const a = 15;
      const b = 1;
      const c = 1;
      const d = 1;
      return {
        transform: `translate(${a * index}px, ${a * index}px) scale(${
          b - index * 0.025
        })`,
        "z-index": len - index,
        opacity: d - index * 0.1,
      };
    },
    handleClick(index) {
      let sliderImagesBox = document.querySelectorAll(".cards-box > .card");
      console.log(sliderImagesBox[0]); 

      const transform = sliderImagesBox[index].style.transform;
      const zIndex = sliderImagesBox[index].style.zIndex;
      const opacity = sliderImagesBox[index].style.opacity;
      sliderImagesBox[index].style.transform = sliderImagesBox[0].style.transform;
      sliderImagesBox[index].style.zIndex = sliderImagesBox[0].style.zIndex;
      sliderImagesBox[index].style.opacity = sliderImagesBox[0].style.opacity;
      sliderImagesBox[0].style.transform = transform;
      sliderImagesBox[0].style.zIndex = zIndex;
      sliderImagesBox[0].style.opacity = opacity;

      console.log(sliderImagesBox[0]); 
    },
  },
};
</script>

<style lang="stylus" scoped>
.cards-box {
  position: relative;
  transform: translateX(-15px);
}

.cards-box .card {
  width: calc(18rem + 19vh);
  max-width: 80vw;
  background: #f7fffd;
  border-radius: 14px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.8s cubic-bezier(0.18, 0.98, 0.45, 1);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
}

.cards-box .card.hide {
  visibility: hidden;
}

.cards-box .card:not(.hide) {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.8s cubic-bezier(0.18, 0.98, 0.45, 1);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
}

.cards-box .card:not(.hide)[data-slide='0'] {
  transform: translate(0px, 0px) scale(1);
  z-index: 6;
  opacity: 1;
}

.cards-box .card:not(.hide)[data-slide='1'] {
  transform: translate(15px, 15px) scale(0.975);
  z-index: 5;
  opacity: 0.9;
}

.cards-box .card:not(.hide)[data-slide='2'] {
  transform: translate(30px, 30px) scale(0.95);
  z-index: 4;
  opacity: 0.8;
}

.cards-box .card:not(.hide)[data-slide='3'] {
  transform: translate(45px, 45px) scale(0.925);
  z-index: 3;
  opacity: 0.7;
}

.cards-box .card:not(.hide)[data-slide='4'] {
  transform: translate(60px, 60px) scale(0.9);
  z-index: 2;
  opacity: 0.6;
}

.cards-box .card:not(.hide)[data-slide='5'] {
  transform: translate(75px, 75px) scale(0.875);
  z-index: 1;
  opacity: 0.5;
}

.cards-box .card:not(.hide)[data-slide='0'] {
  transition: all 0.32s cubic-bezier(0.18, 0.98, 0.45, 1);
}

.content-placeholder {
  padding: 14px 18px 20px;
}

.content-placeholder .row {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: calc(0.8rem + 0.4vw);
}

.content-placeholder .row .img {
  flex-shrink: 0;
  position: relative;
  margin-right: 20px;
  background: #5eebc6;
  width: calc(56px + 2vw);
  height: calc(56px + 2vw);
  border-radius: 50%;
}

.content-placeholder .row .img::after {
  content: attr(data-letter);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: calc(30px + 1vw);
  font-weight: bold;
  color: white;
}

.content-placeholder .row .img-text {
  background: #a7f4e0;
  width: 45%;
  min-width: 145px;
  height: 20px;
  margin-top: -20px;
  border-radius: 10px;
}

.content-placeholder .row .img-text::after {
  content: '';
  display: block;
  width: 80%;
  height: 10px;
  margin-top: 30px;
  background: #a7f4e0;
  border-radius: 10px;
}

.content-placeholder .text {
  background: #a7f4e0;
  width: 90%;
  height: 2vh;
  min-height: 12px;
  max-height: 14px;
  border-radius: 10px;
}

.content-placeholder .text.text--m {
  width: 80%;
  margin-top: 2vh;
  height: 2vh;
  min-height: 12px;
}

.content-placeholder .text.text--s {
  width: 70%;
  margin-top: 2vh;
  height: 2vh;
  min-height: 12px;
}

.content-placeholder .btn {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  background-color: #11d5af;
  border-radius: 40px;
}
</style>