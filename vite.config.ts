import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
/** element plus 自动按需导入插件 start */
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'node:url'


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        /** element plus 自动按需导入插件配置 start */
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        /** element plus 自动按需导入插件配置 end */
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            // scss全局文件引入
            scss: {
                // additionalData: '@import "@/assets/styles/global.scss";' //这行代码可能会导致报错
                additionalData: '@use "@/assets/styles/global.scss" as *;' //建议使用这行代码
            },
        },
    },
})
