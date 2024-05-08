<template>
  <div class="map">
  <div class="map-1">
    <el-input v-model.number="label.lng" style="width: 350px" placeholder="Please input" > <template #prepend>lng:</template>
    </el-input>
    <el-input v-model.number="label.lat" style="width: 350px" placeholder="Please input" > <template #prepend>lat:</template>
    </el-input>
  </div>
  <div class="map-2">
    <div class="first">
      <baidu-map class="map"
                 :center="{lng: 113.8804, lat: 34.7853}"
                 :zoom="16"
                 :scroll-wheel-zoom="true"
                 style="height: 100%;width: 100%; border-radius: 10px;"
                 @moving="syncCenterAndZoom" @moveend="syncCenterAndZoom">
        <bm-polygon :path="polygonPath" stroke-color="blue" :stroke-opacity="0.3" :stroke-weight="8"/>
        <bm-marker
            v-for="(marker, index) in markers"
            :key="marker.name"
            :position="marker.position"
            :dragging="false"
            :icon="{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif',
                   size: {width: 300, height: 158}}"
            @click="handleMarkerClick(marker.name)"
        ></bm-marker>
      </baidu-map>
    </div>
    <div class="second">
      <img ref="videoStream" :src="videoSrc" style="width: 100%;
  height: 100%; ">
    </div>

  </div>
  </div>


</template>

<script setup>
import {BaiduMap, BmMarker, BmPolygon} from 'vue-baidu-map-3x'
import {nextTick, onMounted, ref} from "vue";
import {io} from "socket.io-client";
const socket = io('http://127.0.0.1:5000');
const markers = ref([
]);
onMounted(() => {
  socket.emit('map');
  socket.on('map_button', (data) => {
    console.log(data);
    data.forEach(device => {
      markers.value.push({
        name: device[0],
        position: { lng: parseFloat(device[1]), lat: parseFloat(device[2]) }
      });
    });

  });
});


const label = ref({lng: '', lat: ''});
const syncCenterAndZoom = (e) => {
  const {lng, lat} = e.target.getCenter();
  nextTick(() => {
    label.value.lng = lng;
    label.value.lat = lat;
    localStorage.setItem('lng', parseFloat(lng));
    localStorage.setItem('lat', parseFloat(lat));
  })
};
const polygonPath = ref([
  {lng: 113.890351802, lat: 34.7891652239},
  {lng: 113.872885277, lat: 34.78885005},
  {lng: 113.87244923, lat: 34.78081246},
  {lng: 113.88198213, lat: 34.78260015},
  {lng: 113.89016711, lat: 34.78478747},
]);
const videoSrc = ref('');

const handleMarkerClick = (name) => {
  if (name === '北门')
    videoSrc.value = 'http://127.0.0.1:5000/person';
  else
    videoSrc.value = 'http://127.0.0.1:5000/video/'+name;
}

</script>
<style>
.map {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  flex-direction: column;
}

.map-1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  border-radius: 10px;
  background-color: white;
}

.map-2 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 90%;
  border-radius: 10px;
  margin-top: 10px;
}

.first {
  height: 100%;
  width: 50%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.second {
  height: 100%;
  width: 50%;
  border-radius: 10px;
   background-color: white;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中（如果.second的高度被设置） */
}

</style>