<template>
  <div class="projectCnt">
    <div class="project" v-for="item in projects" :key="item.id">
      <all-project :item="item"></all-project>
    </div>
  </div>
</template>

<script>
import AllProject from './all-project.vue'
import request, { TARINING_API } from '@/utils/request.js';

export default {
  name: 'projectCnt',
  components: {
    AllProject,
  },
  data () {
    return {
      projects: [],
    }
  },
  created () {
    this.getProjects()
  },
  methods: {
    async getProjects () {
      const { data } = await request(TARINING_API.getProcessProject, { params: { count: 5 } })
      this.projects = [].concat(data)
    }
  },
}
</script>

<style lang="stylus" scoped>
.projectCnt {
  display: grid;
  grid-template-columns: 1fr 1fr; //有几列
  //grid-template-rows: 1fr 1fr;//有几行
  grid-gap: 22px 22px;

  .project {
    width: 520px;
    height: 145px;
  }
}
</style>
