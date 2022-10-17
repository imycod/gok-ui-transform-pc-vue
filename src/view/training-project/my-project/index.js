// 视图逻辑和业务逻辑抽离实验
import { PROJECT_MANAGE } from '@/view/training-project/index.js';

// 设置红点
function setCountNum (tabModule, dotState) {
  const {
    applyCntListFlag,
    processCntListFlag,
    projectCntListFlag
  } = dotState
  switch (tabModule) {
    case PROJECT_MANAGE.PROJECT_TAB[0].currentTab:
      return applyCntListFlag ? null : 0;
    case PROJECT_MANAGE.PROJECT_TAB[1].currentTab:
      return processCntListFlag ? null : 0;
    case PROJECT_MANAGE.PROJECT_TAB[2].currentTab:
      return projectCntListFlag ? null : 0;
    default:
      return 0;
  }
}

export {
  setCountNum,
}

