<template>
  <div
    :class="['title-wrap']"
    :style="{
      ...customStyle,
      zIndex: titleConfig.zIndex,
    }"
  >
    <div v-if="showTitle" class="title-body">
      <!-- 头部左侧 -->
      <div class="title-left" :style="{ color: titleConfig.iconColor }">
        <i
          v-if="!titleConfig.hideBack"
          class="iconfont icon-zuofanhui icon_left"
          @click="handleLeft"
        ></i>
        <i v-if="titleConfig.showClose" class="iconfont icon-guanbi close-btn"></i>
      </div>
      <!-- 头部中间 -->
      <div class="title-content overFlowTwo" :style="{ color: titleConfig.titleColor }">
        {{ title }} <slot name="titleExtend"></slot>
      </div>
      <!-- 头部右侧 -->
      <div class="title-right">
        <!-- 分享的title -->
        <span class="text-icon" v-if="titleConfig.type === 'share'" @click="handleRight">
          <i class="iconfont icon-fenxiang"></i>
        </span>
        <!-- 带搜索的title -->
        <span class="text-icon" v-else-if="titleConfig.type === 'search'" @click="handleRight">
          <i class="iconfont icon-a-sousuo3x"></i>
        </span>
        <!-- 右边为文字 -->
        <span class="text-icon" v-else-if="titleConfig.type === 'text'" @click="handleRight">
          {{ titleConfig.rightText }}
        </span>
        <!-- 右边为客服 -->
        <span class="text-icon" v-else-if="titleConfig.type === 'service'" @click="handleRight">
          <i class="iconfont icon-kehu"></i>
        </span>
        <!-- 右边为插槽自定义内容 -->
        <span class="text-icon" v-else @click="handleRight">
          <slot></slot>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  titleConfig: {
    type: Object,
    default() {
      return {
        zIndex: '2100', // 标题栏层级
        hideBack: false, // 控制左侧返回按钮显隐，默认是展示false
        type: '', // 控制右侧按钮类型: share分享 search搜索 text文字 service客服
        rightText: '', // 右侧展示文字(当参数type的值为text时，需传)
        showClose: false, // 显示x关闭
        iconColor: '',
        titleColor: '#000000',
      };
    },
  },
  title: {
    type: String,
    default: '标题',
  },
  customStyle: {
    // 标题样式自定义style
    type: Object,
    default() {
      return {};
    },
  },
  showTitle: {
    // 是否显示默认标题栏
    type: Boolean,
    default: true,
  },
});
const router = useRouter();
const handleLeft = () => {
  console.log('click left');
  router.go(-1);
};
const handleRight = () => {
  console.log('click right');
};
</script>

<style lang="less">
.title-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2001;
}
.title-body {
  position: relative;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .iconfont {
    font-size: 22px;
  }
  .title-left {
    position: absolute;
    left: 0;
    color: rgb(142 142 142);
    .close-btn,
    .icon_left {
      display: inline-block;
      width: 35px;
      text-indent: 10px;
    }
    .close-btn {
      text-indent: 8px;
    }
  }
  .title-content {
    font-size: 18px;
    max-width: 68%;
    max-height: 45px;
    font-weight: bold;
    line-height: 22px;
    font-family: PingFangSC-Medium;
  }
  .title-right {
    position: absolute;
    right: 0;
    .text-icon {
      display: flex;
      justify-content: flex-end;
      min-width: 46px;
      padding-right: 30px;
    }
    .icon-fenxiang {
      font-size: 15px;
    }
    .icon-a-sousuo3x {
      color: rgb(146 145 146);
    }
  }
  @media screen and (min-width: 500px) {
    .title-left i,
    .title-right i {
      font-size: 18px !important;
    }
    .title-content {
      font-size: 14px !important;
    }
  }
}
</style>
