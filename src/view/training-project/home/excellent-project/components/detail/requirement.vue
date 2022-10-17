<!--
 * @Author: lpj 1248708823@qq.com
 * @Date: 2022-10-13 17:01:39
 * @LastEditors: lpj 1248708823@qq.com
 * @LastEditTime: 2022-10-14 11:04:34
 * @FilePath: \college-teaching\src\view\project-trainning\home\excellent-project\components\detail\requirement.vue
 * @Description: 人才需求
-->
<template>
  <div class="container">
    <div class="item" v-for="i in 3">
      <div class="bg"></div>
      <div class="t_line"></div>
      <div class="title">护网行动专员</div>
      <div class="info">
        <span class="i_item">
          <img src="~@/assets/images/tag.png" alt="" class="icon" />
          <span class="type">职位类型：</span>
          <span class="ct">信息安全/安全服务攻城狮</span>
        </span>
        <span class="i_item">
          <img src="~@/assets/images/people.png" alt="" class="icon" />
          <span class="type">人数需求：</span>
          <span class="ct">5人</span>
        </span>
        <br>
        <span class="i_item mt16">
          <img src="~@/assets/images/sex.png" alt="" class="icon" />
          <span class="type">性别要求：</span>
          <span class="ct">不限</span>
        </span>
        <span class="i_item mt16">
          <img src="~@/assets/images/bt.png" alt="" class="icon" />
          <span class="type">项目补贴：</span>
          <span class="ct">有补贴</span>
        </span>
      </div>
      <div class="line"></div>
      <!-- 工作内容 -->
      <div class="s_content">
        <div class="s_title">工作内容：</div>
        <div class="s_ct">
          1.沟通客户，进行现场资产信息收集；
          2.现场值守及每日汇报
          3.简单的研判处置
          4.应急处置及响应（项目经理负责）
          5.配合安全专项检查工作ivu-tooltip
        </div>
      </div>

      <!-- 能力要求 -->
      <div class="s_content mt26">
        <div class="s_title">能力要求：</div>
        <div class="s_ct">
          1.沟通客户，进行现场资产信息收集；

          2.现场值守及每日汇报
          3.简单的研判处置
          4.应急处置及响应（项目经理负责）
          5.配合安全专项检查工作
        </div>
      </div>

      <!-- 备注 -->
      <div class="bz">
        备注： 7*24小时（三班倒）
      </div>
    </div>
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
.container {
  // margin-top 18px;
  .item {
    position: relative;
    &:nth-child(n+2) {
      margin-top 40px
    }
    .bg {
      width: 32px;
      height: 25px;
      background: linear-gradient(134deg, #FF7D33 0%, rgba(255, 125, 51, 0) 100%);
      border-radius: 2px 2px 2px 2px;
      position: absolute;
    }

    .t_line {
      width: 36px;
      height: 2px;
      background: #FF7D33;
      // border-image: linear-gradient(134deg, rgba(255, 125, 51, 1), rgba(255, 125, 51, 0)) 2 2;
      position: absolute;
      top: 35px;
    }

    .title {
      font-size: 14px;
      font-weight: 500;
      color: #333333;
      padding-top: 15px;
      padding-left: 15px;
      line-height: 16px;
      z-index: 2;
    }

    .info {
      margin-top: 30px;
      padding-left: 17px;
      display: flex;
      flex-wrap: wrap;

      .i_item {
        display: flex;
        align-items: center;
        width: 388px;
        height: 22px;
        font-size: 14px;
        font-weight: 500;
        color: #6A7487;
        line-height: 22px;

        .ct {
          color: #333;
        }
      }
    }

    .line {
      width: 1023px;
      border-top: 1px dotted #DDDDDD;
      margin-top: 12px;
      margin-bottom: 26px;
    }

    .s_content {
      padding-left: 12px;
      font-weight: 400;
      color: #6A7487;
      line-height: 28px;

      .s_title {
        color: #333333;
      }
      .s_ct {
        white-space: pre-line;
      }
    }

    .bz {
      margin-top 24px;
      margin-left 12px;
      font-size: 14px;
      font-weight: 400;
      color: #333333;
      line-height: 21px;
    }
  }

  .icon {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }

  .mt16 {
    margin-top: 16px;
  }

  .mt26 {
    margin-top 26px;
  }
}
</style>
