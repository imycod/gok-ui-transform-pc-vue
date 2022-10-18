<template>
  <div v-if="loaded">
    <div class="card">
      <!-- 背景色 -->
      <div class="bg">
        <img class="img" src="~@/assets/images/dt1.png" alt="">
      </div>

      <!-- 有求职意向的 -->
      <div class="intention">
        <div class="header cp">
          <div class="photo">
            <img v-image-err.avatar="userInfo.avatar" alt="">
          </div>
          <div class="user center">
            <div class="name">{{ userInfo.name }}</div>
            <!--            <div class="info ">-->
            <!--              <span v-if="userInfo.age">{{userInfo.age}}岁</span>-->
            <!--              <span v-if="userInfo.education">{{userInfo.education}}</span>-->
            <!--              <span class="to" :title="userInfo.currentStatusTxt">{{userInfo.currentStatusTxt}}</span>-->
            <!--            </div>-->
          </div>
        </div>
        <div class="join-job-manage">
          <div class="acton-item cp" v-for="(info,index) in infoMange" :key="index" @click="toCenter(info.currentTab)">
            <div class="count">
            <span>
              {{ info.count }}
              <div class="red-circle" v-show="info.isRead"></div>

            </span>
              <!-- 小红点 -->
            </div>
            <div class="type">{{ info.name }}</div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { PROJECT_MANAGE } from '@/view/training-project/index.js';
import request, { TARINING_API } from '@/utils/request.js';

export default {
  data () {
    return {
      defaultAvatar: 'https://gok-static.goktech.cn/edu/images/avatar-default.jpg',
      userInfo: {},
      // 基础信息
      baseUserInfo: {
        admin: false,
        // 头像
        av: '',
        firstLogin: 0,
        gKey: '',
        // 昵称
        nm: '',
        phone: '',
        uid: '',
        wn: '',
        wxId: ''
      },
      // 面试信息管理
      infoMange: PROJECT_MANAGE.PROJECT_TAB,
      loaded: false
    };
  },

  async mounted () {
    await this.getUserInfoForProject()
    // this.setBaseInfo()
    this.setInfoMange()
    this.loaded = true
  },
  methods: {
    /**
     * @description: 获取就业相关的个人信息【求职意向】
     * @return {*}
     */
    async getUserInfoForProject () {
      // todo 把data删掉
      const { data } = await request(TARINING_API.getMemberInfo, {})
      this.userInfo = data
    },
    /**
     * @description: 设置面试管理
     * @return {*}
     */
    setInfoMange () {
      this.infoMange[0].count = this.userInfo.applyCnt
      this.infoMange[0].isRead = this.userInfo.applyRedFlag
      this.infoMange[1].count = this.userInfo.processCnt
      this.infoMange[1].isRead = this.userInfo.processRedFlag
      this.infoMange[2].count = this.userInfo.projectCnt
      this.infoMange[2].isRead = this.userInfo.projectRedFlag
    },

    /**
     * @description:设置基础用户信息
     * @return {*}
     */
    setBaseInfo () {
      this.baseUserInfo = this.$one.uc.token.getUserBaseInfo()
    },
    /**
     * @description: 进入面试管理页面
     * @return {*}
     */
    toCenter (currentTab) {
      this.$router.push({
        path: '/training/my-project',
        query: {
          tab: currentTab
        }
      })
    },
  },

  components: {}
};
</script>

<style lang="stylus" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 424px;
  height: 230px;

  // 有求职意向的

  .intention {
    z-index: 2;
    margin-left: 34px;
    margin-top: 18px;
    display: flex;
    flex-direction: column;

    // 头像部分

    .header {
      display: flex;

      .photo {
        width: 60px;
        height: 60px;
        border-radius: 30px;

        img {
          width: 60px;
          height: 60px;
          border-radius: 30px;
        }
      }

      .user {
        margin-left: 22px;
        display: flex;
        flex-direction: column;

        .name {
          font-size: 20px;
          font-weight: 400;
          color: #333333;
          line-height: 20px;
          height: 20px;
        }

        .info {
          max-width: 310px;
          margin-top: 18px;
          display: flex;
          height: 20px;
          font-size: 16px;
          font-weight: 400;
          color: #6A7487;
          line-height: 20px;

          span {
            display: inline-block;
            padding: 0 8px;
            border-left: 1px solid #6A7487;
          }

          span:last-child {
            padding: 0 0px 0 8px;
            flex: 1;
          }

          span:first-child {
            padding: 0 8px 0 0px;
            border: none;
          }
        }
      }
    }

    // 数据部分

    .join-job-manage {
      margin-top: 48px;
      margin-left: -2px;
      margin-bottom: 20px;
      display: flex;
      justify-content space-between;

      .acton-item {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .count {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          font-weight: bold;
          color: #333333;
          line-height: 28px;

          span {
            position: relative;

            .red-circle {
              position: absolute;
              top: -4px;
              right: -8px;
              width: 8px;
              height: 8px;
              background: #FA594E;
              border-radius: 8px;
              opacity: 1;
            }
          }
        }

        .type {
          margin-top: 8px;
          height: 20px;
          font-size: 16px;
          font-weight: 400;
          color: #6A7487;
          line-height: 20px;
        }
      }

      .acton-item:last-child {
        margin-right: 32px;
      }
    }
  }


  // ---------辅助样式代码---------

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 424px;
    height: 100px;
    background: linear-gradient(to bottom, #FEEDE6 0%, #FFFFFF 100%);

    .img {
      width: 118px;
      height: 88px;
      right: 0px;
      position: absolute;
    }
  }
}
</style>
