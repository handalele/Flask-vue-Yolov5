<template>
  <div class="form-container">
      <el-form :model="form" :rules="rules" ref="formRef"  >
        <div class="form-items-container">

    <h3 align="center">注册</h3>
    <el-form-item label="账号" prop="username" >
      <el-input v-model="form.username" placeholder="请输入账号"></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
    </el-form-item>

          <el-form-item label="授权码" prop="password">
      <el-input type="password" v-model="form.allow" placeholder="请输入授权码"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="Submit(form.username,form.password,form.allow,form.allow)">注册</el-button>
      <el-button @click="handleReset('form')">重置</el-button>
    </el-form-item>
    <p class="no"><el-link type="primary" @click="goTologin">前往登录</el-link></p>
          </div>
  </el-form>
  </div>

</template>


<script setup >
import {io} from "socket.io-client";
import {ref} from "vue";
import router from "@/router";
import {ElMessage} from "element-plus";
const form = ref({
  username: '',
  password: '',
  allow: ''
});
const socket = io('http://127.0.0.1:5000');

const formRef = ref(null);


socket.on('register_Success', () => {
   ElMessage({
    message: '注册成功',
    type: 'success',
  })
});

socket.on('register_Error', () => {
  ElMessage.error('注册失败，请重新输入')
});
// 点击注册
const Submit = (a,b,c) => {
  socket.emit('register', { username: a, password: b ,allow:c });
};
const handleReset = () => {
  formRef.value.resetFields();
};
const goTologin = () => {
  router.push('/login');
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