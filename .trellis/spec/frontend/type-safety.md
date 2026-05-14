# 类型安全规范

> 这个项目中的 TypeScript 类型约定。

---

## 总览

这个项目在 Vue SFC、路由配置和 Pinia store 中统一使用 TypeScript。
共享接口放在 `src/types/`，文件内部专属类型应尽量就近定义。

---

## 类型组织

- 跨文件复用的领域接口放在 `src/types/`，例如 `IUserInfo`。
- store 自己的局部状态接口就近放在 store 文件旁边，例如
  `src/stores/modules/user.ts` 内的 `IUserState`。
- 优先使用 Vue Router、Pinia 提供的官方类型，不要重复造轮子。
- 当 route meta 变复杂时，优先抽共享类型，不要到处散落 `as string` 和非空断言。

---

## 运行时校验

- 当前没有安装运行时校验库。
- 接收不确定的外部数据时，先做收窄，再写入带类型的 store 或组件状态。
- 不要因为 TypeScript 能编译通过，就误以为运行时一定安全。

---

## 常用模式

- API 数据和 store 状态优先使用显式 interface。
- 让 `defineProps`、`ref<T>` 和带类型的函数参数承担大部分类型推导。
- 类型断言应尽量少且理由充分；如果一个地方需要大量断言，通常说明缺了一层建模。

---

## 禁止模式

- 新代码尽量避免 `any`。
- 避免使用大段 `as unknown as ...` 连环断言。
- 对可能为 `undefined` 的值，先做收窄再访问属性。
- 不要把某个功能域的类型文件当成各种无关结构的“杂物箱”。
