<template>
  <header class="header">
    <TitleBar :title="pageTitle" :titleConfig="titleConfig"> </TitleBar>
  </header>
</template>
<script setup>
const route = useRoute();
const pageTitle = computed(() => {
  return route.meta.title || '';
});
const titleConfig = computed(() => {
  return route.meta.titleConfig || {};
});
</script>
