import request from '../utils/request.js';


const header = {
    'Content-Type':'application/x-www-form-urlencoded'
}


const auth = {
    username:'henu-lyh',
    password:'lyh'
}

export function login(data){
    // 相当于执行了axios.post，返回一个promise对象
    return request({
        header,
        auth,
        url:'login',
        method:'POST',
        params:data
    })
}