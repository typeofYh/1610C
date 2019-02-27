<template>
    <header>
        <a href="javascript:;" @click="go" v-show="back"><</a>
        <slot name="default" :a="navdata" :b="1234"></slot>
        <div>
            <slot name="search"></slot>
        </div>
        <span>···</span>
    </header>
</template>
<script>
export default {
    props:{
        back:{
            type:Boolean,
            default:true
        },
    },
    data(){
        return{
            navdata:[
                {
                    title:'商品'
                },
                {
                    title:'详情'
                },
                {
                    title:'评论'
                },
                {
                    title:'推荐'
                }
            ]
        }
    },
    methods:{
        go(){
            window.history.back();
        }
    },
    created(){
        console.log(this);
    }
}
</script>

<style lang="scss" scoped>
header{
    width:100%;
    height: 45px;
    line-height: 45px;
    display: flex;
    background: skyblue;
}
li{
    display: inline-block;
}
</style>

