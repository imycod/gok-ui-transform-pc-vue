import {
  tableColumns,
  campusTableColumns,
  getThis,
  auditStatusList,
  hireStatusList,
} from './table-deliver.js'

// 格式化学历的学历枚举和列表
import request, { INFOMATION_API } from '@/request'

// 格式化时间
function formatTime (time, flag) {
  if (!time || time == 0) {
    return '-'
  }
  if (flag) {
    // 投递时间
    return this.$dayjs(Number(time)).format('YYYY-MM-DD HH:mm')
  }
  // 首次工作时间
  return this.$dayjs(Number(time)).format('YYYY-MM')
}

async function getEduReqList () {
  const { data } = await request(INFOMATION_API.getEdu, {})
  return data
}

// 格式化学历
function formatDegree (edu, eduList) {
  if (!edu) {
    return ''
  }
  const obj = eduList.find(item => item.value == edu)
  return obj.name
}

// 获取简历名称
function pdfName (media, type) {
  return `${media.positionName} + ${media && media.name} + ${this.$dayjs(Number(media.deliverTime)).format('YYYY-MM-DD HH’mm\'ss\'\'')}.${type}`
}

export {
  tableColumns,
  campusTableColumns,
  auditStatusList,
  hireStatusList,
  getThis,
  formatTime,
  formatDegree,
  getEduReqList,
  pdfName, // not use not now
}
