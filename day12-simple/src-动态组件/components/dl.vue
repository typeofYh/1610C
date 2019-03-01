<template>
    <dl class="dl" :class="classname">
        <dt>
            <img :src="img" alt="">
        </dt>
        <dd>
            <h2>{{title}}</h2>
            <span>{{tag}}</span>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        img:String,
        title:String,
        tag:Number,
        classname:{
            type:String
        }
    }
}
</script>
<style scoped lang="scss">
.dl{
    width: 30%;
    display: inline-block;
    &.list{
        display: flex;
        width: 100%;
        border-bottom: 1px solid #ccc;
        padding: 5px;
        height: 100px;
        dt{
            width: 100px;
        }
        dd{
            flex:1;
        }
    }
    dt{
        width: 100%;
    }
    img{
        width: 100%;
        height: 100px;
    }
}
</style>

