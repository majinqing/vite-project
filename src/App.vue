<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn';

// 页面刷新状态
const isRefresh = ref<boolean>(false);
// 页面刷新
provide('isRefresh', () => {
  isRefresh.value = true;
  nextTick(() => {
    isRefresh.value = false;
  });
});
</script>

<template>
  <el-config-provider :locale="zhCn" size="large">
    <router-view v-if="!isRefresh" v-slot="{ Component, route }">
      <keep-alive v-if="route.meta.keepalive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else />
    </router-view>
  </el-config-provider>
</template>
