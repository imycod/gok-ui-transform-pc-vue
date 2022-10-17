<template>
  <div class="opt-project">
    <div class="section-1">
      <opt-card v-for="(_,index) in 3" :key="index"></opt-card>
    </div>
    <div class="image__placeholder m-t-20 bd"></div>
  </div>
</template>

<script>
import OptCard from "@/view/training-project/components/opt-card.vue"
export default {
  name: "opt-project",
  components:{
    OptCard,
  },
  methods: {

  },
}
</script>

<style lang="stylus" scoped>
.opt-project{
  .section-1{
    display: grid;
    grid-template-columns: 1fr 1fr;//有几列
    //grid-template-rows: 1fr 1fr;//有几行
    grid-gap:22px 22px;
  }
  .image__placeholder{
    width: 1062px;
    height: 230px;
    background: #EFEFEF;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
  }
}
</style>
