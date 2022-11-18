const api = {
  positionManagement:require('@/request/api/position-management.js')
}

const voteResumeList={
  "more": false,
  "total": "2",
  "list": [
    {
      "deliverId": "314767494269239296",
      "uid": "XsiXTjVU2pE8shYxGzHEE",
      "name": "ERROR--",
      "sex": "male",
      "resumeId": "272399477418098688",
      "companyId": "25335679768657920",
      "companyName": "国网0002",
      "positionId": "314701462422814720",
      "positionName": "测试新增职位",
      "degree": "5",
      "grade": "2003",
      "onlineFlag": 1,
      "startWorkTime": "1659283200000",
      "deliverTime": "1668579218627",
      "insertUserName": "1231wer",
      "insertUserUid": "BqNU1NCYR3yh4ipoPbqdbg",
      "hireStatus": 5,
      "deliverChannel": "",
      "isOwn": 0,
      "skillScore": 7,
      "matchPercent": 10,
      "postScore": 5
    },
    {
      "deliverId": "314702249542680576",
      "uid": "9iggCEzvQ3Svhfx7KCafyJ",
      "name": "林良炟",
      "sex": "",
      "resumeId": "314702229330329600",
      "companyId": "25335679768657920",
      "companyName": "国网0002",
      "positionId": "314701462422814720",
      "positionName": "测试新增职位",
      "degree": "",
      "grade": "2022",
      "onlineFlag": 0,
      "startWorkTime": 0,
      "deliverTime": "1668563663127",
      "insertUserName": "1231wer",
      "insertUserUid": "BqNU1NCYR3yh4ipoPbqdbg",
      "hireStatus": 5,
      "deliverChannel": "",
      "isOwn": 0,
      "skillScore": 7,
      "matchPercent": 11,
      "postScore": 6
    }
  ]
}

module.exports = [
  {
    url: api.positionManagement.getVoteResumeList,
    type: 'get',
    response: config => {
      const {count,positionId} = config.query
      return {
        code: 20000,
        data: voteResumeList
      }
    }
  },
]
