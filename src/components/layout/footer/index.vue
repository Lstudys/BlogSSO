<!--
*  @FileDescription: Footer组件
*  @Author: 李永晖
*  @CreatedDate:2021/11/19
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/11/19
-->

<template>
    <div class="my-footer">
        <div class="line"></div>
        <div class="my-wrap">
            <div class="my-link">
                <a ref="nofollow" href="#">关于</a><span></span>
                <a ref="nofollow" href="#">反馈</a>
                <a ref="nofollow" href="">联系我</a>
                <a ref="nofollow" target="_blank" href="https://github.com/Lstudys">我的GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
.my-footer{
    padding-top: 60px !important;
    padding-bottom: 50px !important;
    background-color: #fff;
}

.my-footer .my-wrap{
    margin: 0 auto;
    max-width: 1190px;
}

.my-wrap .my-link{
    display: flex;
    margin: 0 auto;
    width: 400px;
    /* background-color: pink; */
    height: 18px;
    justify-content:center;
    align-items: center;
}

.my-link a{
    margin-left: 10px;
    text-decoration: none;
    color: #000;
}

.my-link a:hover{
    color: #EF6520;
}

.line{
    height: 1px;
  flex-grow: 1;
  background-color: #ccc;
  margin-bottom: 15px;
}
</style>