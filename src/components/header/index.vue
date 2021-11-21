<!--
*  @FileDescription: Header组件
*  @Author: 李永晖
*  @CreatedDate:2021/11/19
*  @LastEditors: 李永晖
*  @LastEditTime: 2021/11/19
-->

<template>
    <div class="my-header">
        <div class="logo"><img src="../../assets/images/logo.png" alt=""></div>
    </div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
  font-family: "微软雅黑";
}

.my-header{
  width: 100%;
  height: 80px;
  border-top: 3px solid #EF6520;
  z-index: 999;
}
.my-header .logo{
  /* width: 1200px; */
  margin: 0 auto;
  overflow: hidden;
  margin-top: 15px;
  padding-left: 40px;
}

.my-header img{
  height: 50px;
}
</style>