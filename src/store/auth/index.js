/**
 * vuex登录认证模块
 * created by 李永晖 on 2021/11/28
 */

import {login,userLoginout,refreshToken} from '../../api/auth.js';

import {cookie, key} from '../../utils/cookie.js';

// 初始化时获取cookie信息
const state = {
    userInfo:cookie.get(key.userInfokey) ? cookie.get(key.userInfokey) : null,
    accessToken: cookie.get(key.accessTokenKey) ? cookie.get(key.accessTokenKey) : null,
    refreshToken: cookie.get(key.refreshTokenKey) ? cookie.get(key.refreshTokenKey) : null
}

const mutations = {

    // 设置用户状态
    SET_USER_STATE(states = state,{userInfo,access_token,refresh_token}){
       states.userInfo = userInfo;
       states.accessToken = access_token;
       states.refreshToken = refresh_token;

       // 把userInfo转换为JSON对象，否则存储时会乱码
       cookie.set(key.userInfokey,JSON.stringify(userInfo));
       cookie.set(key.accessTokenKey,access_token);
       cookie.set(key.refreshTokenKey,refresh_token);
    //    console.log('user',{...cookie.get(key.userInfokey)});
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

    // 登录
    userLogin({commit},userData){
        const {username,password} = userData;
        login({username:username,password:password}).then(
            response =>{
                const {data} = response;
                commit('SET_USER_STATE',data);
                console.log('userinfo',data.userInfo);
            }
        ).catch(error =>{
            console.log(error);
            commit('RESET_USER_STATE')
        })
    },

    // 退出登录
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
    },

    // 刷新访问令牌
    refreshToken({commit,state}){
       return new Promise((resolve,reject)=>{
           if(!state.refreshToken){
               reject();
           }
           refreshToken(state.refreshToken).then(
            response =>{
                const {data} = response;
                commit('SET_USER_STATE',data);
                // console.log('刷新完成');
                resolve();
            }
        ).catch(
            error =>{
                reject();
                console.log(error);
            }
        )
       });
    }
}

export default{
    state,
    mutations,
    actions
}