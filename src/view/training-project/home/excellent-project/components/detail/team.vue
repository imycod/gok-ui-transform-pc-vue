<!--
 * @Author: lpj 1248708823@qq.com
 * @Date: 2022-10-13 17:02:13
 * @LastEditors: lpj 1248708823@qq.com
 * @LastEditTime: 2022-10-14 14:25:38
 * @FilePath: \college-teaching\src\view\project-trainning\home\excellent-project\components\detail\team.vue
 * @Description: 项目成员
-->
<template>
  <div class="team">
    <div class="item" v-for="i in 10">
      <img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/10/16e533c0d3be8f80~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp" alt="" class="photo" />
      <span class="name">张三</span>
      <span class="position">运营服务专员</span>
      <span class="phone cp" @click="openPhone">联系ta</span>
    </div>

    <PhoneDialog v-model="showPhone" :showCancel="false" >
      <template slot="content">
        <div class="dialog">
          <img src="~@/assets/images/phone.png" alt="" class="icon" />
          <span class="d_name">张胜男</span>
          <span class="d_phone">15959974077</span>
        </div>
      </template>
    </PhoneDialog>
  </div>
</template>
<script>
import PhoneDialog from '../common/dialog.vue'
export default {
  data () {
    return {
      showPhone: false
    };
  },
  computed: {},
  methods: {
    openPhone () {
      this.showPhone = true
    }
  },
  components: {
    PhoneDialog
  }
};
</script>
<style lang="stylus" scoped>
.team {
  margin-top: 4px;

  .item {
    display: flex;
    align-items: center;
    width: 690px;
    height: 56px;
    padding: 12px 61px 12px 31px;

    img {
      width: 32px;
      height: 32px;
      background-color: #ccc;
      border-radius: 50%;
    }

    .name {
      min-width: 60px;
      margin-left: 40px;
      font-size: 14px;
      font-weight: 400;
      color: #333333;
    }

    .position {
      min-width: 150px;
      font-size: 14px;
      font-weight: 400;
      color: #8590A6;
      margin-left: 168px;
    }

    .phone {
      margin-left: 104px;
      font-size: 14px;
      font-weight: 400;
      color: #268AFF;
    }

    &:hover {
      background: #FEEDE6;
    }
  }
}

.dialog {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #268AFF;

  .icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  .d_name {
    color: rgba(0, 0, 0, 0.9);
    margin-right: 16px;
  }

  .d_name {
    line-height: 24px;
  }
}
</style>
