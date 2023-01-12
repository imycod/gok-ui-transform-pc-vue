<template>
  <div class="create-topic-add-batch">
    <Tabs value="name1">
      <TabPane label="创建试题" name="name1">
        <div class="create-topic">
          <div
            class="item hover-boder-bold cp"
            v-for="(item, index) in questionType"
            :key="index"
            @click="createTopics(item)"
          >
            <img :src="item.icon" alt=""/>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </TabPane>
      <TabPane label="批量添加" name="name2">
        <div class="add-batch">
          <div
            class="item hover-boder-bold cp"
            v-for="(item, index) in batchAddType"
            :key="index"
            @click="importTopics(item)"
          >
            <img :src="item.icon" alt=""/>
            <span>{{ item.name }}</span>
          </div>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import { CreateTopicAddBatch } from './index.js';

export default {
  props: {
    types: {
      type: Array,
      required: false,
      default: () => ['SINGLE', 'MULTI', 'TF', 'FILL', 'ANSWER']
    },
    questionType:{
      type:Array,
      required:false,
      default:[]
    },
    addType:{
      type:Array,
      required:false,
      default:[]
    }
  },
  data () {
    return {
      questionType: [], // 题型
      batchAddType: [], // 批量添加
    };
  },
  mounted () {
    const create = new CreateTopicAddBatch(this)
    create.init(this.types,this.questionType,this.addType)
    this.questionType = create.questionType
    this.batchAddType = create.batchAddType
  },
  methods: {
    // 创建题目
    createTopics (val) {
      this.$emit('create', val);
    },
    // 批量添加题目
    importTopics (val) {
      this.$emit('import', val);
    }
  }
};
</script>

<style lang="stylus" scoped>
.create-topic-add-batch {
  width: 328px;
  height: 256px;
  background: #FFFFFF;
  border-radius: 8px 8px 8px 8px;
  opacity: 1;
  border: 1px solid #F0F2F7;

  .create-topic, .add-batch {
    padding-left: 31px;
    padding-right: 33px;
    display: flex;
    flex-wrap: wrap;

    .item {
      margin-top: 16px;
      padding: 10px 27px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 120px;
      height: 40px;
      background: #FFFFFF;
      box-sizing: border-box;
      border: 1px solid #DDDEE0;
      border-radius: 8px 8px 8px 8px;
      transition: 0.3s ease-out;

      img {
        width: 20px;
        height: 20px;
        margin-top: 2px;
      }

      &:nth-child(2n+1) {
        margin-right: 20px;
      }
    }

    .hover-boder-bold:hover {
      border: 1px solid $base;
    }
  }

  .add-batch {
    .item {
      width: 120px;
      height: 40px;
      background: #FFFFFF;
      opacity: 1;
      border: 1px solid #DDDEE0;
      padding-left: 0px;
      padding-right: 0px;
      display: flex;
      align-content: center;
      justify-content: center;

      img {
        margin-top: 2px;
      }
    }
  }

  /deep/ .ivu-tabs-bar {
    margin-bottom: 8px;
    border-bottom 1px solid #F0F2F7;
  }

  /deep/ .ivu-tabs-tab {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: calc(52px - 16px);
    padding-left: 0px;
    margin-right: 16px;
    font-size: 16px;
    font-weight: 500;
  }

  /deep/ .ivu-tabs-tab-active {
    font-size: 16px;
    font-weight: 500;
    color: #FE8836;
  }

  /deep/ .ivu-tabs-tab:hover {
    color: #FE8836;
  }

  /deep/ .ivu-tabs-nav {
    padding-left: 42px;
  }

  /deep/ .ivu-tabs-ink-bar {
    left: 42px;
    width: 30px !important;
    height: 3px;
    background: #FE8836;
    border-radius: 10px 10px 10px 10px;
  }
}
</style>
