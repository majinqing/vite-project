# 工作区索引

> 记录所有开发者的 AI 工作轨迹

---

## 总览

这个目录用于追踪项目内所有开发者与 AI 协作时留下的记录。

### 文件结构

```
workspace/
|-- index.md              # 当前主索引
+-- {developer}/          # 每个开发者自己的目录
    |-- index.md          # 个人索引与会话历史
    |-- tasks/            # 任务文件
    |   |-- *.json        # 活跃任务
    |   +-- archive/      # 按月份归档的历史任务
    +-- journal-N.md      # 日志文件（按 1,2,3... 顺序编号）
```

---

## 活跃开发者

| 开发者 | 最后活跃 | 会话数 | 当前文件 |
|--------|----------|--------|----------|
| HP | - | 0 | `journal-1.md` |

---

## 使用说明

### 新开发者

运行初始化脚本：

```bash
python ./.trellis/scripts/init_developer.py <your-name>
```

它会完成以下事情：
1. 创建你的身份文件（已加入 gitignore）
2. 创建你的工作目录
3. 创建你的个人索引
4. 创建初始日志文件

### 已存在的开发者

1. 获取当前开发者名：
   ```bash
   python ./.trellis/scripts/get_developer.py
   ```

2. 查看你的个人索引：
   ```bash
   cat .trellis/workspace/$(python ./.trellis/scripts/get_developer.py)/index.md
   ```

---

## 规则

### 日志文件规则

- 每个日志文件**最多 2000 行**
- 超过限制后创建 `journal-{N+1}.md`
- 创建新日志文件时同步更新个人 `index.md`

### 会话记录格式

每次会话建议包含：
- Summary：一句话总结
- Branch：本次工作所在分支
- Main Changes：主要改动内容
- Git Commits：提交哈希与提交信息
- Next Steps：下一步建议

---

## 会话模板

记录会话时可参考以下模板：

```markdown
## 会话 {N}: {Title}

**日期**：YYYY-MM-DD
**任务**：{task-name}
**分支**：`{branch-name}`

### 总结

{One-line summary}

### 主要改动

- {Change 1}
- {Change 2}

### Git 提交

| Hash | Message |
|------|---------|
| `abc1234` | {commit message} |

### 验证

- [OK] {Test result}

### 状态

[OK] **已完成** / # **进行中** / [P] **阻塞**

### 下一步

- {Next step 1}
- {Next step 2}
```

---

**文档语言**：本目录允许使用 **中文**，优先便于团队理解。
