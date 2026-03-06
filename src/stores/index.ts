import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// 创建piina实例
const store = createPinia();
// 添加 pinia 持久化插件
store.use(piniaPluginPersistedstate);
export default store;
