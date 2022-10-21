<template>
  <div class="processCnt">
    <div class="m-b-20" v-for="item in processProject" :key="item.id">
      <doing-project :item="item"></doing-project>
    </div>
  </div>
</template>

<script>
import DoingProject from '@/view/training-project/components/doing-project.vue';
import request,{TARINING_API} from "@/request/index.js";

export default {
  name: 'processCnt',
  components: {
    DoingProject,
  },
  data () {
    return {
      processProject: [],
    }
  },
  created () {
    this.getProcessProject()
  },
  methods: {
    async getProcessProject () {
      // todo 把data删掉
      const { data } = await request(TARINING_API.getProcessProject, { params: { count: 5 } })
      this.processProject = [].concat(data)
    }
  },
}
</script>

<style lang="stylus" scoped>
.processCnt {

}
</style>
