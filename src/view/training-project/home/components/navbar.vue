<template>
  <div class="header">
    <div
      class="box"
      v-for="(item, index) in curList"
      @click="tabClick(item,index)"
      :class="curTab == item.path && 'active'"
      :key="index"
    >
      <span>{{ item.title }}</span>
      <img
        v-if="curTab == item.path"
        src="@/assets/images/Ellipse.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      curTab: '/training-home/training',
      curList: Object.freeze([
        {
          title:'项目实训',
          path:'/training-home/training',
        }, {
          title: '优选项目',
          path:'/training-home/excellent-project',
        },{
          title:'服务案例',
          path:'/training-home/service-case',
        }])
    };
  },
  watch:{
    "$route.path":{
      handler(val){
        this.curTab=val
      },
      immediate:true,
      deep:true,
    }
  },
  created () {
  },
  methods: {
    tabClick (item) {
      if (item.path == this.curTab) return
      this.curTab = item.path;
      this.$emit('tabClick', item);
    }
  }
};
</script>

<style lang="stylus" scoped>
.header {
  display: flex;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 88px;
    font-size: 22px;
    font-family: Source Han Sans CN-Bold, Source Han Sans CN;
    font-weight: bold;
    color: #8590A6;
    cursor: pointer;
    margin-right: 40px;

    img {
      width: 35px;
      margin-left: -2px;
    }
  }

  .active {
    color: #131414;
  }
}
</style>
