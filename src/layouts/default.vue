<template>
  <div :class="[`${$title ? 'nav-padding' : ''}`]">
    <h3>默认模板添加在所有页面，也可单独添加</h3>
    <NuxtLayout name="header" v-if="$title"></NuxtLayout>
    <slot />
  </div>
</template>
<script setup>
// const route = useRoute();
// const pageTitle = ref(route.meta.title);
// console.log('ropageTitleute', pageTitle);
</script>
<style lang="less" scoped>
.nav-padding {
  padding-top: 45px;
}
</style>
