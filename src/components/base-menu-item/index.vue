<script setup lang="ts">
import SvgIcon from '@/components/svg-icon/index.vue';
import type { RouteRecordRaw } from 'vue-router';

// 参数
defineProps<{
  // 菜单
  menu: RouteRecordRaw;
}>();
</script>

<template>
  <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
    <template #title>
      <i v-if="menu.meta!.icon" class="el-icon">
        <svg-icon :name="menu.meta!.icon as string" />
      </i>
      <span class="menu-item-text text-overflow-line">{{ menu.meta!.title }}</span>
    </template>
    <index v-for="(item, index) in menu.children" :key="index" :menu="item" />
  </el-sub-menu>
  <el-menu-item v-else :index="menu.path">
    <template #title>
      <i v-if="menu.meta!.icon" class="el-icon">
        <svg-icon :name="menu.meta!.icon as string" />
      </i>
      <span class="menu-item-text text-overflow-line">{{ menu.meta!.title }}</span>
    </template>
  </el-menu-item>
</template>

<style src="./index.scss" lang="scss" scoped></style>
