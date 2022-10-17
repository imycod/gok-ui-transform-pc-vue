<template>
  <div class="service-case-detail m-t-18">
    <header-card v-if="header" :item="header"></header-card>
    <carousel-cases v-if="info.pictures" :list="info.pictures" @carouselHandle="carouselHandle"></carousel-cases>
    <desc-bg class="m-t-20" :type="1" title="项目背景" subTitle="Background of the project" :content="info.background"></desc-bg>
    <project-teams-intro v-if="info.teams.length" :list="info.teams"></project-teams-intro>
    <desc-bg class="m-t-20" :type="2" title="项目概况" subTitle="Project Overview" :content="info.overview"></desc-bg>
    <carousel-cases-preview v-if="preview.isShow" :images="info.pictures" @closeHandle="closeHandle":imageIndex="preview.imageIndex"></carousel-cases-preview>
  </div>
</template>
<script>
import HeaderCard from './components/detail-header-card.vue';
import CarouselCases from './components/detail-cases-carousel.vue'
import CarouselCasesPreview from './components/carousel-preview.vue'
import DescBg from './components/projects-desc-bg.vue'
import ProjectTeamsIntro from './components/project-teams-intro.vue'

import cloneDeep from 'lodash/cloneDeep'
import request, { TARINING_API } from '@/utils/request.js';

export default {
  data () {
    return {
      id: '', // route project id
      info: { // backend data
        pictures: null,
      },
      preview: {
        isShow: false,
        imageIndex: -1,
      }
    }
  },
  computed: {
    header () {
      const info = cloneDeep(this.info)
      delete info.pictures
      delete info.teams
      return {
        ...info
      }
    },
  },
  created () {
    this.id = this.$route.params.id
    this.init()
  },
  methods: {
    async init () {
      const id = this.id

      const { data } = await request('/tac/project/detail', { params: { id: id } })
      this.info = data.data

      // preview data structure
      this.info.pictures = [
        {
          bannerUrl: 'https://images.pexels.com/photos/48794/boy-walking-teddy-bear-child-48794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          bannerUrl: 'https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          bannerUrl: 'https://images.pexels.com/photos/89095/pexels-photo-89095.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          bannerUrl: 'https://images.pexels.com/photos/669319/pexels-photo-669319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          bannerUrl: 'https://images.pexels.com/photos/669319/pexels-photo-669319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }
      ]
    },
    // preview
    carouselHandle (item, index) {
      this.preview.isShow = true
      this.preview.imageIndex = index
      console.log(item)
    },
    closeHandle () {
      this.preview.isShow = false
    }
  },
  components: {
    HeaderCard,
    CarouselCases,
    CarouselCasesPreview,
    DescBg,
    ProjectTeamsIntro,
  }
}
</script>
<style lang='stylus' scoped>
.service-case-detail {

}
</style>
