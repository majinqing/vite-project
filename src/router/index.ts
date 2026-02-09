import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

/**
 * 路由
 *    meta：notLogIn：未登录状态也可访问页面
 *          mark：权限标识
 *          title：标题名称
 *          icon：菜单展示图标
 *          keepAlive：是否需要缓存页面
 *          menu：是否为菜单
 *          parentName：父级名称
 *          sort：排序
 *          crumbs：<string[] | {name: string; path: string;}[]> 面包屑
 */
const roures: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    // 登录页面
    component: () => import('../views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/',
    name: 'Index',
    // 首页
    component: () => import('../views/index/index.vue'),
    meta: {
      title: '首页',
      mark: '*:*:*',
    },
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes: roures,
});
