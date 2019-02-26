<template>
    <dl>
        <dt>
            <img :src="imgpath" alt="">
        </dt>
        <dd>
            <h2>{{title}}</h2>
            <span>{{publishTime}}</span>
        </dd>
    </dl>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:["title",'imgpath','time'],
    computed:{
        publishTime(){
            return new Date(this.time).toLocaleString();
        }
    }
}
</script>

