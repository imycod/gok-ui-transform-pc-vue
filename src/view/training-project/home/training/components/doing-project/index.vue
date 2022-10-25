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
          <doing-project :key="item.id" :item="item"></doing-project>
      </div>
    </div>
  </div>
</template>

<script>
import DoingProject from "@/view/training-project/components/doing-project.vue";

export default {
  props: ["processProject"],
  mounted() {},
   components: {
    DoingProject,
  },
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

      const transform = sliderImagesBox[index].style.transform;
      const zIndex = sliderImagesBox[index].style.zIndex;
      const opacity = sliderImagesBox[index].style.opacity;
      sliderImagesBox[index].style.transform = sliderImagesBox[0].style.transform;
      sliderImagesBox[index].style.zIndex = sliderImagesBox[0].style.zIndex;
      sliderImagesBox[index].style.opacity = sliderImagesBox[0].style.opacity;
      sliderImagesBox[0].style.transform = transform;
      sliderImagesBox[0].style.zIndex = zIndex;
      sliderImagesBox[0].style.opacity = opacity;

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

</style>