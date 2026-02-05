import js from "@eslint/js"; // JavaScript标准规则插件
import globals from "globals"; // 全局变量定义
import tseslint from "typescript-eslint"; // TypeScript支持插件
import pluginVue from "eslint-plugin-vue"; // Vue支持插件
import {defineConfig} from "eslint/config";
import {includeIgnoreFile} from "@eslint/compat";
import {fileURLToPath} from "node:url";
import prettierRecommended from "eslint-plugin-prettier/recommended"; // Prettier集成插件

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));


export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"], // 应用于所有JavaScript、TypeScript和Vue文件
        plugins: {js}, // 注册JavaScript插件
        extends: ["js/recommended"], // 继承JavaScript推荐规则
        languageOptions: {globals: globals.browser}, // 设置浏览器环境全局变量
    },
    tseslint.configs.recommended, // 继承TypeScript推荐配置
    pluginVue.configs["flat/essential"], // 继承Vue必要配置
    {
        files: ["**/*.vue"], // 仅应用于Vue文件
        languageOptions:
            {parserOptions: {parser: tseslint.parser}} // 使用TypeScript解析器解析Vue文件
    },
    includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
    {
        // 自定义规则
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "no-console": "warn",
        },
    },
    prettierRecommended
]);