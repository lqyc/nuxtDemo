<template>
  <ul>
    <li>
      <NuxtLink to="/demo-page/demo">去demo页面</NuxtLink>
    </li>
    <li>哈哈哈 {{ $title }}</li>
    <li>
      <div @click="$linkTo({ url: '/demo-page/demo?d=33&y=3' })">
        公共方法跳转去demo页面00000000
      </div>
    </li>
  </ul>
</template>
