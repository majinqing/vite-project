import type { RouteRecordRaw } from 'vue-router';
/**
 * 路由转树形结构 - 菜单列表
 * @param list 列表
 * @param parentID 父id
 */
export function routeTree(list: RouteRecordRaw[], parentID: string | number): RouteRecordRaw[] {
  console.log('list', list);
  //定义一个用于递归查找子元素的函数
  const child = function (pareID: string | number) {
    //先定义一个数组，用于存储所查到的子元素
    const children: RouteRecordRaw[] = [];
    //循环数组
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (!item) continue;
      //如果数组其中一项的parentId等于传入的，说明这一项是传入的子元素，把他push进数组，然后重复递归自己找该项的子元素
      if (item.meta?.parentName === pareID) {
        item.children = child(item.name as string);
        children.push(item);
      }
    }
    //最后将查到的所有子元素返回
    return children.sort((a, b) => {
      const aNum = +(a.meta!.sort || 0);
      const bNum = +(b.meta!.sort || 0);
      return aNum - bNum;
    });
  };
  return child(parentID);
}
