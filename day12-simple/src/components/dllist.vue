<template>
    <dl>
        <dt>
            <img :src="img" alt="">
        </dt>
        <dd>
            <h4>{{title}}</h4>
            <span>{{info}}</span>
            <span>月销：{{sale}}</span>
            <b>￥{{price}}</b>
            <!-- 加减 -->
            <Count
            :id="id"
            :title="title"
            :price="price"
            :num="count"/>
        </dd>
    </dl>
</template>
<script>
import Count from './count';
export default {
    props:['img','price','sale','info','title','id','count'],
    components:{
        Count
    }
}
</script>
<style lang="scss" scoped>
    dl{
        width: 100%;
        display: flex;
        height: 150px;
        border-bottom: 1px solid #ccc;
        padding: 5px 10px;
        dt{
            img{
                width: 140px;
                height: 140px;
            }
        }
        dd{
            flex:1;
            overflow: hidden;
        }
    }
</style>


