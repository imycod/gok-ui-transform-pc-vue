<!--
 * @Author: lpj 1248708823@qq.com
 * @Date: 2022-10-14 17:24:40
 * @LastEditors: lpj 1248708823@qq.com
 * @LastEditTime: 2022-10-17 14:25:27
 * @FilePath: \college-teaching\src\view\project-trainning\home\excellent-project\components\common\apply.vue
 * @Description: 申请报名
-->
<template>
  <div>
    <Drawer title="项目总结" :closable="false" :mask-closable="false" v-model="value" width="520" :transfer="false">
      <template slot="header">
        <div class="header">
          <div class="title">项目申请</div>
          <div class="act">
            <div class="cancel cp" @click="cancel(true)">关闭</div>
            <div class="confirm cp" @click="confirm">确认申请</div>
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
        <!-- 表单 -->
        <Form ref="formDynamic" :model="applyFrom" :rules="rules" style="width: 455px" class="from">
          <FormItem label="人才需求" prop="demand">
            <Select v-model="demand" style="width: 455px" placeholder="请选择申请申请的人才需求类型">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          <FormItem label="可参与日期" prop="dateArr">
            <DatePicker v-model="applyFrom.dateArr" type="date" multiple placeholder="请选择日期" style="width: 455px"></DatePicker>
          </FormItem>
          <FormItem label="证件照" prop="idCardUrl" label-width="71">
            <Upload class="upload" ref="upload" type="drag" action="/" :show-upload-list="false" :before-upload="beforeUpload" :format="['jpg', 'png', 'pdf','doc','docx']">
              <div class="upload_box cp">
                <div class="n_box" v-if="false">
                  <Icon type="md-add" size="12" />
                  <span>上传</span>
                </div>
                <!-- <img src="~@/assets/images/upload.png" alt="" class="icon" /> -->
                <div class="y_box" v-else>
                  <div class="mask"></div>
                  <img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/10/16e533c0d3be8f80~tplv-t2oaga2asx-zoom-mark-crop-v2:0:0:64:64.awebp" alt="" class="photo" />
                  <div class="text">
                    <Icon type="md-add" size="12" />
                    <span>重新上传</span>
                  </div>

                </div>
              </div>

            </Upload>
          </FormItem>
          <FormItem label="身份证照" prop="certUrl" label-width="88">
            <Upload class="upload" ref="upload" type="drag" action="/" :show-upload-list="false" :before-upload="beforeUpload" :format="['jpg', 'png', 'pdf','doc','docx']">
              <div class="upload_box cp">
                <div class="n_box">
                  <Icon type="md-add" size="12" />
                  <span>上传</span>
                </div>
                <!-- <img src="~@/assets/images/upload.png" alt="" class="icon" /> -->
              </div>
            </Upload>
          </FormItem>
        </Form>
      </div>
    </Drawer>
    <CancelTip v-model="showCancelTip" @confirm="cancel(false)"></CancelTip>
  </div>
</template>
<script>
import CancelTip from './cancel-tip'
export default {
  props: {
    value: {
      default: false
    }
  },
  data () {
    return {
      applyFrom: {
        // 人才需求
        demand: '',
        // 日期
        dateArr: [],
        // 身份证
        idCardUrl: '',
        // 证件照
        certUrl: ' '
      },
      showCancelTip: false,
      rules: {},
      // TODO: 后期删除
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        }

      ]
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

  .from {
    margin-top: 16px;

    /deep/ .ivu-upload-drag {
      height: 80px;
      width: 80px;
    }

    .upload_box {
      width: 80px;
      height: 80px;
      background: #FFFFFF;
      border: 1px dashed #DCDCDC;
      display: flex;
      justify-content: center;
      align-items: center;

      .n_box {
        width: 76px;
        height: 76px;
        opacity: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        color: #4E5969;
        line-height: 22px;

        span {
          margin-top: 2px;
        }
      }

      .y_box {
        position: relative;
        width: 76px;
        height: 76px;
        background: #E5E6EB;
        border-radius: 0px 0px 0px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        color: #4E5969;
        line-height: 22px;

        .photo {
          width: 76px;
          height: 76px;
        }

        .text {
          display: none;
        }

        &:hover {
          .mask {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #E5E6EB;
            opacity: 0.7;
          }

          .text {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            span {
              margin-top: 2px;
            }
          }
        }
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

// from 表单处理
/deep/ .ivu-form .ivu-form-item-label {
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  width: 455px;
}

/deep/ .ivu-form-item {
  margin-bottom: 16px;
}
</style>
