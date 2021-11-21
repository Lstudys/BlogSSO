/**
 * 路由管理
 * created by 李永晖 on 2021/11/19
 * Lasted LastEdit by 李永晖 on 2021/11/21
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Auth from '../views/auth/index.vue';

const routes = [
    {
        path:'/',
        component:Auth,
    }
]

const router = new VueRouter({
    mode:'hash',
    routes
});

export default router;