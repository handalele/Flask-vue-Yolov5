<template>
<div class="video-frame">
  <img ref="videoStream" :src="videoSrc" alt="实时视频流">
</div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount, onUnmounted} from 'vue';
const videoSrc = ref('');

onMounted(() => {
  videoSrc.value = 'http://127.0.0.1:5000/underwaterEnvironment';
});
onUnmounted(() => {
  videoSrc.value = '';
});
</script>
<style>
  .video-frame {
    position: relative;
    height: 480px;
    width: 100%; /* 或者设置为具体的宽度，如 320px */
    max-width: 640px; /* 根据需要设置最大宽度 */
    margin: 0 auto; /* 水平居中 */
    overflow: hidden; /* 隐藏超出框的内容 */
    border-radius: 10px; /* 圆角 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* 阴影效果 */
    background-color: hsl(0, 0%, 25%); /* 背景色 */
  }

  .video-frame img {
    display: block;
    width: 100%;
    height: auto;
    -webkit-user-select: none; /* 禁止用户选择 */
    object-fit: cover; /* 保持图片的宽高比，同时填充整个容器 */
    transition: opacity 0.5s ease; /* 淡入淡出效果 */
  }
</style>