<template>
  <div class="project-desc-bg p-24 relative">
    <div class="absolute"></div>
    <div class="titles">
      <div class="title">{{ title }}</div>
      <div class="sub-title">{{ subTitle }}</div>
    </div>
    <div class="content m-t-20 p-t-16 p-b-16 p-l-18 p-r-18" v-if="type===2" v-html="content"></div>
    <div class="content p-18 " v-if="type===1">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'projects-desc-bg',
  props: ['title', 'subTitle', 'content', 'type']
}
</script>

<style lang="stylus" scoped>
.project-desc-bg {
  background: #FFFFFF;
  .absolute {
    width: 80px;
    height: 44px;
    top: 24px;
    left: 24px;
    background: linear-gradient(134deg, #ff7d33 0%, rgba(255, 125, 51, 0) 100%);
    border-radius: 2px 2px 2px 2px;
  }

  .titles {
    margin-left: 7px;
    margin-top: 9px;

    .title {
      font-size: 28px;
      font-weight: bold;
      color: #000000;
    }
    .sub-title{
      font-size: 12px;
      font-weight: 500;
      color: #FE8836;
    }
  }

  .content {
    width: 1016px;
    background: #F7F9FC;
    border-radius: 8px 8px 8px 8px;
    font-size: 14px;
    font-weight: 500;
    color: #6A7487;
  }
  .p-18{
    margin-top:13px;
  }
}
</style>
