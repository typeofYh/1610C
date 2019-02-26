<template>
    <dl>
        <dt>
            <img :src="img">
        </dt>
        <dd>
            <h2>{{title}}</h2>
            <span>{{name}}</span>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        title:String,
        name:String,
        img:String
    }
}
</script>
<style lang="scss" scoped>
    dl{
        display: flex;
        width: 100%;
        padding: 10px;
        dt{
            width: 100px;
            height: 100px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        dd{
            flex:1;
            overflow: hidden;
            padding-left:10px;
        }
    }
</style>


