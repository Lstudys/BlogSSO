<!--
*  @FileDescription: 刷新令牌组件(一个页面，增强用户体验)
*  @Author: 李永晖
*  @CreatedDate:2021/11/29
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/11/29
-->

<template>
    <div>
        <div>
            <div class="content">
        <span v-html="message"></span>
    </div>

    <div class="over">
    </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Refresh',
    data() {
        return {
            message:'请稍等，正在重新认证身份...'
        }
    },
    methods:{
        refresh(){
            this.$store.dispatch('refreshToken').then(()=>{
                window.location.href = this.$route.query.redirecturl;
            }).catch(()=>{
                this.message = '您的身份已过期，请点击<a href="/">登录</a>';
            });
        }
    },
    mounted(){
        this.refresh();
    }
}
</script>

<style scope>
.content{
    position: fixed;
    height: 120px;
    width: 500px;
    line-height: 120px;
    text-align: center;
    font-size: 19px;
    color: #303133;
    background-color: #fff;
    border-radius: 0.25rem;
    left: 50%;
    top: 30%;
    transform: translate(-50%,-50%);
    z-index: 200000000000000000000000000;
}

a{
    color: #345dc2;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}

.over{
    position: fixed;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    filter: alpha(opacity=0.5);
    top: 0;
    left: 0;
    z-index: 100000;
    background-color: #000;
}
</style>