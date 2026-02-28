import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import LayoutFrame from '@/layout/layout-frame/index.vue';
import LayoutView from '@/layout/layout-view/index.vue';
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
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/',
    name: 'Layout',
    component: LayoutFrame,
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: '首页',
          icon: 'index',
          menu: true,
        },
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '仪表板',
          icon: 'dashboard',
          menu: true,
        },
      },
      {
        path: '/iot',
        name: 'Iot',
        component: LayoutView,
        meta: {
          title: '物联网设备管理',
          menu: true,
          mark: 'sys:iot:menu',
          icon: 'iot',
          parentName: '',
          sort: 0,
          crumbs: ['物联网设备管理'],
        },
      },
      {
        path: '/iot/equipment',
        name: 'IotEquipment',
        component: () => import('@/views/iot/equipment/index.vue'),
        meta: {
          title: '物联网设备管理',
          menu: true,
          mark: 'sys:iot:equipment',
          parentName: 'Iot',
          sort: 0,
          crumbs: ['物联网设备管理', '物联网设备管理'],
        },
      },
      {
        path: '/iot/drone',
        name: 'IotDrone',
        component: () => import('@/views/iot/drone/index.vue'),
        meta: {
          title: '无人机设备管理',
          menu: true,
          mark: 'sys:iot:equipment',
          parentName: 'Iot',
          sort: 1,
          crumbs: ['物联网设备管理', '无人机设备管理'],
        },
      },
    ],
    meta: {
      mark: '*:*:*',
    },
  },
];

export default createRouter({
  history: createWebHistory(),
  routes: roures,
});
