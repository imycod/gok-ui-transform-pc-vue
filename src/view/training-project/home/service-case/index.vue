<template>
 <div class="service-case">
    <case-card @click="toDetail" class="m-b-28 cp" v-for="(item,index) in list" :item="item" :key="item.id"></case-card>
 </div>
</template>
<script>
import CaseCard from "../components/case-card.vue"
import request, { TARINING_API } from '@/utils/request.js';

export default {
  mixins:[],
  data () {
    return {
      list:[],
    }
  },
  created() {
    this.init()
  },
  computed: {

  },
  methods: {
    async init(){
      // todo 把 params和data删掉
      const {data}= await request(TARINING_API.getJkCases,{ params:{count:9} })
      this.list=data.data
    },
    toDetail(item){
      this.$router.push(`/training/service-case-detail/${item.id}`)
    }
  },
  components: {
    CaseCard
  }
}
</script>
<style lang='stylus' scoped>
.service-case{
  width: 1064px;
  margin-top:81px;
  .cp{
    hvr-grow-shadow(1.02)
  }
}
</style>
