<template>
  <div class="large">
    <div class="first"><h1>添加设备</h1>
      <el-form :inline="true" :model="form"  class="form-inline">
        <el-form-item label="设备地址" class="form-item-inline">
          <el-input v-model="form.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="经度" class="form-item-inline">
          <el-input v-model="form.lng" clearable></el-input>
        </el-form-item>
        <el-form-item label="纬度" class="form-item-inline">
          <el-input v-model="form.lat" clearable></el-input>
        </el-form-item>
        <el-form-item label="地点" class="form-item-inline">
          <el-input v-model="form.place" clearable></el-input>
        </el-form-item>
        <el-form-item label="负责人" class="form-item-inline">
          <el-select v-model="form.account" placeholder="请选择负责人" clearable style="width: 110px">
      <el-option
        v-for="item in options"
        :key="item"
        :value="item">
      </el-option>
    </el-select>
        </el-form-item>
        <el-form-item class="form-item-inline">
          <el-button type="primary" @click="addDevice">添加</el-button>
        </el-form-item>
      </el-form></div>
    <div class="second">
      <h1>设备信息</h1>
      <el-table :data="devices" stripe border style="width: 100%;height: 100%">
        <el-table-column prop="name" label="摄像头名称" align="center" ></el-table-column>
        <el-table-column prop="place" label="地点" align="center"></el-table-column>
        <el-table-column prop="account" label="负责人" align="center"></el-table-column>
        <el-table-column  label="操作" align="center">
          <template #default="scope">
        <el-button
          size="small"
          type="danger"
          @click="DeleteDevice(scope.row)"
        >
          删除
        </el-button>
      </template></el-table-column>
      </el-table></div>

  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from 'vue';
import {io} from "socket.io-client";
const socket = io('http://127.0.0.1:5000');
onMounted(() => {
   form.value.lng=localStorage.getItem('lng');
  form.value.lat=localStorage.getItem('lat');
   socket.on('connect', () => {
  console.log('设备管理页连接成功');
});
   socket.emit('show');
   socket.emit('account_person_device');
})
// 添加设备信息

const options = ref([]);
const form = ref({
  name: ' ',
  lng: '',
  lat: '',
  place: '',
  account: ''
});

const devices = ref([
]);

socket.on('data_device', (data) => {
      devices.value=data;
  });
socket.on('send_account_device_name', (data) => {
  options.value = data;
  });
function DeleteDevice(row) {
   socket.emit('delete',row.name);
   socket.on('data_device', (data) => {
      devices.value=data;
  });
}
const addDevice = () => {
  if (form.value.name && form.value.lng&& form.value.lat&& form.value.place && form.value.account) {
    socket.emit('add_device', {
      name: form.value.name,
      lng: form.value.lng,
      lat: form.value.lat,
      place: form.value.place,
      account: form.value.account
    });
    form.value.name = '';
    form.value.lng = '';
    form.value.lat = '';
    form.value.place = '';
    form.value.account = '';
    // 如果需要，可以调用后端API保存设备信息
  } else {
    alert('请填写完整信息')
    // 弹出警告或执行其他逻辑
  }
};

</script>

<style scoped>
.large {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.first{
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.second{
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 0;
}


</style> T