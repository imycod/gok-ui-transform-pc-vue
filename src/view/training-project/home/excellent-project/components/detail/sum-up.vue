<!--
 * @Author: lpj 1248708823@qq.com
 * @Date: 2022-10-14 14:50:21
 * @LastEditors: lpj 1248708823@qq.com
 * @LastEditTime: 2022-10-17 09:37:54
 * @FilePath: \college-teaching\src\view\project-trainning\home\excellent-project\components\detail\sum-up-preview.vue
 * @Description: 项目总结
-->
<template>
<div>
  <Drawer title="项目总结" :closable="false" :mask-closable="false" v-model="value" width="520" :transfer="false">
    <template slot="header">
      <div class="header">
        <div class="title">项目总结</div>
        <div class="act">
          <div class="cancel cp" @click="cancel(true)">关闭</div>
          <div class="confirm cp" @click="confirm" v-if="isEdit">确定</div>
        </div>
      </div>
    </template>
    <!-- 正文 -->
    <div class="content">
      <!-- 简介 -->
      <div class="info">
        <div class="info-bg"></div>
        <div class="i_title">
          某企业智慧园区建设项目貸記卡覺某企业智慧园区建设项目貸記卡覺
        </div>
        <div class="time">
          <img src="~@/assets/images/clock.png" alt="" class="icon" />
          <span>2022-08-01 ～ 2022-08-31</span>
        </div>
      </div>
      <!-- 总结 -->
      <div class="sum_up">
        <div class="s_title">总结</div>
        <div class="s_normal" v-if="!isEdit">
          最神奇的是，很多国际观察者以为经济灾难会让马杜罗政府垮台，但是，他却神奇地把经济崩溃变成了他的政治资产。为什么？因为当经济极度短缺，而政府控制了有限供给，资源分配就成了政府控制民众的武器。从2016年开始，马杜罗政府每个月给困难家庭发一篮救济食品，尽管只是杯水车薪，但对很多家庭来说，这是唯一的救生圈。为了防止这唯一的救生圈被拿走，很多民众更加“听话”，甚至感恩戴德。
        </div>
        <div class="s_edit" v-else>
          <Input v-model="content" class="res" maxlength="1000" :rows="12" show-word-limit type="textarea" placeholder="请输入内容,限1000字" />
        </div>
      </div>

      <!-- 附件 -->
      <div class="accessory">
        <div class="a_title">附件</div>
        <div class="a_normal" v-if="!isEdit">
          <!-- TODO: 补下载 -->
          <div class="a_item" v-for="i in 10">
            <img src="~@/assets/images/link.png" alt="" class="icon" />
            <a class="name">考勤记录.docx</a>
          </div>
        </div>
        <div class="a_edit" v-else>
             <div class="a_item" v-for="i in 10">
            <img src="~@/assets/images/link.png" alt="" class="icon" />
            <a class="name">考勤记录.docx</a>
          </div>
          <Upload class="upload" ref="upload" type="drag" action="/" :show-upload-list="false" :before-upload="beforeUpload" :format="['jpg', 'png', 'pdf','doc','docx']">
            <div class="btn cp">
              <img src="~@/assets/images/upload.png" alt="" class="icon" />
              上传文件
            </div>
          </Upload>
          <div class="bz">
            最多可上传10个文件，单个大小不超过300MB<br>
            支持扩展名：png、jpg、jpeg、svg、bmp、gif、webp、rar、zip、doc、docx、xls、<br/>xlsx、ppt、pptx、pdf、txt、md
          </div>
        </div>
      </div>
    </div>
  </Drawer>
  <CancelTip v-model="showCancelTip" @confirm="cancel(false)"></CancelTip>
  </div>
</template>
<script>
import CancelTip from '../common/cancel-tip'
export default {
  props: {
    value: {
      default: false
    },
    isEdit: {
      default: true
    }
  },
  data () {
    return {
      content: '',
      file: '',
      showCancelTip: false
    };
  },
  computed: {},
  methods: {
    cancel (showTip) {
      if (showTip) {
        this.showCancelTip = true
      } else {
        this.$emit('input', false);
        this.rest()
      }
    },

    async confirm () {
      // Todo
      this.cancel(false)
    },

    rest () {
      this.content = ''
      this.file = ''
    }
  },
  components: { CancelTip }
};
</script>
<style lang="stylus" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 20px 35px 12px 29px;

  .title {
    height: 22px;
    font-size: 18px;
    font-weight: 500;
    color: #333333;
    line-height: 22px;
  }

  .act {
    display: flex;

    .cancel {
      background: #E7E7E7;
      border-radius: 4px 4px 4px 4px;
      padding: 4px 18px;
      font-size: 14px;
      font-weight: bold;
      color: #333333;
      line-height: 20px;
    }

    .confirm {
      background: #FE8836;
      border-radius: 4px 4px 4px 4px;
      padding: 4px 18px;
      font-size: 14px;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 20px;
      margin-left: 14px;
    }
  }
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;

  .info {
    width: 456px;
    padding: 20px 18px 20px 16px;
    height: 124px;
    background: linear-gradient(177deg, #FEEDE6 0%, #FFFFFF 100%);
    border: 1px solid #F0F2F7;
    position: relative;

    .info-bg {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 85px;
      height: 60px;
      background: url('~@/assets/images/search-bg.png') no-repeat center;
      background-size: 100%;
    }

    .i_title {
      width: 422px;
      height: 48px;
      font-size: 20px;
      font-weight: 500;
      color: #383838;
      line-height: 24px;
    }

    .time {
      margin-top: 14px;
      display: flex;
      align-items: center;

      .icon {
        width: 18px;
        height: 18px;
        margin-right: 4px;
        font-size: 14px;
        font-weight: 500;
        color: #6A7487;
        line-height: 22px;
      }
    }
  }

  .sum_up {
    margin-top: 27px;

    .s_title {
      font-size: 16px;
      font-weight: 500;
      color: #333333;
      line-height: 16px;
    }

    .s_normal {
      margin-top: 8px;
      width: 456px;
      padding: 20px 16px;
      background: #F7F9FC;
      border-radius: 10px 10px 10px 10px;
      font-size: 15px;
      font-weight: 500;
      color: #6A7487;
      line-height: 30px;
      margin-bottom: 35px;
    }

    .s_edit {
      margin-top: 17px;
      margin-bottom: 24px;
    }
  }

  .accessory {
    .a_title {
      font-size: 16px;
      font-weight: 500;
      color: #333333;
      line-height: 16px;
    }

    .a_normal {

    }

    .a_edit {

      .upload {
      padding-top: 18px;

        .btn {

          display: flex;
          align-items: center;
          width: 112px;
          height: 36px;
          justify-content: center;

          img {
            width: 16px;
            height: 16px;
            margin-right: 8px;
          }

          // padding 10px 16px;
          border-radius: 3px 3px 3px 3px;
          border: 1px solid #DCDCDC;
          font-size: 14px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.9);
          line-height: 22px;
        }
      }

      .bz {
        margin-top 8px
        width: 456px;
        height: 60px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(0,0,0,0.4);
        line-height: 20px;
      }
    }
          .a_item {
        margin-top: 16px;
        display: flex;
        align-items: center;

        img {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }

        a {
          font-size: 14px;
          font-weight: 400;
          color: #268AFF;
          line-height: 20px;
        }

        &:nth-child(1) {
          margin-top: 9px;
        }
      }
  }
}

/deep/.ivu-drawer-header {
  padding: 0;
}

/deep/.ivu-drawer-body {
  padding: 16px 35px 16px 29px;
}

/deep/.ivu-upload-drag {
  border-width: 0px;
  width: 112px;
  height: 36px;
}
</style>
