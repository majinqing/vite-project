<script setup lang="ts">
// 刷新
const isRefresh = ref<boolean>(false);

/**
 * 刷新
 */
function onRefresh() {
  console.log('刷新');
  isRefresh.value = true;
  nextTick(() => {
    isRefresh.value = false;
  });
}
</script>

<template>
  <div class="container">
    <div>menu</div>
    <div @click="onRefresh">header</div>
    <div class="wrapper">
      <router-view v-if="isRefresh"></router-view>
    </div>
  </div>
</template>

<style src="./index.scss" scoped lang="scss"></style>
