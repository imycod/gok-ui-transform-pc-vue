<template>
  <div class="case-project">
      <case-card class="m-b-20 cp" v-for="(item,index) in list" :key="item.id" :item="item" @click="toDetail"></case-card>
  </div>
</template>

<script>
import CaseCard from "../../../components/case-card.vue";
import request, { TARINING_API } from '@/utils/request.js';

export default {
  name: "case-project",
  components: {
    CaseCard,
  },
  data(){
    return {
      list:[],
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      // todo 把params和data删掉
      const {data}= await request(TARINING_API.getCaseProject,{ params:{count:3} })
      this.list=data.data
    },
    toDetail (item) {
      this.$router.push(`/training/service-case-detail/${item.id}`)
    }
  },
}
</script>

<style lang="stylus" scoped>
.case-project{
  .cp{
    hvr-grow-shadow(1.02)
  }
}
</style>
