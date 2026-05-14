import { defineStore } from 'pinia';
import type { IUserInfo } from '@/types/user.t';

interface IUserState {
  // 用户信息
  userInfo: IUserInfo | undefined;
  // 权限列表
  purview: string[];
}

// 用户状态管理
export const useUserStore = defineStore('user', {
  state: (): IUserState => ({
    userInfo: undefined,
    purview: [],
  }),
  getters: {},
  actions: {
    /**
     * 获取用户信息
     */
    getUserInfo(userInfo: IUserInfo) {
      this.userInfo = userInfo;
      return this.userInfo;
    },
    /**
     * 安全退出登录
     */
    logOutSafely(): Promise<boolean> {
      this.userInfo = undefined;
      this.purview = [];
      return Promise.resolve(true);
    },
  },
  persist: {
    storage: localStorage,
    pick: ['userInfo'],
  },
});
