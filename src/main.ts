import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import source from './stores';
// 公共样式
import '@/assets/styles/global.scss';

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
