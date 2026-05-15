# 物联网设备管理新增接入

## Goal

为物联网设备管理页补齐“新增接入”最小可用流程。用户点击“新增接入”后，可以在页面内填写一组模拟设备数据并提交，提交后新设备立即出现在设备台账中，并继续参与现有的全局搜索、关键字筛选、区域筛选和状态筛选。

## What I already know

- 页面位于 `src/views/iot/equipment/index.vue`，当前“新增接入”按钮只有展示，没有交互逻辑。
- 页面已有静态设备列表、顶部全局搜索、台账关键字筛选、区域筛选、状态筛选和重置筛选。
- 现有测试文件是 `test/components/iot-equipment-page.test.ts`，已覆盖筛选行为。
- 当前页面的设备数据仍是前端 mock 数据，适合先实现本地新增逻辑。

## Assumptions

- 本次仅实现前端本地模拟新增，不接真实接口。
- 新增接入默认添加为“在线”设备，并给出合理的模拟默认值。
- 表单采用页面内可展开的录入面板，不额外引入后端校验或复杂弹窗依赖。

## Requirements

- 点击“新增接入”按钮后，显示设备录入面板。
- 录入面板至少包含：设备名称、设备类型、所属区域、接入协议、负责人。
- 用户提交后，页面基于模拟数据生成新的设备记录并插入设备列表。
- 新增设备提交后立即参与顶部全局搜索、台账关键字筛选、区域筛选、状态筛选。
- 提交成功后关闭录入面板，并清空表单。
- 用户可以取消新增接入，不影响当前筛选状态和设备列表。

## Acceptance Criteria

- [ ] 页面初始渲染时，看不到录入面板。
- [ ] 点击“新增接入”按钮后，能看到录入面板和字段输入项。
- [ ] 填写模拟数据并提交后，设备列表新增一条设备记录。
- [ ] 新增设备能被顶部全局搜索和台账关键字筛选命中。
- [ ] 点击取消后，录入面板关闭且不会新增设备。
- [ ] 重复打开录入面板时，表单恢复默认空值。

## Definition of Done

- 组件测试新增或更新，覆盖新增接入的打开、提交、取消和筛选联动。
- `pnpm.cmd test:unit -- test/components/iot-equipment-page.test.ts` 通过。
- `pnpm.cmd build` 通过。
- 文档同步说明新增接入 MVP 范围。

## Technical Approach

- 将当前静态 `devices` 从常量数组调整为响应式列表，支持运行时追加新设备。
- 在设备台账头部按钮旁新增开关状态，控制录入面板显示。
- 使用现有 Element Plus 输入组件风格实现页面内录入面板，避免引入额外复杂交互。
- 新增记录时生成 mock 设备编号、默认状态和展示字段，优先保证列表展示与筛选逻辑可用。

## Out of Scope

- 不接真实新增接口。
- 不实现服务端校验、唯一性校验、编辑、删除、批量导入。
- 不实现复杂弹窗工作流、分步表单或附件上传。

## Technical Notes

- 目标文件：`src/views/iot/equipment/index.vue`、`src/views/iot/equipment/index.scss`、`test/components/iot-equipment-page.test.ts`
- 参考文档：`.trellis/spec/frontend/ai-development-workflow.md`、`.trellis/spec/frontend/component-guidelines.md`、`.trellis/spec/frontend/quality-guidelines.md`、`.trellis/spec/frontend/type-safety.md`
