<!--
*  @FileDescription: 登录表单组件
*  @Author: 李永晖
*  @CreatedDate:2021/11/24
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/11/24
-->


<template>
    <div class="form_body">
        <form @submit.prevent="loginSubmit">
            <input type="text" v-model="loginData.username" placeholder="用户名..." autocomplete="off">
            <input type="password" v-model="loginData.password" placeholder="密码..." autocomplete="off">
            <div class="err_message">{{loginErrMessage}}</div>
            <input type="submit" v-if="subState" disabled="disabled" value="登录中..." class="btn">
            <input type="submit" v-else value="登录" @submit="loginSubmit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name:'LoginForm',
    mounted() {
        console.log('登陆组件');
    },
    data(){
        return{
            loginErrMessage:'',
            subState:false,
            agreement:false,
            agreecontent:null,
            redirecturl:'',
            loginData:{
                username:'',
                password:''
            },
            registerData:{
                username:'',
                password:'',
                rePassword:'',
                check:false
            },

        }
    },
    methods:{
        changeTab(num){
            this.tab = num;
            // let _that = this;
            setTimeout(() => {
                this.reverse = num;
            }, 200);
        },
        loginSubmit(){

        },
        registerSubmit(){

        }
    }
}
</script>