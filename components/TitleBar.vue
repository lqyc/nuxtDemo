<template>
  <div
    :class="['title-wrap']"
    :style="{
      backgroundColor: titleBackground,
      ...customStyle,
      zIndex: zIndex,
    }"
  >
    <div v-if="showTitle" class="title-body">
      <!-- 头部左侧 -->
      <div class="title-left" :style="{ color: iconColor }">
        <i v-if="ifShowBack" class="iconfont icon_left" @click="backPath"></i>
        <i v-if="showClose" class="iconfont icon_close close-btn"></i>
      </div>
      <!-- 头部中间 -->
      <div class="title-content overFlowTwo" :style="{ color: titleColor }">
        {{ title }} <slot name="titleExtend"></slot>
      </div>
      <!-- 头部右侧 -->
      <div class="title-right">
        <!-- 分享的title -->
        <span class="text-icon" v-if="type === 'share'" @click="handleRight">
          <i class="iconfont icon_share"></i>
        </span>
        <!-- 带搜索的title -->
        <span class="text-icon" v-else-if="type === 'search'" @click="handleRight">
          <i class="iconfont icon_search"></i>
        </span>
        <!-- 右边为文字 -->
        <span class="text-icon" v-else-if="type === 'text'" @click="handleRight">
          {{ rightText }}
        </span>
        <!-- 右边为客服 -->
        <span class="text-icon" v-else-if="type === 'service'" @click="handleRight">
          <i class="iconfont icon_robot"></i>
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
const props = defineProps({
  showTitle: {
    // 是否显示默认标题title
    type: Boolean,
    default: true,
  },
  ifShowBack: {
    // 控制左侧返回按钮显隐，默认是展示
    type: Boolean,
    default: true,
  },
  type: {
    // 控制右侧按钮类型: share分享 search搜索 text文字 service客服
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '标题',
  },
  titleBackground: {
    type: String,
    default: '#ffffff',
  },
  iconColor: {
    type: String,
    default: '',
  },
  titleColor: {
    type: String,
    default: '#000000',
  },
  path: {
    type: String,
    default: '',
  },
  //  点击返回按钮,跳转到上(步数)页
  backStep: {
    type: Number,
    default: -1,
  },
  //  右侧展示文字(当参数type的值为text时，需传)
  rightText: {
    type: String,
    default: '',
  },
  showClose: {
    // 显示x关闭
    type: Boolean,
    default: true,
  },
  zIndex: {
    // 标题层级
    type: Number,
    default: 2100,
  },
  customStyle: {
    // 标题样式自定义style
    type: Object,
    default() {
      return {};
    },
  },
});
console.log('props', props.title);
const backPath = () => {
  console.log('click left');
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
  padding: 0 16px 0 10px;
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
      height: 45px;
      width: 35px;
      line-height: 45px;
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
      padding-right: 12px;
    }
    .icon_share {
      font-size: 20px;
    }
    .icon_search {
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
