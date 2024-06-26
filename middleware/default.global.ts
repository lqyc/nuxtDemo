export default defineNuxtRouteMiddleware((to, from) => {
  // console.log('全局路由to',to,'from',from);
  const defaultTitle = (to.meta && to.meta.title) || '【QYC】';
  useHead({
    title: defaultTitle,
    bodyAttrs: {
      class: 'body-main-class', // body添加全局样式
    },
  });
});
