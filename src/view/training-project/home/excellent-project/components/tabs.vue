<!-- 
* @Description: tab栏切换
 -->
<template>
  <div class="tabs-container">
    <ul class="tabs-text">
        <li v-for="item in tabLists" :key="item.value" @click="tabHandler(item.value)">
          <span :class="{active: currentTab == item.value}">{{item.name}}</span>
          <span v-if="item.num">{{'('+item.num+')'}}</span>
        </li>
    </ul>
     <Cascader :data="regionData" @on-change="changeCascader" :value="cascaderValue" class="cascader" v-if="isCascader" placeholder="选择其他城市"></Cascader>
  </div>
</template>

<script>
export default {
  props: {  
    tabLists: {
        type: Array
    },
    regionData: {
        type: Array
    },
    isCascader: {
        type: Boolean,
        required: false,
        default: false
    },
    isTab: String, //选中的那个tab
  },
  data () {
    return {
       currentTab: '', // 当前tab选中项
       cascaderValue: [], // 级联选中项
    };
  },
  watch: {
    tabLists: {
      handler(newVal) {
        if (newVal.length) {
          this.currentTab = this.tabLists[0].value;
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    setTabVal(val) {
      let currentData = this.tabLists.filter(item => val.indexOf(item.value) > 0 || val == item.value);
      console.log('currentData=====',currentData);
      if (val == '全国' && !currentData.length) { // 特殊处理  期望城市为全国的情况
        currentData.push({
          name: "全国",
          value: ""
        })
      };
    },
    // 选择热门城市
    tabHandler(v) {
      this.currentTab = v;
      this.cascaderValue = [];
      this.$emit('tabHandle',v);
    },
    // 选择其他城市
    changeCascader(v) {
       this.currentTab = null;
       this.cascaderValue = v;
       this.$emit('tabHandle',this.cascaderValue[1]);
    }
  }
}

</script>
<style lang='stylus' scoped>
    .tabs-container {
         width: 952px;
        display: flex;
        justify-content: flex-start;
        /deep/ .ivu-input{
            border: none;
            box-shadow: none;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            word-break: break-all;
            color: $base;
        }
    }
    .tabs-text {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        li {
            padding: 0 10px;
            font-size: 14px;
            color: #6A7487;
            cursor: pointer;
            margin-bottom: 6px;
        }
        .active {
            color: $base;
        }
    }
    .cascader {
      width: 140px;
      margin-top: -5px;
    }
</style>