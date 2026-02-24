<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user.ts';

const userStore = useUserStore();
</script>

<template>
  <div class="login">
    <div class="login-title">登录页</div>
    <div>{{ userStore.getUserInfo.name }}</div>
    <el-button type="primary">登录</el-button>
  </div>
</template>

<style src="./index.scss" scoped lang="scss"></style>
