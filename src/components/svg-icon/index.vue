<script lang="ts" name="SvgIcon" setup>
// 参数
const props = withDefaults(
  defineProps<{
    // 首字
    prefix?: string;
    // 名称
    name: string;
    // 颜色
    color?: string;
    // 渐变颜色
    gradientColor?: string;
    // css 类名
    className?: string;
    // 渐变方向
    direction?: any;
    // 渐变id
    gradientId?: string;
  }>(),
  {
    prefix: 'icon',
    color: undefined,
    className: undefined,
    gradientColor: undefined,
    direction: undefined,
    gradientId: 'gradient',
  }
);
// 标识
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
// css类名
const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`;
  }
  return 'svg-icon';
});
// 填充颜色
const svgFill = computed(() => {
  if (props.gradientColor && props.gradientId) {
    return `url(#${props.gradientId})`;
  }
  return props.color;
});
</script>

<template>
  <svg :class="svgClass" aria-hidden="true">
    <defs>
      <linearGradient :id="gradientId" v-bind="direction">
        <stop :stop-color="color" />
        <stop offset="1" :stop-color="gradientColor" />
      </linearGradient>
    </defs>
    <use :xlink:href="symbolId" :fill="svgFill" />
  </svg>
</template>

<style src="./index.scss" lang="scss" scoped></style>
