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

## 前端 AI 辅助开发流程

- 本流程在当前项目中的正式来源是：`AGENTS.md`、`.trellis/spec/frontend/ai-development-workflow.md`、`.trellis/workflow.md`。三者口径必须保持一致。
- 纯问答、解释、仓库规则说明类请求，直接回答，不进入前端实现流程。
- 纯文案调整且不改变交互、状态流、路由、校验、权限、提交链路时，可以不走严格 TDD。
- 纯样式调整且不改变用户可见行为时，可以不走严格 TDD。
- 只要是前端新功能、行为修改、缺陷修复、影响行为的重构、补前端测试，默认进入 `frontend-docs-first-tdd`。
- 需求不清、范围未锁定、存在多种实现路径时，先走 `trellis-brainstorm`，在 `prd.md` 中把目标、范围、验收标准聊清楚。
- 一旦确认任务存在前端行为变化，执行阶段先遵循 `frontend-docs-first-tdd`：先确认需求，再补齐“需求/范围”和“测试用例/验证计划”两类文档，再按 `Red -> Green -> Refactor` 推进实现。
- 当前仓库已经具备基础 `Vitest + Vue Test Utils` 能力，但并不等于所有前端任务都已有现成测试支撑；无法直接覆盖的任务允许对严格 TDD 做降级，但必须先说明原因，并保留最小可行验证方案；不得跳过需求确认和验证说明。
- 降级场景仅限：纯文案、纯样式、极小修复、现有测试覆盖无法支撑且当前任务内不适合补齐基础设施。
- 即使降级，最低验证要求仍然是说明验证方式；涉及实际前端改动时，至少执行 `npm.cmd run build`，能落入现有测试范围的行为优先补 `npm run test:unit`，涉及 UI 或路由变化时补充手工冒烟验证说明。
- 前端任务完成后，仍按 Trellis 主流程收尾：`trellis-check` / `trellis-update-spec` / commit / `/trellis:finish-work`。
