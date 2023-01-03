import Token from '@/utils/token/index.js'
import axios from 'axios'

const TARINING_API = require('./api/training-project.js')
const POSITIONMANAGEMENT_API = require('./api/position-management.js')
const INFOMATION_API = require('./api/information.js')
const ECHARTS_API = require('./api/echarts.js')

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

const token = new Token()

function getNonce(len = 32) {
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678', // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
    maxPos = $chars.length;
  let str = '';
  for (var i = 0; i < len; i++) str += $chars.charAt(Math.floor(Math.random() * maxPos));
  return str;
}

function auth() {
  let auth = '', token = '', nonce = '', timestamp = '';
  let xtoken = token.getToken();
  nonce = getNonce();
  timestamp = (new Date).getTime() + this.local.getDiffTime() + '';
  token = xtoken || '';
  auth = `MAC token="${token}",nonce="${nonce}",timestamp="${timestamp}"`;
  return auth;
}

service.interceptors.request.use(
  config => {
    if (token.getToken()) {
      config.headers['X-Authorization'] = auth();
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

const AUTO_REFRESH_TIME = 1 * 1000 * 60 * 5; // 5分钟

service.interceptors.response.use(
  response => {
    const res = response.data
    token.storeToken(res);
    const expTime = token.getExp();
    if (expTime && ((expTime - (new Date).getTime()) <= AUTO_REFRESH_TIME)) token.refreshToken();
    return Promise.resolve(res);
  },
  error => {
    console.log('err' + error)
    const errData = error.response;

    return Promise.reject(error)
  }
)

export { TARINING_API, POSITIONMANAGEMENT_API, INFOMATION_API, ECHARTS_API }

export default service


