const Mock = require('mockjs')

const api = {
  echarts:require('@/request/api/echarts.js')
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
    case 'VOTERESUMELIST':
      obj = {}
      return toloop(count, obj)
  }
}

const radars=[
  {
    "text": "一级知识点6",
    "standard": "10",
    "score": 0
  },
  {
    "text": "一级知识点5",
    "standard": "10",
    "score": 0
  },
  {
    "text": "一级测试知识点2",
    "standard": "15",
    "score": 18
  },
  {
    "text": "一级测试知识点1",
    "standard": "10",
    "score": 3
  }
]


module.exports = [
  {
    url: api.echarts.getPortraitRadar(222,111),
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: radars
      }
    }
  },
]

