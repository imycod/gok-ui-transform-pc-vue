<template>
  <div class="wrapper ml-10">
    <tabs :list="tabList" :active="currentTabComponent" @tabClick="tabClick"></tabs>
    <!--      <Tabs value="applyCnt" @on-click="tabClick" name="tab1" v-model="currentTabComponent" ref="tabsPane">-->
    <!--        <TabPane :label="setLabel(item.name,item.currentTab)" :name="item.currentTab" v-for="item in tabList"-->
    <!--                 :key="item.currentTab" tab="tab1" class="tab-content">-->
    <!--          <component :is="currentTabComponent" v-if="item.currentTab === currentTabComponent"-->
    <!--                     @getDot="getDot"></component>-->
    <!--        </TabPane>-->
    <!--      </Tabs>-->
    <div class="mt-10">
      <transition-fade>
        <component :is="currentTabComponent" v-if="currentTabComponent" @getDot="getDot"></component>
      </transition-fade>
    </div>
  </div>
</template>
<script>
import {PROJECT_MANAGE} from '@/view/training-project/index.js';
import {setCountNum} from './index.js'
import components from './loaderComponent.js'
import TransitionFade from "@/components/transition/fade.js"
export default {
  data() {
    return {
      currentTabComponent: 'applyCnt',
      tabList: PROJECT_MANAGE.PROJECT_TAB,
      projectState: { //项目管理 状态
        applyCntListFlag: '',
        processCntListFlag: '',
        projectCntListFlag: '',
      },
    }
  },
  watch: {
    '$route.query': {
      handler(newVal) {
        if (newVal.tab) this.currentTabComponent = newVal.tab;
      },
      immediate: true,
      deep: true
    },
  },
  computed: {},
  created() {
    this.getProjectState();
  },
  methods: {
    tabClick(v) {
      this.$router.replace({
        path: this.$route.path,
        query: {
          tab: v
        }
      });
    },
    /**
     * @description 面试管理类-设置tab 名称+状态
     * @param { String } labelName tab名称
     * @param { String } tabModule tab模块名称
     * @return {*}
     */
    setLabel(labelName, tabModule) {
      return this.getLabel(labelName, tabModule, setCountNum);
    },
    getDot(v) {
      if (v === 1) this.getProjectState();
    },

    /**
     * @description 面试管理类-  设置tab 名称+状态
     * @param { String } labelName tab名称
     * @param { String } tabModule tab模块名称
     * @return {*}
     */
    getLabel(labelName, tabModule, callBack) {
      return (h) => {
        return h('div', [
          h('span', labelName),
          h('Badge', {
            props: {
              count: callBack(tabModule, this.projectState),
              dot: ''
            }
          })
        ])
      }
    },

    /**
     * @description: 获取tab状态信息
     * @return {*}
     */
    async getProjectState() {
      // const {data} = await request(this.$API.TAC.getInterviewStatus,{});
      // this.projectState = { ...data };
    },
  },
  components: {
    ...components,
    TransitionFade,
  }
}
</script>
<style lang='stylus' scoped>
.wrapper {

  width: 1064px;

  /deep/ .ivu-tabs-bar {
    border-bottom: none;
    margin-bottom: 0;
  }


  /deep/ .ivu-tabs-nav {
    font-size: 14px;
    color: #333;
    margin: 16px 6px;
    font-weight: 500;

  }

  /deep/ .ivu-tabs-ink-bar {
    width: 30px !important;
    height: 4px;
    background-color: $base;
    border-radius: 4px;
    margin-left: 12px;
  }

  /deep/ .ivu-tabs-nav .ivu-tabs-tab-active {
    color: $base;
  }

  /deep/ .ivu-tabs-nav .ivu-tabs-tab {
    padding: 8px 12px;
    position: relative;
  }

  /deep/ .ivu-tabs-nav .ivu-tabs-tab:hover {
    color: $base;
  }

  /deep/ .ivu-badge-dot {
    top: -16px;
    right: -14px;
  }

  .tab-content {

  }


}
</style>
