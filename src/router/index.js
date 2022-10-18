import Router from 'vue-router'
import Vue from 'vue'

import TrainingProjectRoute from './module/training-project.js'
import home from "@/router/module/home.js"
import contact from "@/router/module/contact.js"
import dashboard from '@/router/module/dashboard.js';
import notLogin from "@/router/loader/not-login.js"

const routes = [
  ...dashboard,
  ...TrainingProjectRoute,
  ...home,
  ...contact,
  // notLogin,
]
const routerPush = Router.prototype.push;
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error);
};

Vue.use(Router);

const router = new Router({
  mode: 'history',
  // base: '/edu/',
  routes
});

router.beforeEach((to, from, next) => {
  next()
})
// 进入路由后
router.afterEach(route => {

})

export default router
