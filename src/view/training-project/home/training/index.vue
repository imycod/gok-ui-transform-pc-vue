<template>
  <div class="training m-auto">
    <!--  :style="topStyle" -->
    <div class="md:flex">
      <div class="md:w-3/5">
        <banner></banner>
      </div>
      <div class="md:w-2/5 sm:w-32">
        <user-card></user-card>
      </div>
    </div>
    <div class="doing m-t-14" v-if="isLogined && false">
      <template v-for="item in processProject">
        <doing-project :key="item.id" :item="item"></doing-project>
        <div class="m-b-10" :key="item.id"></div>
      </template>
    </div>
    <div class="p-b-50 m-b-50" v-if="true">
      <doing-project-custom
        :processProject="processProject"
      ></doing-project-custom>
    </div>
    <div class="pages p-t-50" v-if="true">
      <page-training></page-training>
    </div>
  </div>
</template>
<script>
import components from "./components/loaderComponent.js";
import DoingProject from "@/view/training-project/components/doing-project.vue";
// import DoingProjectWrapper from "./components/doing-project/doing-project-swiper8.vue"
import DoingProjectCustom from "./components/doing-project/index.vue";
// import mixins from '../entrance-mixins.js';
import request, { TARINING_API } from "@/request/index.js";
import { mapGetters } from "vuex";

export default {
  // mixins: [mixins],
  data() {
    return {
      processProject: [],
    };
  },
  computed: {
    ...mapGetters(["isLogined"]),
    // topStyle () {
    //   let marginTop = ''
    //   // real base 26 + 21
    //   if (this.isLogined && this.tenantId) {
    //     marginTop = 60 + 21
    //   } else {
    //     marginTop = 72 + 12;
    //   }
    //   return `margin-top:${marginTop}px`
    // }
  },
  created() {
    this.getProcessProject();
  },
  methods: {
    async getProcessProject() {
      // todo 把data删掉
      const { data } = await request(TARINING_API.getProcessProject, {
        params: { count: 5 },
      });
      this.processProject = [].concat(data);
    },
  },
  components: {
    ...components,
    DoingProject,
    // DoingProjectSwiper8,
    DoingProjectCustom,
  },
};
</script>
<style lang='stylus' scoped>
.training {
  width: 1064px;

  .doing {
    min-height: 141px;
    background: linear-gradient(321deg, #FDFEFF 0%, #F4F7FC 100%);
    box-shadow: 0px 8px 20px 0px rgba(51, 51, 61, 0.04);
  }
}
</style>
