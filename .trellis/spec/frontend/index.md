# 前端开发规范

> 这个项目的前端开发约定与最佳实践。

---

## 总览

这个项目使用 `Vue 3 + TypeScript + Vite`，并且已经集成了 `Pinia`、
`Vue Router`、`Element Plus`、`UnoCSS`。本目录下的文件描述的是当前仓库
已经在使用的约定，后续开发应尽量遵循这些规则。

---

## 规范索引

| 文档 | 说明 | 状态 |
|------|------|------|
| [目录结构](./directory-structure.md) | 模块组织与文件布局 | 已完成 |
| [组件规范](./component-guidelines.md) | Vue 单文件组件、props、样式约定 | 已完成 |
| [组合式逻辑规范](./hook-guidelines.md) | Vue composable 与 setup 逻辑约定 | 已完成 |
| [状态管理规范](./state-management.md) | Pinia 模块与持久化约定 | 已完成 |
| [质量规范](./quality-guidelines.md) | 代码标准与检查项 | 已完成 |
| [类型安全规范](./type-safety.md) | TypeScript、路由、store 类型约定 | 已完成 |

---

## 使用方式

在修改前端代码前，先看这个索引，再按你要改动的层级继续阅读对应文档：

1. 调整文件位置或新增模块前，先看 `directory-structure.md`
2. 修改 `.vue` 文件前，先看 `component-guidelines.md`
3. 抽离复用逻辑前，先看 `hook-guidelines.md`
4. 修改 Pinia 或持久化逻辑前，先看 `state-management.md`
5. 提交前做自查时，先看 `quality-guidelines.md`
6. 改动路由、props、store、共享类型时，先看 `type-safety.md`

这些文档的目的，是帮助 AI 助手和新同事理解“这个仓库现在真实是怎么写的”，
而不是泛泛地描述一个普通 Vue 项目应该怎么写。

---

**文档语言**：本项目自定义规范允许使用 **中文** 编写，优先保证团队易读性。
