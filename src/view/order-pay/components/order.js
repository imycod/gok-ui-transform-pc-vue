/*
 * @Author: shiyh shiyh@goktech.cn
 * @Date: 2022-06-15 14:17:20
 * @LastEditors: shiyh shiyh@goktech.cn
 * @LastEditTime: 2022-06-16 01:29:48
 * @FilePath: /college-teaching/src/components/order-pay/order.js
 * @Description: 订单支付的公共方法
 */
import TAC from '_api/TAC.API'
import $one from '@/one-builder'
import $router from '@/router'
import Config from '@/config/index'

class Order {
    static timer = null;
    payChannels = [
        {name: '支付宝', icon: `https://gok-static.goktech.cn/edu/icon/icon-pay-zfb.png`, key: 'ZFB'},
        {name: '微信支付', icon: `https://gok-static.goktech.cn/edu/icon/icon-pay-wechat.png`, key: 'Wechat'}
    ];

    orderInfo = null;
    goodsInfo = null;

    constructor(orderId) {
        this.clearTimer();
        this.orderId = orderId;
    }

    clearTimer() {
        clearInterval(this.timer);
    }

    getOrderDetail() {
        return new Promise((resolve, reject) => {
            $one.uc.http.get(TAC.orderById(this.orderId), {}).then(res => {
                this.orderInfo = res.data;
                this.goodsInfo = this.orderInfo.items;
                resolve(this.orderInfo)
            }).catch(err => {
                reject(err);
            })
        })
    }

    payCountDown(callback) {
        const time = this.orderInfo.payExpireTime * 1000;
        this.clearTimer();
        const getSurplusTime = function () {
            const curTime = (new Date()).getTime(),
                diffTime = parseInt((Number(time) - curTime) / 1000);
            return {
                isContinue: curTime <= Number(time),
                text: curTime <= Number(time) ? `${('0' + parseInt(diffTime / 60)).substr(-2)}:${('0' + diffTime % 60).substr(-2)}` : '00:00'
            };
        }
        const info = getSurplusTime();
        if (info.isContinue) {
            callback(info.text, false);
            this.timer = setInterval(() => {
                const info = getSurplusTime();
                if (info.isContinue) {
                    callback(info.text);
                } else {
                    callback('00:00', true);
                    this.clearTimer();
                }
            }, 1000);
        }
    }

    cancelOrder() {
        return new Promise((resolve, reject) => {
            $one.uc.http.delete(TAC.orderById(this.orderId), {}).then(res => {
                this.toHome();
                resolve(res);
            }).catch(err => {
                this.toHome();
                reject(err);
            })
        })
    }

    toHome() {
        $router.replace({
            path: '/home',
            query: {}
        })
    }
}

export default function (orderId) {
    return new Order(orderId)
}
