<template>
 <div class="page-container project-training pt-28">
   <!-- 这里有tab标签切换 -->
    <div class="navbar" v-if="false">
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
  .navbar{
    position: fixed;
    z-index: 333;
    top:10px;
    // 左侧菜单栏的宽度加上navbar距离header左侧的间距
    left:calc(230px + 40px);
  }
}
</style>
