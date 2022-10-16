<template>
  <div class="mock-data">
    {{mockList}}
  </div>
</template>

<script>
import request from "@/utils/request.js";

export default {
  name: "mock-data",
  components: {},
  data () {
    return {
      mockList: []
    }
  },
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    async init() {
      const { data } = await request("/vue-element-admin/article/list");
      this.mockList=data
    },
  },
};
</script>

<style lang="stylus" scoped></style>
