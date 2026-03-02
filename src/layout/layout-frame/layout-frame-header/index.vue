<script lang="ts" setup>
import {
  ArrowRight,
  CaretBottom,
  Expand,
  Fold,
  Iphone,
  Monitor,
  Refresh,
} from '@element-plus/icons-vue';
// 参数
const props = defineProps<{
  // 展开/收起
  collapse: boolean;
}>();
// 事件
const emit = defineEmits<{
  // 展开/收起 改变
  (e: 'update:collapse', val: boolean): void;
  // 刷新
  (e: 'refresh'): void;
}>();
// 展开/收起
const isCollapse = computed<boolean>({
  get() {
    return props.collapse;
  },
  set(val) {
    emit('update:collapse', val);
  },
});
// 路由
const router = useRouter();
const route = useRoute();
// 面包屑
const crumbs = computed(() => route.meta.crumbs || []);

/**
 * 返回上一页
 */
function onBack() {
  router.back();
}
</script>
<template>
  <header class="header">
    <div class="header-top header-block">
      <div class="header-block">
        <!--收起-->
        <el-icon
          v-if="!isCollapse"
          class="header-block-icon header-block"
          @click="isCollapse = !isCollapse"
        >
          <Fold />
        </el-icon>
        <!--展开-->
        <el-icon v-else class="header-block-icon header-block" @click="isCollapse = !isCollapse">
          <Expand />
        </el-icon>
        <!--刷新-->
        <el-icon class="header-block-icon header-block" @click="emit('refresh')">
          <Refresh />
        </el-icon>
      </div>
    </div>
    <!--面包屑-->
    <div class="header-crumbs header-block">
      <div class="header-crumbs-text">当前位置：</div>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item
          v-for="(item, index) in crumbs"
          :key="index"
          :to="typeof item === 'string' ? undefined : item.path"
          class="header-crumbs-text"
        >
          <a v-if="typeof item !== 'string' && item.back" @click="onBack">
            {{ typeof item === 'string' ? item : item.name }}
          </a>
          <span v-else>{{ typeof item === 'string' ? item : item.name }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </header>
</template>
<style lang="scss" scoped src="./index.scss"></style>
