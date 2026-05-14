<!-- TRELLIS:START -->
# Trellis Instructions

These instructions are for AI assistants working in this project.

This project is managed by Trellis. The working knowledge you need lives under `.trellis/`:

- `.trellis/workflow.md` — development phases, when to create tasks, skill routing
- `.trellis/spec/` — package- and layer-scoped coding guidelines (read before writing code in a given layer)
- `.trellis/workspace/` — per-developer journals and session traces
- `.trellis/tasks/` — active and archived tasks (PRDs, research, jsonl context)

If a Trellis command is available on your platform (e.g. `/trellis:finish-work`, `/trellis:continue`), prefer it over manual steps. Not every platform exposes every command.

If you're using Codex or another agent-capable tool, additional project-scoped helpers may live in:
- `.agents/skills/` — reusable Trellis skills
- `.codex/agents/` — optional custom subagents

Managed by Trellis. Edits outside this block are preserved; edits inside may be overwritten by a future `trellis update`.

<!-- TRELLIS:END -->

## Project Local Notes

- 项目前端技术栈：Vue 3、TypeScript、Vite、Pinia、Vue Router、
  Element Plus、UnoCSS、SCSS。
- 修改 `src/` 下代码前，先阅读 `.trellis/spec/frontend/`。这些规范文件已经按本仓库实际情况定制。
- 路由入口在 `src/router/index.ts`，应用入口在 `src/main.ts`，布局壳子在
  `src/layout/`，路由页面在 `src/views/`，复用 UI 在 `src/components/`。
- 这台电脑本身安装了 Python，但当前 Codex 使用的受控 PowerShell 会话没有拿到
  `python` 命令对应的 PATH，所以 Trellis 脚本在此环境下可能找不到 Python。
- 为了绕开当前受控会话中 `python` 命令解析失败的问题，本仓库已经把
  `.codex/hooks.json` 和 `.cursor/hooks.json` 的 hook 命令改成了 Python 绝对路径：
  `C:\Users\HP\AppData\Local\Programs\Python\Python313\python.exe`
- 如果后续 Python 升级或安装路径变化，需要同步更新以上两个文件中的命令路径。
- 仓库还新增了 `.\.trellis\python.cmd` 作为统一入口。以后手动执行 Trellis
  脚本时，优先使用：
  `.\.trellis\python.cmd .\.trellis\scripts\<script>.py ...`
