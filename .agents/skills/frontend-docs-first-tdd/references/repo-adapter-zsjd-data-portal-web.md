# zsjd-data-portal-web 仓库适配

当前仓库的默认适配事实如下，优先按这些约束工作。

## 1. 技术栈

* Vue 3

* TypeScript

* Vite

* Element Plus

* Pinia

* Vue Router

## 2. 语言与风格约束

* 所有回复默认使用中文

* 代码注释默认使用中文

* 优先使用 Element Plus 组件

* 优先复用 `src/utils/README.md` 中已有工具

* 工具类统一按 `@/utils/xxx` 导入

## 3. 文档目录

* 需求文档：`docs/`

* 测试用例文档：`docs/测试用例/`

进入实现前，优先查找现有样例，避免新文档风格漂移。

## 4. 测试命令

* `pnpm test:unit`

* `pnpm test:unit -- run <test-file>`

如需覆盖率，可补充使用：

* `pnpm test:coverage`

## 5. Vitest 配置事实

优先检查：

* `vitest.config.ts`

* `test/setupTests.ts`

当前已知配置：

* `environment: "jsdom"`

* `include: ["test/**/*.test.ts"]`

* `exclude: ["test/e2e/**"]`

## 6. 当前测试分层

* `test/unit/`

* `test/stores/`

* `test/hooks/`

* `test/router/`

* `test/components/`

* `test/e2e/`

默认按被测对象选择层级：

* `src/utils/*` -> `test/unit/`

* `src/stores/*` -> `test/stores/`

* `src/hooks/*` -> `test/hooks/`

* `src/router/*` -> `test/router/`

* 页面与组件行为 -> `test/components/`

## 7. 进入任务时的优先检查项

先读这些文件或目录：

* `AGENTS.md`

* `src/utils/README.md`

* `package.json`

* `vitest.config.ts`

* `test/`

* `docs/`

* `docs/测试用例/`

## 8. 当前仓库中的 TDD 执行提醒

* 没有需求确认结果，不生成实现代码

* 没有需求文档和测试用例文档，不进入 TDD

* 没有失败测试，不进入实现阶段

* 需求变更先改文档，再改测试和代码

* 组件测试优先验证用户可见行为，不鼓励过度测试内部实现

## 9. 建议的默认汇报顺序

在这个仓库里，优先按以下顺序总结：

1. 文档

2. 测试

3. 实现

4. 验证

5. 偏差
