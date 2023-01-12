<template>
  <div>
    <button
      @click="switchover('#000')"
      type="button"
      class="btn btn-styles focus:ring-2 focus:ring-green-200"
    >
      一件切换主题色
    </button>
    <br />
    <button class="btn" @click="openDrawer">打开抽屉弹层</button>

    <Drawer />

    <TextEllipsis3 :introduce="introduce.value"></TextEllipsis3>
  </div>
</template>

<script>
// import Stack1 from "@/components/effect/card/stack1.vue";
// import TButton from "@/components/effect/color/tailwind-button.vue";

import { defineComponent } from "@vue/composition-api";

import { Drawer, useDrawer } from "./components/drawer/index.js";
import { TextEllipsis1,TextEllipsis2,TextEllipsis3, useTextEllipsis } from '@/components/text-ellipsis/index.js';

export default defineComponent({
  name: "demo",
  components: {
    // Stack1,
    // TButton,
    Drawer,
    TextEllipsis3,
  },
  setup() {
    function switchover(value) {
      // document.documentElement
      const themeColor =
        document.documentElement.style.getPropertyValue("--main-theme-color");
      if (themeColor === "#000") {
        value = "#fff";
      } else {
        value = "#000";
      }
      document.documentElement.style.setProperty("--main-theme-color", value);
    }
    const { openDrawer } = useDrawer();
    const { introduce } = useTextEllipsis()
    return {
      openDrawer,
      switchover,
      introduce,
    };
  },
});
</script>

<style lang="stylus" scoped>
@import "./index.styl";
</style>
