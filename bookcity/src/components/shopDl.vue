<template>
    <dl>
        <dt>
            <!-- require方法 -->
            <!-- <img :src="'/static/images/'+item.pic" alt=""> -->
            <img :src="require('../img/'+item.pic)" alt="">
        </dt>
        <dd>
            <h2>{{item.name}}</h2>
            <span>{{item.info}}</span>
            <b>￥{{item.price}} <s>￥{{item.oldprice}}</s></b>
            <button @click="$bus.$emit('addcar',item)">+</button>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        item:Object
    }
}
</script>

