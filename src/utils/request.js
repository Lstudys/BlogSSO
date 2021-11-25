/**
 * 封装Ajax模块
 * created by 李永晖 on 2021/11/25
 * Lasted LastEdit by 李永晖 on 2021/11/25
 */

import axios from 'axios';

const service = axios.create({
    baseURL:'/api',
    timeout:5000
})

service.interceptors.request.use(
    config =>{
        return config;
    },
    error =>{
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    response =>{
        return response.data;
    },
    error =>{
        return Promise.reject(error);
    }
)

export default service;