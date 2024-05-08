<template>
  <div class="big">
    <h1>负责人管理</h1>

    <!-- 第一个模块：添加负责人 -->
    <div class="big-1">
      <h2>添加负责人</h2>
      <el-form :inline="true" :model="newResponsiblePerson" ref="form" label-width="120px">
        <el-form-item label="姓名">
          <el-input v-model="newResponsiblePerson.name"></el-input>
        </el-form-item>
        <el-form-item label="电话号码">
          <el-input v-model="newResponsiblePerson.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addResponsiblePerson">添加</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 第二个模块：显示所有负责人 -->
    <div class="big-2">
      <h2>所有负责人</h2>
      <el-table :data="responsiblePersons" style="width: 100%;height: 100%">
        <el-table-column prop="responsible_name" label="姓名"></el-table-column>
        <el-table-column prop="responsible_phone" label="电话号码"></el-table-column>
        <el-table-column prop="locations" label="负责区域"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {io} from "socket.io-client";
const socket = io('http://127.0.0.1:5000');


// 新的负责人信息
const newResponsiblePerson = ref({
  name: '',
  phone: '',
  area: ''
});
// 模拟的负责人数据
const responsiblePersons = ref([
]);
onMounted(() => {
   socket.emit('account_person');

})
socket.on('data_person', (data) => {
      console.log(data);
      responsiblePersons.value=data;
  });
// 添加负责人的方法
const addResponsiblePerson = () => {
 if (newResponsiblePerson.value.name && newResponsiblePerson.value.phone) {
    socket.emit('add_person', {
      name: newResponsiblePerson.value.name,
      phone: newResponsiblePerson.value.phone
    });
    newResponsiblePerson.value.name = '';
    newResponsiblePerson.value.phone = '';
  } else {
    alert('请填写完整信息')
  }
};
</script>

<style scoped>
.big{
    width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.big-1{
    width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.big-2{
    width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 0;
}
/* 这里可以添加你的样式 */
</style>