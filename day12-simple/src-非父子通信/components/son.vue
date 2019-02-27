<template>
    <div id="son">
        <h3>son</h3>
        <p>{{$root.$children[0].title}}</p>
        <h2>{{$bus.title}}</h2>
        <button @click="$bus.$emit('changeclass')">点击替换班级</button>
    </div>
</template>
<script>
export default {
    // props:{
    //     title:String
    // },
    created(){
        // console.log(this.$root.$children[0].title);  //根组件
        // console.log(this.$parent.title)  //父组件
    }
}
</script>

