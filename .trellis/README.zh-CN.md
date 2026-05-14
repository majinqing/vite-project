# Trellis 中文说明

> 这是当前仓库的 Trellis 中文使用说明，方便日常查看。  
> 官方模板生成的部分原始文件仍可能是英文，但本文件提供了最常用的中文入口。

---

## 1. Trellis 在这个项目里是干什么的

Trellis 不是前端运行时库，不会被打包进浏览器。

它在这个仓库里的作用是：

- 统一 AI 助手的开发流程
- 让 Codex / Cursor 读取同一套项目规范
- 给任务、规范、会话日志建立固定目录
- 让后续每次会话都能带上已有上下文，而不是每次重新解释项目结构

简单理解：

- `src/` 里放的是业务代码
- `.trellis/` 里放的是 AI 协作规则、任务、记忆
- `.codex/`、`.cursor/` 里放的是不同 AI 工具的适配层

---

## 2. 这个仓库已经接入了什么

当前仓库已经完成以下接入：

- `AGENTS.md`
- `.trellis/`
- `.codex/`
- `.cursor/`
- `.agents/`

并且已经按本项目实际情况补充了前端规范：

- `.trellis/spec/frontend/index.md`
- `.trellis/spec/frontend/directory-structure.md`
- `.trellis/spec/frontend/component-guidelines.md`
- `.trellis/spec/frontend/hook-guidelines.md`
- `.trellis/spec/frontend/state-management.md`
- `.trellis/spec/frontend/quality-guidelines.md`
- `.trellis/spec/frontend/type-safety.md`

---

## 3. 常用目录说明

### `.trellis/spec/`

放项目规范。

你现在最常用的是：

- `frontend/`：前端代码规范
- `guides/`：通用思考指南

### `.trellis/tasks/`

放任务目录。每个任务可以有：

- `prd.md`
- `task.json`
- `research/`
- `implement.jsonl`
- `check.jsonl`

### `.trellis/workspace/`

放开发者自己的会话日志。

当前已经初始化了：

- `.trellis/workspace/HP/`

### `.codex/` 与 `.cursor/`

放 Codex / Cursor 对 Trellis 的命令、hook、agent 配置。

---

## 4. 在这个项目里推荐怎么用

### 改代码前

先看：

- `AGENTS.md`
- `.trellis/spec/frontend/index.md`

如果你要改路由、组件、store、类型，再继续看对应子文档。

### 日常流程

可以按这个顺序理解：

1. 明确任务
2. 查规范
3. 改代码
4. 构建验证
5. 记录任务与会话

如果后续你在 Codex / Cursor 中启用了 Trellis 命令，就可以进一步使用：

- `start`：开始任务
- `brainstorm`：先理需求
- `check`：做质量检查
- `finish-work`：收尾并沉淀记录

---

## 5. 当前项目的技术栈约定

当前仓库以以下技术栈为主：

- Vue 3
- TypeScript
- Vite
- Pinia
- Vue Router
- Element Plus
- UnoCSS
- SCSS

当前目录分工：

- `src/main.ts`：应用入口
- `src/router/index.ts`：路由入口
- `src/layout/`：布局壳子
- `src/views/`：路由页面
- `src/components/`：复用组件
- `src/stores/`：Pinia 状态管理
- `src/types/`：共享类型

---

## 6. Python 说明

这台电脑本身已经安装了 Python，你也给出了截图证明。

但在当前 Codex 的受控 PowerShell 会话里，`python` 命令无法直接执行。  
这说明问题更可能是：

- 当前会话没有正确继承到 Python 的可执行环境
- 或当前沙箱 / 受控会话对 `python.exe` 调用有限制

这意味着：

- Trellis 文件已经成功初始化
- 但依赖 `python` 命令的 hook / task 脚本，在当前受控环境里可能仍然跑不通

当前仓库已经先采用最稳的处理方式：

1. 把 `.codex/hooks.json` 中的 hook 命令改成 Python 绝对路径
2. 把 `.cursor/hooks.json` 中的 hook 命令改成 Python 绝对路径

当前使用的路径是：

`C:\Users\HP\AppData\Local\Programs\Python\Python313\python.exe`

后续如果 Python 升级或迁移，只需要同步改这两个文件。

---

## 7. 我们已经额外做过的项目修正

为了让构建通过，还顺手修复了一个项目里原有的问题：

- `src/stores/modules/user.ts` 中的 `logOutSafely()` 之前返回的是一个不会完成的 `Promise`
- 现在已经改成重置状态后直接 `Promise.resolve(true)`

因此当前项目已经可以正常执行：

```bash
npm.cmd run build
```

---

## 8. 建议你之后怎么查看

如果你只想快速看中文说明，优先顺序建议是：

1. `AGENTS.md`
2. `.trellis/README.zh-CN.md`
3. `.trellis/spec/frontend/index.md`
4. 对应专题规范文件

如果你需要追 Trellis 最底层的完整官方流程，再去看原始的：

- `.trellis/workflow.md`

---

## 9. 当前状态

目前可以认为：

- Trellis 已经接入仓库
- 中文规范已经补齐主要入口
- 项目构建通过
- Python 在“系统层面已安装”，但“当前受控会话调用仍有障碍”

如果你要，我下一步可以继续帮你做两件事里的任意一个：

- 把 `.trellis/workflow.md` 也整理出一份中文精简版
- 继续排查并固化 Trellis 在当前环境中的 Python 调用方式
