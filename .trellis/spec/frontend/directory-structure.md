# 目录结构

> 这个项目的前端代码是如何组织的。

---

## 总览

这个仓库使用单一的 `src/` 作为应用根目录。共享布局和基础设施代码放在
`src/` 顶层附近，页面级代码主要放在 `views/` 下。

---

## 目录布局

```text
src/
|-- main.ts                  # app bootstrap
|-- App.vue                  # root shell
|-- assets/
|   |-- icons/               # static icons
|   |-- styles/              # global SCSS and theme variables
|   +-- utils/               # shared frontend helpers
|-- components/              # reusable UI pieces
|-- layout/                  # application frame and nested layout shells
|-- router/                  # vue-router setup
|-- stores/                  # Pinia root + modules
|-- types/                   # shared TypeScript interfaces
+-- views/                   # route-level pages
```

---

## 模块组织

- 路由页面放在 `src/views/<feature>/index.vue`，页面样式通常与页面同目录，
  文件名为 `index.scss`。
- 可复用的布局外壳放在 `src/layout/`，不要放进 `views/`。
- 可复用的 UI 组件放在 `src/components/<component-name>/`。
- 共享样式放在 `src/assets/styles/`，不要把全局样式散落到各个页面目录。
- 共享应用状态放在 `src/stores/modules/`。
- 多个页面或 store 复用的类型放在 `src/types/`。

---

## 命名约定

- Vue 单文件组件目录目前使用 `kebab-case`，例如
  `layout-frame-header`、`base-menu-item`、`svg-icon`。
- 路由页面目录使用功能语义命名，例如 `dashboard`、`login`、
  `iot/equipment`。
- 入口文件通常命名为 `index.vue` 和 `index.scss`。
- 导入路径优先使用 `@` 指向 `src`，避免层级很深的相对路径。

---

## 参考示例

- `src/layout/layout-frame/` 适合作为“带嵌套子组件的布局模块”参考。
- `src/components/base-menu-item/` 适合作为“小型可复用组件目录”参考。
- `src/views/iot/` 适合作为“同一功能域下页面分组”的参考。
