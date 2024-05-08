import {createWebHashHistory} from "vue-router";
import {createRouter} from "vue-router";
//引入组件
import accountManager from '../pages/accountManager.vue'
import mapDetection from '../pages/mapDetection.vue'
import index from '../pages/index.vue'
import devicemanagement from '../pages/devicemanagement.vue'
import securityWarning from '../pages/securityWarning.vue'
import underwaterEnvironment from '../pages/underwaterEnvironment.vue'
import home from '../pages/home.vue'
import common from "@/components/common.vue";
import login from "@/components/login.vue";
import register from "@/components/register.vue";
import case_warning from "@/pages/case_warning.vue";

const routes = [
    {
        //     登录注册
        path: '/',
        redirect: '/login',

    },
    {
        path: '/common',
        name: 'common',
        component: common,
        children: [
            {
                //  登录
                path: '/login',
                name: 'login',
                component: login
            },
            {
                //  注册
                path: '/register',
                name: 'register',
                component: register
            }
        ]
    },
    {
        // 主页面
        path: '/index',
        name: 'index',
        component: index,
        redirect: '/home',
        //     二级路由
        children: [
            {
                //  主页
                path: '/home',
                name: 'home',
                component: home
            },
            // 测试
            {
                path: '/underwaterEnvironment',
                name: 'underwaterEnvironment',
                component: underwaterEnvironment
            },
            {
                // 地图检测
                path: '/mapDetection',
                name: 'mapDetection',
                component: mapDetection
            },
            // 实时检测
            {
                path: '/accountManager',
                name: 'accountManager',
                component: accountManager
            },
            // 垃圾预警
            {
                path: '/case_warning',
                name: 'case_warning',
                component: case_warning
            },

            // 安全预警
            {
                path: '/securityWarning',
                name: 'securityWarning',
                component: securityWarning
            },
            // 设备管理
            {
                path: '/devicemanagement',
                name: 'devicemanagement',
                component: devicemanagement
            },
        ]
    },

]
// eslint-disable-next-line no-unused-vars
const router = createRouter({
    history: createWebHashHistory(),
    routes,

})
export default router