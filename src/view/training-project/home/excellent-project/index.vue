<!--
 * @Author: yangling
 * @FilePath: \college-teaching\src\view\project-trainning\home\excellent-project\index.vue
 * @Description: 优选项目列表
-->
<template>
  <div class="excellent-container">
    <ExcellentSearch></ExcellentSearch>
    <div class="tabs-excellent-container">
      <div class="project-place">
        <div class="title">项目地区：</div>
        <Tabs :tabLists="placeList" :isCascader="true" :regionData="regionData"
        @tabHandle="getPlace" :isTab="'place'"></Tabs>
      </div>
      <div class="project-type">
        <div class="title">项目类型：</div>
        <Tabs :tabLists="typeList" @tabHandle="getType"></Tabs>
      </div>
    </div>
    <LoaderWrapper class="loader-wrapper" ref="loaderWrapper" :callBack="callBack" @total="getTotal" :params.sync="params" :dataList.sync="dataList">
      <div class="excellent-content">
        <div class="card-box" v-for="item in dataList" :key="item.id">
          <Card :dataItem="item"></Card>
        </div>
        <div class="card-box">
          <Card></Card>
        </div>
        <div class="empty-cont" v-if="total === '0'">
          <empty-record :text="'空空如也~'"></empty-record>
        </div>
      </div>
    </LoaderWrapper>
  </div>
</template>
<script>
import ExcellentSearch from './components/excellent-search.vue';
import Tabs from './components/tabs.vue';
import Card from "@v/project-trainning/components/opt-card.vue"
import LoaderWrapper from '@v/student-job/components/loader-wrapper.vue'; // 加载更多
import EmptyRecord from '@/components/empty-record'; // 空数据组件
import request, { TARINING_API } from '@/request/index.js';
export default {
  components: {
    ExcellentSearch,
    Tabs,
    Card,
    LoaderWrapper,
    EmptyRecord
  },
  data () {
    return {
      placeList: [
        {
            name: '全国',
            value: ''
        }
      ],
      typeList: [
        {
            name: '不限',
            value: ''
        }
      ],
      // 搜索函数
      callBack: () => {},
      dataList: [],
      params: {
        city: '',
        name: '',
        pageNo: 0,
        pageSize: 20,
        type: ''
      },
      total: 0,
    };
  },
  computed:{
    regionData() {
        return this.$store.getters['dataDictionary/regionLists'];
    }
  },
 async created(){
    await this.getHotRegion();
    await this.getProvinceCity({country: false});
    this.getProjectList();

  },
  methods: {
    ...mapActions('dataDictionary',['getProvinceCity']),
     // 热门城市
    async getHotRegion() {
         const { data } = await request(this.$API.TAC.hotCity,{});
         data.forEach((ele, index) => {
            this.placeList.push({
                name: ele,
                value: ele
            });
         });
    },
    getPlace() {

    },
    getType(){

    },
    getTotal(total) {
        this.total = total;
    },
    // 获取项目列表
    async getProjectList() {
        this.callBack = async (params) => {
            const {data} = await one.uc.http.post(TACAPI.getJkProjects, { data: params });
            return data
        }
    },
  },

};
</script>
<style lang="stylus" scoped>
.excellent-container {
  width: 1064px;
  margin-left: 20px;
  margin-top: 72px;
  .tabs-excellent-container {
    height: 93px;
    padding: 20px;
    margin-top: 20px;
    background: #fff;
    .project-place, .project-type {
      display: flex;
      justify-content: flex-start;
      .title {
        color: #8590A6;
      }
    }
    .project-type {
      margin-top: 10px;
    }
  }
  .excellent-content {
    width: 1064px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .card-box {
      width: 520px;
      margin-bottom: 25px;
    }
  }
  .empty-cont {
    width: 100%;
    min-height: 200px;
    margin-top: 160px;
  }
}
</style>
