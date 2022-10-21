const Mock = require('mockjs')

const api = {
  training:require('@/request/api/training-project.js')
}

let List=[] // 存储用来id找到对应详情
function generate(type, count = 1) {
  const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

  function toloop(count, obj) {
    let list = []
    for (let i = 0; i < count; i++) {
      list.push(Mock.mock(obj))
    }
    return list
  }

  let obj = {}
  switch (type) {
    case 'banners':
      obj = {
        id: '@increment',
        title: '@title(5, 10)',
        resourceType: '@integer(1, 10)',
        coverUrl: image_uri,
        resourceValue: '',
      }
      return toloop(count, obj)
    case 'cases':
      obj = {
        "id": '@increment',
        "context": "@cparagraph()",
        "labels|1-4": [
          "good job",
          "四字成语",
          "四字成",
        ],
        "beginTime": '@datetime("T")',
        "name": "@ctitle",
        "areas|1-6": [
          {
            "province": "@province()",
            "city": "@city()",
            "county": "@county()"
          },
        ],
        "endTime": '@datetime("T")'
      }
      List=toloop(count, obj)
      return List
    case  'project':
      obj = {
        "id": '@uid',
        "remainPercent": '@integer(1, 100)', // 进度百分比
        "remainCnt": '@integer(1, 100)', // 距交付天数
        "beginTime": '@datetime("T")', // 项目开始时间
        "name": "@ctitle", // 项目名称
        "endTime": '1671260683000', // 项目结束时间
        "source":1,
        "status":"@integer(2, 3)",
        "deadlineTime":'1671260683000',
        "applyFlag":true,
        "labels": [ // todo.. 后端字段忘给了
          "数据通信",
          "@city()",
        ],
      }
      return toloop(count, obj)
  }

}


const users = {
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  name: '@name',
  applyCnt: '@integer(1, 10)',
  applyRedFlag: '@boolean()',
  processCnt: '@integer(1, 10)',
  processRedFlag: '@boolean()',
  projectCnt: '@integer(1, 10)',
  projectRedFlag: '@boolean()',
}

// 案例详情
const detailCase={
  "background":"智慧园区是某企业搬迁点建设项目之一，内含可容纳320人的会议室、展示大厅、休息室、更衣室、餐厅等空间。2021年，启动从园区智慧改造工作，同时融入智能化设计。智慧园区是某企业搬迁点建设项目之一，内含可容纳320人的会议室、展示大厅、休息室、更衣室、餐厅等空间。2021年，启动从园区智慧改造工作，同时融入智能化设计。",
  "overview":"01　 智能照明 可视化智能控制 会议室内装置了壁灯、筒灯、灯带、灯条等大大小小数量繁多的灯具，如果使用传统开关，不仅影响墙面美观不说，更让开关操作复杂化。 而配备了GVS臻系列触控屏Z10之后，则让这种烦忧一扫而空。 02　 智能场景一键开启 Z10智能屏不仅可以随意控制会议室内的智能设备，还可以根据会议需求打造不同的场景模式：会议场景、演讲场景、影音场景、清扫场景、全开/全关.Z10智能屏不仅可以随意控制会议室内的智能设备，还可以根据会议需求打造不同的场景模式：会议场景、演讲场景、影音场景、清扫场景、全开/全关。 03　 手机app控制 方便快捷 除了面板控制、感应控制，工作人员还可通过手机app了解会议中心内部各设备的运行状态，并进行实时控制。除了面板控制、感应控制，工作人员还可通过手机app了解会议中心内部各设备的运行状态，并进行实时控制。",
  "teams|0-8": [
    {
      "name": "@cname",
      "units": "福建国科信息科技有限公司",
      "position": "人才运营总监",
      "imgUrl": "@image(80)",
      "brief": "@cparagraph"
    },
  ],
  "pictures|1-4": [
    "https://images.pexels.com/photos/48794/boy-walking-teddy-bear-child-48794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/89095/pexels-photo-89095.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/669319/pexels-photo-669319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/669319/pexels-photo-669319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ]
}

module.exports = [
  {
    url: api.training.getProjectBanner,
    type: 'get',
    response: config => {
      const {count} = config.query
      return {
        code: 20000,
        data: generate('banners', count)
      }
    }
  },
  {
    url: api.training.getCaseProject,
    type: 'get',
    response: config => {
      const {count} = config.query
      return {
        code: 20000,
        data: generate('cases', count)
      }
    }
  },
  {
    url: api.training.getMemberInfo,
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: users
      }
    }
  },
  {
    url: api.training.getProcessProject,
    type: 'get',
    response: config => {
      const {count}=config.query
      return {
        code: 20000,
        data:count ? generate('project',count) : generate('project')
      }
    }
  },
  {
    url: '/tac/jk-project-cases',
    type: 'get',
    response: config => {
      const {count}=config.query
      return {
        code: 20000,
        data: generate('cases', count)
      }
    }
  },
  {
    url: api.training.getCaseProjectDetail, // mock会匹配前置路径，所以目前暂无解决办法，路径不能一样
    type: 'get',
    response: config => {
      const {id} = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: {
              ...article,
              ...detailCase
            }
          }
        }
      }
    }
  },
]

