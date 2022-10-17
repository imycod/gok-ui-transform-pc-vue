<!--
 * @Author: lpj 1248708823@qq.com
 * @Date: 2022-10-10 11:40:02
 * @LastEditors: lpj 1248708823@qq.com
 * @LastEditTime: 2022-10-14 15:31:14
 * @FilePath: \college-teaching\src\view\project-trainning\home\excellent-project\detail.vue
 * @Description: 优选项目详情
-->
<template>
  <div class="content">
    <!-- 项目介绍 -->

    <About></About>
    <!-- 项目总结 -->
    <div class="sum_up">
      <div class="text">恭喜你完成了一个项目！</div>
      <div class="btn cp" v-show="false">提交</div>
      <div class="btn-over cp" @click="openSumUp">查看我的总结</div>
    </div>

    <div class="tabs" v-if="false">
      <!-- 第一种有标签 -->
      <!-- 标签 -->
      <Tabs value="name1" :animated="false">
        <TabPane label="项目材料" name="name1">
          <Material></Material>
        </TabPane>
        <TabPane label="项目成员" name="name2">
          <Team></Team>
        </TabPane>
        <TabPane label="人才需求" name="name3">
          <Requirement></Requirement>
        </TabPane>
      </Tabs>
    </div>
    <!-- 第二种直接展示人才需求 -->
    <div class="tab">
      <Requirement></Requirement>
    </div>
    <!-- 弹窗 -->
    <SumUp v-model="showSumUp"></SumUp>
  </div>
</template>
<script>
import About from './components/detail/about.vue'
import Material from './components/detail/material.vue'
import Requirement from './components/detail/requirement.vue'
import Team from './components/detail/team.vue'
import SumUp from './components/detail/sum-up.vue'
export default {
  data () {
    return {
      showSumUp: false
    }
  },
  computed: {},
  methods: {
    openSumUp () {
      this.showSumUp = true
    }
  },
  components: {
    About,
    Material,
    Requirement,
    Team,
    SumUp
  }
};
</script>
<style lang="stylus" scoped>
.content {
  position: relative;
  margin-top: 20px;
  margin-left: 20px;

  .sum_up {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    width: 1062px;
    height: 62px;
    background: #FFF8F5;

    .text {
      height: 22px;
      font-size: 14px;
      font-weight: 500;
      color: #333333;
      line-height: 22px;
    }

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 18px;
      // height: 28px;
      background: #FE8836;
      border-radius: 4px 4px 4px 4px;
      font-size: 14px;
      font-weight: bold;
      color: #FFFFFF;
      // line-height: 20px;
    }

    .btn-over {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px 18px;
      height: 28px;
      border-radius: 4px 4px 4px 4px;
      border: 1px solid #FE8836;
      font-size: 14px;
      font-weight: bold;
      color: #FE8836;
      // line-height: 20px;
    }
  }

  .tabs {
    margin-top: 16px;
    width: 1064px;
    min-height: calc(100vh - 468px);
    background: #FFFFFF;
    border-radius: 4px 4px 4px 4px;
    padding: 25px 24px 24px 18px;
  }

  .tab {
    margin-top: 21px;
    width: 1064px;
    min-height: calc(100vh - 468px);
    background: #FFFFFF;
    border-radius: 4px 4px 4px 4px;
    padding: 25px 24px 24px 18px;
  }
}

/deep/ .ivu-tabs-nav .ivu-tabs-tab:hover {
  color: #FF7D33;
}

/deep/ .ivu-tabs-nav .ivu-tabs-tab-active {
  color: #FF7D33;
}

/deep/ .ivu-tabs-ink-bar {
  background-color: #FF7D33;
}

/deep/ .ivu-tabs-nav .ivu-tabs-tab {
  font-size: 14px;
  font-weight: 400;
  color: #4E5969;
}
</style>
