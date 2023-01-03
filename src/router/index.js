import { LoadingBar, Message, Spin } from 'view-design';

import Router from 'vue-router'
import Vue from 'vue'

import training from './base/training';
import home from './base/home';
import h5 from './base/h5';
import contact from './base/contact';
import dashboard from '@/router/base/dashboard.js';

import notLogin from "@/router/not-login.js"

import logout from "@/utils/auth/logout.js"
import Storage from '@/utils/storage';

const curHostname = location.hostname;
const routes = [
  {
    path: '/',
    // name: 'root',
    meta: {
      ignoreCheck: ['token']
    },
    beforeEnter: (to, from, next) => {
      // 进来首页前需要做的操作
      // if (curHostname === 'edu.gxj.xm.gov.cn') {
      //   const curToken = $one.uc.token.getToken();
      //   if (curToken) {
      //     next();
      //   } else {
      //     window.location.href = 'https://uc.gxj.xm.gov.cn'
      //   }
      // } else {
      next()
      // }
    },
    component: resolve => require(['@/components/layout/not-login.vue'], resolve),
    children: [
      ...dashboard,
      ...home,
      ...training,
      ...contact,
      ...h5,
    ]
  },
  notLogin,
]
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  // base: '/edu/',
  routes
});


/**
 * 不需要验证综合状态的路由白名单
 */
const multipleWhite = [
  // 'root',
  "home",
  // "training",
  "contact",
  "h5",
  'not-login',
  'login',
  'tracking',
  'demo',
];

const Permisstion = {
  useIgnoreCheckToken(to, next) {
    const ignoreCheck = to.meta.ignoreCheck;
    if (ignoreCheck && ignoreCheck.includes('token')) {
      next();
      return;
    } 
    // else {
    //   window.location.replace('/home');
    // }
  },
  useCheckToken(to, next) {
    console.log(2);
    // if (!true) {
    //   Message.warning('请登录账号~');
    //   logout();
    //   LoadingBar.finish();
    //   return;
    // }

    // 参考:https://blog.csdn.net/qq_35593448/article/details/127642843
    // 这里token我先用登录存到lostorage做演示
    // 有cookie或者token情况下
    if (Storage.get('isLogin')) {
      // 这里适用于登录和注册是一个页面时,当项目内多个登录入口比如弹窗就不适用了,还有要在对应路由对象name填入['login','register']适当名字
      ["login", "register"].includes(to.name) ? next({ path: "/" }) : next();
    } else {
      // 如果没有cookie或者token
      if (multipleWhite.includes(to.name)) {
        // 在免登录白名单，直接进入 - 其实这一步被我们在 路由对象meta ignoreCheck设定好了
        next();
      } else {
        if (Storage.get('isLogin')) {
          if (to.name === "login") {
            next({ path: "/home" });
          } else {
            next();
          }
        } else {
          if (to.name === "login") {
            next(); // 否则全部重定向到登录页
          } else {
            // 没有登录，这里跳到登录页面
            next(`/login?redirect=${to.fullPath}`); // 否则全部重定向到登录页
          }
        }

      }
    }

  },
  async useCheckTokenExp(next) {
    console.log(3);
    if (!false) {
      try {
        const res = await refreshToken()
        if (res) {
          next()
        }
      } catch (error) {
        logout();
      }
    }
  },
  useIgnoreCheckTenant(to, next) {
    console.log(4);
    const ignoreCheck = to.meta.ignoreCheck;
    if (ignoreCheck && ignoreCheck.includes('tenant')) {
      next();
      return;
    }
  },
  useCheckTenant(next) {
    console.log(5);
    if (!false) {
      next()
      return
    } else {

    }
  },
}
function refreshToken() {
  // 请求刷新token以验证token是否过期
  const handler = (resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 3000)
  }
  return new Promise(handler)
}

router.beforeEach((to, from, next) => {
  LoadingBar.start();
  // 不需要验证token的直接放行
  Permisstion.useIgnoreCheckToken(to, next)
  // 需要验证token但是没有token的
  Permisstion.useCheckToken(to, next)
  // 需要验证token且有token，但是token过期的
  Permisstion.useCheckTokenExp(next)
  // // 不需要验证租户的
  // Permisstion.useIgnoreCheckTenant(to, next)
  // // 需要验证租户的
  // Permisstion.useCheckTenant(next)
  next()
})
// 进入路由后
router.afterEach(route => {
  LoadingBar.finish();
  // 进到路由后可以做一些事情
  /**
   * 1. 清除日志
   * 2. 移除dom 找到多余的蒙层remove
   * 3. 隐藏一些信息
   * 4. 设置document title
   * 5. 让一些页面scrollTo顶部
   */
})

export default router
