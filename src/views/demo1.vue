<template>
  <div class="demo1">demo1</div>
</template>

<script>
import request from "@/utils/request.js";

export default {
  name: "demo1",
  components: {},
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    async init() {
      const res = await request("/vue-element-admin/article/list");
      console.log(res);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
