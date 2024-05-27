<template>
  <ul>
    <li>
      <NuxtLink to="/demo-page/demo">去demo页面</NuxtLink>
    </li>
    <li>哈哈哈 {{ $title }}</li>
    <li>
      <div class="link-btn" @click="$linkTo({ url: '/demo-page/demo?d=33&y=3' })">
        Listitem公共方法跳转去demo页面
      </div>
      <div class="link-btn" @click="$linkTo('/?id=32423')">
        Listitem公共方法跳转去首页
      </div>
    </li>
  </ul>
</template>
<script setup></script>
<style scoped>
.link-btn, a {
  line-height: 30px;
  text-decoration: underline;
  color: rgb(45, 106, 237);
}
</style>
