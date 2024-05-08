<template>
  <div class="form-container">
      <el-form :model="form" :rules="rules" ref="formRef"  >
        <div class="form-items-container">

    <h3 align="center">欢迎登录</h3>
    <el-form-item label="账号" prop="username" >
      <el-input v-model="form.username" placeholder="请输入账号"></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="handleSubmit(form.username,form.password)">登录</el-button>
      <el-button @click="Reset('form')">重置</el-button>
    </el-form-item>
    <p class="no">没有账号？<el-link type="primary" @click="goToRegister">立即注册</el-link></p>
          </div>
  </el-form>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import {io} from "socket.io-client";
import {useRouter} from 'vue-router';
import router from "@/router";
import {ElMessage} from "element-plus";
const form = ref({
  username: '',
  password: ''
});

const rules = {
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
};
const socket = io('http://127.0.0.1:5000');

const formRef = ref(null);
// 监听来自服务器的消息
socket.on('login_Success', () => {
   ElMessage({
    message: '登录成功',
    type: 'success',
  })
   router.push('/index')
});

socket.on('login_Error', () => {
  ElMessage.error('登录失败，请重新输入账号密码')
});
// 点击登录
const handleSubmit = (a,b) => {
  socket.emit('login', { username: a, password: b });
};

const Reset = () => {
  formRef.value.resetFields();
};
const goToRegister = () => {
  router.push('/register');
};
</script>


<style scoped>
.form-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-items-container {
  display: flex;
  flex-direction: column; /* 垂直排列表单项 */
  align-items: center; /* 垂直居中 */
  /* 如果你想要水平居中（比如对于单行表单），你可以设置 justify-content: center; */
}
h3 {
        margin-bottom: 20px;
      }
      .no {
        cursor: pointer;
        margin-top: 30px;
        text-align: center;
        font-size: 12px;
        color: #828282;
      }
</style>