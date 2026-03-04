<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string;
  }>(),
  {
    name: '222',
  }
);

const open = () => {
  ElMessage('This is a message.');
};
</script>

<template>
  <div class="dashboard-wrapper">
    <div class="login">首页</div>
    <el-button @click="open">{{ props.name }}</el-button>
  </div>
</template>

<style src="./index.scss" scoped lang="scss"></style>
