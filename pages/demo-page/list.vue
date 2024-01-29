<template>
  <div>
    <h1>欢迎来到列表页面</h1>
    <ListItem></ListItem>
    <ClientOnly>
      <!-- 此组件仅在客户端显示 -->
      <DemoDetailListDemo />
    </ClientOnly>
  </div>
</template>
<script setup>
// const route = useRoute();
definePageMeta({
  title: 'list标题',
});
// watch(route, (to) => {
//   console.log('listwatch --', to.meta.title);
// }, { immediate: true, deep: true })
</script>
