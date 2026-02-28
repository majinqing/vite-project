<script setup lang="ts">
import manageRouter from '@/router';
import type { RouteRecordRaw } from 'vue-router';
// 参数
defineProps<{
  // 展开/收起
  collapse: boolean;
}>();
// 路由
const route = useRoute();
// 菜单列表
const menuList = computed(() => {
  // 路由
  const routes: RouteRecordRaw[] = manageRouter.getRoutes().filter((item) => item.meta.menu);
  // return routeTree(routes, '');
  return routes;
});
// 路径
const fullPath = computed(() => {
  console.log('fullPath', route);
  const fullPath = route.fullPath;
  if (route.meta?.menu) {
    return fullPath;
  }
  return route.meta!.parentName;
});

/**
 * 跳转首页
 */
function jumpFirstPage() {
  window.location.href = '/';
}
</script>

<template>
  <div class="menu">
    <!--头部-->
    <div class="menu-header" @click="jumpFirstPage">
      <img class="menu-header-log" src="./images/logo.png" alt="" />
      <transition name="fade">
        <h1 v-if="!collapse" class="menu-header-title text-overflow-line-two">
          新疆数字棉花科技创新平台
        </h1>
      </transition>
    </div>
    <!--分割线-->
    <div class="menu-line" />
    <!--菜单列表-->
    <el-scrollbar class="menu-list">
      <el-menu
        class="menu-wrapper"
        :collapse="collapse"
        background-color="#1A2638"
        text-color="#fff"
        active-text-color="#33E79B"
        :default-active="fullPath"
        router
      >
        <!--        <base-menu-item v-for="(item, index) in menuList" :key="index" :menu="item" />-->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>
