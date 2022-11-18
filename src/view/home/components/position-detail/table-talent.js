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
          that.setRadarModal1(params.row)
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
    slot: 'gender',
    key: 'gender',
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
    key: 'enrollmentYear',
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
    title: '邀请时间',
    key: 'inviteTime',
    slot: 'inviteTime',
    width: 150,
    align: 'center'
  },
  // 操作
  {
    title: '操作',
    fixed: 'right',
    key: 'inviteFlag',
    slot: 'inviteFlag',
    width: 150,
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
  slot: 'gender',
  key: 'gender',
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
  key: 'enrollmentYear',
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
   return defineRender(h,params,'岗位技能分')
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
  title: '邀请时间',
  key: 'inviteTime',
  slot: 'inviteTime',
  width: 150,
  align: 'center'
},
// 操作
{
  title: '操作',
  fixed: 'right',
  key: 'inviteFlag',
  slot: 'inviteFlag',
  width: 150,
  align: 'center'
},
]

export {
  tableColumns,
  campusTableColumns,
  getThis
}