<template>
    <footer class="indexFoot">
        <router-link to="/">首页</router-link>
        <router-link to="/discover">发现</router-link>
        <router-link to="/order">订单</router-link>
        <router-link to="/prefile">我的</router-link>
        <!-- <a href="/">首页</a>
        <a href="/#/discover">发现</a>
        <a href="/#/order">订单</a>
        <a href="/#/prefile">我的</a> -->
    </footer>
</template>
<style scoped>
.indexFoot{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    background: skyblue;
}
.indexFoot a{
    flex:1;
    text-align: center;
}
</style>
