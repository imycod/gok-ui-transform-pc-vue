<template>
  <div class="case-project">
      <case-card class="m-b-20 cp" v-for="(item,index) in list" :key="item.id" :item="item" @click="toDetail"></case-card>
  </div>
</template>

<script>
import CaseCard from "../../../components/case-card.vue";
import request, { TARINING_API } from '@/request/index.js';

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
      const {data}= await request(TARINING_API.getCaseProject,{ params:{count:3} })
      this.list=data
      console.log('this.list',this.list)
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
