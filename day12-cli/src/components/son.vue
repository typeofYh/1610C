<template>
    <div class="son">
        <h4>son</h4>
        <p>{{title}}</p>
        <p>
            {{$parent.$parent.title}}
        </p>
        <p>{{$bus.classname}}</p>
        <button @click="$bus.$emit('changeclassname')">替换</button>
    </div>
</template>
<script>
export default {
    props:{
        title:String
    },
    created(){
        console.log(this);
        //$parent 是父组件
        //$root 是根组件 vue实例 
        //$children 是子组件 []
    }
}
</script>
