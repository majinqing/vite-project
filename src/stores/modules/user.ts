import { defineStore } from 'pinia';

// 用户状态管理
export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {
      name: '张三',
      age: 18,
    },
  }),
  getters: {
    getUserInfo: (state) => state.userInfo,
  },
  actions: {},
});
