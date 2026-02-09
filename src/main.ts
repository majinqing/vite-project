import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

// 创建 vue 实例
const app = createApp(App);
// 挂载路由
app.use(router);
// 挂载实例
app.mount('#app');
