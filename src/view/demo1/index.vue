<template>
  <div class="demo-container">
    demo-container
    <CreateTopicAddBatchComponent class="m-b-20" @create="createTopic" @import="importTopic"></CreateTopicAddBatchComponent>
    <Drawer></Drawer>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useTitle } from '@vueuse/core'
import { useCreateTopicAddBatch,CreateTopicAddBatchComponent } from './components/create-topic-add-batch/index'
import {Drawer} from "./components/drawer/index.js"
import router from '@/router';
import store from '@/store'

function setMetaTitle () {
  const title = useTitle()
  const currentRoute = router.currentRoute
  title.value = currentRoute.meta.title
}

export default defineComponent({
  name: 'index',
  components: {
    CreateTopicAddBatchComponent,
    Drawer,
  },
  setup () {
    setMetaTitle()
    const {
      createTopic,
      importTopic
    } = useCreateTopicAddBatch()
    return {
      createTopic,
      importTopic,
    }
  }
})
</script>

<style lang="stylus" scoped>

</style>
