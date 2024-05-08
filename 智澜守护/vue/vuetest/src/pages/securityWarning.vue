<template>
  <div style="width: 100%; height: 100%;background-color: white">
    <el-table :data="tableData" border style="width: 100%">
    <el-table-column  prop="id" label="序号"   align="center" style="width: 10%"/>//设备名称
    <el-table-column prop="device" label="设备名称"  align="center" style="width: 10%"   />//设备名称
    <el-table-column prop="time" label="时间"  align="center" style="width: 10%" />//时间
    <el-table-column prop="place" label="地点"  align="center" style="width: 10%"/>
    <el-table-column prop="image" label="检测预警"  align="center">
    <template #default="scope">
      <el-image :src="scope.row.image" :alt="scope.row.device + ' 检测预警图'" style="width: 100px; height: 100px;" />
    </template>
  </el-table-column>
    <el-table-column  label="状态" style="width: 10%" align="center">
      <template #default = "scope">
         <el-button type="warning" @click="handleClick(scope.row.place)">通知预警</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>

</template>

<script setup>
import {io} from "socket.io-client";
import {onMounted, onUnmounted, ref} from "vue";
import {ElMessage} from "element-plus";
const tableData = ref([
])
const handleClick = (data) => {
          socket.emit('sendWarning', data)
        ElMessage({
          type: 'success',
          message: '已通知预警',
        })
}
const socket = io('http://127.0.0.1:5000');
onUnmounted(() => {
  socket.off('connect', () => {
});
})
onMounted(() => {
   socket.on('connect', () => {
});
})

socket.on('security_warning', (data) => {
      tableData.value=data;
  });

</script>