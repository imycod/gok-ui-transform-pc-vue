<!--
 * @Author: yangling
 * @FilePath: \college-teaching\src\view\project-trainning\home\excellent-project\components\excellent-search.vue
 * @Description: 搜索
-->
<template>
 <div class="excellent-search">
    <Input search enter-button placeholder="输入项目名称/人才需求" class="search-input"/>
    <div class="search-bg"></div>
 </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  components: {

  }
}
</script>
<style lang='stylus' scoped>
.excellent-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1064px;
  height: 76px;
  background: linear-gradient(176deg, #FEEDE6 0%, #FFFFFF 100%);
  box-shadow: 0px 8px 20px 0px rgba(51,51,61,0.16);
  border-radius: 4px 4px 4px 4px;
  padding-left: 11px;
  .search-input {
    width: 626px;
    height: 41px;
    background: #FFFFFF;
  }
  .search-bg {
    width: 164px;
    height: 76px;
    background: url('~@/assets/images/search-bg.png') no-repeat center;
    background-size: 100%;
  }
  /deep/ {
    .ivu-input {
      height: 41px;
      border-radius: 4px 0px 0px 4px;
       border: 1px solid #FF7D33;
    }
    .ivu-input-with-search:hover .ivu-input{
      border-color: #FF7D33;
    }
    .ivu-input:focus {
      border-color: #FF7D33;
      box-shadow: 0 0 0 2px rgba(255,125,51,0.2)
    }
    .ivu-input-search {
      background: #FF7D33!important;
      border-color: #FF7D33!important;
      padding: 0 14.5px !important
    }
    .ivu-input-search i {
      font-size: 24px;
    }
  }
}
</style>
