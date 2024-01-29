<template>
  <div>
    <h1>{{ userInfo.userName }}:{{ tips }}</h1>
    <div>
      公共样式color-red：<span class="test color-red">{{ curTime }}</span>
    </div>
    <NuxtLink to="/demo-page/list">进入列表页{{ $title }}</NuxtLink>
    <img src="~/assets/images/loading.gif" alt="loading" />
    <van-button type="primary">vant组件直接引用不用import</van-button>
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/useUserStore';
import { useFoo, useTime } from '~/composables/useHooks';
// import { useWindowSize } from '@vueuse/core';
// import { $routes } from '@/router';
import { getList } from '@/api/common';

const userInfo = useUserStore().userInfo;
const tips = useFoo();
const curTime = useTime();
// const { width, height } = useWindowSize()
// const baseUrl = useRuntimeConfig().public.baseURL;
// console.log('环境变量baseUrl',baseUrl, useRuntimeConfig());
// console.log( '监听页面resize', width.value, height.value);
// console.log('$routesmmm)', $routes)
// console.log('环境变量', process);
getList()
  .then(r => {
    console.log('rrr', r);
  })
  .catch(e => {
    console.log('eee', e);
  });
definePageMeta({
  title: 'demo标题',
  middleware: ['auth'],
});
</script>
<style scoped>
.test {
  font-size: 35px;
  height: 45px;
}
</style>
