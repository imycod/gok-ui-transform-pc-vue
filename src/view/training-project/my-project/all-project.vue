<template>
  <div class="about relative">
    <div class="badge absolute t-0 l-0">
      <img class="w-full h-full" src="~@/assets/images/bt.png" alt="">
    </div>
    <div class="info">
      <div class="title">
        <span class="to">{{ item.name }}</span>
      </div>
      <div class="project flex between">
        <div class="project_item">
          <img src="~@/assets/images/clock.png" alt="" class="icon" />
          <span>{{ item.beginTime | dateFormat }} ~ {{ item.endTime | dateFormat }}</span>
        </div>

        <div
          class="status status_success"
         :style="btnStatusStyle(item)"
        >
          <img src="~@/assets/images/play.png" alt="" class="icon mr2" />
          {{ getStatus(item).statusText }}
        </div>
      </div>
      <div class="labels">
        <span class="label type">{{item.labels[0]}}</span>
        <span class="label m-l-8 address">{{item.labels[1]}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {TraningMixins} from '@/view/training-project/index.js';

export default {
  mixins:[TraningMixins],
  props:{
    item:{
      type:Object,
      default:null,
      required:true,
    },
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  components: {

  }
}
</script>
<style lang='stylus' scoped>
.about {
  position: relative;
  width: 100%;
  height: 100%;
  background: #FCFDFE;
  opacity: 1;
  border: 1px solid #F0F2F7;
  padding-bottom: 18px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.1);
  .badge{
    width: 48px;
    height: 48px;
  }
  .info {
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
    font-weight: 500;
    color: #6A7487;
    line-height: 22px;

    .title {
      display: flex;
      align-items: center;

      span {
        max-width: 800px;
        font-size: 20px;
        font-weight: 500;
        color: #383838;
        line-height: 24px;
      }

    }

    .labels {
      display: flex;
      margin-top: 14px;
      height: 22px;
    }

    .project {
      display: flex;
      margin-top: 14px;

      .project_item {
        display: flex;
        align-items: center;
      }

      .status {
        display: flex;
        align-items: center;
        margin-left: 8px;
        padding: 6px 13px;
        // height: 24px;
        background: #EFEEEE;
        border-radius: 4px 4px 4px 4px;
        opacity: 1;
        font-size: 14px;
        font-weight: 500;
        color: #6A7487;
        line-height: 15px;
      }

      .status_success {
        padding: 3px 6px;
        //background: #39AFFD;
        //color: #FFFFFF;
      }
    }

    .labels{
      .label{
        padding:1px 8px;
        height: 24px;
        box-sizing:border-box;
      }
      .type{
        background:#DDDFFD;
        font-size: 14px;
        font-weight: 500;
        color: #5B65F4;
      }
      .address{
        background:#FFF5ED;
        font-size: 14px;
        font-weight: 500;
        color: #FE9E5B;
      }
    }

  }

}

.icon {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}
</style>
