<template>
  <div class="position-detail">
    <div class="card-container">
      <Table :columns="table.columns" :data="table.data" :loading="table.loading" :height="table.height"
             @on-selection-change="selectChange">
        <!-- 性别 -->
        <template slot-scope="{ row }" slot="sex">
          <span>{{ !row.sex ? '--' : row.sex === 'male' ? '男' : '女' }}</span>
        </template>
        <!-- 简历 -->
        <template slot-scope="{ row }" slot="onlineFlag">
          <a @click="onlineFlagClick(row)">{{ row.onlineFlag ? '在线简历' : '附件简历' }}</a>
        </template>
        <!-- 学历 -->
        <template slot-scope="{ row }" slot="degree">
          <span>{{ degreeState(row.degree) }}</span>
        </template>
        <!-- 首次工作时间 -->
        <template slot-scope="{ row }" slot="startWorkTime">
          <span>{{ deliverTime(row.startWorkTime, false) }}</span>
        </template>
        <!-- 匹配度 -->
        <template slot-scope="{ row }" slot="matchPercent">
          <span>{{ row.matchPercent > 100 ? '100%' : row.matchPercent + '%' }}</span>
        </template>

        <!-- 投递时间 -->
        <template slot-scope="{ row }" slot="deliverTime">
          <span>{{ deliverTime(row.deliverTime, true) }}</span>
        </template>
        <!-- 招聘阶段 -->
        <template slot-scope="{ row }" slot="hireStatus">
          <span :style="{ color: hireStatusColor(row.hireStatus) }">
            {{ status('hireStatusList', row.hireStatus) }}
          </span>
        </template>
        <!-- 操作 -->
        <template slot-scope="{ row }" slot="inviteFlag">
          <a class="positiId" :style="{color: row.inviteFlag ? '#515a6e' : ''}"
             @click="positiClick(row)">{{ row.inviteFlag ? '已邀请' : '邀请投递' }}</a>
        </template>
      </Table>
    </div>
    <Radar :isModal="radar.isShow" @closeModal="closeModal" :modalData="radar.data"></Radar>
  </div>
</template>

<script>
import {
  formatTime,
  formatDegree,
  getEduReqList,
  tableColumns,
  auditStatusList,
  hireStatusList,
  campusTableColumns,
  getThis,
  getAlltableColumns,
} from './position-detail.js'
import request, { POSITIONMANAGEMENT_API, ECHARTS_API } from '@/request';
import Radar from './radar.vue'

export default {
  name: 'position-detail',
  components: {
    Radar,
  },
  props:{
    // 根据传值渲染不同的表列名
    campusId:{
      type:[String,Number],
      required:false,
      default:0,
    },
    // 根据权限渲染表列
    personPostMatchFlag:{
      type:[String,Number],
      required:true,
      default:0,
    }
  },
  created () {
    getThis(this)
    this.table.columns=getAlltableColumns(this.personPostMatchFlag,this.campusId)
    console.log(' this.table.columns---', this.table.columns);
  },
  data () {
    return {
      table: { // 表格数据
        columns: this.campusId ? campusTableColumns : tableColumns,
        data: [],
        loading: false,
        height: 0
      },
      total: 0,
      eduReqList: [],
      stateObj: {
        auditStatusList, // 审核状态
        hireStatusList, // 招聘状态
      },
      radar: {
        isShow: false,
        data: [],

      }
    }
  },
  mounted () {
    this.getDeliverList()
  },
  computed: {},
  methods: {
    async getDeliverList () {
      this.table.loading = true
      const { data } = await request(POSITIONMANAGEMENT_API.getVoteResumeList, {
        params: { count: 1 },
      });
      this.table.loading = false
      this.total = data.total
      this.table.data = data.list
      this.table.loading = false
    },
    hireStatusColor (hireStatus) {
      if (hireStatus === 1) {
        return 'red'
      }
      if (hireStatus === 4) {
        return 'green'
      }
    },
    // 状态转换
    status (type, value) {
      const obj = this.stateObj[type].find(item => item.value == value)
      if (obj) {
        return obj.label
      }
      return ''
    },
    // radar start
    async setRadarModal (params) {
      const { data } = await request(ECHARTS_API.getPortraitRadar(), {})
      this.radar.data = data;
      this.radar.isShow = true;
    },
    closeModal () {
      this.radar.isShow = false;
    },
    // radar end
    deliverTime: formatTime,
    async degreeState (edu) {
      const eduList = await getEduReqList()
      return formatDegree(edu, eduList)
    },
    selectChange () {
    },
    async onlineFlagClick (row) {
      // const reportListReqList = [{ online: row.onlineFlag, id: row.resumeId, deliverTime: row.deliverTime, positionName: row.positionName, name: row.name }]
      // const { data: res } = await request.post(ECHARTS_API.postReportResume, {
      //   data: {
      //     reportListReqList
      //   }
      // })
      // this.deliverId = row.deliverId
      // if (row.onlineFlag) { // 在线简历
      //   this.fileName = pdfName(res.userResumeList[0])
      //   this.userResumeItem = res.userResumeList[0]
      //   return
      // }
      // // 附件简历
      // const resumeMedia = res.resumeMediaList[0]
      // this.fileName = pdfName(resumeMedia, resumeMedia.mediaType)
      // this.mediaItem = resumeMedia
    },
  },
}
</script>

<style lang="stylus" scoped>
.position-detail {

}
</style>
