# 组件规范

> 这个项目中的组件应该怎么写。

---

## 总览

这个项目使用 Vue 单文件组件，并统一采用 `script setup + TypeScript`。
大多数组件由 `index.vue` 和 `index.scss` 组成。

---

## 组件结构

- 新组件统一使用 `script setup lang="ts"`。
- setup 逻辑尽量保持小而清晰；一旦出现可复用逻辑，优先抽成 composable，
  不要把一个组件越堆越大。
- 模板层尽量保持轻量；复杂表达式优先收敛到 `computed` 或 setup 内的小函数。
- 本地子组件继续使用显式导入，参考 `src/layout/layout-frame/index.vue`。
- 已经采用“同目录样式文件”的组件，继续保持
  `style src="./index.scss" scoped lang="scss"` 这种写法。

---

## Props 约定

- 优先使用带类型的 `defineProps<...>()`，不要无类型地声明 props。
- props 结构优先就近定义在组件旁边；只有跨多个文件复用时，再提升到 `src/types/`。
- 组件有自定义事件时，使用 `defineEmits` 显式声明。现有布局组件已经在使用
  `v-model` 风格绑定，后续继续保持明确。
- 除非契约非常明确，否则尽量避免 `menu.meta!` 这种不安全的非空断言；
  修改这类代码时，优先补类型收窄或共享 route meta 类型。

---

## 样式约定

- 默认样式语言是 `SCSS`。
- 除非有意做全局样式，否则组件样式使用 `scoped`。
- 全局变量和设计 token 放在 `src/assets/styles/variables.scss`，并由 Vite
  自动注入。
- 仓库已经启用了 `UnoCSS`，但现有组件大多以 `SCSS` 为主；修改现有模块时，
  优先保持原有风格，不要混着改。
- 可以直接使用 `Element Plus` 组件，项目已配置自动导入解析。

---

## 可访问性

- 自定义结构中尽量使用语义化 HTML。
- 可交互行为尽量挂在真正的交互元素或 Element Plus 组件上，不要大量依赖
  纯 `div` 点击。
- 路由和菜单标题必须保留真实文本，不能只剩图标。

---

## 常见错误

- 不要把业务逻辑堆进模板里。
- 如果布局子组件或 `components/` 公共组件能拆开表达，就不要把页面组件写得过大。
- 没有必要时，不要在同一个文件里混用太多样式模式。
- 这个项目以 Composition API 为主，不要再引入 Options API 新组件。
