<template>
  <div>
    <div class="top">
      <div > 深蓝守望智能系统 </div>
      <div class="user-info">
        <div class="date-time">{{ formattedDateTime }}</div>
        <el-avatar class="avatar" :size="50" :src="circleUrl"/>
        <el-button class="logout-button" type="danger" @click="logout">退出</el-button>
      </div>
    </div>
    <div class="side">
      <el-row class="tac">
      <el-col :span="12">
      <el-menu :default-active="def_index" @select="Select" :router="true" style="background-color: #111b35;width: 250px ">
        <el-menu-item index="/home" style="color: white; width: 250px">
          <el-icon>
            <Histogram/>
          </el-icon>
          首页
        </el-menu-item>

        <el-menu-item index="/case_warning" style="color: white; width: 250px">
          <el-icon><DeleteFilled /></el-icon>
          垃圾预警
        </el-menu-item>

        <el-menu-item index="/securityWarning" style="color: white; width: 250px">
          <el-icon>
            <Warning/>
          </el-icon>
          安全预警
        </el-menu-item>

        <el-menu-item index="/mapDetection" style="color: white; width: 250px">
          <el-icon>
            <Histogram/>
          </el-icon>
          实时检测
        </el-menu-item>
          <el-menu-item index="/devicemanagement" style="color: white; background-color: #111b35;"  >
             <el-icon>
            <Operation/>
          </el-icon>
          设备管理
          </el-menu-item>
          <el-menu-item index="/accountManager" style="color: white; background-color: #111b35;">
            <el-icon><UserFilled /></el-icon>
            负责人管理
          </el-menu-item>
      </el-menu>
        </el-col>
        </el-row>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>

</template>
<script setup>
import {Camera, DeleteFilled, Operation, UserFilled, VideoCamera, Warning} from "@element-plus/icons-vue";
import {Histogram} from "@element-plus/icons-vue";
import {ref, onMounted} from "vue";

const currentDateTime = ref(new Date());
const formattedDateTime = ref('');
import {useRouter} from 'vue-router';

const circleUrl = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png')
const router = useRouter();
const formatTime = (date) => {
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

function updateTime() {
  currentDateTime.value = new Date();
  formattedDateTime.value = formatTime(currentDateTime.value);
}

function logout() {
  router.push('/')
}

const def_index = ref('1')

// 定义一个函数Select，接收一个参数index
function Select(index) {
  // 将index存入localStorage本地缓存里面中
  localStorage.setItem('index', JSON.stringify(index))
}

// 定义一个onMounted函数，在组件挂载时执行
onMounted(() => {
  // 将localStorage中的index取出，并赋值给def_index
  def_index.value = JSON.parse(localStorage.getItem('index'))
  setInterval(updateTime, 1000);
})


</script>
<style scoped>
.top {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: #111b35;
  left: 0;
  right: 0;
  z-index: 50;
  color: white;
}

.top div:nth-child(1) {
  padding-left: 22px;
  font-size: 18px;
}

.top div:nth-child(2) {
  padding-right: 22px;
  cursor: pointer;
}

.side {
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 50px;
  width: 250px;
  height: 100vh;
  color: #000000;
  font-size: 20px;
  overflow-y: auto;
  background-color:#111b35 ;
}

.user-info {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  justify-content: space-between; /* 元素之间保持空间 */
}

.date-time {
  font-size: 14px; /* 或你需要的字体大小 */
  margin-right: 30px; /* 与下一个元素之间的间距 */
}

.avatar {
  /* 如果el-avatar组件内部没有设置高度，可以在这里设置 */
  height: 50px; /* 保持与:size属性一致 */
  margin-right: 20px; /* 与下一个元素之间的间距 */
}

.logout-button {
  /* 如果需要，可以在这里覆盖或添加el-button的样式 */
  height: 32px; /* 假设按钮的高度是32px，与avatar保持一致可能需要调整 */
  padding: 0 10px; /* 根据需要调整内边距 */
}

.main {
  height: 92vh;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 70px;
  left: 250px;
  right: 0;
  margin: 0;
  max-width: 100%;
  background-color: #D4D7DE;
}

</style>