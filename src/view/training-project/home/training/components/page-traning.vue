<template>
  <div class="recruitment-wrapper">
    <div v-for="(component,index) in componentList" :key="component.morePath">
      <template v-if="!isEmpty(component.componentName)">
        <div class="header" :class="[index==2 ? 'mt66' : '']">
          <div class="title">
            <img :src="component.headerImgSrc" alt="" />
          </div>
          <div class="more cp" @click="toMore(component.morePath)">
            <span>更多</span>
            <img src="@/assets/images/right.png" alt="" />
          </div>
        </div>
        <div class="recruitment-container m-t-24">
          <component :is="component.componentName" @isEmpty="setIsEmpty"/>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import components from "./page/loaderComponent.js"

// 图片引入
import optImg from '@/assets/images/opt.png';
import caseImg from '@/assets/images/case.png';
export default {
  name:'page-training',
  data () {
    return {
      componentList: [
        {
          headerImgSrc: optImg,
          morePath: '/training/excellent-project',
          componentName: 'opt-project',
          isLoader: false,
          isEmpty: false
        },
        {
          headerImgSrc: caseImg,
          morePath: '/training/service-case',
          componentName: 'case-project',
          isLoader: false,
          isEmpty: false
        },
      ]
    };
  },
  computed: {},
  methods: {
    /**
     * @description: 跳转更多地址
     * @param {string} path 路径
     * @return {*}
     */
    toMore (path) {
      this.$router.push({ path });
    },
    /**
     * @description: 判断是否为空
     * @return {*}
     */
    isEmpty (componentName) {
      const component = this.componentList.find(el => {
        return el.componentName === componentName
      })
      return component.isEmpty
    },

    /**
     * @description: 加载结束
     * @param {*} componentName
     * @return {*}
     */
    loader (componentName) {

    },

    /**
     * @description: 判断是不是都全部加载完了
     * @return {*}
     */
    isLoaderAll () {
      return this.componentList.every(component => {
        return component.isLoader
      })
    },

    /**
     * @description: 设置组件是否为空
     * @param {*} componentName 组件名
     * @param {Boolean} result
     * @return {*}
     */
    setIsEmpty (componentName, result) {
      const component = this.componentList.find(el => {
        return el.componentName === componentName
      })
      component.isEmpty = result
    }
  },
  components: {
    ...components,
  }
};
</script>
<style lang="stylus" scoped>
.recruitment-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1064px;
  margin-bottom:111px; // 311 for ui

  .header {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    position: relative;

    .title {
      img {
        width: 144px;
        height: 31px;
      }
    }

    .more {
      position: absolute;
      right: 0;
      font-size: 12px;
      font-weight: 400;
      color: #8590A6;
      align-self: flex-end;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 16px;
        height: 16px;
        margin-left: 2px;
      }
    }
  }
  .mt66{
    margin-top:66px !important;
  }

}
</style>
