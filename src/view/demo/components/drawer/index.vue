<template>
  <div>
    <DrawerContainerRoute width="750" :limits="['TF911']">
      <div class="body">
        <button class="btn sticky" @click="closeDrawer">关闭抽屉弹层</button>
        <div class="container bd">
          <div class="font border-2 height-100">
            1
          </div>
          <div class="font border-2 height-200">
            2
          </div>
          <div class="font border-2 height-300">
            3
          </div>
          <div class="font border-2 height-500">
            <ul>
              <li class="h-50 border-2" v-for="i in count.value">{{ i }} <span class="pointer" @click="addCount">+</span></li>
            </ul>
          </div>
        </div>
      </div>
    </DrawerContainerRoute>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "@vue/composition-api";

import DrawerContainerRoute from "@/components/drawer/drawer-container.vue";
import { useDrawer } from "./index.js";

import {useScale} from "@/utils/screen/index.js"

function useCounter() {
  const count = ref(1);
  const addCount = () => {
    count.value += 1;
  };
  return {
    count,
    addCount,
  };
}

export default defineComponent({
  components: {
    DrawerContainerRoute,
  },
  setup() {
    const { closeDrawer } = useDrawer();
    onMounted(() => {
        const container = document.querySelector(".container");
        // useScale(container,1920)
    });
    const { count, addCount } = useCounter();
    return {
      closeDrawer,
      count,
      addCount,
    };
  },
});
</script>

<style lang="stylus" scoped>
@import '../../index.styl';

.body {
  .container {
    overflow-y: scroll;
    max-height: 890px; // 这个当屏幕分辨率不是 1920*1080时就有问题 这个高度是减去sticky的高度

    // max-height: 90vh; // 这是一种解决方法
    .font {
      font-size: 20px;
      color: black;
    }

    .height-100 {
      height: 100px;
    }

    .height-200 {
      height: 200px;
    }

    .height-300 {
      height: 300px;
    }

    .height-500 {
      .h-50 {
        height: 50px;
      }
    }
  }
}
</style>
