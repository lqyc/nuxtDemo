// 用户登录操作权限控制中间件
import { showToast } from 'vant'
export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie('token')
  // const route = useRoute()
  // 未登录
  if (!token.value) {
    if (process.client) {
      showToast('请先登录');
    }
    // return abortNavigation()
    // return navigateTo("/login?from=" + route.fullPath);
  }
});
