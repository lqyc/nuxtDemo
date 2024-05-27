<template>
  <div>
    江哈哈哈
    <ClientOnly>
      <!-- 此组件仅在客户端显示 -->
      <h2 @click="$linkTo('/')" class="color-red">返回首页</h2>
    </ClientOnly>
  </div>
</template>
<script setup>
definePageMeta({
  title: 'Demo-',
  titleConfig: {
    hideTitle: true,
  },
});

</script>
