<template>
  <div class="mon">
    <div class="first">
      <el-row :gutter="16" style="width:100%; height:100%">
        <el-col :span="6" style="padding-right: 20px;padding-left:0; border-radius: 20px; ">
          <div class="statistic-car" style="background-color: #8891f2">
            <el-statistic :value="statisticValue" value-style="font-size: 30px;color: white;margin-top: 10px;"
                          style="text-align: center;">
              <template #title>
                <div style="display: inline-flex; align-items: center ;font-size: 30px;color: white">
                  今日活跃
                  <el-tooltip
                      effect="dark"
                      content="今日活跃人流统计"
                      placement="top"
                  >
                    <el-icon style="margin-left: 4px" :size="20">
                      <Warning/>
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>


          </div>
        </el-col>
        <el-col :span="6" style="padding-right: 0;padding-left:0; border-radius: 20px;  ">
          <div class="statistic-car" style="background-color: #bc8cee">
            <el-statistic :value="statisticValue1" value-style="font-size: 30px;color: white;margin-top: 10px;"
                          style="text-align: center;color: white">
              <template #title>
                <div style="display: inline-flex; align-items: center;font-size: 30px;color: white">
                  当月活跃
                  <el-tooltip
                      effect="dark"
                      content="当月活跃人流统计"
                      placement="top"
                  >
                    <el-icon style="margin-left: 4px" :size="20">
                      <Warning/>
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>
          </div>
        </el-col>
        <el-col :span="6" style="padding-right: 0;padding-left: 20px; border-radius: 20px; ">
          <div class="statistic-car" style="background-color: #ffa79a">
            <el-statistic :value="statisticValue2" value-style="font-size: 30px;color: white;margin-top: 10px;"
                          title="New transactions today"
                          style="text-align: center;color: white">
              <template #title>
                <div style="display: inline-flex; align-items: center;font-size: 30px;color: white">
                  溺水预警
                </div>
              </template>
            </el-statistic>
          </div>
        </el-col>
        <el-col :span="6" style="padding-right: 0;padding-left: 20px; border-radius: 20px; ">
          <div class="statistic-car" style="background-color: #23ccf1">
            <el-statistic :value="statisticValue3" value-style="font-size: 30px;color: white;margin-top: 10px;"
                          title="New transactions toda"
                          style="text-align: center;color: white">
              <template #title>
                <div style="display: inline-flex; align-items: center;font-size: 30px;color: white">
                  垃圾检测数量
                </div>
              </template>
            </el-statistic>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="thirst">
      <div class="warning-container">
          <h2>待办事项 </h2>
        <ul class="warning-list">
          <el-scrollbar style="height: 60vh;">
            <li class="warning-item"
                v-for="(item,index) in markers" :key="index"
            >
              <el-button class="full-width-button" plain @click="open(item)" style="height: 50px">
                <el-icon style="color: red">
                  <WarnTriangleFilled/>
                </el-icon>
                {{ item }}出现安全预警
              </el-button>
            </li>
          </el-scrollbar>
        </ul>
      </div>

      <div class="thirst_second">
        <div ref="char"
             style="width: 100%; height: 49%; background-color: white;  border-radius: 20px; "></div>

        <div ref="chartDom"
             style="width: 100%; height: 49%; background-color: white; border-radius: 20px; margin-top: auto;"></div>
      </div>

      <div class="thirst_third">
        <div class="icon" id="main">
          <dv-border-box-1></dv-border-box-1>
        </div>

        <div class="weather-container">
          <iframe width="280" scrolling="no" height="300" frameborder="0" allowtransparency="true"
                  src="https://i.tianqi.com?c=code&id=55&icon=1&py=zhengzhou&site=12"></iframe>
        </div>
      </div>
    </div>
  </div>


</template>
<script setup>
import {onMounted, ref, watch} from "vue";
import * as echarts from "echarts";
import {Warning, WarnTriangleFilled} from "@element-plus/icons-vue";
import {ElMessage, ElMessageBox} from "element-plus";
import {vMiniWeather, vMiniWeatherIcon} from 'vue3-mini-weather'
import {io} from "socket.io-client";

// 天气
(function (a, h, g, f, e, d, c, b) {
  b = function () {
    d = h.createElement(g);
    c = h.getElementsByTagName(g)[0];
    d.src = e;
    d.charset = "utf-8";
    d.async = 1;
    c.parentNode.insertBefore(d, c)
  };
  a["SeniverseWeatherWidgetObject"] = f;
  a[f] || (a[f] = function () {
    (a[f].q = a[f].q || []).push(arguments)
  });
  a[f].l = +new Date();
  if (a.attachEvent) {
    a.attachEvent("onload", b)
  } else {
    a.addEventListener("load", b, false)
  }
}(window, document, "script", "SeniverseWeatherWidget", "//cdn.sencdn.com/widget2/static/js/bundle.js?t=" + parseInt((new Date().getTime() / 100000000).toString(), 10)));
window.SeniverseWeatherWidget('show', {
  flavor: "slim",
  location: "WW0V9QP93VS8",
  geolocation: false,
  language: "zh-Hans",
  unit: "c",
  theme: "auto",

  token: "792fcdfa-c54a-4c64-ad84-a12bf6617ff9",
  hover: "enabled",
  container: "tp-weather-widget"
})
// socket连接
const socket = io('http://127.0.0.1:5000');
socket.on('connect', () => {
  console.log('首页连接成功');
});

socket.on('disconnect', () => {
  console.log('首页连接断开');
});
// 待办事项
const value2 = ref(true)
const markers = ref([]);
socket.on('out_warning', (data) => {
  markers.value = data;
});
const open = (item) => {
  ElMessageBox.confirm(
      item + '地点出现预警，请立即处置',
      '警告',
      {
        confirmButtonText: '取消预警',
        cancelButtonText: '通知预警',
        type: 'warning',
      }
  )
      .then(() => {
        socket.emit('cancelWarning', item)
        ElMessage({
          type: 'success',
          message: '已取消预警',
        })
      })
      .catch(() => {
        socket.emit('sendWarning', item)
        ElMessage({
          type: 'success',
          message: '已通知预警',
        })
      })
}
//仪表盘
const myChart1 = ref(null);
let option1;
onMounted(() => {
  myChart1.value = echarts.init(document.getElementById('main'));
  option1 = {
    title: {
      text: '人流预警',
      left: 'center'
    },
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        progress: {
          show: true
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}'
        },
        data: [
          {
            value: 60,
            name: 'SCORE'
          }
        ]
      }
    ]
  };
  myChart1.value.setOption(option1);
});
setInterval(() => {
  myChart1.value.setOption({
    series: [
      {
        data: [
          {
            value: Math.round((statisticValue.value / 60000) * 100)
          }
        ]
      }
    ]
  });
}, 1000)
// 警告预警
const flag = ref(false);

function checkFlagAndShowMessage() {
  if (flag.value) {
    ElMessage({
      message: '警告，出现溺水预警',
      type: 'warning',
      offset: 20,
    });
  }
}

watch(flag, (newValue) => {
  if (newValue) {
    checkFlagAndShowMessage();
  }
});
// 第一行数据更新
const statisticValue = ref(0); // 初始值
const statisticValue1 = ref(0); // 初始值
const statisticValue2 = ref(0); // 初始值
const statisticValue3 = ref(0); // 初始值
//更新数据
function update(data) {
  statisticValue.value = data.data[1]
  statisticValue1.value = data.data[2]
  statisticValue3.value = data.data[6]
  if (data.data[3] > statisticValue2.value) {
    statisticValue2.value = data.data[3]
    flag.value = true;
  } else {
    flag.value = false;
  }
}

onMounted(() => {
  socket.on('server_data', (data) => {
    update(data)
  });

})
// 第二图表
const char = ref(null);
let my_Chart = null;
let xAxisData = [];
let seriesData = [];
let isDataLoaded = false;
let x = null
let y = null
let x_1 = null
let y_1 = null
onMounted(() => {

  my_Chart = echarts.init(char.value);
  // 基于准备好的dom，初始化echarts实例
  socket.emit('history_warning')
  my_Chart.showLoading();
  socket.on('send_history_warning', (data) => {
    data.forEach(item => {
      xAxisData.push(item.date);
      seriesData.push(item.value);
    });
    x = xAxisData;
    y = seriesData;
    x_1 = x.reverse()
    y_1 = y.reverse()
    my_Chart.hideLoading();
    my_Chart.setOption({
      title: {
        text: '历史预警统计图',
        textStyle: {
          textAlign: 'center', // 水平居中
          textVerticalAlign: 'middle' // 垂直居中
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: x_1,
        axisLabel: {
          interval: 0,
          formatter: function (value, index) {
            return value.substring(6, 10); // 只显示日期的前10个字符
          }
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: y_1,
        type: 'line',
        smooth: true,
        label: {
          show: false,
          position: 'top',
          textStyle: {
            fontSize: 20
          }
        },
        emphasis: {
          label: {
            show: true
          }
        },
        lineStyle: {
          normal: {
            color: '#ffa79a',
            width: 4,
            type: 'solid'
          }
        }
      }]
    });

  });
  if (isDataLoaded === true) {
    alert('数据')
    update1();
  }
});

function update1() {
  if (xAxisData.length === 0 || seriesData.length === 0) {
    alert('暂无数据')
  } else {
    alert('数据')
  }


}

// 第三个图表
const chartDom = ref(null);
let myChart = null;
let date = [];
let data = [];
onMounted(() => {
  myChart = echarts.init(chartDom.value);
});
socket.on('server_data', (message) => {
  date.push(message.data[0])
  data.push(message.data[3])
  updateChart()
});
socket.on('table', (message) => {
  console.log(message.data[0])
});

function updateChart() {
  // 设置图表的配置项和数据

  myChart.setOption({
    title: {
      text: '实时预警统计图',
      textStyle: {
        textAlign: 'center', // 水平居中
        textVerticalAlign: 'middle' // 垂直居中
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date
    },
    yAxis: {
      boundaryGap: [0, '90%'],
      type: 'value'
    },
    series: [
      {
        name: '成交',
        type: 'line',
        smooth: true,
        symbol: 'none',
        stack: 'a',
        areaStyle: {
          normal: {}
        },
        data: data,
        label: {
          show: false,
          position: 'top',
          textStyle: {
            fontSize: 20
          }
        },
        emphasis: {
          label: {
            show: true
          }
        }
      }
    ]
  });
}
</script>

<style scoped>
.mon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-left: 8px;
}

.first {
  width: 100%;
  height: 19%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.el-statistic__value {
  color: white;
}

.statistic-car {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  font-size: 40px;
  background-color: var(--el-bg-color-overlay);
}


.thirst {
  width: 100%;
  height: 78%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

.warning-container {
  position: relative;
  width: 35%;
  height: 100%;
  margin-right: 20px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.widget {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  left: 0;

}

.warning-container h2 {
  color: #333;
  margin-bottom: 15px;
}

.warning-list {
  list-style: none;
  padding: 0;
  max-height: 400px;
}

.warning-item {
  padding: 10px 10px;
  border-bottom: 1px solid #e6e9ed;
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 10px; /* 或其他适合您需求的间距值 */
  overflow: hidden; /* 隐藏溢出的内容 */
}

.warning-item:last-child {
  border-bottom: none;
}

.thirst_first h2 {
  margin-top: 0;
}

.full-width-button {
  width: 100%;
  /* 可以根据需要添加其他样式，比如高度、内边距等 */
}


.thirst_second {
  width: 40%;
  height: 100%;
  margin-right: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}

.thirst_third {
  display: flex;
  width: 24%;
  height: 100%;
  border-radius: 20px;
  flex-direction: column;

}

.icon {
  height: 49%;
  width: 100%;
  background-color: white;
  border-radius: 20px;
}

.weather-container {
  width: 100%;
  height: 49%;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex-direction: column; /* 垂直排列子元素*/
  box-shadow: white;
  border-radius: 20px;
  margin-top: auto;
  margin-bottom: 0;
  background-color: white;
  /*background-image: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%); */
}

#tp-weather-widget .sw-container {
  left: unset;
  right: 10px;
  top: unset;
  bottom: 10px;
}
</style>