<template>
  <div>
    <h3>{{ $title }}{{ userInfo.userName }}:{{ tips }}！</h3>
    <div><NuxtLink to="/demo-page/list">动态路由列表</NuxtLink></div>
    <div><NuxtLink to="/demo-page/list4?id=88">动态路由带参 </NuxtLink></div>
    <div><NuxtLink to="/demo-page/dd?id=88">动态路由列表命名 </NuxtLink></div>
    <img src="~/assets/images/loading.gif" alt="loading" />
    <van-button type="primary">vant组件不需import引入</van-button>
    <img src="/img/loading.gif" />
    <div>
      公共样式color-red：<span class="font17 color-red">{{ curTime }}</span>
    </div>
    <i class="iconfont icon-shaixuan1" style="font-size: 30px"></i>
    <!-- 有颜色icon -->
    <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px">
      <use xlink:href="#icon-pengyouquan"></use>
    </svg>
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/useUserStore';
import { useFoo, useTime } from '~/composables/useHooks';
// import { useWindowSize } from '@vueuse/core';

const userInfo = useUserStore().userInfo;
const tips = useFoo();
const curTime = useTime();
// const { width, height } = useWindowSize()
// const baseUrl = useRuntimeConfig().public.baseURL;
// console.log('环境变量baseUrl',baseUrl, useRuntimeConfig());
// console.log( '监听页面resize', width.value, height.value);
// console.log('环境变量', process);
definePageMeta({
  title: '首页',
  middleware: ['auth'],
});
</script>
<style scoped>
.test {
  font-size: 35px;
  height: 45px;
}
a {
  line-height: 30px;
  text-decoration: underline;
  color: rgb(45, 106, 237);
}
</style>
