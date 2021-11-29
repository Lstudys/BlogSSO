/**
 * 路由管理
 * created by 李永晖 on 2021/11/19
 * Lasted LastEdit by 李永晖 on 2021/11/29
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Auth from '../views/auth/index.vue';
import LoginForm from '../components/login/index.vue';
import RegisterForm from '../components/register/index.vue';
import Refresh from '../views/auth/refresh.vue';

import store from '../store/index.js';

const routes = [
    {
        path:'/',
        component:Auth,
        redirect:'/login',
        children:[
            {
                path:'login',
                component:LoginForm
            },
            {
                path:'register',
                component:RegisterForm
            }
        ]
    },
    {
        path:'/refresh',
        component:Refresh
    }
]

const router = new VueRouter({
    mode:'hash',
    routes
});

router.beforeEach((to,from,next)=>{
    if(to.path === '/loginout'){
        store.dispatch('loginout',to.query.redirecturl);
    }else{
        next();
    }
})

export default router;