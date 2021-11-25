<!--
*  @FileDescription: 登录和注册页面
*  @Author: 李永晖
*  @CreatedDate:2021/11/21
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/11/24
-->

<template>
    <div class="login_page">
        <div class="login_box">
            <div class="center_box">
                <div class= "login_form" >
                    <!-- 登录、注册tab选项 -->
                <div class="linkBtn">
                    <div class="fl tab" @click="changeTab(1)">
                        <router-link to="/login">登录</router-link>
                    </div>
                    <div class="fl tab" @click="changeTab(2)">
                        <router-link to="/register">注册</router-link>
                    </div>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name:'Auth',
    data(){
        return{
            redirecturl:'',
        }
    },
    methods:{
    }
}
</script>

<style scope>
    @import url('../../assets/style/auth.css');
    .linkBtn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        font-size: 20px;
    }
    .linkBtn div:nth-child(1){
        margin-left: 120px;
    }
    .linkBtn div:nth-child(2){
        margin-right: 120px;
    }
    a{
        text-decoration: none;
        color: #000;
    }
    a:hover{
        color: coral;
    }
</style>