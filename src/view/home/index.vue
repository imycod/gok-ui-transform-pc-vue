<template>
  <div class="home">
    <growth-path :info="info[0]" :index="1"></growth-path>
    <div class="mt-3">
      <position-detail></position-detail>
    </div>
  </div>
</template>

<script>
import GrowthPath from '@/view/home/components/growth-path.vue'
import PositionDetail from '@/view/home/components/position-detail/index.vue';

export default {
  name: 'index',
  data () {
    return {
      info: [
        {
          'growthId': '296711616773357568',
          'growthPathName': '927yp特成长',
          'specialId': '296711427547398144',
          'abilityGrade': 1,
          'firstKnowledgeScoreResList': [
            {
              'knowledgeId': '296711077285265408',
              'knowledgeName': '9272',
              'calculateScore': 0,
              'levelScore': 100,
              'masterLevel': '菜鸟',
              'qualified': '0',
              'showFlag': true
            },
            {
              'knowledgeId': '296711204330733568',
              'knowledgeName': '9273',
              'calculateScore': 0,
              'levelScore': 100,
              'masterLevel': '菜鸟',
              'qualified': '0',
              'showFlag': true
            },
            {
              'knowledgeId': '296710891037196288',
              'knowledgeName': '9271',
              'calculateScore': 15,
              'levelScore': 100,
              'masterLevel': '菜鸟',
              'qualified': '0',
              'showFlag': true
            }
          ],
          'totalCalculateScore': 15,
          'totalAbility': 300
        }
      ],
    }
  },
  components: {
    GrowthPath,
    PositionDetail,
  },
}
</script>

<style lang="stylus" scoped>
.home {

}
</style>
