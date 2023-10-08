<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<style>
/* 设计稿宽度调为750的适配 */
  html {
   font-size: 13.33333333vw;
  }

  @media (min-width: 560px) {
    html {
      font-size: 74.66666666666667px;
    }
  }

  body {
    font-size: 16px;
  }
</style>
