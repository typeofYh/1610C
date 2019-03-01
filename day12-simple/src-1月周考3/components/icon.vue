<template>
    <div>
        <span :class="classname"><i class="iconfont" :class="classname"></i></span>
        <b>{{tip}}</b>
    </div>
</template>
<script>
import '../font/iconfont.css'
export default {
    props:{
        classname:String,
        tip:String
    }
}
</script>
<style scoped>
div{
    width: 40px;
    position: relative;
}
div span{
    width: 40px;
    height: 40px;
    display:block;
    border-radius: 50%;
    text-align: center;
    color:#fff;
    position: relative;
    z-index: 11;
}
div span i{
    line-height: 40px;
    font-size: 22px;
}
div span:before{
    display: none;
}
div span.icon-icon_down{
    background: red;
}
div span.icon-icon_QRcode{
    background: skyblue;
}
div span.icon-icon_qq{
    background: #ccc;
}
div span:hover + b{
    transform: translate(0,-50%);
    opacity: 1;
}
b{
    position: absolute;
    top:50%;
    right: 50px;
    transform: translate(10%,-50%);
    z-index: 10;
    background: rgba(0, 0, 0, .7);
    color:#fff;
    padding: 4px 8px;
    border-radius: 2px;
    white-space: nowrap;
    opacity: 0;
    transition: transform .8s,opacity 0.8s;
}
</style>


