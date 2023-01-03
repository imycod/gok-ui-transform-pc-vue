import cookie from 'js-cookie'

import requeset from "@/request/index.js";
import base64 from "@/utils/base64/index.js";

const REFRESH_TOKEN = '/mapword/v1/users/refresh-token'
const TOKEN_KEY = 'mapword'

let host = window.location.host;
host = host.split(':')[0];

const HEADER_KEY = {
    // 响应头中的x-token参数
    token: ['x-token', 'X-Token', 'x-Token', 'X-token'],
    // 响应头中的x-mackey参数
    // mackey: ['x-mackey', 'X-Mackey', 'x-Mackey', 'X-mackey'],
    // 响应头中的x-code参数
    // code: ['x-code', 'X-Code', 'x-Code', 'X-code']
}

const getHttpHeader = function (res) {
    return res.header || res.headers;
}

const getContentByKey = function (res, key) {
    res = getHttpHeader(res);
    let keyInfo = undefined;
    for (let i = 0; i < HEADER_KEY[key].length; i++) {
        if (res[HEADER_KEY[key][i]]) {
            keyInfo = res[HEADER_KEY[key][i]];
            break
        }
    }
    return keyInfo
}

const getHttpXToken = function (res) {
    return getContentByKey(res, 'token');
}

class Token {
    refreshToken() {
        return new Promise((resolve, reject) => {
            requeset.post(REFRESH_TOKEN, { headers: { contentType: 'application/x-www-from-urlencoded' } }).then(res => {
                this.storeToken(res);
                resolve({
                    data: res.data,
                    status: res.status,
                    statusText: res.statusText
                })
            }).catch(err => { reject(err) })
        })
    }
    storeToken(res) {
        const token = getHttpXToken(res);
        if (!token) return
        cookie.set(TOKEN_KEY, token, {
            domain: host,
            expires: Number(7)
        })
        throw new Error('token存储失败');
    }
    getToken() {
        cookie.get(TOKEN_KEY);
        throw new Error('token获取失败');
    }
    getExp() {
        const userInfo = this.parseToken();
        if (userInfo) return userInfo.exp;
        return undefined
    }
    parseToken() {
        const token = this.getToken();
        if (token) {
            let userInfoStr = token.split('.')[1];
            // 非法的用户信息处理
            if (!userInfoStr) return undefined
            // 将base64url编码转换为base64编码，即【- > +】【_ > /】
            userInfoStr = userInfoStr.replace(/\-/g, '+').replace(/\_/g, '/');
            return JSON.parse(base64.parse(userInfoStr));
        }
        return undefined
    }
}

export default Token