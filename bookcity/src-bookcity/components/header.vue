<template>
    <header>
        <span @click="$router.back()" v-if="back"><</span>
        <slot></slot>
    </header>
</template>
<script>
export default {
    props:{
        back:{
            type:Boolean,
            default:true
        }
    }
}
</script>

<style scoped>
header{
    width: 100%;
    height: 45px;
    line-height: 45px;
    color:#333;
    background: #eee;
    display: flex;
}
ul{
    display: flex;
    width: 80%;
}
li{
    flex:1;
    text-align: center;
}
li.router-link-exact-active{
    color:orange
}
.user{
    display: inline-block;
    width: 20px;
    height: 20px;
    background: red;
}
</style>

