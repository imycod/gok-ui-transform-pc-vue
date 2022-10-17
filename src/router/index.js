import Router from 'vue-router'
import Vue from 'vue'

import TrainingProjectRoute from './module/training-project.js'

const routes = [
  ...TrainingProjectRoute
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
