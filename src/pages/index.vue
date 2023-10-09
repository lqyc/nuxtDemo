<template>
    <div>
      <h1>{{ userInfo.userName }}:{{ tips }}</h1>
      <div class="test">{{ curTime }}</div>
      <NuxtLink to="/demo-page/list">进入列表页</NuxtLink>
      <img src="~/assets/images/loading.gif" alt="loading" />
      <van-button type="primary">vant组件直接引用不用import</van-button>
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/stores/useUserStore';
// import { useWindowSize } from '@vueuse/core';

const userInfo = useUserStore().userInfo
const tips = useFoo()
const curTime = useTime()
// const { width, height } = useWindowSize()
// const baseUrl = useRuntimeConfig().public.baseURL;
// console.log('环境变量baseUrl',baseUrl, useRuntimeConfig());
// console.log( '监听页面resize', width.value, height.value);
definePageMeta({
  title: '测试一下demo页面',
  middleware: ['auth']
});
</script>
<style scoped>
.test {
  font-size: 35px;
  height: 45px;
}
</style>
