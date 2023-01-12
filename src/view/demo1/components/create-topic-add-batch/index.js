import CreateTopicAddBatchComponent from './index.vue'

// 公共数据存放
const questionType = [ //  题目类型button
  {
    value: 'SINGLE',
    name: '单选题'
  },
  {
    value: 'MULTI',
    name: '多选题'
  },
  {
    value: 'TF',
    name: '判断题'
  },
  {
    value: 'FILL',
    name: '填空题'
  },
  {
    value: 'ANSWER',
    name: '简答题'
  }
]
const batchAddType = [ //  批量添加button
  {
    value: 'TABLEADD',
    name: '表格导入'
  },
  {
    value: 'SYSTEMADD',
    name: '从系统中选择'
  },
  {
    value: 'AUTOADD',
    name: '自动组卷'
  }
]

import icon1 from '@/assets/images/create_topic_1.png'
import icon2 from '@/assets/images/create_topic_2.png'
import icon3 from '@/assets/images/create_topic_3.png'
import icon4 from '@/assets/images/create_topic_4.png'
import icon5 from '@/assets/images/create_topic_5.png'
import icon11 from '@/assets/images/add_batch_1.png'
import icon12 from '@/assets/images/add_batch_2.png'
import icon13 from '@/assets/images/add_batch_3.png'

class CreateTopicAddBatch {
  constructor (vm) {
    this.vm = vm;
  }

  init (types = [], topics = [], batchs = []) {
    const arrs1 = topics.length > 0 ? topics : questionType
    const arrs2 = batchs.length > 0 ? batchs : batchAddType
    this.questionType = arrs1.filter((item, index) => {
      if (types.includes(item.value)) {
        return item.icon = [icon1, icon2, icon3, icon4, icon5][index];
      }
    });
    this.batchAddType = arrs2.map((item, index) => {
      return {
        ...item,
        icon: [icon11, icon12, icon13][index]
      };
    });
  }
}

import { handleDrawer,useDrawer } from '@/view/demo1/components/drawer/index.js';

function useCreateTopicAddBatch () {
  function importTopic (val) {

  }

  function createTopic (val) {
    const { openDrawer } = handleDrawer()
    openDrawer()
  }

  return {
    importTopic,
    createTopic,
  }
}

export {
  useCreateTopicAddBatch,
  CreateTopicAddBatch,
  CreateTopicAddBatchComponent,
}

