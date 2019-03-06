<template>
    <dl class="dllist" :class="classname" @click="$router.push(`/detail/${bookid}?title=${title}`)">
        <dt>
            <img v-lazy="img" alt="">
        </dt>
        <dd>
            <h2>{{title}}</h2>
            <slot v-if="classname==='leftblock'"></slot>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        bookid:{
            type:Number,
            required:true
        },
        img:String,
        title:String,
        classname:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
.dllist.upblock{
    width: 33%;
    height: 200px;
    overflow: hidden;
    display: inline-block;
}
h2{
    font-size: 14px;
    font-weight: 0;
}
img{
    width: 100%;
}
.dllist.leftblock{
    width: 100%;
    height: 200px;
    overflow: hidden;
    display: flex;
}
.dllist.leftblock dt{
    width: 140px;
}
.dllist.leftblock dd{
    flex:1;
    overflow: hidden;
}
</style>



