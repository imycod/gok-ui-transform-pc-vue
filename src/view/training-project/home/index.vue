<!--
 * @Author: lpj 1248708823@qq.com
 * @Date: 2022-10-10 11:43:19
 * @LastEditors: lpj 1248708823@qq.com
 * @LastEditTime: 2022-10-13 10:53:16
 * @FilePath: \college-teaching\src\view\project-trainning\home\inex.vue
 * @Description: 项目实训首页
-->
<template>
 <div class="page-container project-training">
   <!-- 这里有tab标签切换 -->
    <div class="navbar" v-if="isLogined && tenantId">
      <navbar @tabClick="tabClick"></navbar>
    </div>
   <router-view></router-view>
 </div>
</template>
<script>
import navbar from "./components/navbar.vue"
import mixins from "./entrance-mixins.js";
export default {
  mixins:[mixins],
  data () {
    return {
    }
  },
  created() {

  },
  computed: {

  },
  methods: {
    tabClick(item){
      console.log(item)
      this.$router.push(item.path)
    },
  },
  components: {
    navbar
  }
}
</script>
<style lang='stylus' scoped>
.page-container{
  margin-top: 32px;
  .navbar{
    position: fixed;
    z-index: 333;
    top:10px;
    // 左侧菜单栏的宽度加上navbar距离header左侧的间距
    left:calc(230px + 40px);
  }
}
</style>
