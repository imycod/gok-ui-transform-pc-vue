<template>
  <div id="app">
   <demo1></demo1>  
  </div>
</template>

<script>
import demo1 from "./views/demo1.vue"
export default {
  name: 'App',
  components: {
     demo1,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
