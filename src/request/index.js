import axios from 'axios'

const TARINING_API = require('./api/training-project.js')
const POSITIONMANAGEMENT_API = require('./api/position-management.js')
const INFOMATION_API = require('./api/information.js')
const ECHARTS_API = require('./api/echarts.js')

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== 20000) {

      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {

      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)

    return Promise.reject(error)
  }
)

export { TARINING_API,POSITIONMANAGEMENT_API,INFOMATION_API,ECHARTS_API }

export default service


