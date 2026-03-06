<script setup lang="ts">
import Test from './test/index.vue';
import { useUserStore } from '@/stores/modules/user';

const userStore = useUserStore();

userStore.getUserInfo({
  username: '张三',
  mobile: '13800000000',
});

console.log('用户信息', userStore.userInfo);

const a = ref('123');

const open = () => {
  a.value = '456';
  console.log(a.value);
  ElMessage('This is a message.');
};
</script>

<template>
  <div class="dashboard-wrapper">
    <div class="login">首页</div>
    <div class="login">123213</div>
    <el-button @click="open">222</el-button>
    <test :name="a"></test>
  </div>
</template>

<style src="./index.scss" scoped lang="scss"></style>
