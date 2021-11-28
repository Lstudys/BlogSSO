<!--
*  @FileDescription: 登录表单组件
*  @Author: 李永晖
*  @CreatedDate:2021/11/24
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/11/28
-->


<template>
    <div class="form_body">
        <form @submit.prevent="loginSubmit">
            <input type="text" v-model="loginData.username" placeholder="用户名..." autocomplete="off">
            <input type="password" v-model="loginData.password" placeholder="密码..." autocomplete="off">
            <div class="err_message">{{loginErrMessage}}</div>
            <input v-bind:class="{logining:btnClass.isLogining}" type="submit" v-bind:value="btnValue" v-bind:disabled="btnDisable" @submit="loginSubmit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name:'LoginForm',
    mounted() {
        if(this.$route.query.redirecturl){
            this.redirecturl = this.$route.query.redirecturl;
        }
    },
    data(){
        return{
            loginErrMessage:'',
            redirecturl:'http://localhost:3000/',
            loginData:{
                username:'',
                password:''
            },
            btnValue:'登录',
            btnDisable:false,
            btnClass:{
                isLogining:false
            }
        }
    },
    methods:{
        loginSubmit(){
            if(this.btnClass.isLogining){
                alert('登录中');
            }
            this.btnClass.isLogining = true;
            this.btnValue = '登录中...';
            this.btnDisable = true
            this.$store.dispatch('userLogin',this.loginData);
            setTimeout(() => {
                console.log(this.redirecturl + '===url');
                window.location.href = this.redirecturl;
            }, 3000);
        },
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

.logining{
    background-color: #ccc;
    cursor:progress
}
</style>