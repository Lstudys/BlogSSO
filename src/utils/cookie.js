/**
 * cookie相关
 * created by 李永晖 on 2021/11/26
 */

import Cookies from "js-cookie";

export const key = {
    accessTokenKey: 'accessToken',
    refreshTokenKey: 'refreshToken',
    userInfokey: 'userInfo'
}

class CookieClass {
    constructor(){
        this.domain = process.env.VUE_APP_COOKIE_DOMAIN;
        this.expireTime = 30;
    }
    set(key,value,expires,path = '/'){
        CookieClass.checkKey(key);
        Cookies.set(key,value,{expires: expires || this.expireTime, path:path,domain:this.domain});
    }
    get(key){
        CookieClass.checkKey(key);
        return Cookies.get(key);
    }
    remove(key,path = '/'){
        CookieClass.checkKey(key);
        Cookies.remove(key,{path:path,domain:this.domain});
    }
    getAll(){
        Cookies.get();
    }

    static checkKey(key){
        if(!key){
            throw new Error('没有找到cookie!');
        }
        if(typeof key === Object){
            throw new Error('key不能是一个对象!');
        }
    }
}


export const cookie = new CookieClass();