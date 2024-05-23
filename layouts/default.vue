<template>
  <div :class="[`${!titleConfig.hideTitle ? 'nav-padding' : ''}`]">
    <NuxtLayout name="header" v-if="!titleConfig.hideTitle"></NuxtLayout>
    <slot />
  </div>
</template>
<script setup>
const route = useRoute();
// 通过计算属性实时获取变化的路由元数据
const titleConfig = computed(() => {
  return route.meta.titleConfig || {};
});
console.log('titleConfig----', titleConfig);
</script>
<style lang="less" scoped>
.nav-padding {
  padding-top: 45px;
}
</style>
