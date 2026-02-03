<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

let num = 0;
const unusedVar = "This variable is not used";
console.log(undeclaredVar); // undeclaredVar 未声明
</script>

<template>
  <div>
    <!-- element plus组件 -->
    <el-button type="primary">测试element plus</el-button>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
    </a>
  </div>
  <HelloWorld msg="Vite + Vue"/>
  <el-button type="primary">测试element plus</el-button>
  <div class="demo-box">
    <div class="tips">111111</div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* 测试scss代码 */
.demo-box {
  background-color: $theme-color;
  width: $main-width;
  height: $main-height;

  .tips {
    color: red;
  }
}
</style>