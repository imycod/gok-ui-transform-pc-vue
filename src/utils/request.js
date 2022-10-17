import axios from 'axios'

import TARINING_API from './api/training-project.js';

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

export { TARINING_API }

export default service


