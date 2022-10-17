<!--
  use：（根据外部逻辑传参去影响排版位置我觉得大可不必，能复用就复用，不能复用就不要了，省的造成更多耦合，这是选择问题）
    1. training/page-training/case-project
    2. service-case/index
-->
<template>
  <div class="case-card p-t-20 p-l-20 p-r-20" v-if="item" @click="$emit('click',item)">
    <h3 class="title">{{ item.name }}</h3>
    <div class="loc-duration m-t-16 flex flex-start">
      <div class="left center">
        <img class="icon m-r-4" src="@img/training/icon/adress.png" alt="">
        <div class="areas to">
          <span class="txt" v-for="(address,index) in item.areas">
            {{address.county}} {{address.province}} {{address.city}}
          </span>
        </div>
      </div>
      <div class="right center">
        <img class="icon m-r-4" src="@img/training/icon/clock.png" alt="">
        <span class="txt">
          <span>项目周期：</span>
          <span>{{item.beginTime | dateFormat}}</span>
          <span> ~ </span>
          <span>{{item.endTime | dateFormat}}</span>
        </span>
      </div>
    </div>
    <div class="labels  m-t-16">
      <span class="label text-center" v-for="(label,index) in item.labels" :key="index">{{label}}</span>
    </div>
    <div class="description m-t-16">
      {{item.context}}
    </div>
  </div>
</template>

<script>
export default {
  name: "case-card",
  props: {
    item: {
      type: Object,
      default: null,
      required: true,
    }
  },
  computed:{
    labels(){
      // 确认字数是4个字时，一行可以显示9-10个，当不确定label字数时，直接通过父级overflow掉
      return this.item.labels.splice(0,9)
    },
  }
}
</script>

<style lang="stylus" scoped>
common-text-style(){
  font-size: 14px;
  font-weight: 500;
  color: #6A7487;
}
.case-card {
  width: 1064px;
  height: 200px;
  background:url("~@/assets/images/training/project/bg1.png") no-repeat center;
  opacity: 1;
  border: 1px solid #F0F2F7;

  .title {
    font-size: 16px;
    font-weight: block-ellipsis;
    color: #383838;
    g-text-overflow(1);
  }

  .loc-duration {
    height: 22px;
    .left,.right{
      .icon{
        width: 18px;
        height: 18px;
      }
      .areas{
        width: 500px;
      }
      .txt{
        common-text-style()
      }
    }
    .right {
      margin-left: 80px;
    }
  }

  .labels{
    width: 1020px;
    height: 28px;
    overflow: hidden;
    //text-overflow:'';

    .label{
      display:inline-block;
      //width: 92px;
      //overflow:hidden;
      padding: 4px 18px;
      margin-right: 8px;
      box-sizing:border-box;
      height: 28px;
      //line-height: 28px;
      background: #D7FEF3;
      border-radius: 4px 4px 4px 4px;
      font-size: 14px;
      font-weight: 400;
      color: #00BB85;
    }
  }
  .description{
    common-text-style();
    g-text-overflow(2);
  }
}
</style>
