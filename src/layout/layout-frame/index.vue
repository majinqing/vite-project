<script setup lang="ts">
import LayoutFrameMenu from './layout-frame-menu/index.vue';
import LayoutFrameHeader from './layout-frame-header/index.vue';

// 展开/收起
const isCollapse = ref<boolean>(false);
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
  <div class="container" :class="{ 'container-small-menu': isCollapse }">
    <layout-frame-menu :collapse="isCollapse" />
    <layout-frame-header v-model:collapse="isCollapse" @refresh="onRefresh" />
    <div class="wrapper">
      <router-view v-if="!isRefresh"></router-view>
    </div>
  </div>
</template>

<style src="./index.scss" scoped lang="scss"></style>
