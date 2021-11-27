/**
 * vuex登录认证模块
 * created by 李永晖 on 2021/11/27
 */

import {login} from '../../api/auth.js';

import {cookie, key} from '../../utils/cookie.js';

const state = {
    userInfo:cookie.get(key.userInfokey) ? JSON.parse(cookie.get(key.userInfokey)):null,
    accessToken: cookie.get(key.accessTokenKey),
    refreshToken: cookie.get(key.refreshTokenKey)
}

const mutations = {

    // 设置用户状态
    SET_USER_STATE(){
       
    },

    // 重置用户状态
    RESET_USER_STATE(){

    }
}


const actions = {


    UserLogin(data){
        const {username,password} = data;
        login({username:username,password:password}).then(
            response =>{
                console.log(response + '-------');
            }
        )
    }
}

export default{
    state,
    mutations,
    actions
}