import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
/** element plus 自动按需导入插件 start */
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';
import { join } from 'node:path';
// 项目根目录
const PROJECT_ROOT: string = fileURLToPath(new URL('./', import.meta.url));
console.log('项目根目录111:', PROJECT_ROOT);
// https://vite.dev/config/
export default defineConfig({
  // 环境变量位置
  envDir: PROJECT_ROOT,
  plugins: [
    vue(),
    /** element plus 自动按需导入插件配置 start */
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: join(PROJECT_ROOT, 'auto-imports.d.ts'),
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: join(PROJECT_ROOT, 'components.d.ts'),
      resolvers: [ElementPlusResolver()],
    }),
    /** element plus 自动按需导入插件配置 end */
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      // scss全局文件引入
      scss: {
        additionalData: `@use "@/assets/styles/variables.scss" as *;`,
      },
    },
  },
});
