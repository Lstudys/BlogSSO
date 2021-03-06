/**
 * 认证的接口
 * created by 李永晖 on 2021/11/28
 */

import request from '../utils/request.js';


const header = {
    'Content-Type':'application/x-www-form-urlencoded'
}


const auth = {
    username:'henu-lyh',
    password:'lyh'
}

export function login(data){
    // 相当于执行了axios.post()，返回一个promise对象
    return request({
        header,
        auth,
        url:'login',
        method:'POST',
        params:data
    })
}


export function testRegisterUsername(username){
    return request({
        auth,
        url:`register/${username}`,
        method:'GET'
    })
}


export function register(data){
    return request({
        header,
        auth,
        url:'register',
        method:'POST',
        params:data
    })
}


export function userLoginout(data){
    return request({
        header,
        auth,
        url:'loginout',
        method:'GET',
        params:data
    })
}

export function refreshToken(refreshToken){
    return request({
        header,
        auth,
        url:'refreshToken',
        method:'GET',
        params:{
            refreshToken
        }
    })
}