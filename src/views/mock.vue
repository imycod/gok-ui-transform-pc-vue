<template>
  <div class="mock">
    <mock-data></mock-data>
  </div>
</template>

<script>
import MockData from '@/components/mock/mock-data';

export default {
  name: 'mock',
  components: {
    MockData,
  },
}
</script>

<style lang="stylus" scoped>
.mock {
}
</style>
