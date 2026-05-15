---
description: Vue.js 现代 Web 应用开发最佳实践与约定
globs: **/*.vue, **/*.ts, components/**/*

---

# Vue.js 最佳实践

## 组件结构

- 优先使用 Composition API，而不是 Options API
- 保持组件职责单一、体量适中
- 正确集成 TypeScript
- 为 props 提供明确校验与类型定义
- 为 emits 提供显式声明
- 保持模板层逻辑简洁

## Composition API 使用规范

- 正确使用 `ref` 与 `reactive`
- 合理实现生命周期钩子
- 将可复用逻辑提炼为 composables
- 保持 `setup` 逻辑清晰易读
- 合理使用 `computed`
- 谨慎并正确地使用 `watch`

## 状态管理

- 使用 Pinia 进行状态管理
- 保持 store 模块化
- 合理拆分和组合状态
- 正确实现 actions
- 正确实现 getters
- 妥善处理异步状态

## 性能优化

- 合理使用组件懒加载
- 实现适当的缓存策略
- 正确使用计算属性
- 避免不必要的 watcher
- 根据场景正确选择 `v-show` 与 `v-if`
- 合理管理列表 key

## 路由

- 正确使用 Vue Router
- 实现合理的导航守卫
- 正确使用路由 meta 字段
- 妥善处理路由参数
- 合理实现页面懒加载
- 使用规范的路由跳转方式

## 表单

- 正确使用 `v-model`
- 实现合理的表单校验
- 妥善处理表单提交流程
- 提供明确的加载状态
- 做好错误处理
- 支持合理的表单重置

## TypeScript 集成

- 为组件提供正确的类型定义
- 为 props 提供准确类型
- 为 emits 提供准确声明
- 保证类型推导可读且可靠
- 为 composables 提供合适类型
- 为 store 提供清晰类型定义

## 测试

- 编写合理的单元测试
- 编写组件测试
- 正确使用 Vue Test Utils
- 测试 composables 逻辑
- 合理使用 mock
- 覆盖异步场景

## 通用最佳实践

- 遵循 Vue 官方风格指南
- 使用统一且清晰的命名规范
- 保持组件目录与职责清晰
- 实现恰当的错误处理
- 使用规范的事件处理方式
- 为复杂逻辑补充必要说明

## 构建与工具链

- 使用 Vite 进行开发与构建
- 配置合理的构建流程
- 正确使用环境变量
- 实现适当的代码拆分
- 规范处理静态资源
- 做好构建优化配置

--- project-doc ---

<!-- TRELLIS:START -->
# Trellis 使用说明

这些说明面向在本项目中协作的 AI 助手。

本项目由 Trellis 管理，你需要的项目知识主要位于 `.trellis/` 目录下：

- `.trellis/workflow.md`：开发阶段、何时创建任务、技能路由规则
- `.trellis/spec/`：按包和分层组织的编码规范，改代码前应先阅读对应规范
- `.trellis/workspace/`：按开发者记录的工作日志和会话轨迹
- `.trellis/tasks/`：活跃与归档任务，包括 PRD、调研与上下文记录

如果当前平台支持 Trellis 命令，例如 `/trellis:finish-work`、`/trellis:continue`，优先使用命令而不是手动执行。并非所有平台都会暴露全部命令。

如果你正在使用 Codex 或其他支持 agent 的工具，还可能存在以下项目级辅助目录：

- `.agents/skills/`：可复用的 Trellis 技能
- `.codex/agents/`：可选的自定义子代理

本段由 Trellis 管理。此代码块外的内容会被保留；此代码块内的内容未来可能会被 `trellis update` 覆盖。

<!-- TRELLIS:END -->

## Project Local Notes

- 项目前端技术栈：Vue 3、TypeScript、Vite、Pinia、Vue Router、Element Plus、UnoCSS、SCSS。
- 修改 `src/` 下代码前，先阅读 `.trellis/spec/frontend/`。这些规范文件已经按本仓库实际情况定制。
- 路由入口在 `src/router/index.ts`，应用入口在 `src/main.ts`，布局壳子在 `src/layout/`，路由页面在 `src/views/`，复用 UI 在 `src/components/`。
- 这台电脑本身安装了 Python，但当前 Codex 使用的受控 PowerShell 会话没有拿到 `python` 命令对应的 PATH，所以 Trellis 脚本在此环境下可能找不到 Python。
- 为了绕开当前受控会话中 `python` 命令解析失败的问题，本仓库已经把 `.codex/hooks.json` 和 `.cursor/hooks.json` 的 hook 命令改成了 Python 绝对路径：`C:\Users\HP\AppData\Local\Programs\Python\Python313\python.exe`
- 如果后续 Python 升级或安装路径变化，需要同步更新以上两个文件中的命令路径。
- 仓库还新增了 `.\.trellis\python.cmd` 作为统一入口。以后手动执行 Trellis 脚本时，优先使用：`.\.trellis\python.cmd .\.trellis\scripts\<script>.py ...`
