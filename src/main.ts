import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import source from './stores';
import 'normalize.css/normalize.css';
// 公共样式
import '@/assets/styles/global.scss';
// 引入 UnoCSS 核心样式（必须引入，否则样式不生效）
import 'uno.css';
// 创建 vue 实例
const app = createApp(App);
// 创建 pinia 实例
const pinia = createPinia();
// 挂载路由
app.use(router);
// 挂载 pinia
app.use(pinia);
// 挂载 store
app.use(source);

// 挂载实例
app.mount('#app');
