<template>
  <div class="step-container">
     <component :is="item.componentName" v-for="(item, index) in stepsArr" :key="index" :info="item" :active="current === index" :complete="index < current" :className="className(index)"></component>
  </div>
</template>

<script>
import FirstStep from './first.vue'
import ProcessStep from './process.vue'
import LastStep from './last.vue'
export default {
  components: { FirstStep, ProcessStep, LastStep },
  props: {
    current: {
      type: Number,
      required: true
    },
    steps: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      stepsArr: []
    }
  },
  computed: {
    className () {
      return (index) => {
        if (this.current === index) return 'active-item';
        if (this.current > index) return 'complete-item';
        return '';
      }
    }
  },
  mounted() {
    for (let i = 0; i < this.steps.length; i++) {
      const temp = this.steps[i];
      temp.componentName = 'ProcessStep';
      if (!i) temp.componentName = 'FirstStep';
      if (i === this.steps.length - 1) temp.componentName = 'LastStep';
      this.stepsArr.push(temp);
    }
  },
  methods: {
    next () {},
    last () {},
    first () {},
    complete () {}
  }
}
</script>
<style lang="stylus" scoped>
.step-container{
  display: flex;
}
</style>
