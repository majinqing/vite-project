# PRD：熟悉 Trellis 基本流程

## 1. 背景

当前仓库已经完成 Trellis 接入，并已切换当前开发者为 `mjq`。
本任务的目的不是开发业务功能，而是通过一个低风险的演示任务，完整熟悉 Trellis 在本仓库中的基础使用流程。

## 2. 任务目标

通过本任务，完成一次最小闭环的 Trellis 流程演练，包括：

1. 理解任务目录结构
2. 补充 `prd.md`
3. 整理 `implement.jsonl` 与 `check.jsonl` 所需上下文
4. 启动任务进入 `in_progress`
5. 学会查看当前任务状态
6. 理解后续 `finish` / `archive` 的用途

## 3. 本任务范围

### 包含内容

- 在 `.trellis/tasks/05-14-trellis/` 下完善演示任务资料
- 只围绕 Trellis 任务流本身进行说明和操作
- 学习本仓库中 Trellis 的 planning → in_progress → finish / archive 基本路径

### 不包含内容

- 不修改 `src/` 下业务代码
- 不新增页面、路由、组件、store 功能
- 不做构建修复、样式调整或功能开发
- 不要求产出业务功能提交

## 4. 成功标准

完成本任务后，应满足以下条件：

1. 当前任务具备清晰的 `prd.md`
2. 已理解该任务目录中各文件的作用
3. 已整理最小必要的 `implement.jsonl` / `check.jsonl` 上下文
4. 能成功执行 `task.py start 进入 in_progress`
5. 能说明 `task.py current`、`task.py finish`、`task.py archive` 的区别
6. 对下一次创建真实业务任务的流程有清晰认识

## 5. 任务目录预期理解

本任务重点理解以下文件：

- `prd.md`：记录本任务要做什么、范围是什么、成功标准是什么
- `implement.jsonl`：给实现阶段注入的规范/上下文
- `check.jsonl`：给检查阶段注入的规范/上下文
- `task.json`：任务元数据与状态信息

## 6. 执行思路

建议按以下顺序完成本演示任务：

1. 先完成 `prd.md`
2. 再补充最小必要 context
3. 然后执行 `task.py start`
4. 再查看 current task
5. 最后学习 finish / archive 的收尾逻辑

## 7. 风险与约束

- 本任务应保持低风险，不引入业务代码变更
- 如需演示命令效果，优先使用当前仓库已有 `.trellis/` 脚本
- 所有说明以当前仓库内 `.trellis/workflow.md` 为准

## 8. 完成后的预期结果

完成后，用户应能够独立：

- 新建一个 Trellis 任务
- 补写任务 PRD
- 理解任务 planning 阶段要做什么
- 将任务切换到 `in_progress`
- 为后续真实开发任务复用同样流程
