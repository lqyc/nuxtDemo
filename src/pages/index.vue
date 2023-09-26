<template>
    <div>
      <h1>{{ tips }}</h1>
      <!-- <h1> {{ userInfo.userName }}</h1> -->
      <h1>{{ curTime }}</h1>
      <NuxtLink to="/list">进入列表页</NuxtLink>
    </div>
</template>
<script lang="ts" setup>
// import { useUserStore } from '@/stores'
//   const userInfo = useUserStore().userInfo
  const tips = useFoo()
  const curTime = useTime()
</script>
  