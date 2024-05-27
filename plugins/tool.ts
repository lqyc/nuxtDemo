// 定义全局点击跳转功能插件
export default defineNuxtPlugin(nuxtApp => {
  const routeTitle = nuxtApp._route.meta && nuxtApp._route.meta.title;
  console.log('定义全局点击跳转功能插件', routeTitle, nuxtApp);
  return {
    provide: {
      title: routeTitle,
      linkTo(item) {
        if (item.type == 'webview') {
          window.open(item.url);
        } else if (item.url) {
          navigateTo(item.url);
        } else if (typeof item == 'string') {
          navigateTo(item);
        }
      },
    },
  };
});
