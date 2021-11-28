<!--
*  @FileDescription: 注册表单组件
*  @Author: 李永晖
*  @CreatedDate:2021/11/24
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/11/24
-->

<template>
    <div class="form_body r180">
        <form @submit.prevent="registerSubmit">
            <input type="text" v-model="registerData.username" placeholder="输入用户名..." autocomplete="off">
            <input type="password" v-model="registerData.password" placeholder="6-30位密码，可用数字/字母/字符组合" autocomplete="off">
            <input type="password" v-model="registerData.rePassword" placeholder="确认密码">
            <div class="err_message">{{registerErrMessage}}</div>
            <div class="agree">
                <input type="checkbox" id="agree1" v-model="registerData.check">
                <label for="agree1">我已阅读并同意</label><a href="javascript:;" @click="agreement == true">《用户协议》</a>
            </div>
            <input type="submit" value="注册" class="btn">
        </form>
     </div>
</template>

<script>
import {register} from '../../api/auth.js';
export default {
    name:'RegisterForm',
    data(){
        return{
            registerErrMessage:'',
            redirecturl:'',
            registerData:{
                username:'',
                password:'',
                rePassword:'',
                check:false
            },

        }
    },
    methods:{
        registerSubmit(){
            register(this.registerData).then(
                response =>{
                    console.log(response);
                }
            )
        }
    }
}
</script>

<style scope>
    input[type=submit] {
  width: 100%;
  background-color: #EF6520;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>