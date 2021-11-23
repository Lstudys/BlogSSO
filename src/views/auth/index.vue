<!--
*  @FileDescription: 登录和注册页面
*  @Author: 李永晖
*  @CreatedDate:2021/11/21
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/11/22
-->

<template>
    <div class="login_page">
        <div class="login_box">
            <div class="center_box">
                <div :class="{login_form:true,rotate :tab == 2}">
                <div :class="{tabs:true, r180:reverse == 2}">
                    
                    <div class="fl tab" @click="changeTab(1)">
                        <span :class="{on: tab == 1}">登录</span>
                    </div>
                    <div class="fl tab" @click="changeTab(2)">
                        <span :class="{on: tab == 2}">注册</span>
                    </div>

                </div>

                <div class="form_body" v-if="reverse == 1">
                    <form @submit.prevent="loginSubmit">
                        <input type="text" v-model="loginData.username" placeholder="用户名..." autocomplete="off">
                        <input type="password" v-model="loginData.password" placeholder="密码..." autocomplete="off">
                        <div class="err_message">{{loginErrMessage}}</div>
                        <input type="submit" v-if="subState" disabled="disabled" value="登录中..." class="btn">
                        <input type="submit" v-else value="登录" @submit="loginSubmit" class="btn">
                    </form>
                </div>

                <div class="form_body r180" v-if="reverse == 2">
                    <form @submit.prevent="registerSubmit">
                        <input type="text" v-model="registerData.username" placeholder="输入用户名..." autocomplete="off">
                        <input type="password" v-model="registerData.password" placeholder="6-30位密码，可用数字/字母/字符组合" autocomplete="off">
                        <input type="password" v-model="registerData.rePassword" placeholder="确认密码">
                        <div class="err_message">{{registerErrMessage}}</div>
                        <div class="agree">
                            <input type="checkbox" id="agree1" v-model="registerData.check">
                            <label for="agree1">我已阅读并同意</label><a href="javascript:;" @click="agreement == true">《用户协议》</a>
                        </div>
                        <input type="submit" v-if="subState" disabled="disabled" value="提交中..." class="btn">
                        <input type="submit" v-else value="注册" class="btn">
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="agreement" v-if="agreement" @click.self="agreement = false">
        <div class="agreement_content">
            <div class="agree_title">请认真阅读用户协议</div>
            <div class="agree_body" v-if="agreementBody" v-html="agreecontent"></div>
            <input type="button" class="agreement_btn" value="确定" @click.self="agreement = false">
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name:'Auth',
    data(){
        return{
            tab:1,
            reverse:1,
            loginErrMessage:'',
            registerErrMessage:'',
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

<style scope>
    @import url('../../assets/style/auth.css');
</style>