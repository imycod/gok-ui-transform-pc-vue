<template>
<div class="applyCnt">
    <opt-card v-for="(_,index) in 7" :key="index"></opt-card>
</div>
</template>

<script>
import OptCard from "@/view/training-project/components/opt-card.vue"

export default {
  name: 'applyCnt',
  components:{
    OptCard
  }
}
</script>

<style lang="stylus" scoped>
.applyCnt{
  display: grid;
  grid-template-columns: 1fr 1fr;//有几列
  //grid-template-rows: 1fr 1fr;//有几行
  grid-gap:22px 22px;
}
</style>
