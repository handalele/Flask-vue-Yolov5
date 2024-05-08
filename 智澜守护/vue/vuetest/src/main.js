import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from './router/index.js'
import axios from 'axios'
import dataV from '@jiaminghi/data-view'
import BaiduMap from 'vue-baidu-map-3x'

const app = createApp(App)
app.config.globalProperties.$api = axios
app.use(router)
app.use(dataV)
app.use(BaiduMap, {
  ak: 'X4lyzrXIbohwG9RqyAKMkJGYAqvOGD7v'
});
app.use(ElementPlus, {locale: zhCn})
app.mount('#app')
