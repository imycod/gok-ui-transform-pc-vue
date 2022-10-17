<template>
  <div class="training">
    <div class="top between" :style="topStyle">
      <banner></banner>
      <user-card></user-card>
    </div>
    <div class="doing m-t-14" v-if="isLogined">
      <doing-project v-for="item in processProject" :key="item.id" :item="item"></doing-project>
    </div>
    <div class="pages">
      <page-training></page-training>
    </div>
  </div>
</template>
<script>
import components from './components/loaderComponent.js'
import DoingProject from '@/view/training-project/components/doing-project.vue';
import mixins from '../entrance-mixins.js';
import request, { TARINING_API } from '@/utils/request.js';

export default {
  mixins: [mixins],
  data () {
    return {
      processProject: [],
    }
  },
  computed: {
    topStyle () {
      let marginTop = ''
      // real base 26 + 21
      if (this.isLogined && this.tenantId) {
        marginTop = 60 + 21
      } else {
        marginTop = 72 + 12;
      }
      return `margin-top:${marginTop}px`
    }
  },
  created () {
    this.getProcessProject()
  },
  methods: {
    async getProcessProject () {
      // todo 把data删掉
      const { data } = await request(TARINING_API.getProcessProject, {})
      this.processProject = [].concat(data.data)

      console.log(this.processProject)
    }
  },
  components: {
    ...components,
    DoingProject,
  }
}
</script>
<style lang='stylus' scoped>
.training {
  width: 1064px;

  .doing {
    width: 1064px;
    height: 141px;
    background: linear-gradient(321deg, #FDFEFF 0%, #F4F7FC 100%);
    box-shadow: 0px 8px 20px 0px rgba(51, 51, 61, 0.04);
  }
}
</style>
