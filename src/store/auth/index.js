/**
 * vuex登录认证模块
 * created by 李永晖 on 2021/11/28
 */

import {login,userLoginout} from '../../api/auth.js';

import {cookie, key} from '../../utils/cookie.js';

// 初始化时获取cookie信息
const state = {
    userInfo:cookie.get(key.userInfokey) ? cookie.get(key.userInfokey):null,
    accessToken: cookie.get(key.accessTokenKey),
    refreshToken: cookie.get(key.refreshTokenKey)
}

const mutations = {

    // 设置用户状态
    SET_USER_STATE(states = state,{userInfo,access_token,refresh_token}){
        console.log(userInfo);
       states.userInfo = userInfo;
       states.accessToken = access_token;
       states.refreshToken = refresh_token;

       cookie.set(key.userInfokey,userInfo);
       cookie.set(key.accessTokenKey,access_token);
       cookie.set(key.refreshTokenKey,refresh_token);
    },

    // 重置用户状态
    RESET_USER_STATE(states = state){

        states.userInfo = null;
        states.accessToken = null;
        states.refreshToken = null;

        cookie.remove(key.userInfokey);
        cookie.remove(key.accessTokenKey);
        cookie.remove(key.refreshTokenKey);
    }
}


const actions = {


    userLogin({commit},userData){
        const {username,password} = userData;
        login({username:username,password:password}).then(
            response =>{
                const {data} = response;
                // console.log(JSON.stringify(response));
                commit('SET_USER_STATE',data);
            }
        ).catch(error =>{
            console.log(error);
            commit('RESET_USER_STATE')
        })
    },

    loginout({commit,state},redirecturl){
        userLoginout(state.accessToken).then(
            response =>{
                commit('RESET_USER_STATE');
                window.location.href = redirecturl;
                console.log(response);
            }
        ).catch(
            error =>{
                console.log(error);
            }
        )
    }
}

export default{
    state,
    mutations,
    actions
}