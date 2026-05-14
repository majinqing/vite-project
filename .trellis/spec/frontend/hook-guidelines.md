# 组合式逻辑规范

> 这个项目中 composable 和复用 setup 逻辑的约定。

---

## 总览

Trellis 模板里把这类文档叫做 hook，但这个仓库是 Vue 项目。这里实际描述的是
Vue composable 以及可复用的 setup 逻辑规范。

---

## Composable 模式

- 当前仓库还没有正式建立 `src/composables/` 目录；如果开始出现复用 setup 逻辑，
  应该新增该目录，而不是把跨组件逻辑塞进 `assets/utils/`。
- composable 使用 Vue 习惯命名，例如 `useSomething`。
- 一个 composable 只做一类事情，例如路由状态、表单状态或数据加载，不要全都揉在一起。
- 返回值优先是带类型的 `ref`、`computed` 和少量行为函数，不要返回职责不清的大型
  `reactive` 对象。

---

## 数据获取

- 当前没有安装专门的服务端状态管理库。
- 一次性的页面请求，`loading` 和 `error` 状态可以就近放在页面里。
- 跨页面共享的数据请求编排，优先放到 Pinia action 中。
- 在专门的数据获取层落地之前，不要引入一套与现有结构割裂的新请求模式。

---

## 命名约定

- 只有真正的 composable 才使用 `use*` 命名。
- 如果 `assets/utils/` 下只是普通工具函数，且没有调用 Vue API，就不要伪装成 composable。
- 文件名与导出的 composable 名称尽量保持一致。

---

## 常见错误

- 不要把 React Hook 的术语和写法直接搬进 Vue 组件。
- 能用 `computed` 或直接事件处理解决的，就不要滥用 `watch`。
- 属于全局共享状态的内容不要塞进 composable，应该回到 Pinia。
