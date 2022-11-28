<template>
  <div class="home">
    <growth-path :info="info[0]" :index="1"></growth-path>
    <div class="mt-3">
      <position-detail></position-detail>
    </div>
    <Button type="primary" @click="open">open drawer</Button>
    <DrawerContainer :limits="['TF911']">
      <div>
        <Button type="primary" @click="$router.go(-1)">关闭</Button>
        <div class="">
          <Button type="primary" @click="endecry(0)">加密</Button>
          <Button type="primary" @click="endecry(1)">解密</Button>
          <div>
            <span>{{ endecryObj.str1 }}</span>
          </div>
        </div>
      </div>
    </DrawerContainer>
  </div>
</template>

<script>
import GrowthPath from '@/view/home/components/growth-path.vue'
import PositionDetail from '@/view/home/components/position-detail/index.vue';
import DrawerContainer from '@/components/drawer/drawer-container.vue'
import MASK_MAP from '@/utils/map/mask-map.js'
import { base64Stringify, base64Parse } from '@/view/home/base64';

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
      endecryObj: {
        str: 'DRAWER_USER_CENTER',
        str1: 'D_U_C',
        obj: {
          name: 'wxs',
          id: '1354',
        }
      }
    }
  },
  methods: {
    endecry (type) {
      switch (type) {
        case 0:
          this.endecryObj.str1 = base64Stringify(this.endecryObj.str1)
          break
        case 1:
          this.endecryObj.str1 = base64Parse(this.endecryObj.str1)
          break
      }
    },
    open () {
      const route = this.$route;
      this.$router.push({
        path: route.path,
        query: Object.assign({ ...route.query }, { mask_path: MASK_MAP.getKey('DRAWER_EXAM_TEST_ADD') })
      })
    }
  },
  components: {
    GrowthPath,
    PositionDetail,
    DrawerContainer,
  },
}
</script>

<style lang="stylus" scoped>
.home {

}
</style>
