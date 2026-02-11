<script setup lang="ts">
import { useUserStore } from '../../stores/modules/user.ts';

const userStore = useUserStore();
</script>

<template>
  <div class="login">
    <div class="login-title">登录页</div>
    <div>{{ userStore.getUserInfo }}</div>
  </div>
</template>

<style src="./index.scss" scoped lang="scss"></style>
