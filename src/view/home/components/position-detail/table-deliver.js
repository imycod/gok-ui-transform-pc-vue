let that = ''
const getThis = (_this) => {
  that = _this;
}
const defineRender = (h,params,code) => {
  let score = Number(params.row[code]) > 100 ? 100 :  params.row[code],
  currentScore = code == 'matchPercent' ? score + '%': score;
  return h('Tooltip',{
    props: {
      placement: 'bottom',
      transfer: true,
      theme: 'light'
    }
  },
  [
    currentScore,
    h('Button', {
       slot: 'content',
       props: {
        type: 'primary'
       },
       on: {
        click: ()=> {
          that.setRadarModal(params.row)
        }
       }
      }, "生成雷达图"),
    h('div', {
      slot: 'content',
      style: {
        maxWidth: '300px',
        fontSize: '12px',
        color: '#333',
        wordBreak: 'break-all',
        whiteSpace: 'pre-wrap',
        margin: "10px 0"
      }
    },
     '注：求职者能力值是该用户在河狸学途平台上积累学习行为/项目经验的结果数据，仅供招聘参考；')
  ])
}

const tableColumns = [ // 表格列
  {
    type: 'selection',
    // fixed: 'left',
    width: 60,
    align: 'center'
  },
  {
    title: '应聘学员',
    key: 'name',
    width: 150,
    align: 'center'
  },
  {
    title: '性别',
    slot: 'sex',
    key: 'sex',
    width: 150,
    align: 'center'
  },
  {
    title: '简历',
    key: 'onlineFlag',
    slot: 'onlineFlag',
    width: 150,
    align: 'center'
  },
  {
    title: '学历',
    key: 'degree',
    slot: 'degree',
    width: 150,
    align: 'center'
  },
  {
    title: '入学年份',
    key: 'grade',
    width: 150,
    align: 'center'
  },
  {
    title: '首次工作时间',
    key: 'startWorkTime',
    slot: 'startWorkTime',
    width: 150,
    align: 'center'
  },
  {
    title: '岗位技能分',
    key: 'skillScore',
    width: 150,
    align: 'center',
    render: (h,params) => {
     return defineRender(h,params,'skillScore')
    }
  },
  {
    title: '匹配度',
    key: 'matchPercent',
    width: 150,
    align: 'center',
    render: (h,params) => {
      return defineRender(h,params,'matchPercent')
    }
  },
  {
    title: '岗位得分',
    key: 'postScore',
    width: 150,
    align: 'center',
    render: (h,params) => {
      return defineRender(h,params,'postScore')
    }
  },
  {
    title: '来源',
    key: 'deliverChannel',
    width: 150,
    align: 'center'
  },
  {
    title: '投递时间',
    key: 'deliverTime',
    slot: 'deliverTime',
    width: 150,
    align: 'center'
  },
  {
    title: '招聘阶段',
    fixed: 'right',
    key: 'hireStatus',
    slot: 'hireStatus',
    width: 150,
    align: 'center'
  },
  // 操作
  {
    title: '操作',
    fixed: 'right',
    key: 'positiId',
    slot: 'positiId',
    width: 300,
    align: 'center'
  },
]

const campusTableColumns =  [ // 表格列
{
  type: 'selection',
  // fixed: 'left',
  width: 60,
  align: 'center'
},
{
  title: '应聘学员',
  key: 'name',
  width: 150,
  align: 'center'
},
{
  title: '性别',
  slot: 'sex',
  key: 'sex',
  width: 150,
  align: 'center'
},
{
  title: '简历',
  key: 'onlineFlag',
  slot: 'onlineFlag',
  width: 150,
  align: 'center'
},
{
  title: '学历',
  key: 'degree',
  slot: 'degree',
  width: 150,
  align: 'center'
},
{
  title: '入学年份',
  key: 'grade',
  width: 150,
  align: 'center'
},
{
  title: '首次工作时间',
  key: 'startWorkTime',
  slot: 'startWorkTime',
  width: 150,
  align: 'center'
},
{
  title: '岗位技能分',
  key: 'skillScore',
  width: 150,
  align: 'center',
  render: (h,params) => {
   return defineRender(h,params,'skillScore')
  }
},
{
  title: '匹配度',
  key: 'matchPercent',
  width: 150,
  align: 'center',
  render: (h,params) => {
    return defineRender(h,params,'matchPercent')
  }
},
{
  title: '岗位得分',
  key: 'postScore',
  width: 150,
  align: 'center',
  render: (h,params) => {
    return defineRender(h,params,'postScore')
  }
},
{
  title: '投递时间',
  key: 'deliverTime',
  slot: 'deliverTime',
  width: 150,
  align: 'center'
},
{
  title: '招聘阶段',
  fixed: 'right',
  key: 'hireStatus',
  slot: 'hireStatus',
  width: 150,
  align: 'center'
},
// 操作
{
  title: '操作',
  fixed: 'right',
  key: 'positiId',
  slot: 'positiId',
  width: 300,
  align: 'center'
},
]

const auditStatusList = [ // 审核状态 (value 后面调)
  {
    label: '待审核',
    value: 0
  },
  {
    label: '已拒绝',
    value: 1
  },
  {
    label: '已同意',
    value: 2
  },
  {
    label: '免审',
    value: 3
  },
]

const hireStatusList = [ // 招聘状态 (value 后面调)
  // { // 后端不会返回（待审核）
  //   label: '待审核',
  //   value: 0
  // },
  {
    label: '拒绝',
    value: 1
  },
  {
    label: '面试',
    value: 2
  },
  {
    label: '笔试',
    value: 3
  },
  {
    label: '录用',
    value: 4
  },
  {
    label: '新简历',
    value: 5
  }
]

// 操作选项
const operate = {
  5: [ // 新简历
    {
      name: '约面试/笔试',
      value: 1
    },
    {
      name: '录用',
      value: 2
    },
    {
      name: '拒绝',
      value: 3
    }
  ],
  3: [ // 笔试
    {
      name: '约面试/笔试',
      value: 1
    },
    {
      name: '录用',
      value: 2
    },
    {
      name: '拒绝',
      value: 3
    },
    {
      name: '面试记录',
      value: 4
    },
    {
      name: '评价',
      value: 5
    }
  ],
  2: [ // 面试
    {
      name: '约面试/笔试',
      value: 1
    },
    {
      name: '录用',
      value: 2
    },
    {
      name: '拒绝',
      value: 3
    },
    {
      name: '面试记录',
      value: 4
    },
    {
      name: '评价',
      value: 5
    }
  ],
  4: [ // 录用
    {
      name: '面试记录',
      value: 4
    },
    {
      name: '评价',
      value: 5
    }
  ],
  1: [ // 已拒绝
    {
      name: '面试记录',
      value: 4
    },
    {
      name: '评价',
      value: 5
    }
  ]
}

export {
  tableColumns,
  campusTableColumns,
  auditStatusList,
  hireStatusList,
  operate,
  getThis
}
