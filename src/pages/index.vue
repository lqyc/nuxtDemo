<template>
    <div>
      <h1>{{ userInfo.userName }}:{{ tips }}</h1>
      <div class="test">{{ curTime }}</div>
      <NuxtLink to="/list">进入列表页</NuxtLink>
    </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/stores/useUserStore'
  const userInfo = useUserStore().userInfo
  const tips = useFoo()
  const curTime = useTime()
// const baseUrl = useRuntimeConfig().public.baseURL;
// console.log('环境变量baseUrl',baseUrl, useRuntimeConfig());

</script>
<style scoped>
.test {
  font-size: 35px;
  height: 45px;
}
</style>