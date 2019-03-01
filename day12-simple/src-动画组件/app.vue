<template>
    <div id="app">
        <button @click="flag=!flag">显示隐藏</button>
        <transition>
            <div class="box" v-show="flag"></div>
        </transition>
        <transition name="a">
            <div class="box" v-show="flag"></div>
        </transition>
         <transition
         enter-active-class="slideOutRight animated slow"
         leave-active-class="bounce animated slow"
         @before-leave="leave">
            <div class="box" v-show="flag"></div>
        </transition>
    </div>
</template>
<script>
import "./css/animate.css";
export default {
    data(){
        return {
            flag:false
        }
    },
    methods:{
        leave(el){
            console.log(el);
            console.log('leave');
        }
    }
}
</script>

<style>
.box{
    width: 100px;
    height: 100px;
    background: red;
}

/* 准备进入 enter */
.v-enter{
    opacity: 0;
}
/*设置动画运动时间 enter-acitve-to*/
.v-enter-active{
    transition: opacity 1s;
}
/* 完全显示 enter-to */
.v-enter-to{
    opacity: 1;
}
/* 准备离开 leave */
.v-leave{
    transform: scale(1);
}
/*v-leave-active */
.v-leave-active{
    transition: transform 1s;
}
/* 完全离开 leave-to */
.v-leave-to{
    transform: scale(0);
}

.a-enter,.a-leave-to{
    transform: translateX(-100%);
}
.a-enter-to,.a-leave{
    transform: translateX(0);
}
.a-enter-active,.a-leave-active{
    transition: transform 1s;
}
</style>

