//定义全局点击跳转功能插件
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      title: '全局测试当前页面标题',
      linkTo(item) {
        if (item.type == "webview") {
          window.open(item.url);
        } else if (item.url) {
          navigateTo(item.url);
        }
      }
    }
  }
});
