<!--
 * @Author: sikonggpw 1327325804@qq.com
 * @Date: 2022-08-14 22:06:30
 * @LastEditors: sikonggpw 1327325804@qq.com
 * @LastEditTime: 2022-08-18 11:59:31
 * @FilePath: \cmb_operations_management\src\view\students-report\components\total-browse\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div v-if="info.firstKnowledgeScoreResList.length" class="growth-path">
    <div class="growth-t">
      <span class="title">{{info.growthPathName}}</span>
      <div class="type">
        <div class="type-flex">
          <div class="type-job"></div>
          <p>岗位要求</p>
        </div>
        <div class="type-flex">
          <div class="type-stu"></div>
          <p>学生</p>
        </div>
      </div>
    </div>
    <!-- 图表 -->
    <div class="chart-table">
      <chart-table :index="index" :info="info"></chart-table>
    </div>


    <!-- 信息 -->
    <div class="growth-info">
      <div class="growth-flex">
        <p>LV {{ info.abilityGrade }}</p>
        <p>能力等级</p>
      </div>
      <div class="line"></div>
      <div class="growth-flex">
        <p>{{ info.totalCalculateScore }}/<span class="totalAbility">{{ info.totalAbility }}分</span></p>
        <p>成长值</p>
      </div>
    </div>
  </div>
</template>

<script>
import ChartTable from "@/components/charts/chart-table.vue"

export default {
  components: { ChartTable },

  props: {
    index: {
      type: Number,
      default: 0,
    },

    info: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.growth-path {
  width: 365px;
  margin: 36px 20px 0 0;

  &:nth-child(3n) {
    margin-right: 0;
  }

  .growth-t {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .title {
      font-size: 16px;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #363738;
    }

    .type {
      .type-flex {
        display: flex;
        align-items: center;

        &:last-child {
          margin-top: 8px;
        }

        p {
          font-size: 12px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 500;
          color: #666666;
        }
      }

      .type-job,
      .type-stu {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 4px;
      }

      .type-job {
        background: #2D8CF0;
      }

      .type-stu {
        background: #FF7D33;
      }
    }
  }


  .growth-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 283px;
    height: 65px;
    background: #EAF3FD;
    border-radius: 10px 10px 10px 10px;
    padding: 10px 36px;
    margin: 0 auto;

    P {
      &:first-child {
        font-size: 18px;
        font-family: DIN-Bold, DIN;
        font-weight: bold;
        color: #333333;
      }

      &:last-child {
        font-size: 14px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #6A7487;
      }
    }

    .line {
      width: 1px;
      height: 33px;
      background: #D4D6DD;
    }

    .growth-flex {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .totalAbility {
        font-size: 12px;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #6A7487;
      }
    }
  }
}
</style>
