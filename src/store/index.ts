// 默认的仓库
export const useMainStore = defineStore({
  //仓库标识
  id: 'main',
  // 仓库资源
  state: () => ({
    name: 'hello larry',
  }),
  // 快捷获取
  getters: {
    // 可以自己定义新的key,进行改造
    me: (state) => state.name.replace('hello', ''),
  },
  // 行为
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      console.log(data)
      this.name = data
    },
  },
})
