const api = {
  infomation:require('@/request/api/information.js')
}

const edus=[
  {
    "id": 0,
    "name": "学历不限",
    "remark": "",
    "value": "0",
    "fkCategoryId": 0,
    "status": 1,
    "orders": 0
  },
  {
    "id": 0,
    "name": "初中及以下",
    "remark": "",
    "value": "1",
    "fkCategoryId": 0,
    "status": 1,
    "orders": 0
  },
  {
    "id": 0,
    "name": "中专/中技",
    "remark": "",
    "value": "2",
    "fkCategoryId": 0,
    "status": 1,
    "orders": 0
  },
  {
    "id": 0,
    "name": "高中",
    "remark": "",
    "value": "3",
    "fkCategoryId": 0,
    "status": 1,
    "orders": 0
  },
  {
    "id": 0,
    "name": "大专",
    "remark": "",
    "value": "4",
    "fkCategoryId": 0,
    "status": 1,
    "orders": 0
  },
  {
    "id": 0,
    "name": "本科",
    "remark": "",
    "value": "5",
    "fkCategoryId": 0,
    "status": 1,
    "orders": 0
  },
  {
    "id": 0,
    "name": "硕士",
    "remark": "",
    "value": "6",
    "fkCategoryId": 0,
    "status": 1,
    "orders": 0
  },
  {
    "id": 0,
    "name": "博士",
    "remark": "",
    "value": "7",
    "fkCategoryId": 0,
    "status": 1,
    "orders": 0
  }
]

module.exports = [
  {
    url: api.infomation.getEdu,
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: edus
      }
    }
  },
]
