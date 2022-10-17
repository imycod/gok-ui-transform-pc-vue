const PROJECT_MANAGE = {
  PROJECT_TAB: [
    {
      name: '申请记录',
      count: 2,
      currentTab: 'applyCnt',
      isRead: true
    },
    {
      name: '进行中',
      count: 2,
      currentTab: 'processCnt',
      isRead: true
    },
    {
      name: '全部项目',
      count: 2,
      currentTab: 'projectCnt',
      isRead: true
    },
  ]
}

// 项目状态枚举
const ProjectStausEnum = {
  unPerfected: {
    value: 0,
    name: '待完善'
  },
  unStart: {
    value: 1,
    name: '未开始'
  },
  processing: {
    value: 2,
    name: '进行中'
  },
  end: {
    value: 3,
    name: '已结束'
  }
};
// 项目审批枚举
const AuditStatusEunm = {
  unAudit: {
    value: 0,
    name: '待审核'
  },
  sucess: {
    value: 1,
    name: '审核通过'
  },
  fail: {
    value: 2,
    name: '审核拒绝'
  }
};

// 前端页面自己的Ui枚举状态（已页面展示为主）
const btnStatusEnum = {
  // 未申请状态 左是状态 又是文案
  unApply: '立即申请',
  // 申请未通过状态
  applyed: '已申请',
  // 申请通过
  audioSuccess: '已通过',
  // 申请未通过
  audioFail: '申请未通过',
  // 申请已截止
  deadline: '申请已截止',
  // 加入未开始
  unStart: '未开始',
  // 加入进行中
  processing: '进行中',
  // 加入已结束
  end: '已结束'
};

const TraningMixins = {
  data () {
    return {
      normalColor: '',
      successColor: '',
      disabledColor: '',
      processingColor:'#39AFFD',
      endColor:'#E7E7E7',
    };
  },
  computed: {
    /**
     * @description: 获取当前状态 [计算属性可以缓存]
     * @param {*} project
     * @return {*}
     */
    getStatus () {
      return (project) => {
        // status 状态 0:待完善;1-未开始;2-进行中;3-已结束
        // applyFlag 报名标识
        // auditStatus 审核状态：0-待审核;1审核通过;2审核拒绝
        // source 学员来源:0-自主申请；1-直接添加
        const {
          auditStatus,
          applyFlag,
          status,
          deadlineTime,
          source
        } = project;

        // 返回立即申请状态 TODO:注意判断状态是不是字符串还是数字
        if (!applyFlag || !this.$one.uc.api.isLogined()) {
          return this.getInstance(btnStatusEnum.unApply);
        }
        // 返回已申请状态
        if (applyFlag && auditStatus === AuditStatusEunm.unAudit) {
          return this.getInstance(btnStatusEnum.applyed);
        }
        // 返回申请未通过
        if (applyFlag && auditStatus === AuditStatusEunm.fail) {
          return this.getInstance(btnStatusEnum.audioFail);
        }
        // 返回已通过
        if (applyFlag && status === undefined && auditStatus === AuditStatusEunm.sucess) {
          return this.getInstance(btnStatusEnum.audioSuccess);
        }
        if (new Date().getTime().toString() > deadlineTime) {
          return this.getInstance(btnStatusEnum.deadline);
        }
        // ---------以下为详情扩展----------------
        // 被直接添加或者报名且通过
        const isJoin = source === 1 || (applyFlag && auditStatus === AuditStatusEunm.sucess)
        // 项目加入未开始
        if (isJoin && status === ProjectStausEnum.unStart.value) {
          return this.getInstance(btnStatusEnum.unStart, source);
        }
        // 项目加入进行中
        if (isJoin && status === ProjectStausEnum.processing.value) {
          return this.getInstance(btnStatusEnum.processing);
        }
        // 项目加入已结束
        if (isJoin && status === ProjectStausEnum.end.value) {
          return this.getInstance(btnStatusEnum.end);
        }
      };
    },

    /**
     * 申请状态按钮
     */
    btnStatusStyle(){
      return (item)=>{
       const btnObj= this.getStatus(item)
        return  {
          'color':btnObj.statusTextColor,
          'background':btnObj.statusColor
        }
      }
    },
    /**
     * @description: 获取对应状态的实例
     * @param {btnStatusEnum} status
     * @param {boolean} 其他判断项
     * @return {*}
     */
    getInstance () {

      return  (status, other)=>{
        switch (status) {
          case btnStatusEnum.unApply:
            return {
              // 按钮文本
              text: btnStatusEnum.apply,
              // 颜色
              color: this.normalColor,
              // 是否禁用
              isDisabled: false,
              // 打开弹窗
              openDialog: true,
              // -------以下是详情特供-------------
              // 是否展示狀態 否则就展示图标
              isShowStatus: false,
              // 是否展示按钮
              isShowBtn: true,
              // 是否展示进度
              isShowProgess: false,
              // 是否展示总结
              isShowSummarize: false,
              // 是否省略：去除人才需求 人数需求
              isOmit: false
            };

          case btnStatusEnum.applyed:
            return {
              text: btnStatusEnum.applyed,
              color: this.normalColor,
              isDisabled: false,
              // 打开弹窗
              openDialog: false,

              // -------以下是详情特供-------------
              // 是否有其他标签
              isShowTab: false,
              // 是否展示狀態 否则就展示图标
              isShowStatus: false,
              // 是否展示按钮
              isShowBtn: true,
              // 是否展示进度
              isShowProgess: false,
              // 是否展示总结
              isShowSummarize: false,
              // 是否省略：去除人才需求 人数需求
              isOmit: false
            };

          case btnStatusEnum.audioFail:
            return {
              text: btnStatusEnum.audioFail,
              color: this.disabledColor,
              isDisabled: true,
              // 是否展示审批说明
              showRemark: true,
              // 打开弹窗
              openDialog: false,

              // -------以下是详情特供-------------
              // 是否有其他标签
              isShowTab: false,
              // 是否展示狀態 否则就展示图标
              isShowStatus: false,
              // 是否展示按钮
              isShowBtn: true,
              // 是否展示进度
              isShowProgess: false,
              // 是否展示总结
              isShowSummarize: false,
              // 是否省略：去除人才需求 人数需求
              isOmit: false
            };

          case btnStatusEnum.audioSuccess:
            return {
              text: btnStatusEnum.audioSuccess,
              color: this.successColor,
              isDisabled: false,
              // 打开弹窗
              openDialog: false
            };

          case btnStatusEnum.deadline:
            return {
              text: btnStatusEnum.deadline,
              color: this.disabledColor,
              isDisabled: true,
              // 打开弹窗
              openDialog: false,

              // -------以下是详情特供-------------
              // 是否有其他标签
              isShowTab: false,
              // 是否展示狀態 否则就展示图标
              isShowStatus: false,
              // 状态文本
              statusText: btnStatusEnum.unStart,
              // 是否展示按钮
              isShowBtn: true,
              // 是否展示进度
              isShowProgess: false,
              // 是否展示总结
              isShowSummarize: false,
              // 是否省略：去除人才需求 人数需求
              isOmit: false
            };

          case btnStatusEnum.unStart:
            return {
              text: btnStatusEnum.audioSuccess,
              color: this.successColor,
              isDisabled: false,
              // 打开弹窗
              openDialog: false,

              // -------以下是详情特供-------------
              // 是否有其他标签
              isShowTab: true,
              // 是否展示狀態 否则就展示图标
              isShowStatus: true,
              // 状态文本
              statusText: btnStatusEnum.processing,
              // 是否展示按钮
              isShowBtn: !other,
              // 是否展示进度
              isShowProgess: false,
              // 是否展示总结
              isShowSummarize: false,
              // 是否省略：去除人才需求 人数需求
              isOmit: false
            };

          case btnStatusEnum.processing:
            return {
              // -------以下是详情特供-------------
              // 是否有其他标签
              isShowTab: true,
              // 是否展示狀態 否则就展示图标
              isShowStatus: true,
              // 状态文本
              statusText: btnStatusEnum.processing,
              statusColor:this.processingColor, // 背景色
              statusTextColor:'#FFFFFF', //字体颜色
              // 是否展示按钮
              isShowBtn: false,
              // 是否展示进度
              isShowProgess: true,
              // 是否展示总结
              isShowSummarize: true,
              // 是否省略：去除人才需求 人数需求
              isOmit: true
            };

          case btnStatusEnum.end:
            return {
              // 是否有其他标签
              isShowTab: true,
              // 是否展示狀態 否则就展示图标
              isShowStatus: true,
              // 状态文本
              statusText: btnStatusEnum.end,
              statusColor:this.endColor, // 背景色
              statusTextColor:'#6A7487', //字体颜色
              // 是否展示按钮
              isShowBtn: false,
              // 是否展示进度
              isShowProgess: true,
              // 是否展示总结
              isShowSummarize: true,
              // 是否省略：去除人才需求 人数需求
              isOmit: true
            };
        }
      }

    }
  }
};

export {
  PROJECT_MANAGE,
  TraningMixins,
}
